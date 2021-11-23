import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Data from './../../utils/Data';

function BrowserModal(props){


    const [ viewSizing, setViewSizing ] = useState(false);

    // variables styled-components

    const Browser = styled.div`
    
        position: fixed;
        max-width: 980px; 
        width: 90%; 
        max-height: 760px; 
        ${ props => props.theme.isVh(80) };
        background: ${ props => props.theme.mainLGray };
        border-radius: 1rem;
        border: 2px solid ${ props => props.theme.mainBlack };
        overflow: hidden;
        box-sizing : border-box;

        ${
            props => viewSizing === 'max' ?
            `width: 100%; height: 100%; max-width: inherit; max-height: inherit;` :
            viewSizing === 'mini' ?
            `max-width: 480px; max-height: 60px; transform: inherit; right: 2rem; bottom: 25%;` :
            `top: 50%; left: 50%; transform: translate(-50%, -50%);`
        }

        @media ${ props => props.theme.deviceQuery.mobile }{

            width: 100%;
            height: 100%;
            max-width: inherit;
            max-height: inherit;
            border-radius: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

        }

    `;

    const BrowserTop = styled.div`
    
        position:relative;
        overflow:hidden;
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
                'transform:translate(-50%, -50%); width: 20px; background: transparent; border : 2px solid #404040;'
            }
        }
        &:after{

            ${
                props => props.action === 'close' ?
                'transform:translate(-50%, -50%) rotate(-45deg)' :
                props.action === 'minim' ?
                'transform:translate(-50%, -50%) rotate(90deg)' :
                'transform:translate(-50%, -50%); width: 20px; background: transparent; border : 2px solid #404040;'
            }

        }

    `;

    const TopLocationWrap = styled.div`
    
        position: relative;
        float: right;
        height: 40px;
        width: calc(100% - 160px);
        text-align: right;

    `;

    const LocationBar = styled.input`
    
        display:inline-block;
        height: 100%;
        border-radius: 20px;
        border: 2px solid ${ props => props.theme.mainBlack };
        width: 100%;
        max-width: 400px;
        background: ${ props => props.theme.mainWhite };
    `;

    const BrowserSection = styled.div`

        position: relative;
        width: 100%;
        height: calc(100% - (40px + 2rem));
        background: ${props => props.theme.mainWhite};
        overflow-y: scroll;

    `;

    ;

    return(
        <>
            <Browser>
                <BrowserTop>
                    <TopBtnWrap>
                        <BrowserButton type="button" title="팝업 닫기" onClick={() => { props.setClose(false); }} action="close" >
                            팝업 닫기
                        </BrowserButton>
                        <BrowserButton type="button" title="팝업 최소화" onClick={() => { viewSizing !== 'mini' ? setViewSizing('mini') : setViewSizing(false); }} action="minim">
                           팝업 최소화
                        </BrowserButton>
                        <BrowserButton type="button" title="팝업 최대화" onClick={() => { viewSizing !== 'max' ? setViewSizing('max') : setViewSizing(false); }} action="maxim">
                            팝업 최대화
                        </BrowserButton>
                    </TopBtnWrap> 
                    <TopLocationWrap>
                        <label>
                            <LocationBar type="text" title="주소창 입력" value="" />
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