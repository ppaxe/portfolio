import React, {memo} from 'react';
import styled from 'styled-components';

const Mobile = memo(function(){

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

    `
    
    const ButtonWrap = styled.div`
    
        text-align: center;
        margin-top : 4rem;

    `;

    const ToLinkButton = styled.a`
         
        cursor : pointer;
        display: inline-block;
        line-height: 58px;
        font-size: 2.4rem;
        color: ${props => props.theme.mainWhite};
        background: ${props => props.theme.mainBlue};
        border: 2px solid ${props => props.theme.mainBlack};
        border-radius: .5rem;
        padding: 0 10rem;
        text-decoration : none;

    `;

    return(
        <>
        <MainImg>
            <MainContent>
                <img src="https://ppaxe.kr/profile/contents/images/contents/profile_mobile_gif.gif" alt="모바일 포트폴리오 미리보기" />
            </MainContent>
        </MainImg>
        <ButtonWrap>
            <ToLinkButton role="button" href="https://ppaxe.kr/web/" target="_blank" title="web 포트폴리오 새 창 열림">
                보기
            </ToLinkButton>
        </ButtonWrap>
        </>
    );

})

export default Mobile;