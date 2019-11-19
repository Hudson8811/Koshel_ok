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

    $('.my-cards-page .card-item input[type=radio]').change(function() {
        $('.my-cards-page .card').removeClass('active');
        var parent = $(this).parents('.card-item');
        parent.find('.card').addClass('active');
        zindexCard(parent);
    });

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

    var active768 = 1,
        count768 = $('.my-cards-page .card-item:not(.add-card)').length;

    function slider768(card) {
        $('.my-cards-page .card-item:not(.add-card)').addClass('hidden');
        card.show().addClass('left');

        if (count768 > 2){
            card.next().show().addClass('right-notlast').removeClass('hidden');
            $('.next-cards').addClass('active');
        } else {
            card.next().show().addClass('right').removeClass('hidden');
        }
    }

    $('.next-cards').click(function () {
        active768++;
        $('.my-cards-page .card-item:not(.add-card)').addClass('hidden').removeClass('left-notfirst left right right-notlast');
        $('.my-cards-page .card-item:not(.add-card):nth-child('+active768+')').show().addClass('left-notfirs').removeClass('hidden');
        $('.prev-cards').addClass('active');
        if (active768 === count768 - 1){
            $('.my-cards-page .card-item:not(.add-card):nth-child('+active768+')').next().show().addClass('right').removeClass('hidden');
            $('.next-cards').removeClass('active');
        } else {
            $('.my-cards-page .card-item:not(.add-card):nth-child('+active768+')').next().show().addClass('right-notlast').removeClass('hidden');
        }
    });

    $('.prev-cards').click(function () {
        active768--;
        $('.my-cards-page .card-item:not(.add-card)').addClass('hidden').removeClass('left-notfirst left right right-notlast');
        $('.my-cards-page .card-item:not(.add-card):nth-child('+active768+')').next().show().addClass('right-notlast').removeClass('hidden');
        $('.next-cards').addClass('active');

        if (active768 === 1){
            $('.my-cards-page .card-item:not(.add-card):nth-child('+active768+')').show().addClass('left').removeClass('hidden');
            $('.prev-cards').removeClass('active');
        } else {
            $('.my-cards-page .card-item:not(.add-card):nth-child('+active768+')').show().addClass('left-notfirs').removeClass('hidden');
        }
    });


    zindexCard($('.my-cards-page .card-item:not(.add-class):first-child'));
    slider768($('.my-cards-page .card-item:not(.add-class):first-child'));
});
