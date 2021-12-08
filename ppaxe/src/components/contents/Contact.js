import React from 'react';
import styled from 'styled-components';

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

const ContactList = styled.dl`

display:block;
overflow:hidden;
font-size: 2rem;

dt{
    margin-bottom: 2rem;
    font-weight: 600;
}
dd{
    a{
        text-decoration: none;
        color: ${props => props.theme.mainBlack};
    }
 
    &+dt{
        margin-top: 4rem;
    }
}

`;


function Contact(){

    return(
        <>
            <MainTitle>당신의 연락은 언제든 환영이에요!</MainTitle>
            <SubTitle>아래의 연락처로 연락주세요, 기다리고 있을게요.</SubTitle>
            <ContactList>
                <dt>이-메일</dt>
                <dd>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=parkart9911@gmail.com" target="_blank" rel="noreferrer">parkart9911@gmail.com</a>
                </dd>
                <dt>핸-드폰</dt>
                <dd>
                    <a href="tel:010-9911-1230">010-9911-1230</a>
                </dd>
            </ContactList>
        </>
    );

}

export default Contact;