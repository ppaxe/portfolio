// eslint-disable-next-line

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { throttle } from 'lodash';
import styled, { keyframes, css } from 'styled-components';

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperStyles } from './../../styles/CommonStyles';

SwiperCore.use([Pagination]);

function Product(props) {

    const { id } = useParams(),
          pictureSelector = useRef(null),
          [pictureActive, setPictureActive] = useState(false);

    const throttling = useMemo(
        () =>
            throttle(() => {
      
            if(! pictureSelector.current) return
      
            if(pictureSelector.current.getBoundingClientRect().top <= 0){
      
                setPictureActive(true)
      
            }
      
        }, 300),[]
    );

    useEffect(() => {

        window.addEventListener('scroll', throttling);
      
        return () => {
      
            window.removeEventListener('scroll', throttling);
      
        };
    }, [throttling]);

    const KeyframesMain = keyframes`

        0%{
            border-radius:50%;
            transform:translate(-50%, -50%) rotate(0deg);
        }

        25%{
            border-radius: 50% 20% / 10% 40%;
            transform:translate(-50%, -50%) rotate(90deg);
        }

        50%{
            border-radius: 50%;
            transform:translate(-50%, -50%) rotate(180deg);
        }

        75%{
            border-radius: 40% 10%; / 20% 50%
            transform:translate(-50%, -50%) rotate(270deg);
        }
        100%{
            border-radius:50%;
            transform:translate(-50%, -50%) rotate(360deg);
        }

    `;

    const StyledMain = styled.article`

        width:100vw;
        display:flex;
        position:relative;
        overflow:hidden;
        ${props => props.theme.isVh()};
        flex-direction : column;
        justify-content: center;

        .mainSwiper{

            display:block;
            text-align:center;
            position:relative;

            &:before{
                ${props => props.theme.isImagin};
                width:60vw;
                height:60vw;
                max-width:500px;
                max-height:500px;
                background:${ props => props.theme.mainRed };
                z-index: -1;
                left:50%;
                top:50%;
                transform:translate(-50%, -50%) rotate(0deg);
                animation: ${KeyframesMain} 3s linear forwards running infinite;
            }

            .swiper-pagination{
                left: 50%;
                transform: translate(-50%, 4rem);
                bottom:0;
            }

            img{
                width:80%;
                max-width: 700px;
            }
        }

        .product__info{

            text-align: center;
            margin-top: 6rem;

            h3{
                position:relative;
                ${props=>props.theme.isColor('white')};
                font-size: 3.2rem;
                font-weight:bold;
                padding: 1rem 0;
                letter-spacing: .2rem;

                &:before, &:after{

                    ${props=>props.theme.isImagin};
                    width:40px;
                    height:2px;
                    background : ${ props => props.theme.mainRed};
                    left:50%;
                    transform:translateX(-50%);

                }
                &:before{

                    margin-top: -1rem;

                }
                &:after{

                    margin-top: 1rem;

                }
            }
            p{
                margin-top: 2rem;
                font-size:2.4rem;
                color: ${props => props.theme.mainWhite}

                &:nth-of-type(2){
                    color : ${props => props.theme.mainRed};
                    font-weight:bold;
                }
            }
        }

    `;
    
    const StyledInfo = styled.article`
    
        width:100vw;
        display:block;
        position:relative;
        overflow:hidden;
        line-height:160%;

        .article__info{
            display:block;
            background : ${ props => props.theme.mainRed }
            color: ${ props => props.theme.mainWhite }
            padding: 2rem;

            h3{
                font-size:2.4rem;
                ${props => props.theme.isColor('white')}
                font-weight:bold;
            }
            p{
                margin-top:2rem;
                font-size: 1.6rem;
                font-weight:500;
                word-break:keep-all;
            }
        }
        h4{
            ${props => props.theme.isColor('white')};
            text-align:center;
            margin: 5rem 0;
            font-size: 2.4rem;
            font-weight: bold;
        }

        .article__img{
            display:block;
            text-align:center;
            
            img{
                width:100%;
                max-width:700px;    
            }
        }

        &:after{
            ${props => props.theme.isImagin };
            width: 100%;
            height: 150px;
            left: 0;
            z-index: 10;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.0)0%, rgba(0, 0, 0, 1) 80%);
        }

    `;

    
    const KeyframesAcademy = keyframes`
      0%{
          opacity: 0;
          width: 100%;
          height: 100%;
      }
      1%{
          opacity: 1;
          width: 100%;
          height: 100%;
      }
      50%{
          opacity: 0;
          width: 100%;
          height: 100%;
      }
      75%{
          opacity: 1;
          width: 100%;
          height: 100%;
      }
      100%{
          opacity: 0;
          width: 0;
          height: 0;
      }
    `;

    const StyledPicture = styled.article`

        ${props => props.theme.isVh()};
        position:relative;
        display:flex;
        text-align:center;
        flex-direction: column;
        justify-content:center;
        background:url('http://ppaxe.kr/pc/contents/images/product/prod_${props.product[id].name}_pic1.jpg') center center no-repeat;
        background-size:cover;

        h3{

            span{
                display:inline-block;
                padding: 1rem 2rem;
                margin-top: 2rem;
                color:#fff;
                background:rgba(0,0,0,0.7);
                font-size: 2.4rem;
                font-weight:bold;
            }
        }
        &:before, &:after{
          ${props => props.theme.isImagin };
          width: 100%;
          height: 150px;
          left: 0;
          z-index: 10;
        }
        &:before{
          top: 0;
          background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1));
        }

        &:after{
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.0)0%, rgba(0, 0, 0, 1) 80%);
        }

        
        &:after{

            ${props => props.active && css`
              position:fixed;
              z-index:9999;
              top:0;
              left:0;
              background:#fff;
              opacity:0;
              width: 0;
              height: 0;
              animation : ${ KeyframesAcademy } 0.2s linear 0.2s normal forwards running;
            `}

          }
  

    `;

    const StyledButton = styled.div`

        position:fixed;
        z-index:99;
        bottom:0;
        left:0;
        dispaly:block;
        overflow:hidden;
        width:100%;

        div{

            display:flex;
            overflow:hidden;

            button{

                display:block;
                width:100%;
                background : ${props => props.theme.mainRed};
                text-align:center;
                ${props => props.theme.isColor('white')};
                font-size: 2.4rem;
                line-height:320%;

            }
        }
    `;

    return(
        <>
        
            <SwiperStyles />
            <StyledMain>
                <Swiper slidesPerView={1} speed={500} loop={true} pagination={{ "clickable": true }} className="mainSwiper">
                    <SwiperSlide>
                        <img src={ `http://ppaxe.kr/pc/contents/images/product/prod_${props.product[id].name}_view1.png` } alt={ `${props.product[id].title} 제품 이미지` } />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ `http://ppaxe.kr/pc/contents/images/product/prod_${props.product[id].name}_view2.png` } alt={ `${props.product[id].title} 제품 측면 이미지` } />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ `http://ppaxe.kr/pc/contents/images/product/prod_${props.product[id].name}_view3.png` } alt={ `${props.product[id].title} 제품 후면 이미지` } />
                    </SwiperSlide>
                </Swiper>
                <div className="product__info">
                    <h3>{ props.product[id].title.toUpperCase() }</h3>
                    <p>{ props.product[id].info }</p>
                    <p>W { props.product[id].price.toLocaleString() }</p>
                </div>
            </StyledMain>
            <StyledInfo>
                <div className="article__info">
                    <h3>{ props.product[id].sub_title }</h3>
                    <p>{ props.product[id].sub_info }</p>
                </div>
                <h4>FREE VIEW</h4>
                <div className="article__video">
                    <iframe src={props.product[id].src} style={{width:'100vw', height: '50vw', display: 'block', maxWidth:'700px', maxHeight: '400px', margin: '0 auto'}} allow="autoplay; fullscreen" allowfullscreen="" title="제품 소개 영상"></iframe>
                </div>
                <h4>{props.product[id].tag}</h4>
                <div className="article__img">
                    <img src={`http://ppaxe.kr/pc/contents/images/product/prod_${props.product[id].name}_pic2.png`} />
                </div>
            </StyledInfo>
            <StyledPicture ref={pictureSelector} active={pictureActive}>
                 <h3><span>Maybe, this is your picture.</span></h3>
            </StyledPicture>
            <StyledButton>
                <div>
                    <button type="button" title="구매하기">BUY NOW</button>
                </div>
            </StyledButton>
        </>
    )

}

export default Product;