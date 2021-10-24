// eslint-disable-next-line

import React from 'react';
import styled from 'styled-components';

function Wwa(props) {

    const StyledMain = styled.article`

        display:block;
        overflow:hidden;
        position:relative;
        ${props => props.theme.isColor('white')};
        text-align:center;

        .article__inner{
            display:block;
            width:100%;
            max-width:700px;
            margin: 8rem auto 0;
            position:relative;
            overflow:hidden;
            line-height:160%;

            div{
                margin: 2rem 0;
                
                img{
                    width:100%;
                    max-width:700px;
                }
            }

            p{
                padding:2rem 0;
                font-size: 2.4rem;
                
                span{
                    font-size:1.6rem;
                }
            }    
        }

        .article__flex{
            display:flex;
            align-items:center;

            div,p{
                width:100%;
            }
        }

    `;

    return(
        <>

            <StyledMain>
                <div className="article__inner">
                    <p>LEICA is a global manufacturer of premium cam and optics.</p>
                    <div>
                        <img src="http://ppaxe.kr/pc/contents/images/contents/wwa_content_img1.jpg" alt="leica 회사 전경" />
                    </div>
                    <p>LEICA stands for the best German engineering technology.</p>
                    <div className="article__flex">
                        <div>
                            <img src="http://ppaxe.kr/pc/contents/images/contents/wwa_content_img2.jpg" alt="leica 회사 ceo matthias Harsch" />
                        </div>
                        <p>"LEICA ideal is to incorporate technology into culture."<br />
                            <span>- LEICA CEO Matthias Harsch</span>
                        </p>
                    </div>
                    <div>
                        <img src="http://ppaxe.kr/pc/contents/images/contents/wwa_content_img3.jpg" alt="leica 회사 연구원" />
                    </div>
                    <p>LEICA reputation can be found in years of tradition, lens and the excellence of optical instruments.</p>
                    <div className="article__flex">
                        <p>All Leica products are made for the user's unique visual experience. </p>
                        <div>
                            <img src="http://ppaxe.kr/pc/contents/images/contents/wwa_content_img4.jpg" alt="leica 회사 전경" />
                        </div>
                    </div>
                </div>
            </StyledMain>

        </>
    )

}

export default Wwa;