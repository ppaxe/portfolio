// eslint-disable-next-line

// ================================================================

// Docks js

// Author : 박세연

// Summary : 공통 하위 앱 컨테이너. CommonContext.common의 인덱스 수에 맞춰 map으로 ActiveApp 컴포넌트를 호출한다.

// Reporting Date : 2021.12.12

// Update : 

// ================================================================


import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { CommonContext } from './../../screens/Container';
import ActiveApp from './ActiveApp';

const DocksWrap = styled.nav`
    
display:block;
position: fixed;
bottom: 2rem;
left: 50%;
transform: translateX(-50%);
width: 80vw;
max-width: 920px;
height: 160px;
z-index: 9999;
border-radius: 3rem;
border: 2px solid ${({theme}) => theme.mainBlack};
background: ${ ({theme}) => theme.mainLGray };
box-sizing: border-box;
padding: 1rem 2rem 2rem;

ul{
    display: flex;
    width: 100%;

    li{
        width: 100%;
        text-align: center;
    }
}

@media ${({theme}) => theme.deviceQuery.tablet}{

    position: relative;
    padding: 8rem 2rem;
    left: 0;
    transform: inherit;
    margin: 0 auto;
    width: auto;
    height: auto;
    background: transparent;
    border: inherit;

    ul{
        justify-content: space-between;
        flex-wrap: wrap;

        li{
            display: block;
            width: auto;
            padding: 1rem .5rem;
        }
    }

}

`;

const Docks = memo(function(){

    const commonContext = useContext(CommonContext);

    return(
        <>
            <DocksWrap>

                <ul>
                    {
                        commonContext.common.map((element,index) =>{
                            
                            return(
                            <li key={ index }>
                                    <ActiveApp index={ index }  />
                            </li>
                            )
                        })
                    }
                </ul>
                
            </DocksWrap>

        </>
    )

});

export default Docks;