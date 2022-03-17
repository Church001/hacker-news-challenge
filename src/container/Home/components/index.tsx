import React from 'react'
import url from 'url'
import { INews } from '../Home'
import  {
    Input,
    Form,
    VisitedSubLinkAnchor,
    ScoreSpan,
    TDataRight,
    TDataSubText,
    TDataTop,
    TDataTitle,
    TRowSpacer,
    SpanSitebit,
    AnchorTagTitle,
    VoteIcon,
    PageHeaderText,
    PageTopSpan,
    Center,
    TBody,
    Logo,
    BaseTable,
    TRow,
    AnchorTag,
    Span,
    TData
} from './Components.styles'
import ICON from '../../../assets/arrow_up.svg'


interface INewsList {
    newsList: INews[]
    handleMore: () => void
    idx: number
}

interface ISingleNews {
    news: INews
    idx: number
}
export const Header = () => {
    return (
        <React.Fragment>
            <TRow>
                <TData style={{background: '#ff6600'}}>
                    <BaseTable>
                        <TBody>
                            <TRow>
                                <TData style={{ paddingLeft: '2px'}}>
                                    <AnchorTag href="https://news.ycombinator.com/">
                                        <Logo src="https://news.ycombinator.com/y18.gif" alt="Y combinator logo"/>
                                    </AnchorTag>
                                </TData>

                                <TData style={{ lineHeight:'12pt', height: '10px'}}>
                                    <PageTopSpan style={{ textAlign:'left'}}>
                                        <PageHeaderText>
                                            <AnchorTag>Hacker News</AnchorTag>
                                        </PageHeaderText>
                                        <AnchorTag href="#">new</AnchorTag>{" "}|{" "}
                                        <AnchorTag href="#">past</AnchorTag>{" "}|{" "}
                                        <AnchorTag href="#">comments</AnchorTag>{" "}|{" "} 
                                        <AnchorTag href="#">ask</AnchorTag>{" "}|{" "}
                                        <AnchorTag href="#">show</AnchorTag>{" "}|{" "}
                                        <AnchorTag href="#">jobs</AnchorTag>{" "}|{" "}
                                        <AnchorTag href="#">submit</AnchorTag> 
                                    </PageTopSpan>
                                </TData>

                                <TData style={{ textAlign: 'right', paddingRight: '4px' }}>
                                    <PageTopSpan>
                                        login
                                    </PageTopSpan>
                                </TData>
                            </TRow>
                        </TBody>
                    </BaseTable>
                </TData>
            </TRow>
            <TRow style={{ height: '10px'}} />
        </React.Fragment>
    )
}

/**
 * computes and returns string indicating time difference upon creation
 * */ 
const _computeTime = (time: number) => {
    const MS_IN_SECS = 1000;
    const SECS_IN_MIN = 60
    const MINS_IN_HOUR = 60
    const HOURS_IN_DAY = 24
    const DAYS_IN_WEEK = 7
    const WEEKS_IN_MONTH = 4
    const MONTHS_IN_YEAR = 12

    const SECS_IN_HOUR = SECS_IN_MIN * MINS_IN_HOUR
    const SECS_IN_DAY = SECS_IN_HOUR * HOURS_IN_DAY
    const SECS_IN_WEEK = SECS_IN_DAY * DAYS_IN_WEEK
    const SECS_IN_MONTH = SECS_IN_WEEK * WEEKS_IN_MONTH
    const SECS_IN_YEAR = SECS_IN_MONTH * MONTHS_IN_YEAR

    const todayInMS = new Date().getTime()
    const creationTimeInMS = new Date(time * MS_IN_SECS).getTime()
    const timeDiffInSec = (todayInMS - creationTimeInMS)/MS_IN_SECS
    if (timeDiffInSec <= 59) return `${Math.ceil(timeDiffInSec)} secs ago`
    else if (timeDiffInSec <= SECS_IN_HOUR) return `${Math.ceil(timeDiffInSec / SECS_IN_MIN)} mins ago`
    else if (timeDiffInSec <= SECS_IN_DAY) return `${Math.ceil(timeDiffInSec / SECS_IN_HOUR)} hours ago`
    else if (timeDiffInSec <= SECS_IN_WEEK) return `${Math.ceil(timeDiffInSec / SECS_IN_DAY)} days ago`
    else if (timeDiffInSec <= SECS_IN_MONTH) return `${Math.ceil(timeDiffInSec / SECS_IN_WEEK)} weeks ago`
    else if (timeDiffInSec <= SECS_IN_YEAR) return `${Math.ceil(timeDiffInSec / SECS_IN_MONTH)} months ago`
    return 'over 1 year ago'
}

