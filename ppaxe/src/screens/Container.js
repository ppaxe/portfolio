// eslint-disable-next-line

// ================================================================

// Container js

// Author : 박세연

// Summary : Utils Common js 및 Context를 관리하여 Screens js로 전송하기 위함

// Reporting Date : 2021.12.12

// Update : 

// ================================================================

import React, { useEffect, useState } from 'react';
import { debounce, set } from 'lodash';
import Screens from './Screens';
import { Data } from './../utils/Data';

export const CommonContext = React.createContext();

const Container = () => {

    // common Data Fn Start

    const [common, setCommon] = useState(Data.Apps);

    // common Data Fn End


    // GET - Local Storage( BGM ) Fn Start 

    const [acceptSound, setAcceptSound] = useState(false);

    useEffect(() => {

    if( localStorage.getItem('USER_ACCEPT_SOUND') === 'AGREE' ){
      
        setAcceptSound(true)
          
    }else{
        
        setAcceptSound(false)

    }

    },[acceptSound])

    // GET - Local Storage( BGM ) Fn Start 


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

    // GET - URLparams Fn Start

    const [fromSite, setFromSite] = useState('FE');

    useEffect(() => {
        
        const $loc = new URL(window.location.href),
              $params = $loc.searchParams;

        $params.get('job') === 'FE' ? setFromSite('FE') : setFromSite('PB');
    
    },[fromSite])

    // GET - URLparams Fn End

    // Modal - zIndexer Fn Start

    const [ modalIndex, setModalIndex ] = useState(0);

    // Modal - zIndexer Fn End

    // Window - Resize Fn Start

    const [userDevice, setUserDevice] = useState(false);

    const winResizeFn = debounce(() => {

        return(
            window.innerWidth > 1081 ? setUserDevice('pc') :
            window.innerWidth > 769 ? setUserDevice('tablet') :
            window.innerWidth > 415 ? setUserDevice('mobile') :
            false
        )

    }, 100);

    useEffect(() => {
        
        winResizeFn();

    },[])

    useEffect(() => {

        window.addEventListener('resize', winResizeFn);

        return() => {
            window.removeEventListener('resize', winResizeFn)
        }

    },[]);

    // Window - Resize Fn End

    return(

        <>
            <CommonContext.Provider value={{
                // common
                common : common,
                setCommon : setCommon,
                // accept sound
                acceptSound : acceptSound,
                setAcceptSound : setAcceptSound,
                // loader
                loader : loader,
                setLoader : setLoader,
                // user Device
                userDevice : userDevice,
                setUserDevice : setUserDevice,
                // get URL
                fromSite : fromSite,
                setFromSite : setFromSite,
                // modal Index
                modalIndex : modalIndex,
                setModalIndex : setModalIndex
            }}>
                <Screens />
            </CommonContext.Provider>
        </>
    )

}

export default Container