import React, { useRef, useMemo, useState, useEffect } from 'react';
// import plugins
import { Link, Route, Switch } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { throttle } from 'lodash';

// css import
// import './../../css/common.scss';
// import './../../css/plugins.css'
// import './../../css/index.scss';


import SwiperCore, { Pagination } from 'swiper';

// styled-components

import styled from "styled-components";

  const SlideArticle = styled.article`
  
    width:100vw;
    height: 100vh;
    display:block;
    position:relative;
    overflow:hidden;
    background: url(/assets/images/contents/main_slide_bg_${props => props.prod}.jpg) center center no-repeat;
    background-size:cover !important;

  `;

  // const StyledSlideLink = styled(Link)`
  
  //   display:flex;
  //   height: 100%;
  //   flex-direction: column;
  //   justify-content: center;
  //   text-align:center;

  // `;

  // const StyledSlideTitle = styled.span`
  
  //   display:inline;
  //   padding: 10px;
  //   color:#fff;
  //   background:rgba(0,0,0,0.7);
  //   font-size:1.8rem;

  // `;


// 


function MainContainer() {

  let [mainSlide,mainSlideChange] = useState(''),
      prodIdxArr = ['m10', 's3', 'sl2', 'q', 'vlux'],
      [articleActive, articleActiveChange] = useState('0');

  const componentsScroll = useMemo(() =>
    throttle(() => {



      }, 300),
      [articleActive]
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
          <SlideArticle prod={ mainSlide }>

              <Swiper slidesPerView={1} speed={500} loop={true} pagination={{"clickable": true}} onSlideChange={(swiper) => { mainSlideChange(prodIdxArr[swiper.realIndex]); }} className="mainSwiper">

                {
                  // swiper for
                  prodIdxArr.map((elements,index) => (

                    <SwiperSlide key={index}>
                      
                      <Link to="" title="" role="button">

                        <div className="prod_img">
                          <img src={`/assets/images/contents/main_slide_prod_${prodIdxArr[index]}.png`} alt="" />
                        </div>
                        <div className="prod_name">
                          <span>LEICA { prodIdxArr[index].toUpperCase() }</span>
                        </div>

                      </Link>

                    </SwiperSlide>

                  ))

                }

              </Swiper>
              
          </SlideArticle>

    </>
  );
}

export default MainContainer;