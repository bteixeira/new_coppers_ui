$(function () {
    $('.mobile-container .mobile-toggle').each(function () {
        var $container = $(this).closest('.mobile-container');
        $(this).on('click', function () {
            $container.toggleClass('mobile-container');
        });
    });
});
