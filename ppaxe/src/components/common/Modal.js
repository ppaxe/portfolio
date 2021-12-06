import React, {memo, useState} from 'react';
import styled from 'styled-components';
import Profile from './../contents/Profile';
import Web from './../contents/Web';
import Mobile from './../contents/Mobile';
import Responsive from './../contents/Responsive';
import Contact from './../contents/Contact';
import Resume from './../contents/Resume';

const ModalWrap = styled.div`

        position: fixed;
        width: 90%; 
        ${({theme}) => theme.isVh(80) };
        background: ${ ({theme}) => theme.mainLGray };
        border-radius: 1rem;
        border: 2px solid ${ ({theme}) => theme.mainBlack };
        overflow: hidden;
        box-sizing : border-box;
        max-width: 980px; 
        max-height: 760px; 
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;

        @media ${ ({theme}) => theme.deviceQuery.mobile }{
            width: 100%;
            height: 100%;
            max-width: inherit;
            max-height: inherit;
            border-radius: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

`


const ModalTop = styled.div`
    
        position:relative;
        overflow:hidden;
        display: block;
        clear: both;
        height: auto;
        padding: 1rem;
        justify-content: space-between;
        border-bottom: 2px solid ${ ({theme}) => theme.mainBlack };
        box-sizing: border-box;

`;


const TopBtnWrap = styled.div`

overflow: hidden;
margin-right: 10px;
float: left;
display:flex;

`;

const ModalButton = styled.button`
    
position: relative;
width: 40px;
height: 40px;
margin-right: 10px;
display: block;
overflow: hidden;
text-indent : -9999rem;
color: transparent;
font-size: 0px;
border-radius: 50%;
box-sizing:border-box;
border: 2px solid ${ ({theme}) => theme.mainBlack };
cursor: pointer;

&:nth-of-type(1){
    background-color: ${({theme}) => theme.mainRed};

    &:before{
        transform:translate(-50%, -50%) rotate(45deg);
    }
    &:after{
        transform:translate(-50%, -50%) rotate(-45deg);
    }
}
&:nth-of-type(2){
    background-color: ${({theme}) => theme.mainYellow};
    &:before{
        transform:translate(-50%, -50%) rotate(90deg);
    }
    &:after{
        transform:translate(-50%, -50%) rotate(90deg);
    }
}
&:nth-of-type(3){
    background-color: ${({theme}) => theme.mainGreen};
    &:before{
        transform:translate(-50%, -50%); width: 20px; background: transparent; border : 2px solid #404040;
    }
    &:after{
        transform:translate(-50%, -50%); width: 20px; background: transparent; border : 2px solid #404040;
    }
}

&:before, &:after{

display:block;
content: '';
position: absolute;
top: 50%;
left: 50%;
border-radius: 1px;
width: 2px;
height: 20px;
background: ${ ({theme}) => theme.mainBlack };
box-sizing: border-box;


}

`;

const TopLocationWrap = styled.div`
    
        position: relative;
        float: right;
        height: 40px;
        width: calc(100% - 160px);
        text-align: right;

        @media ${ ({theme}) => theme.deviceQuery.mobile}{

            width: calc(100% - 60px);

        }

`;


const LocationBar = styled.p`
    
        display:inline-block;
        height: 100%;
        text-align: left;
        text-indent: 1.5rem;
        font-size: 1.6rem;
        line-height: 40px;
        border-radius: 20px;
        border: 2px solid ${ ({theme}) => theme.mainBlack };
        width: 100%;
        max-width: 400px;
        background: ${ ({theme}) => theme.mainWhite };

`;

const ModalSection = styled.div`

        position: relative;
        height: calc(100% - (40px + 6rem));
        background: ${({theme}) => theme.mainWhite};
        overflow-y: scroll;
        padding: 2rem;

`;


const Modal = memo(({content, param, setParam}) => {

    const [active, setActive] = useState(false);

    return(
        <>
            <ModalWrap>
                <ModalTop>
                    <TopBtnWrap>
                        <ModalButton onClick={() => { setParam(!param) }}>
                            팝업 닫기
                        </ModalButton>
                        <ModalButton>
                        </ModalButton>
                        <ModalButton onClick={() => { content.redirect() }}>
                        </ModalButton>
                    </TopBtnWrap>
                    <TopLocationWrap>
                        <LocationBar>
                            {content.kor}
                        </LocationBar>
                    </TopLocationWrap>
                </ModalTop>
                <ModalSection>
                        {
                            content.title === 'profile' ?
                                <Profile />
                            : content.title === 'web' ?
                                <Web />
                            : content.title === 'mobile' ? 
                                <Mobile />
                            : content.title === 'responsive' ? 
                                <Responsive />
                            : content.title === 'contact' ? 
                                <Contact />
                            : content.title === 'resume' ?
                                <Resume />
                            : false
                        }
                </ModalSection>
            </ModalWrap>
        </>
    )

})

export default Modal;