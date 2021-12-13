import React from "react";
import styled, { keyframes } from "styled-components";

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

${ ({theme}) => theme.isVh()};
width:100vw;
display:block;
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
        color: ${ ({theme}) => theme.mainBlack};
        line-height: 240%;


        &:before{
            ${ ({theme}) => theme.isImagin};
            width:70vw;
            height:70vw;
            max-width:500px;
            max-height:500px;
            background:${ ({theme}) => theme.mainRed };
            z-index: -1;
            left:50%;
            top:50%;
            transform:translate(-50%, -50%) rotate(0deg);
            animation: ${KeyframesMain} 3s linear forwards running infinite;
        }

        strong{
            ${ ({theme}) => theme.isColor('black')};
            font-size: 6.0rem;
        }

    }

}

`;

export default function NotFound() {

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