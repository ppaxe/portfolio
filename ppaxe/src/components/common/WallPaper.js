import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { CommonContext } from './../../screens/Container';
import Modal from './Modal';

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


    const commonContext = useContext(CommonContext);

    return(

            <>
                <WallPaperWrap>
                    <article>

                        {
                            commonContext.common.map((element, index) => {

                                return(
                                    index < 6 && element.active && 
                                    <Modal key={ index } 
                                           index={ index }
                                    />
                                )
                            })
                        }

                    </article>
                </WallPaperWrap>
            </>
    );
})

export default WallPaper;