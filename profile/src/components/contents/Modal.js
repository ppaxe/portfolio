import React, { useEffect } from 'react'
import styled, { css, keyframes } from "styled-components";

const Modal = (props) => {

    const Popup = styled.div`
    
        position:fixed;
        top:0;
        left:0;
        z-index:9999;
        background: rgba(0,0,0,0.25);
        width:100%;
        height:100%;
        overflow: hidden;
        display:block;

        .popup__container{

            position:relative;
            top:50%;
            width: 80vw;
            max-width: 640px;
            margin: 0 auto;
            height: auto;
            transform: translateY(-50%);
            background: #fff;
            display: block;
            overflow: hidden;

            .popup__header{

                display: block;
                position: relative;

            }

            .popup__section{



            }

            .popup__footer{


                div{

                    display: flex;
                    overflow: hidden;

                    button{

                        width: 100%;
                        display: block;
                        line-height: 52px;
                        border: none;
                        font-weight: bold;
                        font-size: 2.4rem;

                    }
                }

            }

        }

    `;

    return (

        <Popup>

            <div className="popup__container" aria-describedby="popupDescription">
                <div className="popup__button">
                    <div>
                        <button type="button" onClick={() => {props.set.closeProps(false)}}>닫기</button>
                    </div>
                </div>
                <div className="popup__header">
                    <h2 id="popupTitle">
                        {props.set.title}
                    </h2>
                </div>
                <div className="popup__section">
                    <p id="popupDescription">
                        {props.set.description}
                    </p>
                </div>
                <div className="popup__footer">
                    <div>
                    {
                        props.set.type === 'alert' ? 
                        <button type="button">확인</button> :
                        <>
                            <button type="button" onClick={() => {props.set.setProps(true); props.set.closeProps(false)}}>{ props.set.btnText ? props.set.btnText : '확인' }</button>
                            <button type="button" onClick={() => {props.set.closeProps(false)}}>닫기</button>
                        </>
                    }
                    </div>
                </div>

            </div>

        </Popup>
    )
}

export default Modal;
