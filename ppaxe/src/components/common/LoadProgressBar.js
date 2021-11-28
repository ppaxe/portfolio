import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

function LoadProgressBar(props){

    const [percent, setPercent] = useState(0);


    const LoaderWrap = styled.div`
    
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        z-index: 9999;
        background: ${ props=> props.theme.mainBlue };
        overflow:hidden;

        section{

            position: absolute;
            display:block;
            top:50%;
            left:50%;
            width: 80vw;
            max-width: 600px;
            text-align: center;
            transform: translate(-50%, -50%);
            /* border-radius: 20px; */
            /* padding: 1rem; */
            /* border: 2px solid ${props=> props.theme.mainBlack}; */

        }

        p{
            margin-top: 2rem;
            font-size: 2.4rem;
            font-weight: 400;
            color: ${ props => props.theme.mainGreen };
        }

    `;

    const LoaderBar = styled.div`


        position: relative;
        width: 100%;
        height: 40px;
        border: 2px solid ${props => props.theme.mainBlack};
        border-radius : 20px;
        overflow: hidden;

        &:before{
            position:absolute;
            content: '';
            display: block;
            overflow: hidden;
            top: 0;
            left: 0;
            width: ${props => props.percentage}%;
            height:100%;
            background : ${ props => props.theme.mainBlack };
        }

    `;

    const setLoader = () => {

        if(percent < 100){
        
        let loadPer = percent;

        setPercent(loadPer++);

        console.log(percent);

        }else{

            localStorage.setItem('USER_LOADER','DONE');

        }

    }

    useEffect(() => {

        setInterval(setLoader, 10);

    })

    return(
        <>
            <LoaderWrap>
                <section>
                    <LoaderBar percentage={ percent } />
                    <p>기깔난 포트폴리오 불러오는 중인 듯</p>
                </section>
            </LoaderWrap>
        </>
    )

}

export default LoadProgressBar;