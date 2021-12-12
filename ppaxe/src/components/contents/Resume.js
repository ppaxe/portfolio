import React from 'react';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';

const MainTitle = styled.h2`
    
font-size: 3.0rem;
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

const LabelText = styled.label`


`;

const InputText = styled.input.attrs({
type:'text'
})`


`;

const SubInfo = styled.div`

position: relative;
padding: 20px 20px 20px 60px;
background: ${props => props.theme.mainLGray};
border-radius: 1rem;
margin: 20px 0;
font-size: 1.4rem;
line-height: 160%;
color: ${props => props.theme.mainBlack};

h4{
    display:block;
    font-weight:600;
    font-size: 2.0rem;
    margin-bottom: 2rem;

}

strong{
    color:${({theme}) => theme.mainBlue};
    font-weight:600;
    text-decoration:underline;
}

&:before{
    content: '';
    position: absolute;
    display:block;
    top:15px;
    left:15px;
    width:40px;
    height:40px;
    background: url('https://ppaxe.kr/profile/contents/images/contents/content_icon.png') 0 0 no-repeat;
    background-size: auto 80px;
    background-position: -80px 0;

}
`;

function Resume(){
    
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
            <CommonButton params={{
                type : 'link',
                title : '이력서 새 창 열림',
                link : 'https://ppaxe.kr/web',
                text : '이력서 보기'
            }} />
            <SubInfo>
                <h4>걱정 말아요!</h4>
                귀한 발걸음을 해주신 멋진 회사명에 맞춤형 이력서를 작성할 뿐,<br />
                <strong>회사명은 어디에도 수집·이용 및 제공되지 않아요!</strong>
            </SubInfo>
        </>
    );

}

export default Resume;