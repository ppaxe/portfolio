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

    const [isPlay, setIsPlay] = useState(false),
          [backgroundSound, setBackgroundSound] = useState(new Audio('https://ppaxe.kr/profile/contents/sound/background_relax_bgm.mp3'));

    useEffect(() => {

        if(isPlay){
            backgroundSound.loop = true;
            backgroundSound.volume = .5;
            backgroundSound.play();   
        }else{
            backgroundSound.pause();
        }

    },[isPlay]);

    return(

            <>
                <WallPaperWrap>
                    <article>

                        <div>
                            <ActiveApp index={ 6 }
                            title={ 'Music' }
                            setParam={ setIsPlay }
                            />
                        </div>

                    </article>
                </WallPaperWrap>
            </>
    );
})

export default WallPaper;