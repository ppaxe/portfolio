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

const ContactList = styled.ul`

    display: block;
    overflow: hidden;

    li{
        display:block;
        /* padding: 2rem 0; */
        margin: 2rem 0;

        &:first-of-type{

            a:before{
                background-position: 0px 0px;
            }

            a:hover:before{
                background-position: 0px -50px;
            }
        }

        &:last-of-type{

            a:before{
                background-position: -50px 0px;
            }
            a:hover:before{
                background-position: -50px -50px;
            }
        }


        a{
            position: relative;
            display:block;
            padding: 20px 20px 20px 70px;
            font-size: 1.8rem;
            text-decoration: none;
            color: ${({theme}) => theme.mainBlue};
            border-radius:5px;

            &:before{
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translateY(-50%);
                width: 50px;
                height: 50px;
                background: url('https://ppaxe.kr/profile/contents/images/contents/content_icon.png') 0 0 no-repeat;
                background-size: auto 100px;
            }

            strong{
                display:block;
                font-weight: 600;
                font-size: 2.0rem;
                margin-bottom: 1.5rem;
                color: ${({theme}) => theme.mainBlack};
            }

            &:hover{
                background: ${({theme}) => theme.mainLGray};
            }
        }
    }

`;


function Contact(){

    return(
        <>
            <MainTitle>당신의 연락은 언제든 환영이에요!</MainTitle>
            <SubTitle>아래의 연락처로 연락주세요, 기다리고 있을게요.</SubTitle>
            <ContactList>
                    <li>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=parkart9911@gmail.com" target="_blank" role="button" rel="noreferrer" title="이메일 새 창 열림">
                        <strong>이--메일</strong>
                        parkart9911@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:010-9911-1230" rel="noreferrer" role="button" title="전화 걸기">
                        <strong>핸---드폰</strong>
                        010-9911-1230
                        </a>
                    </li>
            </ContactList>
        </>
    );

}

export default Contact;