var data = [
    {
        time: '1944.06.06@06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        time: '1944.06.06@06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        time: '1944.06.06@06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        time: '1944.06.06@06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        time: '1944.06.06@06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        time: '1944.06.06@06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        time: '1944.06.06@06:33',
        amount: 342,
        tags: 'bombs',
        account: 'Credit Card'
    },
    {
        time: '1944.06.06@06:33',
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
        $tr.append('<td>' + entry.time + '</td>');
        $tr.append('<td>' + formatCurrency(entry.amount) + '</td>');
        $tr.append('<td>#' + entry.tags + '</td>');
        $tr.append('<td>' + entry.account + '</td>');
        $tr.append('<td>' + formatCurrency(total) + '</td>');
        $tr.append('<td><a href="#">[E]</a> <a href="#">[X]</a></td>');
        $('table tbody').append($tr)
    });
});
