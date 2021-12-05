import React from 'react';
import styled from 'styled-components';

function Modal(props){

    const Popup = styled.div`
    
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.25);
        z-index : 9999;
        display: block;
        overflow: hidden;

        .modal{

            position: relative;
            top: 50%;
            left: 50%;
            display: block;
            transform: translate(-50%, -50%);
            width: 80vw;
            max-width: 640px;
            
        }

    `;

    return(
        <>
            <Popup>
                <div id="modalPopup" className="modal" role={ props.contents.type === 'alert' ? 'alertdialog' : 'dialog' } aria-modal="true" aria-labelledby="popupTitle" aria-describedby="popupDescription">

                    <div className="modal__header">
                        <h2 className="modal__header--title" id="popupTitle">
                            {props.contents.title}
                        </h2>
                    </div>
                    <div className="modal__section">
                        <p className="modal__section--description" id="popupDescription">
                            {props.contents.content}
                        </p>
                    </div>
                    <div className="modal__footer">
                        <div className="modal__button--wrap">
                        {
                            props.contents.type === 'alert' ? 
                            <button className="modal__button--confirm" type="button" onClick={(e) => { props.contents.closeProps(true); }}>확인</button>
                            :
                            <>
                            <button className="modal__button--comfirm" type="button" onClick={(e) => { props.contents.agrProps(true); props.contents.closeProps(true);}}>확인</button>
                            <button className="modal__button--close" type="button" onClick={(e) => { props.contents.closeProps(true); }}>닫기</button>
                            </>
                        }
                        </div>
                    </div>

                </div>
            </Popup>

        </>
    )
}

export default Modal;