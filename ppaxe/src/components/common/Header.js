import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment/locale/ko';


function Header(props){


    const LogoWrap = styled.div`

        position: absolute;
        left: 0;
    
    `;

    const StatusBar = styled.div`
    
        position:absolute;
        right: 2rem;
        color: ${props => props.theme.mainWhite};
        line-height: 40px;
        font-size: 1.8rem;
        letter-spacing: -1px;
        font-weight: 600;

        @media ${props => props.theme.deviceQuery.tablet}{
            line-height:30px;
        }

    `;

    const HeaderWrap = styled.header`
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:40px;
        background: ${ props => props.theme.mainBlack };

        @media ${props => props.theme.deviceQuery.tablet}{
            height:30px;
        }
    `

    const GlobalNavWrap = styled.div`
    
        position: fixed;
        display: block;
        overflow: hidden;
        bottom: 2rem;
        left: 0;
        width: 100%;

        @media ${ props => props.theme.deviceQuery.tablet }{

            position: relative;
            display: flex;
            overflow: hidden;
            width: 100vw;
            ${props => props.theme.isVh(100)};

        }

    `;

    const NavWrap = styled.nav`

        position:relative;
        display:block;
        width: 90vw;
        max-width: 960px;
        height: 180px;
        background: ${props => props.theme.mainLGray};
        margin: 0 auto;
        border-radius: 2rem;
        box-sizing: border-box;
        border: 3px solid ${ props=> props.theme.mainBlack };
        padding: 1rem 2rem 1.5rem;

        @media ${ props => props.theme.deviceQuery.tablet }{

            position: relative;
            overflow: hidden;
            width: 100vw;
            ${props => props.theme.isVh(100)};
            max-width: inherit;
            max-height: inherit;
            min-height: inherit;
            background:transparent;
            border:none;
            padding: 6rem 1rem;

        }

        ul{
            display: flex;
            justify-content: space-between;
            
            @media ${props => props.theme.deviceQuery.tablet}{
                flex-flow : wrap;
            }

            li{
                display: block;
                text-align: center;
            }
        }
    `;

    const NavButton = styled.button.attrs({type:'button'})`
    
        border: none;
        display: block;
        width: 100%;
        height: 100%;
        cursor: pointer;
        text-align: center;
        background: transparent;
        position: relative;
        margin: 5px;

        ${
            props => props.active &&
            `&:after{
                position: absolute;
                display:block;
                content:'';
                top: 100%;
                left:50%;
                width:10px;
                height:10px;
                border-radius:50%;
                box-sizing:border-box;
                background: #CBD72C;
                border: 2px solid #404040;
                transform: translateX(-50%);
            }`
        }

        i{
            display: inline-block;
            width: 100px;
            height: 100px;
            background: url('http://ppaxe.kr/profile/contents/images/common/nav_icon.png') center center no-repeat;
            background-size: auto 100px;
            background-position: -${ props => props.position * 100}px 0;

            @media ${ props => props.theme.deviceQuery.tablet }{

                width: 80px;
                height: 80px;
                background-size: auto 80px;
                background-position: -${ props => props.position * 80}px 0;
            }
        }

        p{
            font-size: 1.8rem;

            font-weight : 500;
            ${
                props => props.active &&
                `color : ${props.theme.mainBlue}; font-weight: bold;`
            }

            @media ${ props => props.theme.deviceQuery.tablet}{
                color: ${ props => props.theme.mainWhite };
            }
        }

    `;

    return(
        <>
            <HeaderWrap>
                <LogoWrap>
                    <h1>
                        logo
                    </h1>
                </LogoWrap>
                <StatusBar>
                    <Moment format="HH : mm"></Moment>
                </StatusBar>
            </HeaderWrap>
            <GlobalNavWrap>
                <div>
                    <NavWrap>
                        <ul>
                            {
                                props.view.map((element, index) => {

                                    return(
                                        <li key={index}>
                                            <NavButton aria-haspopup="dialog" 
                                                       position={index}
                                                       active={ props.view[index].active && true }
                                                       aria-selected={ props.view[index].active ? 'true' : 'false' }
                                                       title={`${element.title} 팝업 열림`}
                                                       onClick={ () => {
                                                           let setArr = [...props.view];
                                                           setArr[index].active = !setArr[index].active;
                                                           props.setView(setArr);
                                                        } } 
                                            >
                                                <i aria-hidden="true"></i>
                                                <p>{ element.title }</p>
                                            </NavButton>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </NavWrap>
                </div>
            </GlobalNavWrap>
        </>
    )
}

export default Header;