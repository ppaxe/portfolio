
const common = window.addEventListener,
      PCDomain = 'http://ppaxe.kr/pc/',
      MDomain = 'http://ppaxe.kr/m/';


common('DOMContentLoaded',() => {


    userCheck();
    
    window.scrollTo({top:0, left:0, behavior:'auto'});
    
    document.querySelector('section').classList.add('blur');
    
    actionEvt('focus');
    setTimeout(() => { document.querySelector('section').classList.remove('blur') },500);

    // gnb
    const gnb = document.querySelector('.gnb'),
          $length =  gnb.querySelectorAll('ul').length;

    gnb.addEventListener('mouseover',()=>{
        for(let i = 0; i < $length; i++){
            gnb.getElementsByTagName('ul')[i].classList.add('active');
        }
    });

    gnb.addEventListener('mouseout',()=>{
        for(let i = 0; i < $length; i++){
            gnb.getElementsByTagName('ul')[i].classList.remove('active');
        }
    });

    commonUI.init();

})

let $scrollBef = document.documentElement.scrollTop || 0;

common('scroll',()=>{

    let $scrollAft = document.documentElement.scrollTop,
        $direction = $scrollAft - $scrollBef >= 0 ? 1 : -1,
        $article = document.querySelectorAll('article');

        if($direction === 1){

            $article ? $article.forEach((element, index) => {

                index >= 1 ? element.classList.add('scrollDown') : null;

                setTimeout(() => {

                    element.classList.remove('scrollDown');

                },1)

            }) : null;
            
        }

    $scrollBef = $scrollAft;

})

// animation event

const actionEvt = (type, time) => {

    let actionEl = document.createElement('div'),
        actionAttr = type === 'focus' ? {class: 'action-focus', playTime : (time) ? time : 1000} : type === 'shutter' ? {class: 'action-shutter', playTime : (time) ? time : 1500} : null;

        document.querySelector(`.${ actionAttr['class'] }`) ? document.querySelector(`.${ actionAttr['class'] }`).remove() : null;

        actionEl.classList.add(actionAttr['class']);

        void actionEl.offsetWidth;

        document.body.appendChild(actionEl);

        setTimeout(() => {

            actionEl.remove();

        },actionAttr['playTime']);

}


// accordion event

const commonUI = {

    init:function(){

        commonUI.accordion();

    },
    
    accordion:function(){

        let $el = document.querySelectorAll('.accordion-button');

        $el ? $el.forEach((element, index) => {

            element.onclick = (e) => {

                // WAI-ARIA

                let $panel = element.getAttribute('aria-controls');

                (document.getElementById($panel).offsetWidth > 0 && document.getElementById($panel).offsetHeight > 0) ? element.setAttribute('aria-expanded', 'false') : element.setAttribute('aria-expanded', 'true')

                // WAI-ARIA

                element.classList.toggle('active');

            }

        }) : null;

    },

}

const userCheck = () => {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        window.location.href = MDomain;

    }else{

        if( navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1 || (navigator.userAgent.toLowerCase().indexOf("msie") != -1)) {

            window.location.href = `${ PCDomain }error.html`;

        }

    }

}