// eslint-disable-next-line

// ================================================================

// Screens js

// Author : 박세연

// Summary : Container에서 받아 온 Props를 Front에 적용한다.

// Reporting Date : 2021.12.12

// Update : 

// ================================================================


import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { CommonContext } from './Container';
import StatusBar from './../components/common/StatusBar';
import Docks from './../components/common/Docks';
import WallPaper from '../components/common/WallPaper';

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

    const winClickFn = () => {

        const clickSound = new Audio(`https://ppaxe.kr/profile/contents/sound/sound_click_${ commonContext.userDevice === 'pc' ? 'pc' : 'mobile' }.mp3`);

        return clickSound.play()

    }

    // Window Click Event Fn End

    // Background Audio Fn Start

    const [backgroundAudio, setBackgroundAudio] = useState(new Audio('https://ppaxe.kr/profile/contents/sound/background_relax_bgm.mp3'));

    useEffect(() => {

        if(commonContext.common[6].active){

            commonContext.setAcceptSound(true);
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
            <StatusBar />
            <Docks />
            <WallPaper />
        </ScreenWrapper>
        </>
    )

}

export default Screens;