import React, {memo, useState} from 'react';
import styled from 'styled-components';
import { Data } from './../../utils/Data';
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
          setModals = [setProfileModal, setWebModal, setMobileModal, setResponsiveModal, setContactModal, setResumeModal];

    return(
        <>
            <DocksWrap>
                <ul>
                    {
                        Data.siteMaps.map((element,index) =>{
                            
                            return(
                            <li key={ index }>
                                    <ActiveApp index={ index } title={ element.title } setParam={ setModals[index] } />
                            </li>
                            )
                        })
                    }
                </ul>
                
            </DocksWrap>
            {
                profileModal &&
                <div>Profile</div>
            }
            {
                webModal &&
                <div>Web</div>
            }
            {
                mobileModal &&
                <div>Mobile</div>
            }
            {
                responsiveModal &&
                <div>Responsive</div>
            }
            {
                resumeModal &&
                <div>Resume</div>
            }

        </>
    )

});

export default Docks;