import React, { useRef, useMemo, useState, useEffect } from 'react';
// import plugins
import { Link, Route, Switch } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { throttle } from 'lodash';

import SwiperCore, { Autoplay,Pagination } from 'swiper';
import { SwiperStyles } from './../../styles/CommonStyles';


import styled, { css } from "styled-components";


SwiperCore.use([Autoplay,Pagination]);


function Main() {

  return (
    <>


    </>
  );
}

export default Main;