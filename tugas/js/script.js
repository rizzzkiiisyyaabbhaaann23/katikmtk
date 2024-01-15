document.getElementById('countluas').addEventListener('click', hitungLuas);
document.getElementById('countkeliling').addEventListener('click', hitungKeliling);
document.getElementById('resetluas').addEventListener('click', resetInputLuas);
document.getElementById('resetkeliling').addEventListener('click', resetInputKeliling);

function hitungLuas() {
    var nilaiSisi = parseFloat(document.getElementById('squareSideL').value);

    // Cek apakah nilai sisi valid
    if (isNaN(nilaiSisi)) {
        alert('Masukkan panjang sisi yang valid.');
        return;
    }

    // Update nilai pada elemen span
    document.getElementById('nilaiSisi1').textContent = nilaiSisi;
    document.getElementById('nilaiSisi2').textContent = nilaiSisi;

    // Hitung dan tampilkan hasil luas
    var luas = nilaiSisi * nilaiSisi;
    document.getElementById('hasil').textContent = luas;

    // Tampilkan div hasil
    document.getElementById('hasilContainer').style.display = 'block';
}
function hitungKeliling() {
    var nilaiSisi = parseFloat(document.getElementById('squareSideK').value);

    // Cek apakah nilai sisi valid
    if (isNaN(nilaiSisi)) {
        alert('Masukkan panjang sisi yang valid.');
        return;
    }

    // Update nilai pada elemen span
    document.getElementById('nilaiSisi').textContent = nilaiSisi;

    // Hitung dan tampilkan hasil luas
    var keliling = 4 * nilaiSisi;
    document.getElementById('hasilk').textContent = keliling;

    // Tampilkan div hasil
    document.getElementById('hasilContainerK').style.display = 'block';
}


function resetInputLuas() {
    document.getElementById('squareSideL').value = '';
    document.getElementById('nilaiSisi1').textContent = '';
    document.getElementById('nilaiSisi2').textContent = '';
    document.getElementById('hasil').textContent = '';

    // Sembunyikan div hasil
    document.getElementById('hasilContainer').style.display = 'none';
}
function resetInputKeliling() {
    document.getElementById('squareSideK').value = '';
    document.getElementById('nilaiSisi1').textContent = '';
    document.getElementById('hasilk').textContent = '';

    // Sembunyikan div hasil
    document.getElementById('hasilContainerK').style.display = 'none';
}