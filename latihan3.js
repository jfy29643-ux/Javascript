// 1. Diberikan data array of object products sesuai gambar di dokumen
const products = [
    {
        name: "Indomie",
        price: 3500,
        stock: 10
    },
    {
        name: "Susu",
        price: 18000,
        stock: 0
    },
    {
        name: "Roti",
        price: 12000,
        stock: 5
    }
];

// 2. Melakukan perulangan untuk membaca setiap produk di dalam array
for (let i = 0; i < products.length; i++) {
    
    // Menampilkan nama produk
    console.log(products[i].name);
    
    // Menampilkan harga produk
    console.log("Harga: " + products[i].price);
    
    // 3. Pengkondisian untuk menentukan status berdasarkan stock
    if (products[i].stock > 0) {
        // Jika stock lebih dari 0, status Tersedia
        console.log("Status: Tersedia");
    } else {
        // Jika stock sama dengan 0, status Habis
        console.log("Status: Habis");
    }
    
    // Menambahkan baris kosong sebagai pemisah antar produk agar rapi di konsol
    console.log(""); 
}