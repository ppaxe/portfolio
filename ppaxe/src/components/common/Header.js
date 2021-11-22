import React from 'react';
import {Link} from 'react-router-dom';
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

    `;

    const NavWrap = styled.nav`

        position:relative;
        display:block;
        width: 80vw;
        max-width: 1000px;
        ${ props => props.theme.isVh(20) };
        background: ${props => props.theme.mainLGray};
        margin: 0 auto;
        border-radius: 2rem;
        box-sizing: border-box;
        border: 3px solid ${ props=> props.theme.mainBlack };
        padding: 2rem 4rem;

        ul{
            display: flex;
            overflow: hidden;

            li{
                width: 100%;
                display: block;
                text-align: center;
            }
        }
    `;

    const NavButton = styled.button`
    
        border: none;
        display: inline-block;
        width: 100%;
        max-width: 100px;
        height: 100%;

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
                                            <NavButton type="button" title={`${element} 팝업 열림`} onClick={ () => { props.setOpen(element) } }>
                                                <i aria-hidden="true"></i>
                                                <p>{ element }</p>
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