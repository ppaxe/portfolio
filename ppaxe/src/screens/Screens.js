import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { debounce } from 'lodash';
import Modal from '../components/common/Modal';
import BgmControler from '../components/common/BgmControler'
import BrowserModal from '../components/common/BrowserModal';

function Screens(){

    // variables useStates

    const [bgmPlay, setBgmPlay] = useState(false),
          [noneBgm, setNoneBgm] = useState(false),
          [bgmControls, setBgmControls] = useState(false),
          [clickSound, setClickSound] = useState(false);

    // variables useRefs

    // function

    noneBgm && localStorage.setItem('BGM_AGREE','none');
    
    bgmPlay && localStorage.setItem('BGM_AGREE','true');

    // function - window Click

    const debounceClick = debounce(() => {

        setClickSound(false);

    },200);

    const winClick = () => {

        setClickSound(true);

        debounceClick();

    }

    useEffect(() => {

        if(localStorage.getItem('BGM_AGREE'))
            
            setBgmControls(true);

            localStorage.getItem('BGM_AGREE') === 'true' ? setBgmPlay(true) : setNoneBgm(true);

    },[]);

    // variabels styled-components

    const ScreenWrapper = styled.div`
    
        width: 100vw;
        ${props => props.theme.isVh()};

    `;

    return(
        <>
        <ScreenWrapper id="contents" onClick={ () => { winClick() } }>
            <div>
                {/* modal */}
                {
                    ! noneBgm && ! bgmPlay && 

                    <Modal contents={{ 
                            type: 'confirm', 
                            title : 'NH농협카드', 
                            content : '안내', 
                            agrProps : setBgmPlay, 
                            closeProps : setNoneBgm 
                        }}
                    />
                }
                {/* //modal */}
                {/* background - bgm */}
                {
                    ( bgmPlay || noneBgm ) && 
                    <audio autoPlay={ bgmPlay } loop src="http://ppaxe.kr/profile/contents/sound/background_explore_bgm.mp3"/>
                }
                {/* //background - bgm */}
                {/* click - bgm */}
                {
                    clickSound && 
                    <audio autoPlay={ clickSound } src="http://ppaxe.kr/profile/contents/sound/sound_click.mp3" />
                }
                {/* //click - bgm */}

                {/* contents */}
                <section id="section">



                </section>
                {/* //contents */}
                
                {/* bgm controls */}
                {
                    // bgmControls && 
                    <BgmControler bgmStatus={ bgmPlay } setPlayStorage={ setBgmPlay } setNoneStorage={ setNoneBgm } />
                }
                {/* //bgm controls */}
            </div>
        </ScreenWrapper>
        </>
    )

}

export default Screens;