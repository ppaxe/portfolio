import React, { useRef, useMemo, useState, useEffect } from 'react';
// import plugins
import { Link, Route, Switch } from 'react-router-dom';
import { throttle } from 'lodash';

import SwiperCore, { Autoplay,Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperStyles } from './../../styles/CommonStyles';

import styled, { css } from "styled-components";

SwiperCore.use([Autoplay,Pagination]);


function Main() {

  const [mainSlide,mainSlideChange] = useState(''),
        productArr = ['m10', 's3', 'sl2', 'q', 'vlux5'];

    const throttling = useMemo(
      () =>
        throttle(() => {



        }, 300),
        []
    );

    useEffect(() => {

      window.addEventListener('scroll', throttling);

      return () => {

        window.removeEventListener('scroll', throttling);

      };
    }, [throttling]);

    const $article = styled.article`



    `;

    const $button__bottom = styled.div`
        
    display:block;
    position:fixed;
    bottom:0;
    left:0;
    z-index:999;

    div{
      display:flex;
      width:100vw;

      a{
        width:100%;
        height:60px;
        line-height:60px;
        text-align:center;
        display:block;
        font-size: 2.4rem;
        ${props => props.theme.isColor('white')};
        font-weight:bold;
        overflow:hidden;
        background:${props => props.theme.mainRed};
      }
    }

    `;


  return (
    <>

      <SwiperStyles />
      {/* article 1 */}
      <$article>
        <div>
            <Swiper slidesPerView={1} speed={500} className="mainSwiper">
                <SwiperSlide>

                </SwiperSlide>
                <SwiperSlide>
                    
                </SwiperSlide>
                <SwiperSlide>
                    
                </SwiperSlide>
            </Swiper>
        </div>
      </$article>

      <$button__bottom>
          <div>
            <Link to="" title="" role="button">Buy</Link>
          </div>
      </$button__bottom>

    </>
  );
}

export default Main;