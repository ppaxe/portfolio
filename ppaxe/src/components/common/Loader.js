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
    background: ${({theme}) => theme.mainRed};

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