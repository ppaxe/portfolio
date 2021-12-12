import React, {memo} from 'react';
import styled from 'styled-components';
import CommonButton from './../common/CommonButton';


const MainImg = styled.div`
    
display:block;
border: 2px solid ${props => props.theme.mainBlack};
box-sizing:border-box;
background: url('https://ppaxe.kr/profile/contents/images/contents/profile_mobile_background.png') center center no-repeat;
background-size: cover;
padding: 6rem 0;

`

const MainContent = styled.div`

position: relative;
z-index:1;
display:block;
width: 300px;
height: 580px;
margin: 0 auto;

&:after{

    content: '';
    display:block;
    width: 100%;
    height:100%;
    position: absolute;
    background: url('https://ppaxe.kr/profile/contents/images/contents/profile_mobile_contents.png') center center no-repeat;
    background-size: cover;
    
}

img{
    width:245px;
    display:block;
    margin: 0 auto;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    border-radius: 3rem;
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


const Responsive = memo(function({userDevice}){

    return(
        <>
        <MainImg>
            <MainContent>
                <img src="https://ppaxe.kr/profile/contents/images/contents/profile_mobile_gif.gif" alt="모바일 포트폴리오 미리보기" />
            </MainContent>
        </MainImg>
        <MainTitle>
            사용 기술
        </MainTitle>
        <SubTitle>
            HTML5, CSS3, javaScript(jQuery)
        </SubTitle>
        <CommonButton params={{
                type : 'link',
                link : 'https://ppaxe.kr/responsive/',
                title : '포트폴리오 새 창 열림',
                text : '포트폴리오 보기'
        }} />
        </>
    );

})

export default Responsive;