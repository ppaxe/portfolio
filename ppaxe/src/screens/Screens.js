import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { debounce } from 'lodash';
import Data from './../utils/Data';
import Header from './../components/common/Header';
import BrowserModal from './../components/common/BrowserModal';

function Screens(){

    

    // variables useStates

    const [viewModal, setViewModal] = useState(Data.siteMaps);

    // variables useRefs

    // function

    useEffect(() => {

        

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
        <ScreenWrapper id="contents">
        <Header view={ viewModal } setView={ setViewModal } />
                {/* contents */}
                <section id="section">
                    { 
                        viewModal.map((element, index) => {

                            return (
                                element.active &&  <BrowserModal />
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