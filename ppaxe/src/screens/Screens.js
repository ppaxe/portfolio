// eslint-disable-next-line

import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Data from './../utils/Data';
import Header from './../components/common/Header';
import Loader from './../components/common/Loader';
import BrowserModal from './../components/common/BrowserModal';
import SubApps from './../components/common/SubApps';

function Screens(){

    

    // variables useStates

    const   [viewModal, setViewModal] = useState(Data.siteMaps),
            [loaderStorage, setLoaderStorage] = useState(false),
            backgroundSound = new Audio('http://ppaxe.kr/profile/contents/sound/background_relax_bgm.mp3'),
            clickSound = new Audio('http://ppaxe.kr/profile/contents/sound/sound_click.mp3'),
            modalSound = new Audio('http://ppaxe.kr/profile/contents/sound/sound_error.mp3');

    let popSetting = {
        index : 0,
        view : 0,
        minimum : 0,
    }
    

    useEffect(() => {

        localStorage.getItem('USER_READY') && setLoaderStorage(true);

    },[]);

    useEffect(() => {

        modalSound.volume = 0.3;
        modalSound.play();

    },[viewModal]);

    // variabels styled-components

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
        {

            ! loaderStorage && 
            <Loader loaderStorage={loaderStorage} setLoaderStorage={setLoaderStorage} />
        
        }
        <ScreenWrapper id="contents" onClick={ () => clickSound.play() } >
        <Header viewModal={ viewModal } setViewModal={ setViewModal } />
                {/* contents */}
                <section id="section">
                    { 

                        viewModal.map((element, index) => {

                            // 팝업 개수
                            element.active && popSetting.index++;
                            
                            // 오픈 팝업
                            element.active && !element.viewSizing ? popSetting.view++ : popSetting.minimum++ ;

                            return (
                                element.active &&  
                                <BrowserModal 
                                key={ index } 
                                viewType={ !element.viewSizing ? popSetting.view : popSetting.minimum } 
                                index={ index }
                                viewModal={ viewModal }
                                setViewModal={ setViewModal } />
                            );

                        })

                    }

                    <SubApps />
                </section>
                {/* //contents */}
        </ScreenWrapper>
        </>
    )

}

export default Screens;