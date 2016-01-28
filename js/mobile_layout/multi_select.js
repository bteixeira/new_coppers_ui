$(function () {

    $('.multi-select').each(function () {

        var $multiSelect = $(this);
        var $heading = $multiSelect.find('.heading');
        var $listSelected = $multiSelect.find('.list-selected');
        var $listAvailable = $multiSelect.find('.list-available');

        $heading.on('click', function (ev) {
            var $items;

            ev.preventDefault();

            if ($multiSelect.is('.expanded')) {

                $items = $listAvailable.find('.item.selected');
                $items.remove().removeClass('selected').appendTo($listSelected);

                $items = $listSelected.find('.item.inactive');
                $items.remove().removeClass('inactive').appendTo($listAvailable);

                $multiSelect.removeClass('expanded');
            } else {
                $multiSelect.toggleClass('expanded', true);
            }

        });

        $multiSelect.on('click', '.list-available .item', function (ev) {
            ev.preventDefault();
            $(this).toggleClass('selected');
        });

        $multiSelect.on('click', '.list-selected .item', function (ev) {
            ev.preventDefault();
            if ($multiSelect.is('.expanded')) {
                $(this).toggleClass('inactive');
            } else {
                $(this).remove().appendTo($listAvailable);
            }
        });

    });

});