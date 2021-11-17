

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

export default Utils