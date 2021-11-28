import React, {memo} from 'react';
import styled from 'styled-components';

const Mobile = memo(function(){

    const MainImg = styled.div`
    
        display:block;
        overflow: hidden;
        border: 2px solid ${props => props.theme.mainBlack};
        box-sizing:border-box;

    `

    const MainContents = styled.div`

        display:block;
        overflow: hidden;

        img{
            max-width:100%;
        }
        
    `;

    const ButtonWrap = styled.div`
    
        text-align: center;
        margin-top : 4rem;

    `;

    const ToLinkButton = styled.button`
         
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
            <MainContents>
                <img src="http://ppaxe.kr/profile/contents/images/contents/profile_mobile_gif.gif" alt="mobile 포트폴리오 이미지" />
            </MainContents>
        </MainImg>
        <ButtonWrap>
            <ToLinkButton type="button" onClick={ () => window.open('http://ppaxe.kr/mobile/','_blank','width=414, height=736') } title="mobile 포트폴리오 새 창 열림">
                보기
            </ToLinkButton>
        </ButtonWrap>
        </>
    );

})

export default Mobile;