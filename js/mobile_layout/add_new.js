$(function () {

    $('#nav-new').on('click', function (ev) {
        ev.preventDefault();
        $('#floater-add-new').toggleClass('onscreen', true);
    });

    $('.floater .trigger-close').on('click', function (ev) {
        ev.preventDefault();
        $(this).closest('.floater').removeClass('onscreen');
    });
});