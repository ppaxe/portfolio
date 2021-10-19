// eslint-disable-next-line

import React, { useState, useEffect, memo } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import Gnb from './Gnb';

function Header() {

  let [gnbAct, gnbActChange] = useState('');


      const $header = styled.header`

        position:fixed;
        top: 2rem;
        left: 0;
        width: 100%;
        background: #111;
        z-index: 9999;
        transition: 0.3s;
        opacity: ${ props => props.theme.isActive('0','1') };

        h1{
            
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left: 2rem;

            a{

                display: inline-block;
                width: 50px;
                height: 50px;
                background: url(http://ppaxe.kr/pc/contents/images/common/logo.png) center center no-repeat;
                background-size: auto 50px;
                ${ props => props.theme.isIR };

            }

        }

        h2{

            position: absolute;
            top: 0;
            right: 0;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-right: 2rem;


            button{

                display: inline-block;
                width: 50px;
                height: 50px;
                background: url(/assets/images/common/gnb_icon.png) center center no-repeat;
                background-size: auto 50px;
                ${ props => props.theme.isIR };

            }

        }

      `;

  return (
    <>
     
     <$header active={ gnbAct }>
        <h1>
            <Link to="/" title="메인으로 이동" role="button">Leica</Link>
        </h1>
        <h2>
            <button title="글로벌 네비게이션 열기" onClick={() => { gnbActChange('active') }}>글로벌 네비게이션 열기</button>
        </h2>
     </$header>
     <Gnb active={ gnbAct } activeChange={ gnbActChange } />
    </>
  );
}

export default Header;