// eslint-disable-next-line

import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Data from './../utils/Data';
import LoadProgressBar from './../components/common/LoadProgressBar';
import Header from './../components/common/Header';
import BrowserModal from './../components/common/BrowserModal';

function Screens(){

    

    // variables useStates

    const   [loader, setLoader] = useState(false),
            [viewModal, setViewModal] = useState(Data.siteMaps);

    let popSetting = {
        index : 0,
        view : 0,
        minimum : 0,
    }

    // function

    useEffect(() => {

        // ! localStorage.getItem('USER_LOADER') && setLoader(true); 

    },[]);

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
        {/* {
            // Loader
            loader && 
            <LoadProgressBar complete={ setLoader } />
        } */}
        <ScreenWrapper id="contents">
        <Header view={ viewModal } setView={ setViewModal } />
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
                                view={ viewModal }
                                setView={ setViewModal } />
                            );

                        })
                    }
                </section>
                {/* //contents */}
        </ScreenWrapper>
        </>
    )

}

export default Screens;