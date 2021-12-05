import React, {memo, useContext} from 'react';
import styled from 'styled-components';
import { Data, User } from './../../utils/Data';
import ActiveApp from './ActiveApp';

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
border: 2px solid ${props => props.theme.mainBlack};
background: ${ props => props.theme.mainLGray };
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

@media ${props => props.theme.deviceQuery.mobile}{

    width: 90vw;
    height: 100px;

}

`;


const Docks = memo(function(props){

    return(
        <>
            <DocksWrap>
                <ul>
                    {
                        Data.siteMaps.map((element,index) =>{
                            
                            return(
                            <li key={ index }>
                                    <ActiveApp index={ index } title={ element.title } />
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