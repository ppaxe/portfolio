import React from 'react';
import styled from 'styled-components';

function BgmControler(props){

    const ControlerWrap = styled.div`
    
        position: fixed;
        bottom: 0;
        right: 0;
        width: 20vw;
        height: 200px;
        z-index: 99;
        background: #111;
    `;

    const controlsAudio = () => {

        props.bgmStatus ? props.setBgmStatus(true) : props.setBgmStatus(false);

    }

    return(
        <>
            <ControlerWrap>
                <p>{ props.bgmStatus ? '실행 중' : '멈춤' }</p>
                <button type="button">
                    { props.bgmStatus ? 'pause' : 'play' }
                </button>
            </ControlerWrap>
        </>
    );
}

export default BgmControler;