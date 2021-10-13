import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';


const ResetStyles = createGlobalStyle`

  ${reset}
  
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%; 
    -webkit-text-size-adjust: 100%;
    font-size: 62.5%;
    width: 100%;
  }
  body {
    margin: 0;
    font-size: 1.4rem;
    color: #111;
    background: #232323;
    word-break: keep-all;
    min-height: 100vh;
    -ms-overflow-style: none;
  }
  a{
    text-decoration: none;
  }
  button{
    all: unset;
    cursor: pointer;
  }
  ::-webkit-scrollbar { display: none; }
  
  .blind{
    display: block;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    top: -1px;
    left: -1px;
    text-indent: -9999rem;
    color: transparent;
  }


  
`;

export default ResetStyles;