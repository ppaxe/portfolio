// eslint-disable-next-line

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StatusBar from './../components/common/StatusBar';
import Docks from './../components/common/Docks';
import WallPaper from './../components/common/WallPaper';
import { Data } from './../utils/Data';

export const AppsContext = React.createContext();


const ScreenWrapper = styled.div`
    
        width: 100vw;
        ${({theme}) => theme.isVh()};
        /* background: url('https://ppaxe.kr/profile/contents/images/common/app_laptop_background.png') center center; */
        background-size:cover;

        @media ${({theme}) => theme.deviceQuery.tablet}{
            /* background: url('https://ppaxe.kr/profile/contents/images/common/app_tablet_background.png') center center; */
        }
    `;


const Screens = () => {


    // variables useStates

    const [apps, setApps] = useState(Data.Apps),
        [fromSite, setFromSite] = useState('PB'),
        //   [bgm, setBgm] = useState(new Audio('https://ppaxe.kr/profile/contents/sound/background_relax_bgm.mp3')),
        //   clickSound = new Audio('https://ppaxe.kr/profile/contents/sound/sound_click.mp3'),
        [zIndexer, setZIndexer] = useState(0);

    //  bgm

    useEffect(() => {

        // if(apps[6].active){
        //     bgm.volume = .8;
        //     bgm.loop = true;
        //     bgm.play();
        // }else{
        //     bgm.pause();
        // } 

    },[apps[6].active]);

    // bgm

    // GET URLparams Publish or FrontEnd

    useEffect(() => {
        
        const $loc = new URL(window.location.href),
              $params = $loc.searchParams;

        $params.get('job') === 'FE' ? setFromSite('FE') : setFromSite('PB');
    
    },[fromSite])

    // GET URLparams Publish or FrontEnd
    
    return(
        <>
        <ScreenWrapper id="contents" 
        // onClick={ () => clickSound.play() }
        >
            <AppsContext.Provider value={ { apps : apps, setApps : setApps, zIndexer : zIndexer, setZIndexer : setZIndexer, job : fromSite } }>
                <StatusBar />
                <Docks />
                <WallPaper />
            </AppsContext.Provider>
        </ScreenWrapper>
        </>
    )

}

export default Screens;