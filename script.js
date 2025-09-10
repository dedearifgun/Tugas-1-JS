function cekNilai(nilai) {
  if (isNaN(nilai)) {
    return "Input tidak valid!";
  } else if (nilai >= 6) {
    return "Lulus";
  } else {
    return "Tidak Lulus";
  }
}

// --- Jika dijalankan di browser ---
if (typeof window !== "undefined") {
  let nilai = prompt("Masukkan nilai anda (1-10):");
  nilai = parseInt(nilai);

  let hasil = cekNilai(nilai);
  document.getElementById("hasil").innerText = "Hasil: " + hasil;
}

// --- Jika dijalankan di Node.js ---
if (typeof process !== "undefined" && process.argv.length > 2) {
  let nilai = parseInt(process.argv[2]);
  console.log("Hasil:", cekNilai(nilai));
}
