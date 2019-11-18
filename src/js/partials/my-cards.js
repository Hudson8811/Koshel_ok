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
});
