import styled from 'styled-components'

const BaseTable = styled.table`
    width: 100%;
    padding: 2px;
`;

const Center = styled.div`
    display: block;
    text-align: center;
`;

const MainTable = styled(BaseTable)`
    min-width: 49.75rem;
    max-width: 85%;
    margin: auto;
    background-color: rgb(246, 246, 239);
    @media only screen and (min-width: 300px) and (max-width: 750px){
        width: 100%;
        min-width: 0;
        max-width: 100%;

    }
`;

const TBody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
`;

const TRow = styled.tr``;

const TData = styled.td`
    font-size: 10pt;
    color: #828282;
    text-align: left;
    @media only screen and (min-width: 300px) and (max-width: 750px){
        font-size: 11pt;
        line-height: 14pt;
        height: inherit !important;
    };
`;

const AnchorTag = styled.a`
    color: #000000;
    text-decoration: none;
    word-break: break-word;
    cursor: pointer;
`;

const Logo = styled.img`
    width: 18px;
    height: 18px;
    border: 1px solid #ffffff;
`;

const PageTopSpan = styled.span`
    display: inline;
    color: #000000;
    @media only screen and (min-width: 300px) and (max-width: 750px){
        display: block;
        margin: 3px 5px;
        font-size: 12px;
        line-height: normal;
    }
`;

const PageHeaderText = styled.span`
    font-size: 15px;
    font-weight: bold;
    margin-right: 5px;
`;

const Span = styled.span`
    @media only screen and (min-width: 300px) and (max-width: 750px){
        font-size: 11pt;
        line-height: 14pt;
    }
`;

const TDataRight = styled(TData)`
    text-align: right;
`;

const TDataTop = styled(TData)`
    min-width: 18px;
`;

const VoteIcon = styled.div<{ICON: string}>`
    width: 1rem;
    height: 1rem;
    border: 0px;
    margin: 0 0 6px;
    opacity: 0.4;
    ${({ ICON }) => `background: url(${ICON}) no-repeat;`}

    @media only screen and (min-width: 300px) and (max-width: 750px){
        transform: scale(1.3,1.3);
        margin-right: 6px;
    };

`;

const TDataTitle = styled(TData)`
    overflow: hidden;
`;

const AnchorTagTitle = styled(AnchorTag)`
    word-break: break-word;
`;

const SpanSitebit = styled(Span)`
    font-size: 8pt;
    color: #828282;
`;

const TDataSubText = styled(TData)`
    @media only screen and (min-width: 300px) and (max-width: 750px){
        font-size: 9pt;
    }
`;

const ScoreSpan = styled(Span)`
    @media only screen and (min-width: 300px) and (max-width: 750px){
        font-size: 9pt;
    }
`;

const VisitedSubLinkAnchor = styled(AnchorTag)`
    color: #828282;
    @media only screen and (min-width: 300px) and (max-width: 750px){
        font-size: 9pt;
    }
    :hover {
        text-decoration: underline;
    }
`

const TRowSpacer = styled(TRow)`
    height: 5px;
`;

const Form = styled.form`
    margin-bottom: 1rem;
`;

const Input = styled.input`
    @media only screen and (min-width: 300px) and (max-width: 750px){
        font-size: 16px;
        width: 90%;
    }
`;

export {
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
    MainTable,
    Center,
    TBody,
    Logo,
    TRow,
    BaseTable,
    TData,
    AnchorTag,
    Span
}