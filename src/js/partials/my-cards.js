$(document).ready(function () {
    $('.my-cards-page .card').click(function () {
        activeCard(this);
        if (!$(this).hasClass('verifed')){
            $.fancybox.open({
                src  : '#verification-modal',
                type : 'inline',
                modal: true,
            });
        }
    });

    function activeCard(elem) {
        $(elem).siblings('.checkbox-block').find('input').prop("checked", true);
        $('.my-cards-page .card').removeClass('active');
        $(elem).addClass('active');
        var parent = $(elem).parents('.card-item');
        zindexCard(parent);
    }

    $('#cart-modal .banks-grid .item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.my-cards-page .add-card').click(function () {
        $.fancybox.open({
            src  : '#cart-modal',
            type : 'inline',
            modal: true,
        });
    });

    function zindexCard(card) {
        card.css('z-index','50');
        var zindex = 49;
        card.nextAll('.card-item:not(.add-class)').each(function () {
           $(this).css('z-index',zindex);
            zindex--;
        });
         zindex = 49;
        card.prevAll('.card-item:not(.add-class)').each(function () {
            $(this).css('z-index',zindex);
            zindex--;
        });
    }

    zindexCard($('.my-cards-page .card-item:not(.add-class):first-child'));
});
