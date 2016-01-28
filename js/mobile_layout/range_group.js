$(function () {
    $('.range-group').each(function () {
        var $min = $(this).find('.min');
        var $max = $(this).find('.max');
        //var step = parseFloat($min.attr('step') || 1);

        $min.on('input', function () {
            if (parseFloat($min.val()) > parseFloat($max.val())) {
                $max.val(parseFloat($min.val()));
            }
        });
        $max.on('input', function () {
            if (parseFloat($max.val()) < parseFloat($min.val())) {
                $min.val(parseFloat($max.val()));
            }
        });
    });
});