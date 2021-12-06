import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { AppsContext } from './../../screens/Screens';
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


    const activeContext = useContext(AppsContext);

    return(

            <>
                <WallPaperWrap>
                    <article>

                        {
                            activeContext.apps.map((element, index) => {

                                return(
                                    index < 6 && element.active && 
                                    <Modal key={ index } 
                                           index={ index }
                                           param={ activeContext }
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