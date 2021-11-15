import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

    ${ reset }

    *{
        margin:0;
        padding:0;
    }

    body{
        background: #BFBFBF
    }
`;

export default GlobalStyles;
