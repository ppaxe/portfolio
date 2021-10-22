// eslint-disable-next-line

import React from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

function Store(props) {

    const { id } = useParams();
    
    const StyledMain = styled.article`

        position:relative;
        display:block;
        overflow:hidden;
        ${props => props.theme.isVh()};

        .article__info{
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:auto;
            background: #fff;

            ul{
                display:flex;
                
                li{
                    padding: 20px 0;
                    width:100%;
                    text-align:center;
                    position:relative;
                    display:block;
                    overflow:hidden;

                    strong{
                        color : ${ props => props.theme.mainRed };
                        font-size:1.6rem;
                        font-weight:bold;
                        line-height:160%;
                    }
                }
            }
        }

    `;

    const StyledInfo = styled.article`



    `;

    const StyledLocation = styled.article`



    `;

    console.log(props.store);

    return(
        <>

            <StyledMain bg={ id }>
                <div className="article__info">
                    <ul>
                        <li>
                            <div>
                                <strong>TEL</strong><br />
                                <span><a href={`tel:${props.store[id].tel}`} title="매장 전화 걸기" role="button">{ props.store[id].tel }</a></span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <strong>OPENING<br />HOURS</strong><br />
                                <span>{ props.store[id].hour }</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <strong>PARKING</strong><br />
                                <span>{ props.store[id].parking }</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </StyledMain>
            <StyledInfo>
                <h3>
                    About Us
                </h3>
                <p>
                    {props.store[id].info}
                </p>
                <p>

                </p>
                <p
                ></p>
            </StyledInfo>
            <StyledLocation>
                <h3>
                    Location
                </h3>
                {/* kakao maps */}
                <div>

                </div>
            </StyledLocation>

        </>
    )

}

export default Store;