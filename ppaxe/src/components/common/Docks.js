import React, {memo, useContext} from 'react';
import styled from 'styled-components';
import ActiveApp from './ActiveApp';
import {AppsContext} from './../../screens/Screens';

const DocksWrap = styled.nav`
    
display:flex;
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

@media ${({theme}) => theme.deviceQuery.mobile}{

    width: 90vw;
    height: 100px;

}

`;

const Docks = memo(function(){

    const activeContext = useContext(AppsContext);

    return(
        <>
            <DocksWrap>

                <ul>
                    {
                        activeContext.apps.map((element,index) =>{
                            
                            return(
                            <li key={ index }>
                                    <ActiveApp index={ index } param={ activeContext.apps } setParam={ activeContext.setApps } zIndexer={ activeContext.zIndexer } setZIndexer={ activeContext.setZIndexer }  />
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