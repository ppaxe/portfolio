import React, {memo, useEffect, useState} from 'react';
import styled from 'styled-components';
import CommonButton from './../common/CommonButton';

const ProfileWrap = styled.div`
    
        display: block;
        overflow: hidden;
    
    `;

    
    
const SectionTitle = styled.h2`

font-size: 3.2rem;
line-height: 160%;
font-weight: 600;
margin: 4rem 0 2rem;

`;

const SectionSubTitle = styled.h3`

font-size: 2.0rem;
font-weight: 600;
line-height: 160%;

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

        p{
            margin-top: 2rem;
            font-size: 1.6rem;
            line-height: 160%;
        }

        @media ${props => props.theme.deviceQuery.tablet}{

            width: 100%;

        }

    `;

    const ResumeText = styled.div`

        margin: 2rem 0;
        display: block;
        position: relative;
        font-size: 1.6rem;
    
    `;

    const InfoList = styled.dl`
    
            margin: 2rem 0;
            padding: 2rem 0 2rem 1rem;
            border-radius: 10px;

            &:hover{
                background: ${({theme}) => theme.mainLGray};
            }

            dt{
                font-weight:600;
                color: ${({theme}) => theme.mainBlue};
                margin-bottom: 1rem;
                position: relative;
                padding-left: 55px;
                font-size: 1.6rem;

                &:before{
                    content: '';
                    display:block;
                    position: absolute;
                    top:5px;
                    left:5px;
                    width:40px;
                    height:40px;
                    background:url('https://ppaxe.kr/profile/contents/images/contents/content_icon.png') 0 0 no-repeat;
                    background-size: auto 80px;
                    background-position: -120px 0px;
                }

                &:nth-of-type(2){
                    margin-top: 2rem;
                }

            }
            dd{
                padding-left: 55px;
                font-size: 1.4rem;

                ul{
                    margin-top:1rem;
                }
            }

    `;


const Profile = memo(function({fromSite}){

    const [job, setJob] = useState('프론트엔드 개발자');

    useEffect(() => {

        fromSite === 'PB' && setJob('퍼블리셔');

    },[fromSite])

    return(
        <>
            <ProfileWrap>
                <ProfileImg>
                    <img src="https://ppaxe.kr/profile/contents/images/contents/profile_img.png" alt="내 사진" />
                </ProfileImg>
                <ProfileText>
                    <SectionTitle>
                        박세연 <em>@ppaxe</em>
                    </SectionTitle>
                    <SectionSubTitle>소통하는 { job } 박세연입니다.</SectionSubTitle>
                    <p>
                        소통(疏通) &#123; 뜻이서로 통하여 오해가 없음. &#125;
                    </p>
                    <p>
                        소통은 { job }의 필수 덕목입니다. 
                    </p>
                    <p>
                        기획, 디자인, 개발 등 각 위치에서의 역할이 나뉘어 있는 만큼, 서로간의 소통이 매우 중요합니다. 
                    </p>
                    <p>
                        기획과 디자인, 백엔드 사이의 징검다리 역할을 하는 { job }의 입장에선, 한 번의 의사 소통은 한 줄의 코드보다 중요한 역할을 합니다. 
                    </p>
                    <p>
                        저는 사소한 소통도 놓치지 않는 { job }가 되고 싶습니다.
                    </p>
                    <CommonButton params={{
                        type : 'link',
                        title : '스토리보드 새 창 열림',
                        text : '스토리보드 보기',
                        link : `https://ppaxe.kr/profile/contents/file/portfolio_storyboard.pdf`
                    }}
                    />
                </ProfileText>
                <ResumeText>
                    <SectionTitle>
                        저는 이런 경험을 했습니다.
                    </SectionTitle>
                    <SectionSubTitle>경력 사항</SectionSubTitle>
                    <InfoList>
                        <dt>
                            농협은행 주식회사
                        </dt>
                        <dd>
                            <strong>농협카드 웹/앱 상시 운영 퍼블리셔</strong>
                            <ul>
                                <li>2020.07 ~ 재직중 (1년 6개월)</li>
                            </ul>
                        </dd>
                    </InfoList>
                    <SectionSubTitle>교육 과정</SectionSubTitle>
                    <InfoList>
                        <dt>프론트엔드 / 디지털 컨버전스 교육 과정 수료</dt>
                        <dd>
                            <strong>그린컴퓨터 아카데미</strong>
                            <ul>
                                <li>2019.11 ~ 2020.04</li>
                            </ul>
                        </dd>
                        <dt>계원예술대학교</dt>
                        <dd>
                            <strong>리빙디자인과 학사 수료</strong>
                            <ul>
                                <li>2013.03 ~ 2019.02</li>
                            </ul>
                        </dd>
                    </InfoList>
                    <SectionTitle>
                        저는 이런 기술을 다뤄요.
                    </SectionTitle>
                    <SectionSubTitle>HTML5, CSS3 (SCSS / Styled-Components)</SectionSubTitle>
                    <InfoList>
                        <dt>
                            SEO 최적화 / 웹 표준과 접근성을 준수하는 마크업
                        </dt>
                        <dd>
                            <strong>WAI-ARIA 등을 사용한 마크업을 할 수 있어요.</strong>
                        </dd>
                    </InfoList>
                    <SectionSubTitle>javaScript(es 5-6), jQuery</SectionSubTitle>
                    <InfoList>
                        <dt>
                            인터랙티브 웹을 위한 동적 UI를 개발하는 스크립트
                        </dt>
                        <dd>
                            <strong>재사용성이 뛰어나게 구조화가 가능해요.</strong>
                        </dd>
                    </InfoList>
                    <SectionSubTitle>React</SectionSubTitle>
                    <InfoList>
                        <dt>
                            효율적인 State 관리
                        </dt>
                        <dd>
                            <strong>탄탄한 HTML5,CSS3,javaScript 이해를 기반으로 State관리에 능해요.</strong>
                        </dd>
                    </InfoList>
                    <SectionSubTitle>PhotoShop, illustrator</SectionSubTitle>
                    <InfoList>
                        <dt>
                            웹을 인터랙티브하게 만들기위한 디자인 서포트
                        </dt>
                        <dd>
                            <strong>다양한 디자인 수상경력으로 입증된 디자인 보조 실력까지!</strong>
                        </dd>
                    </InfoList>
                </ResumeText>
            </ProfileWrap>
        </>
    );

});

export default Profile;