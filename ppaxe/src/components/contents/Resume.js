import React from 'react';
import styled from 'styled-components';

function Resume(){

    const MainTitle = styled.h2`
    
        font-size: 3.6rem;
        font-weight: 600;
        display:block;
        text-align: center; 
        padding: 6rem 0 2rem;
        line-height:160%;

    `;

    const SubTitle = styled.p`
    
        font-size: 2.4rem;
        text-align: center;
        line-height: 160%;
        margin-bottom: 4rem;

    `;

    const LabelText = styled.label`
    
    
    `;

    const InputText = styled.input.attrs({
        type:'text'
    })`
    
    
    `;

    const SubInfo = styled.div`
    
        padding: 2rem;
        background: ${props => props.theme.mainGray};
        border-radius: 1rem;
        margin: 2rem 0;
        font-size: 1.8rem;
        line-height: 160%;
        color: ${props => props.theme.mainBlack};

        strong{
            display:block;
            font-weight:600;
            font-size: 2.4rem;
            margin-bottom: 2rem;

        }

    `;
    
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
            <MainTitle>
                제 이력서를 받아주시겠어요?
            </MainTitle>
            <SubTitle>회사명을 말씀해주시면 바로 작성할게요!</SubTitle>
            <div>
                <LabelText>
                    <InputText>

                    </InputText>
                </LabelText>
            </div>
            <ButtonWrap>
                <ToLinkButton role="button" href="http://ppaxe.kr/web/" target="_blank" title="web 포트폴리오 새 창 열림">
                    이력서 받아보기
                </ToLinkButton>
            </ButtonWrap>
            <SubInfo>
                <strong>걱정 말아요!</strong>
                귀한 발걸음을 해주신 멋진 회사명에 맞춰 이력서를 작성할 뿐,<br />
                회사명은 어디에도 수집 및 제공되지 않아요!
            </SubInfo>
        </>
    );

}

export default Resume;