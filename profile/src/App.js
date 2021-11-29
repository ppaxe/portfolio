import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Utils from './utils/Utils';
import Modal from './components/contents/Modal';
import styled from 'styled-components';

function App() {
  
  const [bgmModal, setBgmModal] = useState(false),
        [bgm, setBgm] = useState(false);

  const clickSound = new Audio('http://ppaxe.kr/profile/contents/sound/sound_click.mp3')

  const winClickHandler = () => {

    clickSound.play();

  }

  const Testing = styled.div`
  
    position: relative;
    display: block;
    overflow: hidden;
    width: 100vw;
    height: 100vh;

  `;

  useEffect(() => {

    const user = Utils.checkUser();

    // user.browser === 'ie' && setEnviron('ie');

    user.device === 'pc' && setBgmModal(true); 
  

  },[])




  return (
    <>
      <Testing  onClick={ winClickHandler }>
      <div id="container">
        {

          bgm === 'true' && <audio />

        }
        <Header />
        <div id="contents">

          {
            
            bgmModal && 
            
            <Modal set={ { 
              type: 'confirm', 
              title : 'NH농협카드 안내', 
              description: '내용', 
              setProps : setBgm, 
              closeProps : setBgmModal 
            }} />

          }

        </div>
        <Footer />
      </div></Testing>
    </>
  );
}

export default App;
