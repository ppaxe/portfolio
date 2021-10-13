import React, { useRef, useMemo, useState, useEffect } from 'react';
// import plugins
import { Link, Route, Switch } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { throttle } from 'lodash';

import SwiperCore, { Autoplay,Pagination } from 'swiper';
// styled-components

import styled, { css } from "styled-components";
import { SwiperStyles } from './../../styles/CommonStyles';


SwiperCore.use([Autoplay,Pagination]);

const $article__before = css`

    &:before{
        position:absolute;
        content:'';
        display:block;
        background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1));
        width: 100%;
        height: 150px;
        top: 0;
        left: 0;
        z-index: 10;

    }

`;

const $article__after = css`

    &:after{
        position:absolute;
        content:'';
        display:block;
        ${props => props.theme.isImagin };
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.0)0%, rgba(0, 0, 0, 1) 80%);
        width: 100%;
        height: 150px;
        bottom: 0;
        left: 0;
        z-index: 10;

    }

`;

  const $article__slide = styled.article`
  
    width:100vw;
    display:block;
    position:relative;
    overflow:hidden;
    background: url(http://ppaxe.kr/pc/contents/images/contents/main_slide_bg_${props => props.prod}.jpg) center center no-repeat;
    background-size:cover;

    ${$article__before + $article__after}

    .mainSwiper{
        height: 100%;
        display: block;
        .swiper-wrapper{
            height: 100%;

            .swiper-slide{
              ${props => props.theme.isVh(100)};
                text-align:center;
                img{
                    display:inline-block;
                    width:80vw;
                    max-width:600px;
                }
            }
      
    }

      .swiper-pagination{
        position: absolute;
        bottom: 20%;
        left: 50%;
        transform: translateX(-50%);
    }

  }

  `;

  const $article__slide__box = styled.div`
  
  
    ${props => props.theme.isCenter(50)};
    position:relative;
    display:block;

  `;

  const $article__slide__title = styled.span`
  
    display:inline-block;
    padding: 1rem 2rem;
    margin-top: 2rem;
    color:#fff;
    background:rgba(0,0,0,0.7);
    font-size:1.8rem;

  `;


  const $article__prod = styled.article`
      ${props => props.theme.isVh()};
      position:relative;
      background:url(http://ppaxe.kr/pc/contents/images/contents/main_prod_bg.jpg) center center no-repeat;
      background-size:cover;
      ${$article__before + $article__after}

  `;

  const $article__prod__img = styled.div`

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
      left:0;
      transform:translateY(-50%);
      z-index: -1;
    }

    img{

      width:100%;
      max-width:600px;

    }

  `;

  const $article__prod__info = styled.div`

     position:absolute;
     ${props => props.theme.isCenter(50)}
     right:2rem;
     z-index:1;
     text-align:right;

  `;

  const $article__prod__title = styled.h3`

      display:inline-block;
      padding:1rem;
      background:rgba(0,0,0,0.75);
      color : ${props => props.theme.mainRed};
      font-weight:bold;
      font-size: 3.6rem;

  `;

  const $article__prod__sub_title = styled.p`

      //  color: ${props => props.theme.mainWhite};
      ${props => props.theme.isColor('white')};
       margin-top: 2rem;
       font-size: 2.4rem;
       font-weight : bold;

  `;


  const $article__academy = styled.article`
    
    position:relative;
    ${props => props.theme.isVh()};
    ${$article__before + $article__after}

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

  const $article__academy__title = styled.h3`

     position:absolute;
     margin: 10rem 0 2rem 2rem;
     padding: 2rem;
     border: 1px solid ${props => props.theme.mainRed};
     border-width: 0 0 4px 4px;
     display:inline-block;
     ${props=> props.theme.isColor('red')};
     font-size: 4.8rem;
     font-weight:bold;

  `;

  const $article__academy__slide = styled.div`

    display:block;
    background : ${props => props.theme.mainWhite };
    ${props => props.theme.isCenter(50)};
    border-radius: 2rem;
    font-weight: 600;
    box-shadow: 0px 10px 30px rgba(0,0,0,0.5)

  `;

  const $article__academy__slide_top = styled.div`

    padding:2rem 2rem 2rem 100px;
    text-align:left;

  `;

  const $article__academy__slide_profile = styled.div`

    width: 80px;
    height:80px;
    border-radius:50%;
    overflow:hidden;
    position:absolute;
    top:-40px;
    left: 20px;

  `;

  const $article__academy__slide_btm = styled.p`

      padding : 2rem;
      text-align: center;
      color : ${props => props.theme.mainBlack};
      word-break: keep-all;
      font-size: 1.6rem;
      overflow: hidden;

  `;

  const $article__quick = styled.article`
        
    ${props => props.theme.isVh()};
    background:#000;


  `;



function Main() {

  let [mainSlide,mainSlideChange] = useState(''),
      prodIdxArr = ['m10', 's3', 'sl2', 'q', 'vlux5'],
      academyArr = [
        {
          name : `PHIL PENMAN Pro.`,
          title : 'A Pictorial Secret',
          profile : {
              image : 'perman',
              schedule : `AUGUST 7-9`,
              place : `Seoul`,
              tools : `Leica S3`
          },
        },
        {
          name : `Emily Pro.`,
          title : 'Express colors not seen in real life',
          profile : {
              image : 'emily',
              schedule : `OCTOBER 17-24`,
              place : `Gyeonggi`,
              tools : `Leica SL2`
          },
        },
        {
          name : `MARK MANN Pro.`,
          title : `Capture the moment of one's journey`,
          profile : {
              image : 'mann',
              schedule : `JANUARY 22-24`,
              place : `Busan`,
              tools : `Leica V-LUX`
          },
        },
        {
          name : `Crystal Pro.`,
          title : `Deeper black and white`,
          profile : {
              image : 'crystal',
              schedule : `OCTOBER 22-28`,
              place : `Seoul`,
              tools : `Leica M10 Monochrome`
          },
        },
        {
          name : `MARK DE PAOLA Pro.`,
          title : `Blue, the beauty of color`,
          profile : {
              image : 'paola',
              schedule : `AUGUST 9-11`,
              place : `Busan`,
              tools : `Leica Q`
          },
        },
      ],
      article_prod = useRef(),
      article_academy = useRef(),
      article_quick = useRef();

  const componentsScroll = useMemo((e) =>
    throttle(() => {

      let $scroll = window.scrollY;

      if ($scroll >= article_prod.current.offsetTop){

        if ($scroll >= article_academy.current.offsetTop){

          if ($scroll >= article_quick.current.offsetTop){

          
          }

        }

      }

      }, 300)
      // [articleActive]
  );

  useEffect(() => {
    window.addEventListener('scroll', componentsScroll);
    return () => {
      window.removeEventListener('scroll', componentsScroll);
    };
  }, [componentsScroll]);

  return (
    <>
          {/* Main Prod Swiper */}
          <SwiperStyles />
          <$article__slide prod={ mainSlide }>

              <Swiper slidesPerView={1} speed={500} loop={true} autoplay={{ "delay": 5000, "disableOnInteraction": false }} pagination={{ "clickable": true }} onSlideChange={(swiper) => { mainSlideChange(prodIdxArr[swiper.realIndex]); }} className="mainSwiper">

                {

                  prodIdxArr.map((elements,index) => (

                    <SwiperSlide key={index}>

                        <$article__slide__box>
                        
                            <div>
                                <img src={`http://ppaxe.kr/pc/contents/images/product/prod_${prodIdxArr[index]}.png`} alt={`${prodIdxArr[index].toUpperCase()} 제품 이미지`} />
                            </div>
                            <div>
                                <$article__slide__title>
                                    LEICA { prodIdxArr[index].toUpperCase() }
                                </$article__slide__title>
                            </div>

                        </$article__slide__box>

                    </SwiperSlide>

                  ))

                }

              </Swiper>
              
          </$article__slide>
          {/* // Main Prod Swiper */}

          {/* Main Prod Info */}
          <$article__prod ref={article_prod}>
          
                <$article__prod__img>
                  <img src="http://ppaxe.kr/pc/contents/images/product/prod_m10.png" alt="M10 제품 이미지" />
                </$article__prod__img>
                <$article__prod__info>
                  <$article__prod__title>
                    M10
                  </$article__prod__title>
                  <$article__prod__sub_title>
                    Monochrom
                  </$article__prod__sub_title>
                </$article__prod__info>
          </$article__prod>
          {/* // Main Prod Info */}

          {/* Main Academy Info */}
          <$article__academy ref={article_academy}>
          
                <$article__academy__title>
                  LEICA<br />ACADEMY
                </$article__academy__title>
          

                
              <Swiper slidesPerView={1.3} speed={1000} spaceBetween={30} centeredSlides={true} autoplay={{ "delay": 5000, "disableOnInteraction": false }} pagination={{ "clickable": true }} className="academySwiper">

                {

                  academyArr.map((elements,index) => (

                    <SwiperSlide key={index}>

                        <$article__academy__slide>
                          <$article__academy__slide_top>
                            <$article__academy__slide_profile>
                              <img src={`http://ppaxe.kr/pc/contents/images/contents/academy_profile_${ academyArr[index].profile.image }.jpg`} alt="" />
                            </$article__academy__slide_profile>
                            <p>{ academyArr[index].name }</p>
                          </$article__academy__slide_top>
                          <div>
                            <img src={`http://ppaxe.kr/pc/contents/images/contents/academy_picture_${ academyArr[index].profile.image }.jpg`} alt="" />
                          </div>
                          <$article__academy__slide_btm>
                            " { academyArr[index].title } "
                          </$article__academy__slide_btm>
                        </$article__academy__slide>

                    </SwiperSlide>

                  ))

                }

                </Swiper>


          </$article__academy>
          {/* // Main Academy Info */}

          {/* Main Quick */}
          <$article__quick ref={article_quick}>
          
          </$article__quick>
          {/* // Main Quick */}
    </>
  );
}

export default Main;