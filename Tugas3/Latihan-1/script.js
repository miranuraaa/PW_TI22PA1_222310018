document.getElementById('form-mahasiswa').addEventListener('submit', function(event) {
    event.preventDefault();

    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var jenisKelamin = document.getElementById('jenis-kelamin').value;
    var agama = document.getElementById('agama').value;
    var status = document.getElementById('status').value;
    var jurusan = document.getElementById('jurusan').value;
    var komentar = document.getElementById('komentar').value;

    var output = "NIM: " + nim + "<br>" +
                 "Nama: " + nama + "<br>" +
                 "Jenis Kelamin: " + jenisKelamin + "<br>" +
                 "Agama: " + agama + "<br>" +
                 "Status: " + status + "<br>" +
                 "Jurusan: " + jurusan + "<br>" +
                 "Komentar: " + komentar;

    document.getElementById('output').innerHTML = output;
});
