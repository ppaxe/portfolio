// eslint-disable-next-line

// ================================================================

// Button js

// Author : 박세연

// Summary : Props를 받아 공통적인 버튼 UI를 생성한다. props는 배열로 전달받으며, type에 따라 link와 button으로 내보낸다.

// Reporting Date : 2021.12.12

// Update : 

// ================================================================


import React, { memo } from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.div`

    text-align: center;
    margin-top : 4rem;

    div{
        display: flex;
        overflow: hidden;
    }

`;

const CommonBtn = styled.button`

    cursor : pointer;
    display: inline-block;
    line-height: 58px;
    font-size: 2.4rem;
    color: ${props => props.theme.mainWhite};
    background: ${props => props.theme.mainBlue};
    border: 2px solid ${props => props.theme.mainBlack};
    border-radius: .5rem;
    padding: 0 5rem;
    text-decoration : none;
    margin: 0 auto;

    @media ${({theme}) => theme.deviceQuery.mobile}{
        display: block;
        width: 100%;
    }

`;

const CommonLink = styled.a`
 
    cursor : pointer;
    display: inline-block;
    line-height: 58px;
    font-size: 2.4rem;
    color: ${props => props.theme.mainWhite};
    background: ${props => props.theme.mainBlue};
    border: 2px solid ${props => props.theme.mainBlack};
    border-radius: .5rem;
    padding: 0 5rem;
    text-decoration : none;
    margin: 0 auto;
    
    @media ${({theme}) => theme.deviceQuery.mobile}{
        display: block;
        width: 100%;
    }

`;

const CommonButton = memo(({params}) => {


    return(
        

        <>
            <ButtonWrap>
                <div>
                    {
                        params.type === 'button' ? 
                        <CommonBtn type="button"
                                      title={ params.title }
                                      onClick={ () => { return params.onFunction } }
                        >
                            { params.text }
                        </CommonBtn> :
                        <CommonLink role="button"
                                    title={ params.title }
                                    href={ params.link }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                            { params.text }
                        </CommonLink>
                    }
                </div>
            </ButtonWrap>
        </>
    )
})

export default CommonButton