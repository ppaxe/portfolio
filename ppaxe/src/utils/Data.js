// eslint-disable-next-line
import Utils from './Utils';

const User = Utils.checkUser();

const Data = {

    siteMaps:
        [
        {
            id : 0,
            title : 'profile',
            kor : '이것은 나의 프로필',
            redirect : () => window.open('https://file2.jobkorea.co.kr/Net/Mng/UserDown/ResumeAttach?idx=5675285'),
            active : false
        },
        {
            id : 1,
            title : 'web',
            kor : 'PC 홈페이지',
            redirect : () => window.open('http://ppaxe.kr/web/'),
            active : false
        },
        {
            id : 2,
            title : 'mobile',
            kor : '모바일',
            redirect : () => { return User.device === 'pc' ? window.open('http://ppaxe.kr/mobile/','_blank','width=414, height=736') : window.open('http://ppaxe.kr/mobile/') },
            active : false
        },
        {
            id : 3,
            title : 'responsive',
            kor : '반응형',
            redirect : () => window.open('http://ppaxe.kr/web/'),
            active : false
        },
        {
            id : 4,
            title : 'contact',
            kor : '당신의 연락을 기다려요',
            redirect : () => window.open('http://ppaxe.kr/web/'),
            active : false
        },
        {
            id : 5,
            title : 'resume',
            kor : '나의 명필 이력서',
            redirect : () => window.open('http://ppaxe.kr/web/'),
            active : false
        }
        ]

}

export { Data, User };