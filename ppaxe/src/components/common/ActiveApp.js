// eslint-disable-next-line

// ================================================================

// ActiveApps js

// Author : 박세연

// Summary : Dock 하위 앱, 토글에 대한 작용은 CommoContext.common[index].active로 작용한다.

// Reporting Date : 2021.12.12

// Update : 

// ================================================================

import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { CommonContext } from './../../screens/Container';

const AppWrap = styled.button`
    
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        border: none;
        background: transparent;
        cursor: pointer;
        padding-bottom: 1rem;

        ${
            ({$on}) => $on &&
            `&:after{
                position: absolute;
                display:block;
                content:'';
                bottom: 0;
                left:50%;
                width:10px;
                height:10px;
                margin-top: .5rem;
                border-radius:50%;
                box-sizing:border-box;
                background: #CBD72C;
                border: 2px solid #404040;
                transform: translateX(-50%);
            }`
        }

    `;
    
    const AppIcon = styled.i`

        position: relative;
        display: block;
        width: 100px;
        height: 100px;
        background: url('https://ppaxe.kr/profile/contents/images/common/nav_icon.png') center center no-repeat;
        background-size: auto 100px;
        background-position: -${ ({index}) => index * 100}px 0;
        margin : 0 auto;

        @media ${ ({theme}) => theme.deviceQuery.laptop }{

            width: 80px;
            height: 80px;
            background-size: auto 80px;
            background-position: -${ ({index}) => index * 80}px 0;

        }

    `;

    const AppName = styled.p`
    
        font-size: 1.8rem;
        margin-top: .5rem;

        @media ${({theme}) => theme.deviceQuery.tablet}{
            color: ${({theme}) => theme.mainWhite};
        }

        @media ${({theme}) => theme.deviceQuery.mobile }{

            width: 80px;
            display: block;
            overflow: hidden;
            word-wrap: wrap;
            text-overflow: ellipsis;

        }
    
    `;

const ActiveApp = memo(function( { index } ){

    const commonContext = useContext(CommonContext);

    const toggleActive = () => {

        let returnState = [...commonContext.common];

        returnState[index].active = !returnState[index].active;

        if( index < 6 ){

            ( returnState[index].active ) ? commonContext.setModalIndex((commonContext.modalIndex + 1)) :  commonContext.setModalIndex((commonContext.modalIndex - 1));

        }

        returnState[index].zIndex = commonContext.modalIndex;

        commonContext.setCommon(returnState);
    }

    return(
        <>
            <AppWrap type="button"

            title={ commonContext.common[index].title }

            onClick={ toggleActive }
            
            $on={ commonContext.common[index].active }

            >
                <AppIcon index={ index } />
                
                <AppName>{ commonContext.common[index].title }</AppName>

            </AppWrap>
        </>
    )

})

export default ActiveApp;