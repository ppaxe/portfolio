// eslint-disable-next-line

import React, { useState } from 'react';
import styled from 'styled-components';


const StyledContents = styled.article`

        display: block;
        overflow: hidden;
        position: relative;
        padding: 0 2rem 6rem;

        h3{
            margin: 4rem 0;
            ${ ({theme}) => theme.isColor('white') };
            font-size: 2.4rem;
        }

        .main__banner_cont{
            margin: 0 -2rem;
            background : url('https://ppaxe.kr/web/contents/images/contents/support_main_bn.jpg') left center no-repeat;
            background-size:cover;
            width: 100vw;
            height: 250px;
            
        }

    `;

    const StyledList = styled.li`

        display:block;
        overflow:hidden;
        color : ${ ({theme}) => theme.mainWhite };
        border-bottom: 2px solid #555;


        &:last-of-type{
            border-bottom: none;
        }

        .list__faq-top{

            display : block;
            padding: 2rem;
            
            button{
                position:relative;
                padding-left : 1.4rem;
                text-indent : -1.4rem;
                line-height: 160%;
                display:block;
                width:100%;
                color : ${ ({active, theme}) => active ? theme.mainRed : theme.mainWhite };
                font-weight : bold;

                &:before, &:after{
                    background: ${({active, theme}) => active ? theme.mainRed : '#555' };
                    ${ ({theme}) => theme.isImagin};
                    top:50%;
                }

                &:before{
                    right: 20px;
                    width: 2px;
                    height : 24px;
                    transform : ${ ({active}) => active ? 'translateY(-50%) rotate(90deg)' : 'translateY(-50%)'};
                }
                &:after{
                    right: 9px;
                    width: 24px;
                    height: 2px;
                    transform: translateY(-50%);
                }
            }
        
        }

        .list__faq-panel{

            display : ${ ({active}) => active ? 'block' : 'none' };
            padding : 2rem;

            p{
                padding-left : 1.4rem;
                text-indent : -1.6rem;
            }

        }

    `;

function Support({support}) {

    const [faqActive, setFaqActive] = useState(false);

    return(
        <>
            <StyledContents>
            <div className="main__banner_cont">
                <h3 className="blind">Support</h3>
            </div>
                <h3>FAQ</h3>
            <ul>
                {
                    support?.map((element, index) => {

                        return(
                            <StyledList key={index} active={index === faqActive ? true : false}>
                                <div className="list__faq-top">
                                    <button id={`faqBtn${index}`} aria-controls={`faqPanel${index}`} aria-expanded={index === faqActive ? 'true' : 'false'} onClick={() => { index === faqActive ? setFaqActive(false) : setFaqActive(index) }}>
                                        <strong>Q.</strong> { element.question }
                                    </button>
                                </div>
                                <div className="list__faq-panel" id={`faqPanel${index}`} aria-labelledby={`faqBtn${index}`}>
                                    <p><strong>A.</strong> { element.answer }</p>
                                </div>
                            </StyledList>
                        )
                    })
                }
            </ul>
            </StyledContents>
        </>
    )

}

export default Support;