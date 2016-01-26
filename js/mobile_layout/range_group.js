$(function () {
    $('.range-group').each(function () {
        var $min = $(this).find('.min');
        var $max = $(this).find('.max');

        $min.on('input', function () {
            if (parseFloat($min.val()) >= parseFloat($max.val())) {
                $max.val(parseFloat($min.val()) + 1);
            }
        });
        $max.on('input', function () {
            if (parseFloat($max.val()) <= parseFloat($min.val())) {
                $min.val(parseFloat($max.val()) - 1);
            }
        });
    });
});