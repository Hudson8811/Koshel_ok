
moment.locale('ru');

var ready_gc = false;
var radInAchivements = [];

function funcDays(day) {
    var last = day.toString().slice(-1);
    var prelast = 0;
    if (day.toString().length >= 2) {
        prelast = day.toString().slice(-2).slice(0, 1);
    }
    /*console.log(day, day.toString().length, prelast);
    console.log(day.toString().slice(-2));
    console.log(day.toString().slice(-2).slice(0,1));*/
    if (last == '1') $str = " день";
    if (last == '2' || last == '3' || last == '4') $str = " дня";
    if (last == '5' || last == '6' || last == '7' || last == '8' || last == '9' || last == '0') $str = " дней";
    if (prelast == '1') $str = " дней";
    return $str;
}


$(document).ready(function () {
    if ($('.my-achievements-slider').length > 0) {
        $('.my-achievements-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            prevArrow: '<div class="my-achievements-slider-arrow mas-arrow-prev"><svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 0.5L3.09471 12.4995L13 24.5L9.90594 24.5L4.29158e-07 12.4995L9.90594 0.5L13 0.5Z" fill="#BABBC0"/></svg></div>',
            nextArrow: '<div class="my-achievements-slider-arrow mas-arrow-next"><svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 24.5L9.90529 12.5005L-1.04907e-06 0.5L3.09406 0.5L13 12.5005L3.09406 24.5L0 24.5Z" fill="#BABBC0"/></svg></div>',
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 639,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    if ($('.achivement-indicator-container').length > 0) {


        $('.achivement-indicator-container').each(function (index, value) {

            radInAchivements[index] = radialIndicator($(value)[0], {
                barColor: '#3CA062',
                barBgColor: '#E6E6E6',
                radius: 84,
                barWidth: 12,
                initValue: 25,
                roundCorner: true,
                displayNumber: false,
                duration: 1500 // ms
            });
        });

        //изменить радиус radInAchivements[0].option('radius',90);
        //изменить значение radInAchivements[0].animate(60);
    }


    if ($('.gc-slider__slider-range').length > 0) {
        $('.gc-slider__slider-range').each(function () {
            var $this = $(this),
                displayValue = $(this).siblings('.gc-slider-range-info').find('.gc-slider-range-info__value'),
                displayExpDate = undefined;
            if ($(this).siblings('.gc-slider-range-info').find('.gc-slider-range-info__expiration-date').length > 0) {
                displayExpDate = $(this).siblings('.gc-slider-range-info').find('.gc-slider-range-info__expiration-date');
            }

            var val = parseInt($this.attr('data-val')) || 0,
                min = parseInt($this.attr('data-min')) || 0,
                max = parseInt($this.attr('data-max')) || 100,
                step = parseInt($this.attr('data-step')) || 1,
                before = $this.attr('data-before') || '',
                after = $this.attr('data-after') || '',
                days = $this.attr('data-days') || 'false',
                ddt = $this.attr('data-display-type') || '',    //подходит только 'tooltip', иные игнорируются
                handle = ($this.find('.ui-slider-handle').length > 0) ? ($this.find('.ui-slider-handle')) : undefined;



            $this.slider({
                range: "min",
                value: val,
                min: min,
                max: max,
                step: step,
                slide: function (event, ui) {
                    if (ddt !== 'tooltip') {
                        displayValue.html(before + ui.value + after + (days == 'true' ? funcDays(ui.value) : ''));
                        if (displayExpDate != undefined) {
                            displayExpDate.html('до ' + moment().add(ui.value, 'days').format('D MMMM'));
                        }
                    }
                    else {
                        handle.find('.ui-slider-handle-tooltip').text(before + ui.value + after);
                    }
                }
            });

            if (ddt !== 'tooltip') {
                displayValue.html(before + $(this).slider("value") + after + (days == 'true' ? funcDays($(this).slider("value")) : ''));
                if (displayExpDate != undefined) {
                    displayExpDate.html('до ' + moment().add($(this).slider("value"), 'days').format('D MMMM'));
                }
            }
            else {
                handle.find('.ui-slider-handle-tooltip').text(before + $(this).slider("value") + after);
            }
        });
    }
    ready_gc = true;
    if ($('.achivement-indicator-container').length > 0) {
        adaptGC();
        $(window).resize(function () { adaptGC(); });
    }
});




adaptGC = function () {
    if (ready_gc) {
        if (window.innerWidth > 1500 && radInAchivements[0].indOption.radius != 84) {

            radInAchivements.forEach(function (value, index) {
                value.option('barWidth', 12);
                value.option('radius', 84);
            });
        }
        if (window.innerWidth <= 1500 && window.innerWidth > 639 && radInAchivements[0].indOption.radius != 52) {
            /*console.log(radInAchivements[0].indOption.barWidth);
            console.log(radInAchivements[0].indOption.radius);*/

            radInAchivements.forEach(function (value, index) {
                value.option('barWidth', 9);
                value.option('radius', 52);
            });
        }
        if (window.innerWidth <= 639 && radInAchivements[0].indOption.radius != 63) {
            radInAchivements.forEach(function (value, index) {
                value.option('barWidth', 8);
                value.option('radius', 63);
            });
        }
    }
}
