import React from 'react';
import styled from 'styled-components';


const LoaderWrap = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    z-index:999999;
    background: url('https://ppaxe.kr/profile/contents/images/common/noise.gif') center center no-repeat;
    background-size:cover;

`

const Loader = () => {


    return(

        <>
            <LoaderWrap>
                
            </LoaderWrap>
        </>

    )

}

export default Loader;