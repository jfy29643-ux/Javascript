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

// Tambahkan .slice(0, 2) sebelum .forEach
authors.slice(0, 2).forEach(author => {
  // 1. Cetak nama penulis
  console.log(author.name);
  console.log(""); 
  
  // 2. Hitung jumlah buku
  const jumlahBuku = books.filter(b => b.authorId === author.id).length;
  console.log(`Jumlah Buku : ${jumlahBuku}`);
  
  console.log(""); 
  console.log("-----------------------");
  console.log(""); 
});