import React, { useState } from 'react';
import styled from 'styled-components';

const AppWrap = styled.button`
    
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        border: none;
        background: transparent;
        cursor: pointer;

        ${
            ({$on}) => $on &&
            `&:after{
                position: absolute;
                display:block;
                content:'';
                top: 100%;
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
        background: url('http://ppaxe.kr/profile/contents/images/common/nav_icon.png') center center no-repeat;
        background-size: auto 100px;
        background-position: -${ ({index}) => index * 100}px 0;
        margin : 0 auto;

        @media ${ ({theme}) => theme.deviceQuery.tablet }{

            width: 80px;
            height: 80px;
            background-size: auto 80px;
            background-position: -${ ({index}) => index * 80}px 0;

        }

    `;

    const AppName = styled.p`
    
        font-size: 1.8rem;
        margin-top: .5rem;

        @media ${({theme}) => theme.deviceQuery.mobile }{
            
            display:none;

        }
    
    `;

const ActiveApp = ({title, index, setParam}) => {

    const [active, setActive] = useState(false);

    return(
        <>
            <AppWrap type="button"
            title={`${title}`}
            key={ index }
            onClick={() => { 
                setActive( !active );
                setParam?.( !active );
            }}
            $on={ active }>
                <AppIcon index={ index } />
                <AppName>{ title }</AppName>
            </AppWrap>
        </>
    )

}

export default ActiveApp;