const SingleNews = ({ news: { by, id, score, time, title, kids=[], url: link="" }, idx }: ISingleNews) => {
    const urlObj = url.parse(link)
    return (
        <React.Fragment>
            <TRow>
                <TDataRight>
                    <Span>{idx}.</Span>
                </TDataRight>

                <TDataTop>
                    <Center>
                        <AnchorTag href={`https://news.ycombinator.com/vote?id=${id}&how=up&goto=news`}>
                            <VoteIcon ICON={ICON} title="upvote"/>
                        </AnchorTag>
                    </Center>
                </TDataTop>

                <TDataTitle>
                    <AnchorTagTitle href={link}>{title}</AnchorTagTitle> 
                    <SpanSitebit>{" "}
                        (<VisitedSubLinkAnchor href={`https://news.ycombinator.com/from?site=${urlObj.host}`}>{urlObj.host}</VisitedSubLinkAnchor>)
                    </SpanSitebit>
                </TDataTitle>
            </TRow>

            <TRow>
                <TData colSpan={2}></TData>
                <TDataSubText>
                    <ScoreSpan>{`${score} points`}</ScoreSpan>{" "}by{" "} 
                    <VisitedSubLinkAnchor href="#">{by}</VisitedSubLinkAnchor>{" "}
                    <ScoreSpan title="2022-03-17T09:23:32">
                        <VisitedSubLinkAnchor  href="#">{_computeTime(time)}</VisitedSubLinkAnchor>
                    </ScoreSpan>{" "}
                    <ScoreSpan>
                    {" "}| <VisitedSubLinkAnchor  href="#">hide</VisitedSubLinkAnchor> | {" "}
                    </ScoreSpan>
                    <VisitedSubLinkAnchor  href="#">{`${kids.length} comments`}</VisitedSubLinkAnchor>
                </TDataSubText>
            </TRow>
            <TRowSpacer />
        </React.Fragment>

    )
}

export const NewsList = ({ newsList=[], handleMore, idx }: INewsList) => {
    if (newsList.length === 0) return <p>Loading...</p>
    return (
        <TRow>
            <TData>
                <BaseTable>
                    <TBody>
                        { newsList.map((news) => <SingleNews key={news.id.toString()} news={news} idx={++idx} />)}

                        <TRow style={{ padding: '0.8rem 0'}}>
                            <TData colSpan={2}></TData>
                            <TData>
                                <Span>
                                    <AnchorTag onClick={handleMore}>More</AnchorTag>
                                </Span>
                            </TData>
                        </TRow>
                    </TBody>
                </BaseTable>
            </TData>
        </TRow>
    )
}


export const Footer = () => {
    return (
        <TRow>
            <TData style={{ borderTop: '1px solid #', padding: '0.8rem 0'}}>
                <BaseTable>
                    <TBody>
                        <TRow>
                            <TData  style={{ borderTop:"1px solid #ff6600" }}></TData>
                        </TRow>
                    </TBody>
                </BaseTable>

                <Center  style={{ padding: "0.8rem 0 0"}}>
                    <AnchorTag href="https://www.ycombinator.com/apply/">        
                        Applications are open for YC Summer 2022
                    </AnchorTag>
                </Center>

                <Center style={{ padding: "0.8rem 0"}}>
                    <PageTopSpan>
                        <AnchorTag href="#">Guidelines</AnchorTag>{" "}|{" "}
                        <AnchorTag href="#">FAQ</AnchorTag>{" "}|{" "}
                        <AnchorTag href="#">Lists</AnchorTag>{" "}|{" "} 
                        <AnchorTag href="#">API</AnchorTag>{" "}|{" "}
                        <AnchorTag href="#">Security</AnchorTag>{" "}|{" "}
                        <AnchorTag href="#">Legal</AnchorTag>{" "}|{" "}
                        <AnchorTag href="#">Apply to YC</AnchorTag>{" "}|{" "}
                        <AnchorTag href="#">Contact</AnchorTag>
                    </PageTopSpan>
                </Center>

                <Center>
                    <Form method="get" action="//hn.algolia.com/">
                        Search: 
                        <Input 
                            type="text" 
                            name="q" 
                            size={17} 
                            autoCorrect="off" 
                            spellCheck={false}
                            autoCapitalize="off"
                        />
                    </Form>
                </Center>

            </TData>
        </TRow>
    )
}

