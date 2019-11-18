$(document).ready(function () {
    $("input[name='phone']").mask(" +380 (99) 999 99 99");

    $('.input-money').mask('000 000 000 000', { reverse: true });

    if ($(".select-ui").length > 0) {
        $(".select-ui").selectmenu();
    }
    $('a').on('click', function (e) {
        if ($(this).attr('href').substring(0, 1) == '#' && (typeof $(this).attr('data-fancybox') === 'undefined')) {
            $('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 300);
            e.preventDefault();
        }
    });


    if ($(".header-mobile").length > 0) {
        $('.header-mobile-burger').click(function () {

            if (window.innerWidth < 1024) {
                $(this).toggleClass('menu-open');
                $(this).parent().siblings('.header-mobile-menu').stop().slideToggle(200);
            }
        });
        $('.header-mobile-menu a').click(function () {

            if (window.innerWidth < 1024) {
                if ($(this).parent().is(':visible')) {
                    $(this).parent().stop().slideToggle(200);
                }
            }
        });
    }
});
