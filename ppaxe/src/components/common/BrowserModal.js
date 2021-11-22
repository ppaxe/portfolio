import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

function BrowserModal(props){

    // variables styled-components

    const Browser = styled.div`
    
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        max-width: 640px;
        ${ props => props.theme.isVh(100) };
        max-height: 640px;
        background: ${ props => props.theme.mainLGray };
        border-radius: 1rem;
        border: 2px solid ${ props => props.theme.mainBlack };
        overflow: hidden;

    `;

    const BrowserTop = styled.div`
    
        position:relative;
        overflow:hidden;
        display: flex;
        height: auto;
        padding: 1rem;
        justify-content: space-between;
        border-bottom: 2px solid ${ props => props.theme.mainBlack };
        box-sizing: border-box;

    `;

    const TopBtnWrap = styled.div`

        overflow: hidden;
        display:inline-block;
        margin-right: 10px;

    `;

    const CloseButton = styled.button`
    
        position: relative;
        width: 40px;
        height: 40px;
        background: transparent;
        display: block;
        overflow: hidden;
        text-indent : -9999rem;
        color: transparent;
        border-radius: 50%;
        box-sizing:border-box;
        border: 2px solid ${ props => props.theme.mainBlack };
        cursor: pointer;

        &:before, &:after{

            display:block;
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 1px;
            width: 2px;
            height: 20px;
            background: ${ props => props.theme.mainBlack };

        }
        &:before{

            transform:translate(-50%, -50%) rotate(45deg);

        }
        &:after{

            transform:translate(-50%, -50%) rotate(-45deg);

        }

    `;

    const TopLocationWrap = styled.div`
    
        position: relative;
        display: inline-block;
        height: 40px;

    `;

    const LocationBar = styled.input`
    
        display:block;
        height: 100%;
        border-radius: 20px;
        border: 2px solid ${ props => props.theme.mainBlack };
        width: 60vw;
        max-width: 400px;
        background: ${ props => props.theme.mainWhite };

    `;

    const BrowserSection = styled.div`

        position: relative;
        width: 100%;
        height: calc(100% - (40px + 2rem));
        background: ${props => props.theme.mainWhite};
    
    `;

    ;

    return(
        <>
            <Browser>
                <BrowserTop>
                    <TopBtnWrap>
                        <CloseButton type="button" title="팝업 닫기" onClick={ () => { props.setClose(false) } }>
                            닫기
                        </CloseButton>
                    </TopBtnWrap>
                    <TopLocationWrap>
                        <label>
                            <LocationBar type="text" title="주소창 입력" />
                        </label>
                    </TopLocationWrap>
                </BrowserTop>
                <BrowserSection>

                </BrowserSection>
            </Browser>
        </>
    )

}

export default BrowserModal;