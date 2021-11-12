const Utils = {

    checkUser:() => {

        let user = {};
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? user.device = 'mobile' : user.device = 'pc';

        (navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1 || (navigator.userAgent.toLowerCase().indexOf("msie") !== -1)) ? user.browser = 'ie' : user.browser = 'modern';

        return user;

    }
}

export default Utils;