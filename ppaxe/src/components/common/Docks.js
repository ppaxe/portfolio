import React, {memo, useState} from 'react';
import styled from 'styled-components';
import { Data } from './../../utils/Data';
import ActiveApp from './ActiveApp';
import Modal from './Modal';

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

    const [profileModal, setProfileModal] = useState(false),
          [webModal, setWebModal] = useState(false),
          [mobileModal, setMobileModal] = useState(false),
          [responsiveModal, setResponsiveModal] = useState(false),
          [contactModal, setContactModal] = useState(false),
          [resumeModal, setResumeModal] = useState(false),
          Modals = [profileModal, webModal, mobileModal, responsiveModal, contactModal, resumeModal],
          setModals = [setProfileModal, setWebModal, setMobileModal, setResponsiveModal, setContactModal, setResumeModal];

    return(
        <>
            <DocksWrap>
                <ul>
                    {
                        Data.siteMaps.map((element,index) =>{
                            
                            return(
                            <li key={ index }>
                                    <ActiveApp index={ index } title={ element.title } param={ Modals[index] } setParam={ setModals[index] } />
                            </li>
                            )
                        })
                    }
                </ul>
                
            </DocksWrap>
            {
                profileModal &&
                <Modal content={Data.siteMaps[0]} param={ profileModal } setParam={ setProfileModal } />
            }
            {
                webModal &&
                <Modal content={Data.siteMaps[1]} param={ webModal } setParam={ setWebModal } />
            }
            {
                mobileModal &&
                <Modal content={Data.siteMaps[2]} param={ mobileModal } setParam={ setMobileModal } />
            }
            {
                responsiveModal &&
                <Modal content={Data.siteMaps[3]} param={ responsiveModal } setParam={ setResponsiveModal } />
            }
            {
                contactModal &&
                <Modal content={Data.siteMaps[4]} param={ contactModal } setParam={ setContactModal } />
            }
            {
                resumeModal &&
                <Modal content={Data.siteMaps[5]} param={ resumeModal } setParam={ setResumeModal } />
            }

        </>
    )

});

export default Docks;