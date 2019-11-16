
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


    /*if ($('.available-trim-styles').length > 0) {

        $('.available-trim-styles .ats-style-head__description-contol').click(function () {

            var parent = $(this).parent();
            if (parent.hasClass('ats-style-head--open-desc')) {
                parent.siblings('.ats-style-description').stop().slideUp(500);
                setTimeout(function () {
                    parent.removeClass('ats-style-head--open-desc');
                }, 500);

            } else {
                parent.addClass('ats-style-head--open-desc');
                parent.siblings('.ats-style-description').stop().slideDown(500);
            }
        });
    }*/
});
