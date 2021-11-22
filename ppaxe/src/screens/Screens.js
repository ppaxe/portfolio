import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { debounce } from 'lodash';
import Header from './../components/common/Header';
import BrowserModal from './../components/common/BrowserModal';

function Screens(){

    

    // variables useStates

    const [viewModal, setViewModal] = useState(false),
          [clickSound, setClickSound] = useState(false);

    // variables useRefs

    // function


    // function - window Click
    const debounceClick = debounce(() => {

        setClickSound(false);

    },200);

    const winClick = () => {

        setClickSound(true);

        debounceClick();

    }


    useEffect(() => {

    },[]);

    // variabels styled-components

    const ScreenWrapper = styled.div`
    
        width: 100vw;
        ${props => props.theme.isVh()};

    `;

    return(
        <>
        <ScreenWrapper id="contents" onClick={ () => { winClick() } }>
        <Header view={viewModal} setOpen={setViewModal} />
                {/* contents */}
                <section id="section">
                    {
                        clickSound && 
                        <audio autoPlay={ clickSound } src="http://ppaxe.kr/profile/contents/sound/sound_click.mp3" />
                    }

                    { viewModal &&
                        <BrowserModal view={viewModal} setClose={setViewModal} />
                    }
                </section>
                {/* //contents */}
        </ScreenWrapper>
        </>
    )

}

export default Screens;