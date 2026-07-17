// 1. Diberikan data array of object cart sesuai soal
const cart = [
    { name: "Mouse", price: 120000, qty: 2 },
    { name: "Keyboard", price: 250000, qty: 1 },
    { name: "Flashdisk", price: 90000, qty: 3 }
];

// 2. Menyiapkan variabel untuk menampung total belanja keseluruhan
let totalBelanja = 0;

// 3. Perulangan untuk menghitung subtotal setiap barang dan total belanja
for (let i = 0; i < cart.length; i++) {
    let nama = cart[i].name;
    let harga = cart[i].price;
    let jumlah = cart[i].qty;
    
    // Menghitung subtotal (harga dikali jumlah barang)
    let subtotal = harga * jumlah;
    
    // Menambahkan subtotal ke total belanja keseluruhan
    totalBelanja += subtotal;
    
    // Tampilkan detail per barang sesuai format target
    console.log(nama);
    console.log(harga + " x " + jumlah + " = " + subtotal);
}

// 4. Menghitung diskon berdasarkan ketentuan
// Jika total belanja lebih dari 500.000, dapat diskon 10%. Jika tidak, diskon 0.
let diskon = 0;
if (totalBelanja > 500000) {
    diskon = totalBelanja * 0.10; // 0.10 sama dengan 10%
} else {
    diskon = 0;
}

// 5. Menghitung total akhir yang harus dibayar
let totalBayar = totalBelanja - diskon;

// 6. Menampilkan rekap hasil akhir kasir
console.log("Total Belanja: " + totalBelanja);
console.log("Diskon " + diskon);
console.log("Total Bayar: " + totalBayar);