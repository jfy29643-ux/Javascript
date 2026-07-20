// ==========================================
// 1. VARIABEL & 2. TIPE DATA
// ==========================================
const namaSekolah = "SMK NEGERI COMPRENG"; // const karena nama sekolah tidak berubah
let jumlahSiswa = 3;                 // let karena jumlah siswa bisa berubah

// ==========================================
// 5. ARRAY & OBJECT (Data Siswa)
// ==========================================
// Array yang berisi beberapa Object siswa
let daftarSiswa = [
    { nama: "NAPLIHAH", nilai: 98, aktif: true },
    { nama: "JEVA", nilai: 65, aktif: true },
    { nama: "SADEWA", nilai: 90, aktif: false }
];

// ==========================================
// 6. FUNCTION (Fungsi untuk Cek Kelulusan)
// ==========================================
// 3. PERCABANGAN ada di dalam fungsi ini
function cekKelulusan(nilaiSiswa) {
    if (nilaiSiswa >= 92) {
        return "LULUS";
    } else {
        return "REMIDI";
    }
}

// ==========================================
// 4. PERULANGAN (Menampilkan Semua Data)
// ==========================================
console.log("--- DATA KELULUSAN " + namaSekolah + " ---");

// Melakukan perulangan sebanyak jumlah siswa yang ada di array
for (let i = 0; i < daftarSiswa.length; i++) {
    let siswa = daftarSiswa[i]; // Mengambil data siswa satu per satu
    
    // Memanggil function cekKelulusan dan menyimpan hasilnya
    let statusKelulusan = cekKelulusan(siswa.nilai);
    
    // Menampilkan hasil ke konsol
    console.log(
        "Nama: " + siswa.nama + 
        " | Nilai: " + siswa.nilai + 
        " | Status: " + statusKelulusan
    );
}