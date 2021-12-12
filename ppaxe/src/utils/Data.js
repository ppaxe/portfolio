// eslint-disable-next-line

const Utils = {

    checkUser : () => {

        let user = {};

        // pc or mobile check
        
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? user.device = 'mobile' : user.device = 'pc';

        // pc ie check

        (navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1 || (navigator.userAgent.toLowerCase().indexOf("msie") !== -1)) ? user.browser = 'ie' : user.browser = 'modern';

        // mobile os check 

        user.device === 'mobile' && (/iPhone|iPad/i.test(navigator.userAgent)) ? user.os = 'ios' : user.os = 'android';

        return user;

    },
}

const User = Utils.checkUser();

const Data = {

    Apps:
    [
        {
            id : 0,
            title : 'Profile',
            kor : '이것은 나의 프로필',
            redirect : () => window.open('https://file2.jobkorea.co.kr/Net/Mng/UserDown/ResumeAttach?idx=5675285'),
            active : false,
            zIndex : 0,
        },
        {
            id : 1,
            title : 'Web',
            kor : 'PC 홈페이지',
            redirect : () => { return User.device === 'pc' ? window.open('https://ppaxe.kr/mobile/','_blank','width=414, height=736') : window.open('https://ppaxe.kr/mobile/') },
            active : false,
            zIndex : 0,
        },
        {
            id : 2,
            title : 'Mobile',
            kor : '모바일',
            redirect : () => { return User.device === 'pc' ? window.open('https://ppaxe.kr/mobile/','_blank','width=414, height=736') : window.open('https://ppaxe.kr/mobile/') },
            active : false,
            zIndex : 0,
        },
        {
            id : 3,
            title : 'Responsive',
            kor : '반응형',
            redirect : () => window.open('https://ppaxe.kr/web/'),
            active : false,
            zIndex : 0,
        },
        {
            id : 4,
            title : 'Contact',
            kor : '당신의 연락을 기다려요',
            redirect : () => window.open('https://ppaxe.kr/web/'),
            active : false,
            zIndex : 0,
        },
        {
            id : 5,
            title : 'Resume',
            kor : '나의 명필 이력서',
            redirect : () => window.open('https://ppaxe.kr/web/'),
            active : false,
            zIndex : 0,
        },
        {
            id : 6,
            title : 'Music',
            kor : '나와 함께 들어요',
            redirect : () => window.open('https://ppaxe.kr/web/'),
            active : false,
            zIndex : 0,
        }
    ]

}

export { Data };