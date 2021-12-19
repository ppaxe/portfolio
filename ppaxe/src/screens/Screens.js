// eslint-disable-next-line

// ================================================================

// Screens js

// Author : 박세연

// Summary : Container에서 받아 온 Props를 Front에 적용한다.

// Reporting Date : 2021.12.12

// Update : 

// 2021-12-17 // useLayoutEffect Audio Update

// ================================================================


import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { CommonContext } from './Container';
import Loader from './../components/common/Loader';
import StatusBar from './../components/common/StatusBar';
import Docks from './../components/common/Docks';
import WallPaper from '../components/common/WallPaper';

const audioSrc =  new Audio('https://ppaxe.kr/profile/contents/sound/background_relax_bgm.mp3');

const ScreenWrapper = styled.div`
    
        width: 100vw;
        height: 100vh;
        background: url('https://ppaxe.kr/profile/contents/images/common/app_laptop_background.png') center center;
        background-size:cover;

        @media ${({theme}) => theme.deviceQuery.tablet}{
            background: url('https://ppaxe.kr/profile/contents/images/common/app_tablet_background.png') center center;
        }
    `;


const Screens = () => {

    const commonContext = useContext(CommonContext);

    // Window Click Event Fn Start

    // const [clickSound] = useState(new Audio(`https://ppaxe.kr/profile/contents/sound/sound_click_pc.mp3`)),
    //       [touchSound] = useState(new Audio(`https://ppaxe.kr/profile/contents/sound/sound_click_mobile.mp3`));

    const winClickFn = () => {

        const clickSound = new Audio(`https://ppaxe.kr/profile/contents/sound/sound_click_pc.mp3`),
              touchSound = new Audio(`https://ppaxe.kr/profile/contents/sound/sound_click_mobile.mp3`);

        return commonContext.userDevice === 'pc' ? clickSound.play() : touchSound.play();

    }

    // Window Click Event Fn End

    // Background Audio Fn Start

    const [backgroundAudio] = useState(audioSrc);

    useLayoutEffect(() => {

        if(commonContext.common[6].active){

            // commonContext.setAcceptSound(true);
            backgroundAudio.volume = .5;
            backgroundAudio.loop = true;
            backgroundAudio.play();

        }else{

            backgroundAudio.pause();

        }

    },[commonContext.common[6].active]);

    // Background Audio Fn End
    
    return(
        <>
        <ScreenWrapper id="contents" onClick={ winClickFn }>
            {
                commonContext.loader &&
                <Loader />
            }
            <StatusBar />
            <Docks />
            <WallPaper />
        </ScreenWrapper>
        </>
    )

}

export default Screens;