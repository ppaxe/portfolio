// eslint-disable-next-line

// ================================================================

// Container js

// Author : 박세연

// Summary : Utils Common js 및 Context를 관리하여 Screens js로 전송하기 위함

// Reporting Date : 2021.12.12

// Update : 

// ================================================================

import React, { memo, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Screens from './Screens';


const CommonContext = React.createContext(null);

const Container = memo(() => {

    // Scroll To Top Fn Start

    const { pathname } = useLocation();

    useEffect(() => {
    
        window.scrollTo(0, 0);
    
    }, [pathname]);

    // Scroll To Top Fn End

    // GET - Local Storage( LOADER ) Fn Start

    const [loader, setLoader] = useState(true);

    useEffect(() => {

    if( localStorage.getItem('USER_LOADER') ){
      
        setLoader(false);
      
    }else{
            
        setTimeout(() => {
        
            localStorage.setItem('USER_LOADER','DONE');
            setLoader(false);
        
        },2000)
      
    }
      
    },[loader])

    // GET - Local Storage ( LOADER ) Fn End

    return(
        <>
            <CommonContext.Provider>
                <Screens />
            </CommonContext.Provider>
        </>
    )
});


export default Container;
