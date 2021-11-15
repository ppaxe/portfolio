import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Header(){

    const HeaderWrap = styled.header`
    
        position: fixed;
        display: block;
        overflow: hidden;
        bottom: 0;
        left: 0;
        width: 100%;

    `;


    const NavWrap = styled.nav`


    
    `; 

    return(
        <>
            <HeaderWrap>
                <div className="header__inner">
                    <NavWrap>
                    <ul className="header__nav">
                        <li>
                            <Link to="" role="button"></Link>
                        </li>
                        <li>
                            <Link to="" role="button"></Link>
                        </li>
                        <li>
                            <Link to="" role="button"></Link>
                        </li>
                    </ul>
                    </NavWrap>
                </div>
            </HeaderWrap>
        </>
    )
}

export default Header;