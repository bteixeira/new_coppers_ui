var data = [
    {
        date: '1944.06.06',
        time: '06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        date: '1944.06.06',
        time: '06:33',
        amount: 8.15,
        tags: 'lunch coffee gifts online-orders',
        account: 'Credit Card'
    },
    {
        date: '1944.06.06',
        time: '06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        date: '1944.06.06',
        time: '06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        date: '1944.06.06',
        time: '06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        date: '1944.06.06',
        time: '06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        date: '1944.06.06',
        time: '06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        date: '1944.06.06',
        time: '06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    }
];

function formatCurrency(amount) {
    return '<span class="nowrap">$ ' + amount.toFixed(2) + '</span>';
}

$(function () {
    var total = 0;
    var prevDate;
    data.forEach(function (entry) {
        var $tbody = $('table tbody');
        if (entry.date !== prevDate) {
            $tbody.append('<tr class="date-row"><td colspan="2">' + entry.date + '</td></tr>');
            prevDate = entry.date;
        }
        total += entry.amount;
        var $tr = $('<tr></tr>');
        $tr.append('<td><span class="date">' + entry.date + '</span> <span class="time">' + entry.time + '</span></td>');
        $tr.append('<td>' + formatCurrency(entry.amount) + '</td>');
        //$tr.append('<td><a href="#">[E]</a> <a href="#">[X]</a></td>');
        //$tr.append('<td><div class="tags">' + entry.tags.split(' ').map(function (tag) { return '#' + tag;}).join(' ') + '</div></td>');
        $tbody.append($tr);
        //$tr = $('<tr></tr>');
        //$tr.append('<td>' + entry.account + '</td>');

        //$tr.append('<td class="col-accumulated">' + formatCurrency(total) + '</td>');

        //$tbody.append($tr)
    });
    $('table tbody').append('<tr><td>Total</td><td colspan="2">' + formatCurrency(total) + '</td></tr>');
});
