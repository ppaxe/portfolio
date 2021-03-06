// eslint-disable-next-line

// ================================================================

// Modal js

// Author : 박세연

// Summary : WallPaper 하위 모달 팝업. CommonContext[index].common.active 값에 따라 작용한다.

// Reporting Date : 2021.12.12

// Update : 

// ================================================================

import React, {memo, useState, useRef, useContext} from 'react';
import styled from 'styled-components';
import { CommonContext } from './../../screens/Container';
import Draggable from 'react-draggable';
import Profile from './../contents/Profile';
import Web from './../contents/Web';
import Mobile from './../contents/Mobile';
import Responsive from './../contents/Responsive';
import Contact from './../contents/Contact';
import Resume from './../contents/Resume';

const ModalWrap = styled.article`

        position: fixed;
        width: 90%; 
        height: 80vh;
        background: ${ ({theme}) => theme.mainLGray };
        border-radius: 1rem;
        border: 2px solid ${ ({theme}) => theme.mainBlack };
        overflow: hidden;
        box-sizing : border-box;
        max-width: 980px; 
        max-height: 760px; 
        transform: translate(calc(-50% + ${({dragPosition}) => dragPosition.x}px), calc(-50% + ${({dragPosition}) => dragPosition.y}px)) !important;
        top: calc(50% + ${ ({zIndexer}) => zIndexer * 62}px);
        left: calc(50% + ${ ({zIndexer}) => zIndexer * 62}px);
        z-index: ${ ({zIndexer}) => 9999 + zIndexer};

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
            display: none;
        }
        &:after{
            transform:translate(-50%, -50%) rotate(90deg);
            display: none;
        }
        @media ${({theme}) => theme.deviceQuery.mobile}{
            display: none;
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
        @media ${({theme}) => theme.deviceQuery.mobile}{
            display: none;
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


const Modal = memo(({index}) => {

    const commonContext = useContext(CommonContext);

    // Modal - Close Fn Start
    const modalClose = () => {

        let returnState = [...commonContext.common];
        returnState[index].active = !returnState[index].active;
        commonContext.setModalIndex(( commonContext.modalIndex - 1 ));
        commonContext.setCommon(returnState);

    }
    // Modal - Close Fn End

    // Modal - Drag Fn Start

    const [position, setPosition] = useState({ x: 0, y: 0 }),
          dragModal = useRef(null),
          [isDrag,  setIsDrag] = useState( 9999 + commonContext.modalIndex );

    const trackPos = (e, data) => {
        
        setPosition({ x: data.x, y: data.y }) ;

    };

    const setDragZIndex = () => {

        setIsDrag(isDrag + 1);
        
        dragModal.current.style.zIndex = (isDrag + 2);

    }

    const mobileCheck = () => {

        return commonContext.userDevice === 'pc' ? false : true

    }

    // Modal - Drag Fn End


    return(
        <>
        <Draggable
                onDrag={ (e, data) => 
                    trackPos(e, data)
                }
                onStart={ () => 
                    setDragZIndex()
                }
                handle="#dragHandler"
                disabled={mobileCheck()}
            > 
            <ModalWrap 
                zIndexer={ commonContext.common[index].zIndex }

                dragPosition={ position }

                ref={ dragModal }
            >
                <h4 className="blind">팝업</h4>
                <ModalTop id="dragHandler">
                    <TopBtnWrap>
                        <ModalButton 
                                onClick={(e) => {  modalClose(); } } 
                                title="팝업 닫기"
                                type="button"
                        >
                            팝업 닫기
                        </ModalButton>
                        <ModalButton
                            aria-hidden="true"
                            type="button"
                        />
                        <ModalButton 
                                onClick={(e) => { commonContext.common[index].redirect(commonContext.userDevice) }}
                                title="새 창 열림"
                                type="button"
                            >
                            새 창 열기
                        </ModalButton>
                    </TopBtnWrap>
                    <TopLocationWrap>
                        <LocationBar>
                           { commonContext.common[index].kor }
                        </LocationBar>
                    </TopLocationWrap>
                </ModalTop>
                <ModalSection>
                    {
                        index === 0 ?
                        <Profile /> :
                        index === 1 ?
                        <Web userDevice={commonContext.userDevice} /> :
                        index === 2 ?
                        <Mobile userDevice={commonContext.userDevice} /> :
                        index === 3 ?
                        <Responsive /> :
                        index === 4 ?
                        <Contact userDevice={commonContext.userDevice} /> :
                        index === 5 ?
                        <Resume job={ commonContext.fromSite } /> :
                        false
                    }
                </ModalSection>
            </ModalWrap>
        </Draggable>
        </>
    )

})

export default Modal;