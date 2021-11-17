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

            props.setPlayStorage(! props.bgmStatus);
            props.setNoneStorage( props.bgmStatus );

    }

    return(
        <>
            <ControlerWrap>
                <button type="button" onClick={ controlsAudio }>
                    { props.bgmStatus ? 'pause' : 'play' }
                </button>
            </ControlerWrap>
        </>
    );
}

export default BgmControler;