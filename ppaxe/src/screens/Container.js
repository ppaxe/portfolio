// ================================================================

// Container js

// Author : 박세연

// Summary : Utils Common js 및 Context를 관리하여 Screens js로 전송하기 위함

// Reporting Date : 2021.12.12

// Update : 

// ================================================================

import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import Screens from './Screens';
import Utils from './../utils/Utils';
import Data from './../utils/Data';

export const CommonContext = React.createContext();

const Container = () => {

    // GET - URLparams Fn Start

    const [fromSite, setFromSite] = useState('FE');

    useEffect(() => {
        
        const $loc = new URL(window.location.href),
              $params = $loc.searchParams;

        $params.get('job') === 'FE' ? setFromSite('FE') : setFromSite('PB');
    
    },[fromSite])

    // GET - URLparams Fn End


    // Window - Resize Fn Start

    const [resizeState, setResizeState] = useState(
        {
            width : window.innerWidth,
            Height : window.innerHeight
        }
    )

    const winResizeFn = debounce(() => {

        setResizeState({
            width : window.innerWidth,
            height : window.innerHeight
        })

    }, 1000);

    useEffect(() => {

        window.addEventListener('resize', winResizeFn);
        return(
            window.removeEventListener('resize', winResizeFn)
        )

    },[])

    // Window - Resize Fn End

    return(

        <>
            <CommonContext.Provider value={{

                // get URL
                fromSite : fromSite,
                setFromSite : setFromSite

            }}>
                <Screens />
            </CommonContext.Provider>
        </>
    )

}

export default Container