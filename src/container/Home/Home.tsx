import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { NewsList, Footer, Header } from './components'
import { Center, MainTable, TBody } from './components/Components.styles'

export interface INews {
    by: string;
    decendants: number;
    id: number
    kids: number[]
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
}

interface IPage {
    start: number;
    end: number;
}

type TStatus = 'default' | 'loadmore' | 'loading' | 'error' | 'done'

const LIMIT = 25

const extractData = (response: AxiosResponse): INews => response.data


export const Home = () => {
    const [newsList, setNewsList] = React.useState<INews[]>([])
    const [page, setPage] = React.useState<IPage>(() => ({ start: 0, end: LIMIT }))
    const [statusState, setStatus] = React.useState<TStatus>('default')
    const [allowPageInc, setAllowPageInc] = React.useState<boolean>(false)

    React.useEffect(() => {
        const fetchNewsList = async () => {
            try {
                const listOfIds = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
                const listOfStoriesResponse: Array<AxiosResponse> = await Promise.all(listOfIds.data.slice(page.start, page.end).map((id: unknown) => {
                    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                }))
                const listOfStoriesData: Array<INews> = await listOfStoriesResponse.map(extractData)
                setNewsList(listOfStoriesData)

                if (allowPageInc) setPage(prevState => ({ start: prevState.end, end: prevState.end + LIMIT }))

                setStatus('done')
                setAllowPageInc(false)
            } catch(err) { setStatus('error')}
        }

        if (statusState==='loadmore' || statusState ==='default'){
            fetchNewsList()
            setStatus('loading')
        }
    }, [page, statusState, allowPageInc])
    
    const handleMore = () => {
        if (statusState==='loading') return
        setAllowPageInc(true)
        setStatus('loadmore')
    }

    return (
        <Center>
            <MainTable>
                <TBody>
                    <Header />
                    <NewsList 
                        newsList={newsList} 
                        handleMore={handleMore} 
                        idx={page.start}
                    />
                    <Footer />
                </TBody>
            </MainTable>
        </Center>
    )
}