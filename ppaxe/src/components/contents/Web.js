import React, {memo} from 'react';
import styled from 'styled-components';
import CommonButton from './../common/CommonButton';

const MainImg = styled.div`
    
        display:block;
        overflow: hidden;
        border: 2px solid ${props => props.theme.mainBlack};
        box-sizing:border-box;

        img{
            max-width: 100%;
            width: 100%;
            display: block;
        }

`;

const MainTitle = styled.h2`

    font-size: 3.2rem;
    font-weight: 600;
    display:block;
    text-align: center; 
    padding: 6rem 0 2rem;
    line-height:160%;

`;

const SubTitle = styled.p`

font-size: 2.0rem;
text-align: center;
line-height: 160%;
margin-bottom: 4rem;

`;
    
const Web = memo(function(){

    return(
        <>
        <MainImg>
            <img src="https://ppaxe.kr/profile/contents/images/contents/profile_web_gif.gif" alt="web 포트폴리오" />
        </MainImg>
        <MainTitle>
            사용 기술
        </MainTitle>
        <SubTitle>
            HTML5, CSS3 (SCSS), javaScript(es6)
        </SubTitle>
        <CommonButton params={{
                type : 'link',
                link : 'https://ppaxe.kr/web/',
                title : '포트폴리오 새 창 열림',
                text : '포트폴리오 보기'
        }} />
        </>
    );

})

export default Web;