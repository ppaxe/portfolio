// eslint-disable-next-line

import React, {useEffect} from 'react';
import styled from 'styled-components';
import StatusBar from './../components/common/StatusBar';
import Docks from './../components/common/Docks';
import WallPaper from './../components/common/WallPaper';

const ScreenWrapper = styled.div`
    
        width: 100vw;
        ${({theme}) => theme.isVh()};
        background: url('http://ppaxe.kr/profile/contents/images/common/app_laptop_background.png') center center;
        background-size:cover;

        @media ${({theme}) => theme.deviceQuery.tablet}{
            background: url('http://ppaxe.kr/profile/contents/images/common/app_tablet_background.png') center center;
        }
    `;


const Screens = () => {

    

    // variables useStates

    const clickSound = new Audio('http://ppaxe.kr/profile/contents/sound/sound_click.mp3');

    useEffect(() => {


    },[]);


    return(
        <>
        <ScreenWrapper id="contents" onClick={ () => clickSound.play() }>
            <StatusBar />
            <Docks />
            <WallPaper />
        </ScreenWrapper>
        </>
    )

}

export default Screens;