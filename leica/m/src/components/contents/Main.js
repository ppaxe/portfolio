// eslint-disable-next-line

import React, { useRef, useMemo, useState, useEffect } from 'react';
// import plugins
import { throttle } from 'lodash';

import { Link } from 'react-router-dom';

import SwiperCore, { Autoplay,Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperStyles } from './../../styles/CommonStyles';

import styled, { css, keyframes } from "styled-components";

SwiperCore.use([Autoplay,Pagination]);


function Main(props) {

  const productSelector = useRef(),
        academySelector = useRef(),
        [productActive, setProductActive] = useState(false),
        [academyActive, setAcademyActive] = useState(false);




    const throttling = useMemo(
      () =>
        throttle(() => {

          if(! productSelector.current) return

          if(productSelector.current.getBoundingClientRect().top < 200){

              setProductActive(true);

            if(academySelector.current.getBoundingClientRect().top < 200){

              setAcademyActive(true);
              
            }

          }

        }, 300),
        []
    );

    useEffect(() => {

      window.addEventListener('scroll', throttling);

      return () => {

        window.removeEventListener('scroll', throttling);

      };
    }, [throttling]);

    const StyledArticle = styled.article`

          width:100vw;
          display:block;
          position:relative;
          overflow:hidden;
          ${props => props.theme.isVh()};

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

    `;

    const StyledMain = styled.div`

          width:100%;
          height:100%;
          position:relative;
          dispaly:block;
          overflow:hidden;
          background: url(http://ppaxe.kr/pc/contents/images/contents/main_slide_bg_${ props => props.active }.jpg) center center no-repeat;
          background-size:cover;

          .mainSwiper{
            height: 100%;
            display: block;
            .swiper-wrapper{
                height: 100%;
    
                .swiper-slide{
                  ${props => props.theme.isVh(100)};
                    text-align:center;

                    div{
                      position:relative;
                      display:block;
                      width:100%;
                      ${props => props.theme.isCenter(50)};
                      
                      img{
                          display:block;
                          margin:0 auto;
                          width:80vw;
                          max-width:600px;
                      }
          
                      span{
                        display:inline-block;
                        padding: 1rem 2rem;
                        margin-top: 2rem;
                        color:#fff;
                        background:rgba(0,0,0,0.7);
                        font-size:1.8rem;
                      }
                    }
                }
          
          }
      
            .swiper-pagination{
              position: absolute;
              bottom: 20%;
              left: 50%;
              transform: translateX(-50%);
          }
      
    `;

    const KeyframesArticleBefore = keyframes`

          0%{
            transform:  translateY(-50%) scale(0,0);
          }
          100%{
            transform: translateY(-50%) scale(1,1);
          }

    `;

    const KeyframesProduct = keyframes`

      0%{
        left: -100%;
        opacity:0;
      }
      80%{
        left: -20%;
        opacity:.5;
      }
      100%{
        left : 0;
        opacity:1;
      }

    `;

    const StyledProduct = styled.div`

          width:100%;
          height:100%;
          position:relative;
          dispaly:block;
          overflow:hidden;
          background:url(http://ppaxe.kr/pc/contents/images/contents/main_prod_bg.jpg) center center no-repeat;
          background-size:cover;

          div:nth-of-type(1){
            ${props => props.theme.isCenter(50)};
            display:block;
            width:100%;
            left: -40%;

            &:before{
              ${props => props.theme.isImagin}
              width: 100vw;
              height: 100vw;
              max-width:600px;
              max-height:600px;
              background: ${props => props.theme.mainRed};
              border-radius:50%;
              top:50%;
              transform-origin: 50% 50%;
              left:0;
              transform:translateY(-50%) scale(0, 0);
              ${ 
                props => props.active && css`
                animation : ${ KeyframesArticleBefore } 0.3s linear normal forwards running;
              `}
              z-index: -1;
            }

            img{
              ${props => props.theme.isCenter(50)};
              position:absolute;
              width:100%;
              max-width:600px;
              left:-100%;
              opacity:0;
              ${ 
                props => props.active && css`
                animation : ${ KeyframesProduct } 0.3s linear 0.3s normal forwards running;
              `}
            }
          }
  
          div:nth-of-type(2){
            position:absolute;
            ${props => props.theme.isCenter(50)}
            right:2rem;
            z-index:1;
            text-align:right;

            h3{
              display:inline-block;
              padding:1rem;
              background:rgba(0,0,0,0.75);
              color : ${props => props.theme.mainRed};
              font-weight:bold;
              font-size: 3.6rem;
            }

            p{
              ${props => props.theme.isColor('white')};
              margin-top: 2rem;
              font-size: 2.4rem;
              font-weight : bold;
            }

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

    const StyledAcademy = styled.div`

        width:100%;
        height:100%;
        position:relative;
        dispaly:block;
        overflow:hidden;

        &:before{

          ${props => props.active && css`
            ${ props => props.theme.isImagin }
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

        h3{
          position:absolute;
          margin: 10rem 0 2rem 2rem;
          padding: 2rem;
          border: 1px solid ${props => props.theme.mainRed};
          border-width: 0 0 4px 4px;
          display:inline-block;
          ${props=> props.theme.isColor('red')};
          font-size: 4.8rem;
          font-weight:bold;
        }

        .academySwiper{

          display:block;
          ${props => props.theme.isCenter(50)};
          position:relative;
          width:100%;
          ${props=>props.theme.isVh(100)};
          overflow:hidden;
    
          .swiper-wrapper{
            margin-top : 10rem;
          }
    
          .swiper-pagination{
              position:absolute;
              top:28rem;
              right:2rem;
            }
    
          .swiper-slide{
            img{
              max-width:100%;
            }
          }
          
        }

    `;

    const StyledSlideWrap = styled.div`

        display:block;
        background : ${props => props.theme.mainWhite };
        ${props => props.theme.isCenter(50)};
        border-radius: 2rem;
        font-weight: 600;
        box-shadow: 0px 10px 30px rgba(0,0,0,0.5);

        div:nth-of-type(1){
          padding:0 2rem 0 100px;
          text-align:left;

          div{
            padding:0;
            text-align:center;
            width: 80px;
            height:80px;
            border-radius:50%;
            overflow:hidden;
            position:absolute;
            top:-40px;
            left: 20px;
          }
          p{
            padding : 2rem;
            text-align: center;
            color : ${props => props.theme.mainBlack};
            word-break: keep-all;
            font-size: 1.6rem;
            overflow: hidden;
          }
        }

        div:nth-of-type(3){
          padding: 2rem 0;
        }

    `;

    const StyledButton = styled.div`

    position:absolute;
    z-index:99;
    bottom:0;
    left:0;
    dispaly:block;
    overflow:hidden;
    width:100%;

    div{
        
        display:flex;
        overflow:hidden;
        padding:2rem;

        a{

            display:block;
            border-radius: .5rem;
            width:100%;
            background : ${props => props.theme.mainRed};
            text-align:center;
            ${props => props.theme.isColor('white')};
            font-size: 2.4rem;
            line-height:280%;

        }
    }
    `;
  return (
    <>

      <SwiperStyles />
      {/* article 1 */}
      <StyledArticle>
        <h3 className="blind">라이카 제품군 보기</h3>
        <StyledMain>
          <Swiper slidesPerView={1} speed={500} loop={true} autoplay={{ "delay": 5000, "disableOnInteraction": false }} pagination={{ "clickable": true }} onSlideChange={(swiper) => { swiper.el.style.backgroundImage = `url(http://ppaxe.kr/pc/contents/images/contents/main_slide_bg_${props.product[swiper.realIndex].name}.jpg)`; swiper.el.style.backgroundRepeat = 'no-repeat'; swiper.el.style.backgroundSize = 'cover'; swiper.el.style.backgroundPosition = 'center center'; }} className="mainSwiper">
            {
                props.product.map((elements,index) => {

                  return(
                  
                  <SwiperSlide key={index}>
                    
                    <div>
                      <img  src={ `http://ppaxe.kr/pc/contents/images/product/prod_${props.product[index].name}.png` } alt={`${props.product[index].title} 제품 이미지`} />
                      <span>{ props.product[index].title.toUpperCase() }</span>
                    </div>
                  
                  </SwiperSlide>
                  
                  );
                })

              }
              </Swiper>
        </StyledMain>
      </StyledArticle>
      {/* // article 1 */}

      {/* article 2 */}
      <StyledArticle>
        <StyledProduct ref={ productSelector } active={ productActive }>
            <div>
              <img src="http://ppaxe.kr/pc/contents/images/product/prod_m10.png" alt="M10 제품 이미지" />
            </div>
            <div>
              <h3>M10</h3>
              <p>Monochrom</p>
            </div>
        </StyledProduct>
        <StyledButton>
          <div>
            <Link to="/product/0" title="LEICA M10 모노크롬 제품 자세히 보기" role="button">LEARN MORE .</Link>
          </div>
        </StyledButton>
      </StyledArticle>
      {/* // article 2 */}

      {/* article3 */}
      <StyledArticle>
        <StyledAcademy ref={academySelector} active={academyActive}>
        
              <h3>LEICA<br />ACADEMY</h3>
              <Swiper slidesPerView={1.3} speed={1000} spaceBetween={30} centeredSlides={true} autoplay={{ "delay": 5000, "disableOnInteraction": false }} pagination={{ "clickable": true }} className="academySwiper">
                {

                  props.academy.map((elements,index) => (

                    <SwiperSlide key={index}>

                      <StyledSlideWrap>
                        <div>
                          <div>
                            <img src={`http://ppaxe.kr/pc/contents/images/contents/academy_profile_${ props.academy[index].profile.image }.jpg`} alt={` ${ props.academy[index].name } 프로필 이미지 `} />
                          </div>
                          <p>{ props.academy[index].name }</p>
                        </div>
                        <div>
                          <img src={ `http://ppaxe.kr/pc/contents/images/contents/academy_picture_${ props.academy[index].profile.image }.jpg` } alt={` ${ props.academy[index].name } 작품 이미지 `} />
                        </div>
                        <div>
                          " { props.academy[index].title } "
                        </div>
                      </StyledSlideWrap>

                    </SwiperSlide>

                  ))

                }
              </Swiper>
              <StyledButton>
                <div>
                  <Link to="">BOOK NOW .</Link>
                </div>
              </StyledButton>

        </StyledAcademy>
      </StyledArticle>
      {/* // article3 */}

    </>
  );
}

export default Main;