const express = require('express');
const app = express();
const PORT = 3000;

// Middleware agar server bisa membaca format JSON
app.use(express.json());

// --- DATA UTAMA ---
const authors = [
  { id: 1, name: "Robert C. Martin", country: "USA" },
  { id: 2, name: "James Clear", country: "USA" },
  { id: 3, name: "Marijn Haverbeke", country: "Netherlands" },
  { id: 4, name: "Andrea Hirata", country: "Indonesia" }
];

const books = [
  { id: 1, title: "Clean Code", authorId: 1, year: 2008, available: true },
  { id: 2, title: "Atomic Habits", authorId: 2, year: 2018, available: false },
  { id: 3, title: "Eloquent JavaScript", authorId: 3, year: 2019, available: true },
  { id: 4, title: "Laskar Pelangi", authorId: 4, year: 2005, available: true }
];

// --- ENDPOINT API ---

// 1. Root Endpoint (Pesan Selamat Datang)
app.get('/', (req, res) => {
  res.json({ message: "Selamat datang di API Perpustakaan!" });
});

// 2. Mendapatkan semua data Penulis (Authors)
app.get('/api/authors', (req, res) => {
  res.status(200).json(authors);
});

// 3. Mendapatkan semua data Buku (Books)
app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

// 4. Mendapatkan detail satu buku berdasarkan ID
app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Buku tidak ditemukan!" });
  }

  // Menggabungkan data buku dengan data penulisnya
  const author = authors.find(a => a.id === book.authorId);
  res.status(200).json({
    ...book,
    author: author ? author.name : "Unknown"
  });
});

// 5. Menambahkan buku baru
app.post('/api/books', (req, res) => {
  const { title, authorId, year, available } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    authorId,
    year,
    available: available ?? true
  };

  books.push(newBook);
  res.status(201).json({
    message: "Buku berhasil ditambahkan!",
    data: newBook
  });
});

// Menjalankan Server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});