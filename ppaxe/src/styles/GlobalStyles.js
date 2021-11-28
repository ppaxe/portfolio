import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

    ${ reset }

    *{
        margin:0;
        padding:0;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
    }

    html, body{
        width:100%;
        height:100%;
        overflow:hidden;
        background: #2C8693;
        min-height: 320px;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 1.4rem/1.5;
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
