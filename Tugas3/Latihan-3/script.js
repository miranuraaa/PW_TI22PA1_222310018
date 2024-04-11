document.getElementById('form-input').addEventListener('submit', function(event) {
    event.preventDefault();

    var n = parseInt(document.getElementById('input-n').value);

    var faktorial = 1;
    for (var i = 1; i <= n; i++) {
        faktorial *= i;
    }

    var jumlahDeret = (n * (n + 1)) / 2;

    var output = "<h3>Hasil</h3>" +
                 "<table>" +
                 "<tr>" +
                 "<th>N</th>" +
                 "<th>Faktorial</th>" +
                 "<th>Jumlah Deret</th>" +
                 "</tr>" +
                 "<tr>" +
                 "<td>" + n + "</td>" +
                 "<td>" + faktorial + "</td>" +
                 "<td>" + jumlahDeret + "</td>" +
                 "</tr>" +
                 "</table>";

    document.getElementById('output-container').innerHTML = output;
});

document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('output-container').innerHTML = "";
    document.getElementById('input-n').value = "";
});
