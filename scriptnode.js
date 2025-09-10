const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan nilai (1-10): ', (jawaban) => {
  let nilai = parseInt(jawaban);

  if (nilai >= 6) {
    console.log("Hasil: Lulus");
  } else {
    console.log("Hasil: Tidak Lulus");
  }

  rl.close();
});