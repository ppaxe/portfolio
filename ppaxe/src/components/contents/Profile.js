import React from 'react';
import styled from 'styled-components';

function Profile(){

    const ProfileWrap = styled.div`
    
        display: block;
        overflow: hidden;
    
    `;

    const ProfileImg = styled.div`
    
        overflow: hidden;
        display: block;
        border: 2px solid ${ props => props.theme.mainBlack };
        box-sizing:border-box;
        width: 50%;
        margin-right: 2rem;
        display: inline-block;

        img{
            display: block;
            width: 100%;
        }

        @media ${props => props.theme.deviceQuery.tablet}{

            width: 100%;
            margin-right: 0;

        }
    
    `;

    const ProfileText = styled.div`
    
        display: inline-block;
        vertical-align: top;
        width: calc(50% - 2rem);
        text-align: left;
        font-weight: 500;
        word-break : keep-all;

        h2{
            font-size: 3.6rem;
            line-height: 160%;
            font-weight: 600;
        }
        p{
            margin-top: 2rem;
            font-size: 1.8rem;
            line-height: 160%;

            strong{
                font-size: 2.2rem;
                font-weight: 600;
            }
        }

        @media ${props => props.theme.deviceQuery.tablet}{

            width: 100%;

            h2{
                margin-top: 4rem;
            }
        }

    `;


        const DownLoadButton = styled.a`
        
            margin-top: 2rem;
            display: block;
            line-height: 58px;
            font-size: 2.4rem;
            color: ${props => props.theme.mainWhite};
            background: ${props => props.theme.mainBlue};
            border: 2px solid ${props => props.theme.mainBlack};
            border-radius: .5rem;
            text-align: center;
            text-decoration : none;

        `;

    return(
        <>
            <ProfileWrap>
                <ProfileImg>
                    <img src="http://ppaxe.kr/profile/contents/images/contents/profile_img.png" alt="내 사진" />
                </ProfileImg>
                <ProfileText>
                    <h2>
                        박세연 <em>@ppaxe</em>< br/>
                    </h2>
                    <p>
                        <strong>소통하는 프론트엔드 개발자 박세연입니다.</strong><br />
                        소통(疏通) &#123;뜻이서로 통하여 오해가 없음. &#125;
                    </p>
                    <p>
                        소통은 프론트엔드 개발자의 필수 덕목입니다. 
                    </p>
                    <p>
                        기획, 디자인, 개발 등 각 위치에서의 역할이 나뉘어 있는 만큼, 서로간의 소통이 매우 중요합니다. 
                    </p>
                    <p>
                        이러한 징검다리 역할을 하는 프론트엔드 개발자의 입장에선, 한 번의 의사 소통은 한 개의 코드보다 중요한 역할을 합니다. 
                    </p>
                    <p>
                        저는 사소한 소통도 놓치지 않는 프론트엔드 개발자가 되고 싶습니다.
                    </p>
                    <DownLoadButton href="" role="button" rel="noopener noreferrer" target="_blank">
                        포트폴리오 스토리보드
                    </DownLoadButton>
                </ProfileText>
            </ProfileWrap>
        </>
    );

}

export default Profile;