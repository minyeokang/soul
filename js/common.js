$(document).ready(function () {
    //스크롤 트리거 
    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });

    // 모바일메뉴 
    $('.mgnb_wrap').hide();
    $(".ham").click(function () {
        $(".mgnb_wrap").slideDown();
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").slideUp();
    });

    $(".mv_play").hide();
    $(".btn_play").click(function () {
        $(".mv_play").fadeIn();
    });
    $(".btn_close").click(function () {
        $(".mv_play").fadeOut();
    });


});
