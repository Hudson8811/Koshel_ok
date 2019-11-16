$(document).ready(function () {
    $("input[name='phone']").mask(" +380 (99) 999 99 99");

    $('.input-money').mask('000 000 000 000', {reverse: true});

    if ($(".select-ui").length > 0) {
        $(".select-ui").selectmenu();
    }

});
