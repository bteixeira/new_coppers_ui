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
    return '$ ' + amount.toFixed(2);
}

$(function () {
    var total = 0;
    data.forEach(function (entry) {
        total += entry.amount;
        var $tr = $('<tr></tr>');
        $tr.append('<td>' + entry.date + ' @' + entry.time + '</td>');
        $tr.append('<td>' + formatCurrency(entry.amount) + '</td>');
        $tr.append('<td>#' + entry.tags + '</td>');
        $tr.append('<td>' + entry.account + '</td>');
        $tr.append('<td class="col-accumulated">' + formatCurrency(total) + '</td>');
        $tr.append('<td><a href="#">[E]</a> <a href="#">[X]</a></td>');
        $('table tbody').append($tr)
    });
});
