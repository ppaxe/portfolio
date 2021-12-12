import React, {memo} from 'react';
import styled from 'styled-components';


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

const ButtonWrap = styled.div`

    text-align: center;
    margin-top : 4rem;

    div{
        display: flex;
        overflow: hidden;
    }

`;

const CommonBtn = styled.button`

    cursor : pointer;
    display: inline-block;
    line-height: 58px;
    font-size: 2.4rem;
    color: ${props => props.theme.mainWhite};
    background: ${props => props.theme.mainBlue};
    border: 2px solid ${props => props.theme.mainBlack};
    border-radius: .5rem;
    padding: 0 5rem;
    text-decoration : none;
    margin: 0 auto;

    
    @media ${({theme}) => theme.deviceQuery.mobile}{
        display: block;
        width: 100%;
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


const Mobile = memo(function({userDevice}){

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
            React, HTML5, CSS3 (Styled-Components)
        </SubTitle>
        <ButtonWrap>
            <div>
            <CommonBtn type="button"
                        title="모바일 포트폴리오 새 창 열림"
                        onClick={ () => { return userDevice === 'pc' ? window.open('https://ppaxe.kr/mobile/','_blank','width=414, height=736') : window.open('https://ppaxe.kr/mobile/') } }
            >
            포트폴리오 보기
            </CommonBtn>
            </div>
        </ButtonWrap>
        </>
    );

})

export default Mobile;