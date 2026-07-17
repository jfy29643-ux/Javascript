//1. Diberikan data array nilai sesuai soal
const nilai = [85, 60, 90, 75, 40, 100];

// 2. Melakukan perulangan menggunakan 'for' untuk memeriksa satu per satu nilainya
for (let i = 0; i < nilai.length; i++) { 
    
    // 3. Pengkondisian: Jika nilai lebih besar atau sama dengan 70, maka Lulus
    if (nilai[i] >= 70) { 
        console.log("Nilai " + nilai[i] + " -> Lulus"); 
    } 
    // 4. Selain itu (di bawah 70), maka Tidak Lulus
    else { 
        console.log("Nilai " + nilai[i] + " -> Tidak Lulus"); 
    }
}