import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

    ${ reset }

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');


    *{
        margin:0;
        padding:0;
        font-weight: 400;
        color: #404040;
        word-break: keep-all;
    }

    html, body{
        width:100%;
        height:100%;
        overflow:hidden;
        background: #2C8693;
        font-family: 'Noto Sans KR', sans-serif;
        min-height: 320px;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 1.5rem;
    }
    ::-webkit-scrollbar { 
        width: 10px;
    } 
    ::-webkit-scrollbar-thumb { 
        background-color: #BFBFBF; 
        border:2px solid #404040; 
        box-sizing:border-box;
        border-radius: 5px;
    } 
    ::-webkit-scrollbar-track{
        background-color: transparent;
    }

`;

export default GlobalStyles;
