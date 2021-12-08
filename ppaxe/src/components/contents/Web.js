import React, {memo} from 'react';
import styled from 'styled-components';

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
    
const Web = memo(function(){

    return(
        <>
        <MainImg>
            <img src="https://ppaxe.kr/profile/contents/images/contents/profile_web_gif.gif" />
        </MainImg>
        <ButtonWrap>
            <ToLinkButton role="button" href="https://ppaxe.kr/web/" target="_blank" title="web 포트폴리오 새 창 열림">
                보기
            </ToLinkButton>
        </ButtonWrap>
        </>
    );

})

export default Web;