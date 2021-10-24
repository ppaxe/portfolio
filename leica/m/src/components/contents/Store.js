/* global kakao */
// eslint-disable-next-line
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


import styled from 'styled-components';

function Store(props) {

    const { id } = useParams();


    useEffect(() => {

    }, []);
    
    const StyledMain = styled.article`

        position:relative;
        display:block;
        overflow:hidden;
        ${props => props.theme.isVh()};
        background : url(http://ppaxe.kr/pc/contents/images/contents/store_${ props.store[id].name.toLowerCase() }_img.jpg) center center no-repeat;
        background-size: cover;

        &:before{
            ${props => props.theme.isImagin };
            width: 100%;
            height: 150px;
            left: 0;
            z-index: 10;
            top: 0;
            background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1));
          }

        .article__info{
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:auto;
            background: ${props => props.theme.mainGray}

            ul{
                display:flex;
                
                li{
                    padding: 20px 0;
                    width:100%;
                    text-align:center;
                    position:relative;
                    display:block;
                    overflow:hidden;

                    div{
                        display:flex;
                        flex-direction: column;
                        justify-content : space-between;
                        height:100%;
                            
                        strong{
                            color : ${ props => props.theme.mainRed };
                            font-size:1.8rem;
                            font-weight:bold;
                            line-height:160%;
                            margin-bottom: 1rem;
                        }

                        span, a{
                            font-size: 1.6rem;
                            color : ${ props => props.theme.mainWhite };
                            font-weight: 500;
                        }
                    }
                }
            }
        }

    `;

    const StyledInfo = styled.article`

        padding:4rem 2rem;

        h3{
            padding: 2rem 0;
            ${props => props.theme.isColor('black')}
            font-size:2.4rem;
        }

        p{

            color: ${props => props.theme.mainWhite}
            font-size:1.6rem;
            word-break: keep-all;
            line-height:160%;

        }

    `;

    const StyledLocation = styled.article`



    `;

    console.log(props.store);

    return(
        <>

            <StyledMain bg={ id }>
                <h3 className="blind">{ `${props.store[id].name} 매장 정보` }</h3>
                <div className="article__info">
                    <ul>
                        <li>
                            <div>
                                <strong>TEL</strong>
                                <span><a href={`tel:${props.store[id].tel}`} title="매장 전화 걸기" role="button">{ props.store[id].tel }</a></span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <strong>OPENING<br />HOURS</strong>
                                <span>{ props.store[id].hour }</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <strong>PARKING</strong>
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
            </StyledInfo>
            <StyledLocation>
                <h3>
                    Location
                </h3>
                {/* kakao maps */}
                <div id="map">

                </div>
            </StyledLocation>

        </>
    )

}

export default Store;