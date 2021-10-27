// ready

$(function(){

    // common :: init
    scrollEvt.init();

    $(window).on('mousemove',function(e){
        var cursor = $('.cursor');

        cursor.css({left : e.clientX + 'px', top : e.clientY + 'px'})
    })

})

// loaded

$(window).load(function(){

    // loaded - splash hide

    // setTimeout(function(){
        
        splash.close();
    
    // },500);

});


// splash (loading)

var splash = {
 
    load:function(){

        var $splash = $('<div>').addClass('splash'),
            $earth = $('<i>').attr({'aria-hidden':'true'}),
            $p = $('<p>').html('Please wait<br />The amazing universe unfolds.');

        $splash.append($earth);
        $splash.append($p);

        $('body').prepend($splash);
    },
    close:function(){
        
        $('.splash').remove();

    }

}

var resizeEvt = {



}

// scroll Event

var scrollEvt = {

    init:function(){

        $(window).on('scroll',function(){
            var $scrollPoint = $('.scroll-point');
            if($scrollPoint){
                $scrollPoint.each(function(index,element){
                    var $scrollAction = scrollEvt.elTop($scrollPoint.eq(index));
                    if(scrollEvt.nowTop() >= $scrollAction){
                        $scrollPoint.eq(index).addClass('active');
                    }else{
                        $scrollPoint.eq(index).removeClass('active');
                    }
                })
            }
        })

    },
    nowTop:function(){

        return $(window).scrollTop();
    
    },
    elTop:function(element){

        return $(element).offset().top;

    }


}

$(document).on('click','a',function(){

    if($(this).attr('href') != '#' || $(this).attr('href') != '' ||  $(this).attr('href') != '#none' || $(this).attr('href') != 'javascript:;' || $(this).attr('href') != undefined){
        
        splash.load();
    
    }

});