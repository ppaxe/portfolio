// eslint-disable-next-line

import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
// import { MixinStyles } from './../../styles/CommonStyles';

function Header() {

  let [gnbActive, gnbChange] = useState(''),
      [gnbDepth, gnbDepthChange] = useState('');


  const $header = styled.header`
    
    position: fixed;
    top: 2rem;
    left: 0;
    width: 100%;
    background: #111;
    z-index: 9999;
    transition: 0.3s;
    opacity: ${ props => props.theme.isActive('0','1') };

  `;

  const $header__logo = styled.h1`

    position: absolute;
    top: 0;
    left: 0;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 2rem;

  `;

  const $header__logo__link = styled(Link).attrs({
    role:'button'
  })`

    display: inline-block;
    width: 60px;
    height: 60px;
    background: url(http://ppaxe.kr/pc/contents/images/common/logo.png) center center no-repeat;
    background-size: auto 60px;
    ${ props => props.theme.isIR };

  `;


  const $header__button = styled.h2`

    position: absolute;
    top: 0;
    right: 0;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 2rem;

  `;


  const $header__button__hamburger = styled.button.attrs({
    type:'button'
  })`

    display: inline-block;
    width: 60px;
    height: 60px;
    background: url(/assets/images/common/gnb_icon.png) center center no-repeat;
    background-size: auto 60px;
    ${ props => props.theme.isIR };

  `;

  const $nav__before__keyframes = keyframes`

    0%{
      margin-top: 150%;
    }
    100%{
      margin-top: 0;
    }

  `;

  const $nav__after__keyframes = keyframes`

    0%{
      transform: translate(-50%,-50%) scale(0,0);
    }
    100%{
      transform: translate(-50%,-50%) scale(20,20);
    }

  `;
  const $nav__inner__keyframes = keyframes`

    0%{
      left:100%;
    }
    100%{
      left:40%;
    }

  `;

  const $nav = styled.nav`
  
    position: fixed;
    z-index: 9999;
    left: ${ props => props.theme.isActive('0','100%') };
    top: 0;
    width: 100%;
    height: 100%;
    background: #111;
    display: block;
    overflow: hidden;
    background: transparent;

    &:before{
      ${props => props.theme.isImagin };
      position: fixed;
      top: 50%;
      left: 50%;
      width: 15vw;
      height: 15vw;
      transform: translate(-50%,-50%);
      background: #e1262a;
      border-radius: 50%;
      margin-top: 150%;
      ${
        props => props.active == 'active' ? css`
          animation : ${$nav__before__keyframes} 0.5s linear 0.5s normal forwards running
        ` : css`
          animation : ${$nav__before__keyframes} 0.5s linear 1s reverse backwards running
        `
      }

    }

    &:after{
      ${props => props.theme.isImagin };
      position: fixed;
      top: 50%;
      left: 50%;
      width: 15vw;
      height: 15vw;
      background: #e1262a;
      border-radius: 50%;
      transform: translate(-50%,-50%) scale(0,0);
      ${
        props => props.active == 'active' ? css`
          animation : ${$nav__after__keyframes} 0.5s linear 1s normal forwards running
        ` : css`
          animation : ${$nav__after__keyframes} 0.5s linear 0.5s reverse backwards running
        `
      }

    }
  `;

  const $nav__inner = styled.div`

    position: fixed;
    top: 0;
    display: block;
    width: 60%;
    height: 100%;
    background: #111;
    transition: 0.3s;
    overflow: auto;
    z-index: 1;
    left: 100%;
    ${
      props => props.active == 'active' ? css`
        animation : ${$nav__inner__keyframes} 0.3s linear 1.25s normal forwards running
      ` : css`
        animation : ${$nav__inner__keyframes} 0.3s linear 0s reverse backwards running
      `
    }

  `;

  const $nav__button__main = styled(Link).attrs({
    role:'button'
  })`
  
      display: block;
      position: relative;
      left: 50%;
      margin-top: 80px;
      transform: translateX(-50%);
      width: 200px;
      height: 70px;
      background: url(/assets/images/common/gnb_logo.png) center center no-repeat;
      background-size: 200px auto;
      ${ props => props.theme.isIR };

  `;

  const $nav__button__close = styled.button.attrs({
    type:'button'
  })`

      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 40px;
      height: 40px;
      background: url(/assets/images/common/gnb_close.png) center center no-repeat;
      background-size: 40px auto;
      ${ props => props.theme.isIR };

  `;

  const $nav__depth = styled.ul`

      display:block;
      overflow:hidden;
      margin-top:2rem;

  `;



  const $nav__button__list = styled.button.attrs({
    type:'button'
  })`

    display: block;
    width: 100%;
    padding: 2rem 0;
    font-size: 2.0rem;
    text-align: center;
    font-weight: bold;
    ${props => props.theme.isActive(props.theme.isColor('red'), props.theme.isColor('white')) };

  `;

  const $nav__depth2 = styled.ul`

      display: block;
      overflow: hidden;
      background: #666;
      height: ${props => props.active == 'active' ? 'auto' : '0' };
      transition: 0.3s;

  `;

  const $nav__depth2__link = styled(Link).attrs({
    role:'button'
  })`

      font-weight: bold;
      display: block;
      overflow: hidden;
      padding: 2rem 0;
      font-size: 1.6rem;
      text-align: center;
      color:#fff;

  `;

  return (
    <>
      <$header active={gnbActive}>
          <$header__logo>
              <$header__logo__link to="/" title="메인으로 이동">Leica</$header__logo__link>
          </$header__logo>
          <$header__button>
              <$header__button__hamburger title="글로벌 네비게이션 열기" onClick={() => {gnbChange('active');}}>
                  글로벌 네비게이션 열기
              </$header__button__hamburger>
          </$header__button>
      </$header>
      <$nav active={gnbActive}>

        <$nav__inner active={gnbActive}>
            <h2 className="blind">글로벌 네비게이션</h2>
            <$nav__button__main to="/" title="메인으로 이동">메인으로 이동</$nav__button__main>
            <$nav__button__close title="글로벌 네비게이션 닫기" onClick={() => {gnbChange('');}}>글로벌 네비게이션 닫기</$nav__button__close>

            <$nav__depth>
              <li>
                  <$nav__button__list active={gnbDepth == 'product' && 'active'} title="라이카 제품 바로가기" onClick={() => {gnbDepth == 'product'? gnbDepthChange('') : gnbDepthChange('product')}}>
                    Product
                  </$nav__button__list>
                  <$nav__depth2 active={gnbDepth == 'product' && 'active'}>
                  
                    <li>
                        <$nav__depth2__link to="" title="라이카 M 시리즈 바로가기">
                          Leica M Series
                        </$nav__depth2__link>
                        <$nav__depth2__link to="" title="라이카 S 시리즈 바로가기">
                          Leica S Series
                        </$nav__depth2__link>
                        <$nav__depth2__link to="" title="라이카 SL 시리즈 바로가기">
                          Leica SL Series
                        </$nav__depth2__link>
                        <$nav__depth2__link to="" title="라이카 Q 시리즈 바로가기">
                          Leica Q Series
                        </$nav__depth2__link>
                        <$nav__depth2__link to="" title="라이카 V-LUX 시리즈 바로가기">
                          Leica V-LUX Series
                        </$nav__depth2__link>
                    </li>

                  </$nav__depth2>
              </li>
              <li>
                  <$nav__button__list active={gnbDepth == 'academy' && 'active'} title="라이카 아카데미 바로가기" onClick={() => {gnbDepth == 'academy'? gnbDepthChange('') : gnbDepthChange('academy')}}>
                    Academy
                  </$nav__button__list>
                  <$nav__depth2 active={gnbDepth == 'academy' && 'active'}>
                  
                    <li>

                        <$nav__depth2__link to="" title="라이카 아카데미 바로가기">
                          Academy
                        </$nav__depth2__link>

                    </li>

                  </$nav__depth2>
              </li>

              <li>
                  <$nav__button__list active={gnbDepth == 'wwa' && 'active'} title="라이카 기업 소개 바로가기" onClick={() => {gnbDepth == 'wwa'? gnbDepthChange('') : gnbDepthChange('wwa')}}>
                    Our Story
                  </$nav__button__list>
                  <$nav__depth2 active={gnbDepth == 'wwa' && 'active'}>
                  
                    <li>

                        <$nav__depth2__link to="" title="라이카 기업소개 바로가기">
                          Who We Are
                        </$nav__depth2__link>

                    </li>

                  </$nav__depth2>
              </li>

              <li>
                  <$nav__button__list active={gnbDepth == 'store' && 'active'} title="라이카 오프라인 매장 바로가기" onClick={() => {gnbDepth == 'store'? gnbDepthChange('') : gnbDepthChange('store')}}>
                    Find Store
                  </$nav__button__list>
                  <$nav__depth2 active={gnbDepth == 'store' && 'active'}>
                  
                    <li>

                        <$nav__depth2__link to="" title="라이카 청담 매장 바로가기">
                          CheongDam
                        </$nav__depth2__link>
                        
                        <$nav__depth2__link to="" title="라이카 강남 매장 바로가기">
                          GangNam
                        </$nav__depth2__link>
                        
                        <$nav__depth2__link to="" title="라이카 충무로 매장 바로가기">
                          Chungmuro
                        </$nav__depth2__link>
                        
                        <$nav__depth2__link to="" title="라이카 부산 매장 바로가기">
                          Busan
                        </$nav__depth2__link>
                        

                    </li>

                  </$nav__depth2>
              </li>

              <li>
                  <$nav__button__list active={gnbDepth == 'support' && 'active'} title="라이카 고객 지원 바로가기" onClick={() => {gnbDepth == 'support'? gnbDepthChange('') : gnbDepthChange('support')}}>
                    Support
                  </$nav__button__list>
                  <$nav__depth2 active={gnbDepth == 'support' && 'active'}>
                  
                    <li>

                        <$nav__depth2__link to="" title="라이카 고객 지원 바로가기">
                          Support
                        </$nav__depth2__link>

                    </li>

                  </$nav__depth2>
              </li>



            
            </$nav__depth>
  
        </$nav__inner>

      </$nav>

    </>
  );
}

export default Header;