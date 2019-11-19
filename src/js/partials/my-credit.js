
$(document).ready(function () {
    if ($('.history-accordions .history-accordions__head').length > 0) {
        $(".history-accordions").accordion({
            header: '.history-accordions__head',
            animate: 200,
            cons: { "header": false },
            heightStyle: "content"
        });
    }


    if ($('.mcp-at-control').length > 0) {
        $(".mcp-at-control").click(function () {
            var $this=$(this);
            $this.addClass('active').siblings().removeClass('active');
            $('#'+$this.attr('data-tab-id')).addClass('active').siblings().removeClass('active');
        });
    }


});
