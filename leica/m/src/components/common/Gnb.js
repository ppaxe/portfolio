// eslint-disable-next-line

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { siteMaps } from './../../Data';

function Gnb(props) {

const KeyframesGnbBefore = keyframes`

      0%{
        margin-top: 100vh;
      }
      100%{
        margin-top: -7.5vw;
      }

  `;

  const KeyframesGnbAfter = keyframes`

    0%{
      transform: translate(-50%,-50%) scale(0,0);
    }
    100%{
      transform: translate(-50%,-50%) scale(20,20);
    }

  `;

  const KeyframesGnbInner = keyframes`

  0%{
    left:100%;
  }
  100%{
    left:40%;
  }

`;

  const StyledGnb = styled.nav`

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
        margin-left : -7.5vw;
        margin-top : 100vh;
        background: #e1262a;
        border-radius: 50%;

        ${
          props => props.active === 'active' ? css`
            animation : ${KeyframesGnbBefore} 0.5s linear 0.5s normal forwards running
          ` : props.active === 'inactive' && css`
            animation : ${KeyframesGnbBefore} 0.5s linear 1s reverse backwards running
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
            animation : ${ KeyframesGnbAfter } 0.5s linear 1s normal forwards running
          ` : props.active === 'inactive' && css`
            animation : ${ KeyframesGnbAfter } 0.5s linear 0.5s reverse backwards running
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
                display: block;
              ` : props.active === 'inactive' && css`
                display: none;
              `
            }
            ${
              props => props.active === 'active' ? css`
                animation : ${KeyframesGnbInner} 0.3s linear 1.25s normal forwards running
              ` : props.active === 'inactive' && css`
                animation : ${KeyframesGnbInner} 0.3s linear 0s reverse backwards running
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
        background: url(https://ppaxe.kr/web/contents/images/common/gnb_logo.png) center center no-repeat;
        background-size: 200px auto;

        a{
          display:block;
          overflow:hidden;
          width:100%;
          height:100%;
        }

      }
      
      
      .nav__button--close{

        ${ props => props.theme.isIR };
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: url(https://ppaxe.kr/web/contents/images/common/gnb_close.png) center center no-repeat;
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
     
     <StyledGnb active={ props.active }>
        <div className="nav__section">
          <div>
            <h2 className="nav__button--main"><Link to="/" role="button" title="메인으로 이동" onClick={() => {props.setActive('')}}>Leica</Link></h2>
            <button className="nav__button--close" type="button" title="네비게이션 닫기" onClick={() => { props.setActive('inactive') }}>네비게이션 닫기</button>
          </div>
            <ul>
                {

                    siteMaps.map((list, index) => {
                        
                        return(

                            <Depth1 key={index} list={list} setActive={ props.setActive } />

                        )

                    })
                    
                }
            </ul>
        </div>
     </StyledGnb>

    </>
  );
}



const Depth1 = function(props) {

    let [gnbDepth, setGnbDepth] = useState('');

    const StyledOneDepth = styled.li`

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
            <StyledOneDepth active={gnbDepth === `${Object.keys(props.list)}` && 'active'}>

                <button id={`${Object.keys(props.list)}Btn`} aria-controls={`${Object.keys(props.list)}Panel`} aria-expanded={gnbDepth === `${Object.keys(props.list)}` ? 'true' : 'false'} type="button" onClick={() => { gnbDepth === `${Object.keys(props.list)}` ? setGnbDepth('') : setGnbDepth(`${Object.keys(props.list)}`)} } title={`${Object.keys(props.list)} 탭 열림`} >
                  {Object.keys(props.list)}
                  </button>

                <ul id={`${Object.keys(props.list)}Panel`} aria-labelledby={`${Object.keys(props.list)}Btn`} active={gnbDepth === `${Object.keys(props.list)}` && 'active'}>

                    {
                        props.list[Object.keys(props.list)].map((menu, index) => {

                            return(

                                <Depth2 key={index} menu={menu} setActive={ props.setActive }/>

                            )

                        })
                    }

                </ul>

            </StyledOneDepth>
        </>

    )

};

const Depth2 = function(props) {

    const StyledTwoDepth = styled.li`

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

            <StyledTwoDepth>
                <NavLink to={props.menu[Object.keys(props.menu)]} title={` ${Object.keys(props.menu)} 바로가기` } onClick={() => {props.setActive('')}} role="button">
                    { Object.keys(props.menu) }
                </NavLink>
            </StyledTwoDepth>

        </>
        
    )

}
;


export default Gnb;