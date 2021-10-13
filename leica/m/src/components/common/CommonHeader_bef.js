import React, { useState, useEffect } from 'react';
import './../../css/common.scss';
import { Link, Route, Switch } from 'react-router-dom';

function CommonHeader() {

  let [gnbActive, gnbChange] = useState(''),
      [gnbDepth, gnbDepthChange] = useState('');

  return (
    <>
        <header className={`header ${gnbActive}`}>
            <h1 className="header__logo">
              <Link to="/" className="header__logo--link" role="button" title="메인으로 이동">Leica</Link>
            </h1>
            <h2 className="header__button">
              <button className="header__button--hamburger" onClick={() => {gnbChange('active');}} type="button" title="사이트맵 열기">사이트맵</button>
            </h2>
        </header>
        <nav className={`nav ${gnbActive}`}>
          <div className="nav__inner">
            <h2 className="blind">글로벌 네비게이션</h2>
            <div>
              <h3 className="nav__button nav__button--main">
                  <Link to="/" role="button" title="메인으로 이동">Leica</Link>
              </h3>
              <button className="nav__button nav__button--close" type="button" title="사이트맵 닫기" onClick={() => {gnbChange('');}}>사이트맵 닫기</button>
            </div> 
            <ul className="nav__depth">
              <li className={`nav__depth--list ${ gnbDepth == 'product' && 'active'}`}>
                <button className="nav__button--list-open" onClick={() => {gnbDepth == 'product'? gnbDepthChange('') : gnbDepthChange('product')}} type="button" title="제품 메뉴 열기">Product</button>
                <ul className="nav__depth2">
                  <li>
                    <Link to="" className="nav__depth2-list-link" role="button" title="M10 제품 페이지 바로가기">M Series</Link>
                  </li>
                  <li>
                    <Link to="" className="nav__depth2-list-link" role="button" title="S3 제품 페이지 바로가기">S3 Series</Link>
                  </li>
                  <li>
                    <Link to="" className="nav__depth2-list-link" role="button" title="SL2 제품 페이지 바로가기">SL Series</Link>
                  </li>
                  <li>
                    <Link to="" className="nav__depth2-list-link" role="button" title="Q 제품 페이지 바로가기">Q Series</Link>
                  </li>
                  <li>
                    <Link to="" className="nav__depth2-list-link" role="button" title="V-LUX 제품 페이지 바로가기">V-LUX Series</Link>
                  </li>
                </ul>
              </li>
              <li className={`nav__depth--list ${ gnbDepth == 'academy' && 'active'}`}>
                <button className="nav__button--list-open" onClick={() => {gnbDepth == 'academy'? gnbDepthChange('') : gnbDepthChange('academy')}} type="button" title="아카데미 메뉴 열기">Academy</button>
                  <ul className="nav__depth2">
                    <li>
                      <Link to="" className="nav__depth2-list-link" role="button" title="아카데미 페이지 바로가기">Academy</Link>
                    </li>
                  </ul>
              </li>
              <li className={`nav__depth--list ${ gnbDepth == 'wwa' && 'active'}`}>
                <button className="nav__button--list-open" onClick={() => {gnbDepth == 'wwa'? gnbDepthChange('') : gnbDepthChange('wwa')}} type="button" title="기업 소개 메뉴 열기">Our Story</button>
                    <ul className="nav__depth2">
                      <li>
                      <Link to="" className="nav__depth2-list-link" role="button" title="기업 소개 바로가기">Who We Are</Link>
                      </li>
                    </ul>
              </li>
              <li className={`nav__depth--list ${ gnbDepth == 'store' && 'active'}`}>
                <button className="nav__button--list-open" onClick={() => {gnbDepth == 'store'? gnbDepthChange('') : gnbDepthChange('store')}} type="button" title="오프라인 매장 찾기 메뉴 열기">Find Store</button>
                <ul className="nav__depth2">
                  <li>
                    <Link to="" className="nav__depth2-list-link" role="button" title="청담 매장 바로가기">CheongDam Store</Link>
                  </li>
                  <li>
                    <Link to="" className="nav__depth2-list-link" role="button" title="강남 매장 바로가기">GangNam</Link>
                  </li>
                  <li>
                    <Link to="" className="nav__depth2-list-link" role="button" title="충무로 매장 바로가기">Chungmuro</Link>
                  </li>
                  <li>
                    <Link to="" className="nav__depth2-list-link" role="button" title="부산 매장 바로가기">Busan</Link>
                  </li>
                </ul>
              </li>
              <li className={`nav__depth--list ${ gnbDepth == 'support' && 'active'}`}>
                <button className="nav__button--list-open" onClick={() => {gnbDepth == 'support'? gnbDepthChange('') : gnbDepthChange('support')}} type="button" title="고객 지원 메뉴 열기">Support</button>
                  <ul className="nav__depth2">
                      <li>
                        <Link to="" className="nav__depth2-list-link" role="button" title="기업 소개 바로가기">Support</Link>
                      </li>
                  </ul>
              </li>
            </ul>
          </div>
        </nav>
    </>
  );
}

export default CommonHeader;