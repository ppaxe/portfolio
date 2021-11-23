import React from 'react';
import styled from 'styled-components';
import Data from './../../utils/Data';

function Header(props){

    const HeaderWrap = styled.header`
    
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
        width: 80vw;
        max-width: 960px;
        ${ props => props.theme.isVh(20) };
        max-height: 170px;
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
            max-width: none;
            max-height: none;
            background:transparent;
            border:none;
            padding: 4rem 1rem;

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
            font-size: 1.6rem;
            ${
                props => props.active &&
                `color : ${props.theme.mainBlue}; `
            }
        }

    `;

    return(
        <>
            <HeaderWrap>
                <div>
                    <NavWrap>
                        <ul>
                            {
                                Data.siteMaps.map((element, index) => {

                                    return(
                                        <li key={index}>
                                            <NavButton position={index} active={ props.view === element.title && true } title={`${element.title} 팝업 열림`} onClick={ () => { props.setOpen(element.title) } } >
                                                <i aria-hidden="true"></i>
                                                <p>
                                                    { element.title }
                                                </p>
                                            </NavButton>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </NavWrap>
                </div>
            </HeaderWrap>
        </>
    )
}

export default Header;