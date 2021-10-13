import React, { useState, useEffect } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import styled, { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';

import Header from './components/common/Header';
import Gnb from './components/common/Gnb';
import Footer from './components/common/Footer';
import Main from './components/contents/Main';


import SwiperCore, { Pagination } from 'swiper';

let commonContext = React.createContext();


function App() {
  
  useEffect(()=>{


  
  },[])

  return (
    <div id="container">
      <commonContext.Provider value={ null }>
        {/*  contents */}
          <ThemeProvider theme={Theme}>
            <Header />
              <div id="contents">
                <Route exact path="/">

                  <Main />

                </Route>
              </div>
            <Footer />
        </ThemeProvider>
        {/*  // contents */}
      </commonContext.Provider>
    </div>
  );
}

export default App;
