import React, { memo } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment/locale/ko';

const StatusWrap = styled.header`
    
        position: fixed;
        top : 0;
        left : 0;
        width : 100%;
        display:block;
        overflow: hidden;
        height: 40px;
        z-index: 9999;
        background: rgba(64, 64, 64, 0.4);
        backdrop-filter: blur(5px);

        @media ${({theme}) => theme.deviceQuery.mobile}{

            height: 30px;
            background: transparent;
            backdrop-filter: inherit;

        }
    
    `;

    const LogoWrap = styled.div`
    
        position: absolute;
        top:0;
        left: 0;
        display:block;
        overflow: hidden;

        h1{
            position: relative;
            padding: 5px 2rem;
            
            @media ${ ({theme}) => theme.deviceQuery.mobile}{
                padding: 10px 2rem 0;
            }
        }
    
    `;

    const Logo = styled.button`


        position: relative;
        width: 104px;
        height: 30px;
        display: block;
        overflow: hidden;
        color: transparent;
        text-indent: -9999rem;
        background: url('https://ppaxe.kr/profile/contents/images/common/logo.png') center center no-repeat;
        background-size: cover;
        border: none;
        cursor: pointer;

        @media ${ ({theme}) => theme.deviceQuery.mobile}{
            width: 69px;
            height: 20px;
        }


    `;

    const AppStatus = styled.div`
    
        position: absolute;
        display: block;
        right: 90px;
        padding: 5px;

    `;

    const MusicStatus = styled.div`
    
        position: relative;
        display: block;
        width: 30px;
        height: 30px;

        }

    `;

    const TimeWrap = styled.div`

        position: absolute;
        right: 2rem;
        line-height: 40px;
        font-size: 2.0rem;
        letter-spacing: -1px;
        font-weight: 500;

        @media ${ ({theme}) => theme.deviceQuery.mobile}{
            line-height: 30px;
            padding-top: 5px;
        }

        time{
            color : ${ ({theme}) => theme.mainWhite};
        }

    `;


const StatusBar = memo(function(){
    return(
        <>
            <StatusWrap>
                <LogoWrap>
                    <h1>
                        <Logo type="button" title="로고 팝업 열림">
                            ppaxe
                        </Logo>
                    </h1>
                </LogoWrap>
                {/* <AppStatus>
                    <MusicStatus> */}
                        {/* <i>{ music ? '배경음악 재생 중' : '배경음악 중지' }</i> */}
                    {/* </MusicStatus>
                </AppStatus> */}
                <TimeWrap>
                    <Moment format="HH : mm" />
                </TimeWrap>
            </StatusWrap>
        </>
    )

});

export default StatusBar;