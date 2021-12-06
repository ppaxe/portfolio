import React, { memo, useState, useEffect, useLayoutEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';



const SubAppsWrap = styled.div`
    
display: block;
overflow: hidden;
position: absolute;
top: 0;
left: 50%;
padding: 6rem 1rem;
transform: translateX(-50%);
width: 100%;
max-width:1200px;

`;

const SubAppsFlex = styled.ul`

position:relative;
margin-top:10%;
width:100%;
display:block;
height:100%;
display:flex;
justify-content: right;

`;

const PlayRecord = keyframes`

0%{
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
}

`;

const AppsButton = styled.button.attrs({
type:'button'
})`

border: none;
display: block;
width: 100%;
height: 100%;
cursor: pointer;
text-align: center;
background: transparent;
position: relative;
margin: 5px;

i{
    position:relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    background: url('https://ppaxe.kr/profile/contents/images/common/nav_icon.png') center center no-repeat;
    background-size: auto 100px;
    background-position: -${ props => props.position * 100}px 0;

    @media ${ props => props.theme.deviceQuery.tablet }{

        width: 80px;
        height: 80px;
        background-size: auto 80px;
        background-position: -${ props => props.position * 80}px 0;
    }

    &:before{

        content:'';
        display:block;
        width:100%;
        height:100%;
        background: url('https://ppaxe.kr/profile/contents/images/common/nav_icon_active.png') center center no-repeat;
        background-size: contain;
        position:absolute;
        top:0;
        left: 0;
        ${ props => css`animation : ${ PlayRecord } 2s linear infinite forwards ${ props => props.active ? `running` : `paused`}; `};

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

const SubApps = memo(function(props){

    const [isPlay, setIsPlay] = useState(false),
          [backgroundSound] = useState(new Audio('https://ppaxe.kr/profile/contents/sound/background_relax_bgm.mp3'));


    useEffect(() => {

        isPlay ? backgroundSound.play() : backgroundSound.pause();

    });



    return(
        <>

            <SubAppsWrap>

                <SubAppsFlex>

                    <li>
                        <AppsButton position={6} active={isPlay} onClick={ () => setIsPlay(!isPlay) }>
                            <i aria-hidden="true"></i>
                            <p>Music</p>
                        </AppsButton>
                    </li>

                </SubAppsFlex>

            </SubAppsWrap>

        </>
    )

});

export default SubApps;