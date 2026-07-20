const authors = [
  {
    id: 1,
    name: "Robert C. Martin",
    country: "USA"
  },
  {
    id: 2,
    name: "James Clear",
    country: "USA"
  },
  {
    id: 3,
    name: "Marijn Haverbeke",
    country: "Netherlands"
  },
  {
    id: 4,
    name: "Andrea Hirata",
    country: "Indonesia"
  }
];

const books = [
  {
    id: 1,
    title: "Clean Code",
    authorId: 1,
    year: 2008,
    available: true
  },
  {
    id: 2,
    title: "Atomic Habits",
    authorId: 2,
    year: 2018,
    available: false
  },
  {
    id: 3,
    title: "Eloquent JavaScript",
    authorId: 3,
    year: 2019,
    available: true
  },
  {
    id: 4,
    title: "Laskar Pelangi",
    authorId: 4,
    year: 2005,
    available: true
  }
];


// --- OUTPUT TASK 10 (DASHBOARD) ---
const totalBuku = books.length;
const totalPenulis = authors.length;
const bukuTersedia = books.filter(b => b.available === true).length;
const bukuDipinjam = books.filter(b => b.available === false).length;
const penulisIndo = authors.filter(a => a.country === "Indonesia").length;
const penulisLuar = authors.filter(a => a.country !== "Indonesia").length;
const tahunBuku = books.map(b => b.year);
const bukuTerbaru = Math.max(...tahunBuku);
const bukuTerlama = Math.min(...tahunBuku);

console.log("=======================");
console.log("LIBRARY DASHBOARD");
console.log("=======================");
console.log("");
console.log(`Total Buku : ${totalBuku}`);
console.log("");
console.log(`Total Penulis : ${totalPenulis}`);
console.log("");
console.log(`Buku Tersedia : ${bukuTersedia}`);
console.log("");
console.log(`Buku Dipinjam : ${bukuDipinjam}`);
console.log("");
console.log(`Penulis Indonesia : ${penulisIndo}`);
console.log("");
console.log(`Penulis Luar Indonesia : ${penulisLuar}`);
console.log("");
console.log(`Buku Terbaru : ${bukuTerbaru}`);
console.log("");
console.log(`Buku Terlama : ${bukuTerlama}`);
console.log("");
console.log("=======================");