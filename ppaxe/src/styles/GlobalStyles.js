import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

    ${ reset }

    *{
        margin:0;
        padding:0;
    }

    html, body{
        width:100%;
        height:100%;
        overflow:hidden;
        background: #2C8693;
        
    }
    *::webkit-scrollbar{


    }
    *::webkit-scrollbar-thumb{


    }
    *::webkit-scrollbar-track{
        
        
    }
`;

export default GlobalStyles;
