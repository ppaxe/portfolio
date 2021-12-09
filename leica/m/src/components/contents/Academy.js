// eslint-disable-next-line

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const StyledMain = styled.article`

        position: relative;
        width:100vw;
        ${({theme}) => theme.isVh()};
        overflow:hidden;
        
        &:before{
            ${ ({theme}) => theme.isImagin };
            width: 100%;
            height: 150px;
            left: 0;
            z-index: 10;
            top: 0;
            background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1));
          }

        .article__main_info{
            position:absolute;
            width:100vw;
            height:auto;
            bottom:0;
            left:0;
            text-align : right;
            z-index : 1;

            h3{
                margin-bottom: 2rem;
                padding-right: 2rem;
                font-size:2.4rem;
                ${ ({theme}) => theme.isColor('white') }
            }

            p{
                background : ${ ({theme}) => theme.mainGray };
                padding:4rem 2rem;
                font-size: 1.6rem;
                line-height: 160%;
                color: ${ ({theme}) => theme.mainWhite}
            }
        }
    `;

    const StyledFixed = styled.div`

        width: 100%;
        position: relative;

        &.main_banner{

            ${ ({theme}) => theme.isVh()};

            .bg{
                background-image: url(https://ppaxe.kr/web/contents/images/contents/academy_main_banner.jpg);
            }
        }

        &.sub_banner{
            height: 200px;

            .bg{
                background-image: url('https://ppaxe.kr/web/contents/images/contents/academy_sub_banner.jpg');
            }

            &:before{
                ${ ({theme}) => theme.isImagin};
                left:50%;
                bottom:0;
                width:320px;
                height:300px;
                margin-left:-160px;
                z-index:1;
                background-image: url('https://ppaxe.kr/web/contents/images/contents/academy_sub_banner_man.png');
                background-position: center center;
                background-size: cover;
            }
        }

        .background__fixed_clip{

            clip: rect(0, auto, auto, 0);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            .bg{
                position: fixed;
                display: block;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                background-size:cover;
                background-position: center center;
            }
        }

    `;

    const StyledInfo = styled.article`

            position:relative;
            display:block;

            h3{
                ${ ({theme}) => theme.isColor('white')};
                font-weight:bold;
                text-align:center;
                font-size:2.4rem;
                padding: 4rem 0;
            }

            p{
                
                padding:4rem 2rem;
                font-size: 1.6rem;
                line-height: 160%;
                color: ${ ({theme}) => theme.mainWhite}
            }

    `;

    const StyledAcademy = styled.article`

            position:relative;
            display:block;
            padding: 2rem;

            h3{
                ${ ({theme}) => theme.isColor('red')};
                font-size:3.6rem;
                font-weight:bold;
                padding-left:2rem;
                border-left:2px solid ${ ({theme}) => theme.mainRed};
                margin-bottom:4rem;
            }
    `;


    const StyledSlideWrap = styled.div`

            display:block;
            margin: 4rem 2rem 2rem;
            border-radius: 1rem;
            box-shadow:0px 0px 20px rgba(0,0,0,0.25);
            overflow:hidden;
            position:relative;
            background:${ ({theme}) => theme.mainBlack };
            color: ${ ({theme}) => theme.mainWhite}

            img{
                max-width:100%;
            }

            .academy__title{

                display:flex;
                padding: 1rem 2rem;
                align-items: center;

                div{
                    width:50px;
                    
                    img{
                        border-radius:50%;
                    }
                }
                h4{
                    margin-left: 1rem;
                    font-weight:bold;
                    font-size:1.6rem;
                    color : ${ ({active, theme}) => active ? theme.mainRed : theme.mainWhite }
                }
            }

            .academy__info{

                h4{
                    padding: 2rem 0;
                    text-align:center;
                    font-size:1.6rem;
                }

                dl{
                    display : ${ ({active}) => active ? 'block' : 'none'};
                    margin: 1rem 0;
                    clear:both;
                    overflow:hidden;

                    dt,dd{
                        display: block;
                        width: 50%;
                        text-align: center;
                        font-size: 1.4rem;
                        padding: .5rem 0;
                    }

                    dt{
                        color: ${ ({theme}) => theme.mainRed};
                        float: left;
                        clear: both;
                        border-right: 2px solid ${ ({theme}) => theme.mainRed };
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        font-weight : bold;
                    }

                    dd{
                        color : ${ ({theme}) => theme.mainWhite};
                        float : right;
                    }
                }
            }

    `;


function Academy({academy}) {

    const [academyActive, setAcademyActive] = useState(false);
    

    return(
        <>
            <StyledMain>
                <StyledFixed className="main_banner">
                    <div className="background__fixed_clip" aria-hidden="true">
                        <div className="bg" aria-hidden="true"></div>
                    </div>
                </StyledFixed>
                <div className="article__main_info">
                    <h3>Learn Fantastic Photography Skills</h3>
                    <p>The Leica Academy is going to pass on your photographic knowledge to you.<br />It tells me how to express myself.</p>
                </div>
            </StyledMain>
            <StyledInfo>
                <h3>Leica Academy wait for you.</h3>
                <StyledFixed className="sub_banner">
                    <div className="background__fixed_clip" aria-hidden="true">
                        <div className="bg" aria-hidden="true"></div>
                    </div>
                </StyledFixed>
                <p>Let's follow Leica Artist footsteps and walk together.<br />Capture an amazing moment with Laika photographers.</p>
            </StyledInfo>
            <StyledAcademy>
                <h3>LEICA ACADEMY<br />SCHEDULE</h3>

                {

                    academy?.map((element, index) => {

                        return(

                            <StyledSlideWrap id={`academyBtn${index}`} aria-controls={`academyPanel${index}`} aria-expanded={index === academyActive ? 'true' : 'false'} role="button" tabindex="1" key={index} onClick={() => {index === academyActive ? setAcademyActive(false) : setAcademyActive(index)}} active={index === academyActive && true}>
                                <div className="academy__title">
                                    <div>
                                        <img src={`https://ppaxe.kr/web/contents/images/contents/academy_profile_${academy[index].profile.image}.jpg`} alt="아카데미 강사 이미지" />
                                    </div>
                                    <h4>{ academy[index].name }</h4>
                                </div>
                                <div className="academy__img">
                                    <img src={`https://ppaxe.kr/web/contents/images/contents/academy_picture_${academy[index].profile.image}.jpg`} alt="아카데미 사진 대표 이미지" />
                                </div>
                                <div className="academy__info">
                                    <h4>"{ academy[index].title }"</h4>
                                    <dl id={`academyPanel${index}`} aira-labelledby={`academyBtn${index}`}>
                                        <dt>SCHEDULE</dt>
                                        <dd>
                                            {academy[index].profile.schedule}
                                        </dd>
                                        <dt>PLACE</dt>
                                        <dd>
                                            {academy[index].profile.place}
                                        </dd>
                                        <dt>TOOLS</dt>
                                        <dd>
                                            {academy[index].profile.tools}
                                        </dd>
                                    </dl>
                                </div>
                            </StyledSlideWrap>
                        )
                    })

                }
            </StyledAcademy>
        </>
    )

}

export default Academy;