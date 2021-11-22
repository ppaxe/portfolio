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
        max-width: 980px;
        ${ props => props.theme.isVh(80) };
        max-height: 760px;
        background: ${ props => props.theme.mainLGray };
        border-radius: 1rem;
        border: 2px solid ${ props => props.theme.mainBlack };
        overflow: hidden;

    `;

    const BrowserTop = styled.div`
    
        position:relative;
        overflow:hidden;
        /* display: flex; */
        display: block;
        clear: both;
        height: auto;
        padding: 1rem;
        justify-content: space-between;
        border-bottom: 2px solid ${ props => props.theme.mainBlack };
        box-sizing: border-box;

    `;

    const TopBtnWrap = styled.div`

        overflow: hidden;
        margin-right: 10px;
        float: left;
        display:flex;

    `;

    const BrowserButton = styled.button`
    
        position: relative;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        background: ${ 
        props => props.action === 'close' ?
            props.theme.mainRed : 
            props.action === 'minim' ? props.theme.mainYellow :
            props.theme.mainGreen
        };
        display: block;
        overflow: hidden;
        text-indent : -9999rem;
        color: transparent;
        border-radius: 50%;
        box-sizing:border-box;
        border: 2px solid ${ props => props.theme.mainBlack };
        cursor: pointer;

        &:last-of-type{
            margin: none;
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
            background: ${ props => props.theme.mainBlack };
            box-sizing: border-box;
        }
        &:before{
            
            ${
                props => props.action === 'close' ?
                'transform:translate(-50%, -50%) rotate(45deg)' :
                props.action === 'minim' ?
                'transform:translate(-50%, -50%) rotate(90deg)' :
                'transform:translate(-50%, -50%); width: 20px; background: transparent; border : 2px solid #404040'
            }
        }
        &:after{

            ${
                props => props.action === 'close' ?
                'transform:translate(-50%, -50%) rotate(-45deg)' :
                props.action === 'minim' ?
                'transform:translate(-50%, -50%) rotate(90deg)' :
                'transform:translate(-50%, -50%); width: 20px; background: transparent; border : 2px solid #404040'
            }

        }

    `;

    const TopLocationWrap = styled.div`
    
        position: relative;
        float: right;
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
                        <BrowserButton type="button" title="팝업 닫기" onClick={() => { props.setClose(false) }} action="close" >
                            팝업 닫기
                        </BrowserButton>
                        <BrowserButton type="button" title="팝업 최소화" onClick={() => { }} action="minim">
                           팝업 최소화
                        </BrowserButton>
                        <BrowserButton type="button" title="팝업 최대화" onClick={() => { }} action="maxim">
                            팝업 최대화
                        </BrowserButton>
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