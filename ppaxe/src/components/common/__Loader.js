import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

function Loader(props){

    const LoaderWrap = styled.div`
    
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        z-index: 9999;
        background: url('https://ppaxe.kr/profile/contents/images/common/loader_noise.gif') center center no-repeat;
        background-size: cover;
        overflow:hidden;

    `;


    useEffect(() => {

        setTimeout(() => {

            props.setLoaderStorage(true);
            localStorage.setItem('USER_READY','DONE');

        }, 3000);

    },[])

    return(
        <>
            <LoaderWrap>
                <section>

                </section>
            </LoaderWrap>
        </>
    )

}

export default Loader;