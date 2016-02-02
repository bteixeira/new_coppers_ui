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
        if ($popup.is('.onscreen')) {
            $popup.smoothlyCollapse(150, 'linear', function () {
                $popup.removeClass('onscreen');
            });
        } else {
            $popup.toggleClass('onscreen', true).smoothlyExpand();


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

$.fn.smoothlyCollapse = function (time, fun, cb) {
    time = time || 150;
    fun = fun || 'linear';
    var $this = $(this);
    var h = $this.outerHeight();
    $this.css('height', h + 'px');
    $this[0].offsetHeight;
    $this.css('transition', 'height ' + fun + ' ' + time + 'ms');
    $this.one('transitionend', function () {
        $this.css('height', '');
        $this.css('transition', '');
        if (cb) {
            cb();
        }
    });
    $this.css('height', '0');
    return $this;
};
$.fn.smoothlyExpand = function (time, fun, cb) {
    time = time || 300;
    fun = fun || '';
    var $this = $(this);
    var h = $this.outerHeight();
    $this.css('height', '0');
    $this[0].offsetHeight;
    $this.css('transition', 'height ' + fun + ' ' + time + 'ms');
    $this.one('transitionend', function () {
        $this.css('height', '');
        $this.css('transition', '');
        if (cb) {
            cb();
        }
    });
    $this.css('height', h + 'px');
    return $this;
};