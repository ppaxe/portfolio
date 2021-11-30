import React from 'react';
import styled from 'styled-components';


function SubApps(){

    const SubAppsWrap = styled.div`
    
        display: block;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 50%;
        padding: 6rem 1rem;
        transform: translateX(-50%);
        width: 100%;
        max-width:1200px;

    `

    const SubAppsFlex = styled.ul`
    
        position:relative;
        margin-top:10%;
        width:100%;
        display:block;
        height:100%;
        display:flex;
        justify-content: right;
    
    `;

    const AppsButton = styled.button.attrs({
        type:'button'
    })`
    
        border: none;
        display: block;
        width: 100%;
        height: 100%;
        cursor: pointer;
        text-align: center;
        background: transparent;
        position: relative;
        margin: 5px;

        i{
            
            display: inline-block;
            width: 100px;
            height: 100px;
            background: url('http://ppaxe.kr/profile/contents/images/common/nav_icon.png') center center no-repeat;
            background-size: auto 100px;
            background-position: -${ props => props.position * 100}px 0;

            @media ${ props => props.theme.deviceQuery.tablet }{

                width: 80px;
                height: 80px;
                background-size: auto 80px;
                background-position: -${ props => props.position * 80}px 0;
            }
        }
        

        p{
            font-size: 1.8rem;

            font-weight : 500;
            ${
                props => props.active &&
                `color : ${props.theme.mainBlue}; font-weight: bold;`
            }

            @media ${ props => props.theme.deviceQuery.tablet}{
                color: ${ props => props.theme.mainWhite };
            }
        }

    `;


    return(
        <>

            <SubAppsWrap>

                <SubAppsFlex>

                    <li>
                        <AppsButton position={6}>
                            <i aria-hidden="true"></i>
                            <p>Music</p>
                        </AppsButton>
                    </li>

                </SubAppsFlex>

            </SubAppsWrap>

        </>
    )

}

export default SubApps;