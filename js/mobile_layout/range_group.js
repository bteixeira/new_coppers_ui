$(function () {

    function format(value) {
        return '&euro; ' + parseFloat(value).toFixed(2);
    }

    $('.range-group').each(function () {
        var $min = $(this).find('.min');
        var $minValue = $(this).find('.value-min');
        var $max = $(this).find('.max');
        var $maxValue = $(this).find('.value-max');
        //var step = parseFloat($min.attr('step') || 1);

        $min.on('input', function () {
            $minValue.html(format($min.val()));
            if (parseFloat($min.val()) > parseFloat($max.val())) {
                $max.val(parseFloat($min.val()));
                $maxValue.html(format($max.val()));
            }
        });
        $max.on('input', function () {
            $maxValue.html(format($max.val()));
            if (parseFloat($max.val()) < parseFloat($min.val())) {
                $min.val(parseFloat($max.val()));
                $minValue.html(format($min.val()));
            }
        });
    });
});