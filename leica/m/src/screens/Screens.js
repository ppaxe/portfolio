// eslint-disable-next-line

// ================================================================

// Screens js

// Author : 박세연

// Summary : Container에서 받아 온 Props를 Front에 적용한다.

// Reporting Date : 2021.12.12

// Update : 

// ================================================================

import React, { memo } from 'react';
import Header from './../components/common/Header';
import Contents from './../components/common/Contents';
import Footer from './../components/common/Footer';

const Screens = memo(() => {


    return(
        <>
            <Header />
            <div id="contents">
                <Contents />
            </div>
            <Footer />
        </>
    )
});


export default Screens;
