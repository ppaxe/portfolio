import React, {memo, useState, useEffect} from 'react';
import styled from 'styled-components';
import ActiveApp from './ActiveApp';


const WallPaperWrap = styled.section`
    
    position: relative;
    display:block;
    top: 0;
    left: 0;
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2rem;
`;

const WallPaper = memo(function(){

    const backgroundAudio = new Audio('http://ppaxe.kr/profile/contents/sound/background_relax_bgm.mp3'),
          [isPlay, setIsPlay] = useState(false);


    useEffect(() => {
       
        isPlay ? backgroundAudio.play() : backgroundAudio.pause();

    },[isPlay]);

    useEffect(() => {
        backgroundAudio.addEventListener('ended', () => {
            setIsPlay(false);
        })
        return () => {
            backgroundAudio.removeEventListener('ended', () => 
            setIsPlay(false));
        };
    },[]);


    return(

            <>
                <WallPaperWrap>
                    <article>

                        <div>
                            <ActiveApp index={ 6 } title={ 'Music' } setParam={ setIsPlay } />
                        </div>

                    </article>
                </WallPaperWrap>
            </>
    );
})

export default WallPaper;