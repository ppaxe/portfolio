// eslint-disable-next-line

import React, { useState, useEffect, memo } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { siteMaps } from './../../Data';

function Gnb(props) {

const $Gnb_before__keyframes = keyframes`

    0%{
      margin-top: 150%;
    }
    100%{
      margin-top: 0;
    }

  `;

  const $Gnb_after__keyframes = keyframes`

    0%{
      transform: translate(-50%,-50%) scale(0,0);
    }
    100%{
      transform: translate(-50%,-50%) scale(20,20);
    }

  `;

  const $Gnb_inner__keyframes = keyframes`

  0%{
    left:100%;
  }
  100%{
    left:40%;
  }

`;

  const $Gnb = styled.nav`

    position: fixed;
    z-index: 9999;
    left: ${ props => props.theme.isActive('0','100%') };
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    background: transparent;

    &:before{
        ${props => props.theme.isImagin };
        position: fixed;
        top: 50%;
        left: 50%;
        width: 15vw;
        height: 15vw;
        transform: translate(-50%,-50%);
        background: #e1262a;
        border-radius: 50%;
        margin-top: 150%;
        ${
          props => props.active === 'active' ? css`
            animation : ${$Gnb_before__keyframes} 0.5s linear 0.5s normal forwards running
          ` : props.active === 'inactive' && css`
            animation : ${$Gnb_before__keyframes} 0.5s linear 1s reverse backwards running
          `
        }
  
      }
  
      &:after{
        ${props => props.theme.isImagin };
        position: fixed;
        top: 50%;
        left: 50%;
        width: 15vw;
        height: 15vw;
        background: #e1262a;
        border-radius: 50%;
        transform: translate(-50%,-50%) scale(0,0);
        ${
          props => props.active === 'active' ? css`
            animation : ${$Gnb_after__keyframes} 0.5s linear 1s normal forwards running
          ` : props.active === 'inactive' && css`
            animation : ${$Gnb_after__keyframes} 0.5s linear 0.5s reverse backwards running
          `
        }
  
      }
      
      .nav__section{
            
            position: fixed;
            top: 0;
            display: block;
            width: 60%;
            height: 100%;
            background: #111;
            transition: 0.3s;
            overflow: auto;
            z-index: 1;
            left: 100%;
            ${
              props => props.active === 'active' ? css`
                animation : ${$Gnb_inner__keyframes} 0.3s linear 1.25s normal forwards running
              ` : props.active === 'inactive' && css`
                animation : ${$Gnb_inner__keyframes} 0.3s linear 0s reverse backwards running
              `
            }

      }

      .nav__button--main{

        ${ props => props.theme.isIR };
        position: relative;
        left: 50%;
        margin-top: 80px;
        transform: translateX(-50%);
        width: 200px;
        height: 70px;
        background: url(/assets/images/common/gnb_logo.png) center center no-repeat;
        background-size: 200px auto;

      }
      
      
      .nav__button--close{

        ${ props => props.theme.isIR };
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: url(/assets/images/common/gnb_close.png) center center no-repeat;
        background-size: 40px auto;

      }

    ul{

      display:block;
      overflow:hidden;
      margin-top:2rem;

    }
  `;

  return (
    <>
     
     <$Gnb active={ props.active }>
        <div className="nav__section">
          <div>
            <h2 className="nav__button--main"><Link to="/" role="button" title="메인으로 이동">Leica</Link></h2>
            <button className="nav__button--close" type="button" title="네비게이션 닫기" onClick={() => { props.activeChange('inactive') }}>네비게이션 닫기</button>
          </div>
            <ul>
                {

                    siteMaps.map((list, index) => {
                        
                        return(

                            <Depth1 key={index} list={list} />

                        )

                    })
                    
                }
            </ul>
        </div>
     </$Gnb>

    </>
  );
}



const Depth1 = function(props) {

    let [gnbDepth, setGnbDepth] = useState('');

    const $Depth1 = styled.li`

        button{

            display: block;
            width: 100%;
            padding: 2rem 0;
            font-size: 2.0rem;
            text-align: center;
            font-weight: bold;
            
            ${ props => props.theme.isColor('white') }

        }

        ul{

            margin-top: 0;
            display: block;
            overflow: hidden;
            background: #666;
            transition: 0.3s;
            height : ${ props => props.theme.isActive('auto','0') }

        }

    `;

    return(
        
        <>
            <$Depth1 active={gnbDepth === `${Object.keys(props.list)}` && 'active'}>

                <button id={`${Object.keys(props.list)}Btn`} aria-controls={`${Object.keys(props.list)}Panel`} aria-expanded={gnbDepth === `${Object.keys(props.list)}` ? 'true' : 'false'} type="button" onClick={() => { gnbDepth === `${Object.keys(props.list)}` ? setGnbDepth('') : setGnbDepth(`${Object.keys(props.list)}`)} } title={`${Object.keys(props.list)} 탭 열림`} >
                  {Object.keys(props.list)}
                  </button>

                <ul id={`${Object.keys(props.list)}Panel`} aria-labelledby={`${Object.keys(props.list)}Btn`} active={gnbDepth === `${Object.keys(props.list)}` && 'active'}>

                    {
                        props.list[Object.keys(props.list)].map((menu, index) => {

                            return(

                                <Depth2 key={index} menu={menu} />

                            )

                        })
                    }

                </ul>

            </$Depth1>
        </>

    )

};

const Depth2 = function(props) {

    const $Depth2 = styled.li`

        a{
            font-weight: bold;
            display: block;
            overflow: hidden;
            padding: 2rem 0;
            font-size: 1.6rem;
            text-align: center;
            color:#fff;
        }

    `;

    return(


        <>

            <$Depth2>
                <Link to={props.menu[Object.keys(props.menu)]} title={` ${Object.keys(props.menu)} 바로가기` } role="button">
                    { Object.keys(props.menu) }
                </Link>
            </$Depth2>

        </>
        
    )

}
;


export default Gnb;