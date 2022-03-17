import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        font-family:  Verdana, Geneva, sans-serif;
        @media only screen and (min-width: 300px) and (max-width: 750px){
            margin: 0;
            padding: 0;
        }
    }
    
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        scroll-behavior: smooth;
        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
            width: 20px;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background: #888;
        }

    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after, q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

`;

export default GlobalStyle;