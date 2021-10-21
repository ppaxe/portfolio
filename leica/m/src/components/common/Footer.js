// eslint-disable-next-line

import styled from 'styled-components';

const StyledFooter = styled.footer`

  display:block;
  background:#111;

`;

const StyledFooterInner = styled.div`

  position:relative;
  overflow:hidden;
  padding: 4rem 2rem;
  text-align:center;
  color: #fff;

  h2{
    text-indent: -9999rem;
    color: transparent;
    overflow: hidden;
    display: inline-block;
    width: 120px;
    height: 60px;
    background: url(http://ppaxe.kr/pc/contents/images/common/footer_logo.png) center center no-repeat;
    background-size: auto 60px;
    margin-bottom: 2rem;
  }

  ul{
    padding: 2rem 0;
    border: 2px solid #ffffff;
    border-width: 2px 0 2px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 200px;
    margin: 2rem auto;
    justify-content: space-around;
  }

`;


const StyledSnsLink = styled.a.attrs({
    target: '_blank',
    role: 'button'
})`

    text-indent: -9999rem;
    color: transparent;
    overflow: hidden;
    width: 40px;
    height: 40px;
    display: block;
    background: url(http://ppaxe.kr/pc/contents/images/common/footer_sns.png) center center no-repeat;
    background-size: auto 40px;
    background-position:${props => props.position}

`;

function Footer() {
  return (

    <>
      <StyledFooter>
          <StyledFooterInner>
              <h2>Leica</h2>
              <p>LEICA CAMERA KOREA</p>
              <ul>
                <li>
                  <StyledSnsLink href="https://www.instagram.com/leica_kr/" title="인스타그램 바로가기" position="0px 0">
                    인스타그램
                  </StyledSnsLink>
                </li>
                <li>
                  <StyledSnsLink href="https://www.facebook.com/LeicaCameraKr" title="페이스북 바로가기" position="-40px 0">
                    페이스북
                  </StyledSnsLink>
                </li>
                <li>
                  <StyledSnsLink href="https://www.instagram.com/ppaxe/" title="트위터 바로가기" position="-80px 0">
                    트위터
                  </StyledSnsLink>
                </li>
                <li>
                  <StyledSnsLink href="https://www.youtube.com/user/Mrleicacamera" title="유튜브 바로가기" position="-120px 0">
                    유튜브
                  </StyledSnsLink>
                </li>
              </ul>
              <p><strong>CEO</strong> : Sunil Kaul</p>
              <p><strong>ADDRESS</strong> : 208, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea | <strong>CRN</strong> : 211-88-55103 | <strong>TEL</strong> : 1661-0405</p>
          </StyledFooterInner>
      </StyledFooter>
    </>

  );
}

export default Footer;
