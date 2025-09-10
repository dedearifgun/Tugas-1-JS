let nilai = prompt("Masukkan nilai anda (1-10):");
nilai = parseInt(nilai);

let hasil;
if (isNaN(nilai)) {
  hasil = "Input tidak valid!";
} else if (nilai >= 6) {
  hasil = "Lulus";
} else {
  hasil = "Tidak Lulus";
}

document.getElementById("hasil").innerText = "Hasil: " + hasil;
