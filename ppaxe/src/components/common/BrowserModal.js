import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function BrowserModal(){

    const { pathname } = useLocation();

    useEffect(() => {


    }, [pathname] )


    const Browser = styled.div`

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: block;
        overflow: hidden;
    
        .browser{
            
            position: relative;
            display: block;
            overflow: hidden;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 800px;
            max-height: 800px;
            width: 70vw;
            height: 80vh;
            background: ${ props => props.theme.mainLGray };
            border: 3px solid ${ props => props.theme.mainBlack };
            box-sizing:border-box;
            border-radius: 10px;

            .browser__top{

                display:block;
                overflow: hidden;
                position: relative;
                border: 3px solid ${props => props.theme.mainBlack};
                border-width: 0 0 3px 0;
                padding: 1rem 0;
                text-align: center;

            }

            .browser__contents{

                display: block;
                overflow: hidden;
                position: relative;
                overflow-y: scroll;

            }
        }

    `;

    return(
        <>
            <Browser>
                <div id="browserModal" className="browser">
                    <div class="browser__top">
                        <div class="browser__top--button">
                            <ul>
                                <li>
                                    <i>
                                        닫기
                                    </i>
                                </li>
                                <li>
                                    <i>
                                        최소화
                                    </i>
                                </li>
                                <li>
                                    <i>
                                        확대
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="browser__contents">

                    </div>
                </div>
            </Browser>
        </>
    )

}

export default BrowserModal;