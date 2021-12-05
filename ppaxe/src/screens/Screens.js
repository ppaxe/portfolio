// eslint-disable-next-line

import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Data from './../utils/Data';
import StatusBar from './../components/common/StatusBar';
import Docks from './../components/common/Docks';
import WallPaper from './../components/common/WallPaper';

function Screens(){

    

    // variables useStates

    // const   [viewModal, setViewModal] = useState(Data.siteMaps),
            // [loaderStorage, setLoaderStorage] = useState(false),
    const clickSound = new Audio('http://ppaxe.kr/profile/contents/sound/sound_click.mp3');
            // modalSound = new Audio('http://ppaxe.kr/profile/contents/sound/sound_error.mp3');
    

    useEffect(() => {


    },[]);

    const ScreenWrapper = styled.div`
    
        width: 100vw;
        ${props => props.theme.isVh()};
        background: url('http://ppaxe.kr/profile/contents/images/common/app_laptop_background.png') center center;
        background-size:cover;

        @media ${props => props.theme.deviceQuery.tablet}{
            background: url('http://ppaxe.kr/profile/contents/images/common/app_tablet_background.png') center center;
        }
    `;

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