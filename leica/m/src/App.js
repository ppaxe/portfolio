import React, { useMemo, useState, useEffect } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';

import Header from './components/common/Header';
import Gnb from './components/common/Gnb';
import Footer from './components/common/Footer';
import Main from './components/contents/Main';
import Product from './components/contents/Product';



function App() {
  
  useEffect(()=>{


  
  },[])

  return (
    <div id="container">
        {/*  contents */}
          <ThemeProvider theme={Theme}>
            <Header />
              <div id="contents">
                <Route exact path="/">

                  <Main />

                </Route>
                <Route exact path="/product">

                  <Product />

                </Route>
              </div>
            <Footer />
        </ThemeProvider>
        {/*  // contents */}
    </div>
  );
}

export default App;
