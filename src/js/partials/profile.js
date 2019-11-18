function togglePassVis(toggleBtn) {
    $(toggleBtn).toggleClass('toggled');
    var input = $(toggleBtn).siblings('input');

    if (input.attr('type') === "password") {
        input.attr('type', "text");
    } else {
        input.attr('type', "password");
    }

}

$(document).ready(function () {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $(input).siblings('img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);

            $(input).parent().removeClass('photo-display--empty-pic');
        }
    }
    if ($(".input-photo-display").length > 0) {
        $(".input-photo-display").change(function () {
            readURL(this);
        });
    }

    if ($(".profile-info").length > 0) {
        $('.profile-info').click(function () {

            if (window.innerWidth <= 1500) {
                $(this).toggleClass('menu-open');
                $(this).siblings('.profile-info+.profile-menu').stop().slideToggle(200);
            }
        });
        $('.profile-info-col .profile-menu a').click(function () {

            if (window.innerWidth <= 1500) {


                if ($(this).parent().is(':visible')) {
                    $(this).parent().stop().slideToggle(200);
                }
            }
        });
    }


    if ($(".mpic-top").length > 0) {
        $('.mpic-top').click(function () {

            if (window.innerWidth <= 1500) {
                $(this).toggleClass('menu-open');
                $(this).siblings('.mpic-bottom').stop().slideToggle(200);
            }
        });
        $('.mpic-bottom a').click(function () {

            if (window.innerWidth <= 1500) {
                if ($(this).parent().is(':visible')) {
                    $(this).parent().stop().slideToggle(200);
                }
            }
        });
    }





    var picFix = $('#pic-fix');
    $(window).scroll(function () {
        if (window.innerWidth <= 1500) {
            if ($(window).scrollTop() > 63) {
                picFix.siblings('.form-col').css("margin-top", picFix.height() + "px");
                picFix.addClass('fixed');
            }
            else {
                picFix.siblings('.form-col').css("margin-top", '0');
                picFix.removeClass('fixed');

            }

        }
        else {
            if (picFix.hasClass('fixed')) {
                picFix.siblings('.form-col').attr('style', '');
                picFix.removeClass('fixed');
            }
        }
    });
});
