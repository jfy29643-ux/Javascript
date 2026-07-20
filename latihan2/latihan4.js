// 1. Diberikan data array of object students sesuai soal
const students = [
    { name: "Andi", score: 90 },
    { name: "Budi", score: 65 },
    { name: "Caca", score: 80 },
    { name: "Dina", score: 55 }
];

// 2. Menyiapkan variabel penampung untuk rekap data (statistik)
let jumlahSiswa = students.length; // Menghitung total siswa di array
let lulus = 0;
let tidakLulus = 0;
let totalSkor = 0;

// 3. Perulangan untuk memproses data setiap siswa satu per satu
for (let i = 0; i < students.length; i++) {
    let nama = students[i].name;
    let nilai = students[i].score;
    let grade = "";

    // Menambahkan nilai siswa saat ini ke totalSkor untuk menghitung rata-rata nanti
    totalSkor += nilai;

    // 4. Aturan Penentuan Grade & Status Kelulusan
    if (nilai >= 90 && nilai <= 100) {
        grade = "A"; // [cite: 129]
    } else if (nilai >= 80 && nilai < 90) {
        grade = "B"; // [cite: 130]
    } else if (nilai >= 70 && nilai < 80) {
        grade = "C"; // [cite: 131, 132]
    } else {
        grade = "D"; // [cite: 133, 134]
    }

    // Menentukan kelulusan: Lulus jika nilai >= 70
    if (nilai >= 70) { // [cite: 135]
        lulus++;
    } else {
        tidakLulus++;
    }

    // Tampilkan data individu siswa sesuai format target
    console.log("Nama: " + nama);
    console.log("Nilai: " + nilai);
    console.log("Grade: " + grade);
    console.log(""); // Baris kosong pemisah antar siswa
}

// 5. Menghitung Rata-rata Nilai
let rataRata = totalSkor / jumlahSiswa;

// 6. Menampilkan Hasil Rekap Akhir
console.log("Jumlah Siswa : " + jumlahSiswa); // [cite: 123]
console.log("Lulus: " + lulus); // [cite: 124]
console.log("Tidak Lulus : " + tidakLulus); // [cite: 125]
console.log("Rata-rata: " + rataRata); //