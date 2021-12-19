import React, {useState} from 'react';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import { debounce } from 'lodash';

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

const InputTextWrap = styled.div`

    display: block;
    position: relative;
    margin-top: 4rem;
    padding: 0 2rem;

    input{
        
        position:relative;
        outline:none;
        border: 2px solid ${({theme}) => theme.mainBlack};
        border-width: 0 0 2px 0;
        background: transparent;
        display:block;
        line-height:6rem;
        width:100%;
        height:auto;
        top:0;
        left:0;
        font-size: 2.0rem;
        text-indent: 2rem;
        transition: .5s ease;
        border-radius: 0;

        &:focus, &:active{

            ~label{

                top: -4rem;
                font-size: 1.6rem;
                color: ${({theme}) => theme.mainDGray}

            }
        
        }

        &:valid{

            border-color: ${({theme}) => theme.mainBlue};
            
            ~label{

                top: -4rem;
                font-size: 1.6rem;
                color: ${({theme}) => theme.mainBlue}

            }

        }
    }
    label{
        position:absolute;
        display:block;
        top:0;
        left: 4rem;
        width:${({theme}) => theme.mainBlue};
        font-weight:600;
        font-size: 2.0rem;
        line-height:6rem;
        transition: .5s ease;

    }

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

const Resume = () => {

    // on Key UP Sound Fn Start

    const [keyUpSound, setKeyUpSound] = useState(new Audio('https://ppaxe.kr/profile/contents/sound/sound_typing.mp3'));

    // on Key Up Sound Fn End

    return(
        <>
            <MainTitle>
                제 이력서를 받아주시겠어요?
            </MainTitle>
            <SubTitle>아래에 회사명을 말씀해주시면 바로 작성할게요!</SubTitle>
            <form>
                <InputTextWrap>
                    <input type="text"
                    onKeyDown={ (e) => { 

                        keyUpSound.play();

                    }}
                    onKeyUp={ (e) => { 
                      
                        keyUpSound.pause();

                    } }
                    id="companyName"
                    name="companyName"
                    required />
                    <label htmlFor="companyName">
                        나와 만날 회사 이름은
                    </label>
                </InputTextWrap>
                <CommonButton params={{
                    type : 'submit',
                    title : '이력서 새 창 열림',
                    link : 'https://ppaxe.kr/web',
                    text : '이력서 보기'
                }} />
            </form>
            <SubInfo>
                <h4>걱정 말아요!</h4>
                귀한 발걸음을 해주신 멋진 회사명에 맞춤형 이력서를 작성할 뿐,<br />
                <strong>회사명은 어디에도 수집·이용 및 제공되지 않아요!</strong>
            </SubInfo>
        </>
    );

};

export default Resume;