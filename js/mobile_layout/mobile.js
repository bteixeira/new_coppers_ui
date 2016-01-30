$(function () {

    $('#nav-new').on('click', function (ev) {
        ev.preventDefault();
        $('#floater-add-new').toggleClass('onscreen', true);
    });

    $('#nav-filter').on('click', function (ev) {
        ev.preventDefault();
        $('#floater-filter').toggleClass('onscreen', true);
    });

    $('#nav-group').on('click', function (ev) {
        ev.preventDefault();
        $('#floater-group').toggleClass('onscreen', true);
    });

    $('#nav-user').on('click', function (ev) {
        ev.preventDefault();
        $('.floater.onscreen').removeClass('onscreen');
        $('#floater-user').toggleClass('onscreen', true);
    });

    $('.floater .trigger-close').on('click', function (ev) {
        ev.preventDefault();
        $(this).closest('.floater').removeClass('onscreen');
    });

    $('.date-picker .trigger-calendar').on('click', function (ev) {
        ev.preventDefault();

        var $picker = $(this).closest('.date-picker');
        var $popup = $picker.find('.calendar-popup');
        //$popup.transition
        var h;
        if ($popup.is('.onscreen')) {
            h = $popup.outerHeight();
            $popup.css('height', h + 'px');
            $popup[0].offsetHeight;
            $popup.css('transition', 'height linear 150ms');
            $popup.one('transitionend', function () {
                $popup.css('height', '');
                $popup.css('transition', '');
                $popup.removeClass('onscreen');
            });
            $popup.css('height', '0');
        } else {
            $popup.toggleClass('onscreen', true);
            h = $popup.outerHeight();
            $popup.css('height', '0');
            $popup[0].offsetHeight;
            $popup.css('transition', 'height 300ms');
            $popup.one('transitionend', function () {
                $popup.css('height', '');
                $popup.css('transition', '');
            });
            $popup.css('height', h + 'px');
        }

    });
    $('.date-picker .calendar-popup tbody td:not(.week-number)').on('click', function (ev) {
        $(this).closest('.date-picker').find('.trigger-calendar .value').text($(this).text());
        $(this).closest('.date-picker').find('.calendar-popup').removeClass('onscreen');
    });

    $('.date-picker input[type="checkbox"]').on('click', function (ev) {
        var $picker = $(this).closest('.date-picker');
        $picker.toggleClass('unselected', !this.checked);
    });

    $('.date-picker button, .date-picker select').on('click', function() {
        $(this).closest('.date-picker').find('input[type="checkbox"]').prop('checked', true);
        $(this).closest('.date-picker').removeClass('unselected');
    });
});

$.fn.smoothlyExpand = function () {

};
