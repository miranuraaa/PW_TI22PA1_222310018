document.getElementById('hitung-btn').addEventListener('click', function() {
    var nama = document.getElementById('nama').value;
    var tujuan = document.getElementById('tujuan').value;
    var kelas = document.getElementById('kelas').value;
    var banyakTiket = parseInt(document.getElementById('banyak-tiket').value);
    var statusMember = document.getElementById('status-member').value;

    var hargaTiket;
    if (tujuan === 'jakarta') {
        switch (kelas) {
            case 'eksekutif':
                hargaTiket = 70000;
                break;
            case 'bisnis':
                hargaTiket = 40000;
                break;
            case 'ekonomi':
                hargaTiket = 10000;
                break;
        }
    } else if (tujuan === 'solo') {
        switch (kelas) {
            case 'eksekutif':
                hargaTiket = 80000;
                break;
            case 'bisnis':
                hargaTiket = 50000;
                break;
            case 'ekonomi':
                hargaTiket = 20000;
                break;
        }
    } else if (tujuan === 'surabaya') {
        switch (kelas) {
            case 'eksekutif':
                hargaTiket = 90000;
                break;
            case 'bisnis':
                hargaTiket = 60000;
                break;
            case 'ekonomi':
                hargaTiket = 30000;
                break;
        }
    }

    var subtotal = hargaTiket * banyakTiket;
    var diskon = statusMember === 'ya' ? 0.1 * subtotal : 0;
    var totalBayar = subtotal - diskon;

    var output = "<h3>Ringkasan Pesanan</h3>" +
                 "<p>Nama Pemesan: " + nama + "</p>" +
                 "<p>Tujuan: " + tujuan + "</p>" +
                 "<p>Kelas: " + kelas + "</p>" +
                 "<p>Banyak Tiket: " + banyakTiket + "</p>" +
                 "<p>Harga Tiket: Rp " + hargaTiket + "</p>" +
                 "<p>Subtotal: Rp " + subtotal + "</p>" +
                 "<p>Diskon: Rp " + diskon + "</p>" +
                 "<p>Total Bayar: Rp " + totalBayar + "</p>";

    document.getElementById('output-container').innerHTML = output;
});
