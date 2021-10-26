import React from "react";
import styled, { keyframes } from "styled-components";

export default function NotFound() {

    const KeyframesMain = keyframes`

        0%{
            border-radius:50%;
            transform:translate(-50%, -50%) rotate(0deg);
        }

        25%{
            border-radius: 50% 20% / 10% 40%;
            transform:translate(-50%, -50%) rotate(90deg);
        }

        50%{
            border-radius: 50%;
            transform:translate(-50%, -50%) rotate(180deg);
        }

        75%{
            border-radius: 40% 10%; / 20% 50%
            transform:translate(-50%, -50%) rotate(270deg);
        }
        100%{
            border-radius:50%;
            transform:translate(-50%, -50%) rotate(360deg);
        }

    `;


    const StyledMain = styled.article`
    
        ${props => props.theme.isVh()};
        width:100vw;
        dispaly:block;
        overflow:hidden;

            .error__txt{

                padding: 1rem 2rem;
                display:block;
                font-size:2.4rem;
                text-align:center;
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50%, -50%);
                color: ${props => props.theme.mainBlack};
                line-height: 240%;


                &:before{
                    ${props => props.theme.isImagin};
                    width:70vw;
                    height:70vw;
                    max-width:500px;
                    max-height:500px;
                    background:${ props => props.theme.mainRed };
                    z-index: -1;
                    left:50%;
                    top:50%;
                    transform:translate(-50%, -50%) rotate(0deg);
                    animation: ${KeyframesMain} 3s linear forwards running infinite;
                }

                strong{
                    ${props => props.theme.isColor('black')};
                    font-size: 6.0rem;
                }

            }

        }

    `;


  return(

    <>
        <StyledMain>
            <div className="error__txt">
                Oops!<br />
                <strong>404</strong><br />
                Not Found.
            </div>
        </StyledMain>
    </>

  )
}