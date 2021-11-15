import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Modal from '../components/common/Modal';
import BrowserModal from '../components/common/BrowserModal';

function Screens(){

    const [bgmPlay, setBgmPlay] = useState(false),
          [noneBgm, setNoneBgm] = useState(false);

    noneBgm && localStorage.setItem('BGM_AGREE','none');
    
    bgmPlay && localStorage.setItem('BGM_AGREE','true');

    useEffect(() => {

        if(localStorage.getItem('BGM_AGREE'))

            localStorage.getItem('BGM_AGREE') === 'true' ? setBgmPlay(true) : setNoneBgm(true);

    },[]);

    return(

        <div id="contents">
            

            {
                
                bgmPlay && <audio autoPlay={bgmPlay} />

            }

            <section id="section">


            </section>

            {

                ! noneBgm && ! bgmPlay && 

                <Modal contents={{ 
                    type: 'confirm', 
                    title : 'NH농협카드', 
                    content : '안내', 
                    agrProps : setBgmPlay, 
                    closeProps : setNoneBgm }} 
                />

            }

        </div>

    )

}

export default Screens;