const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

// Konfigurasi EJS & Folder Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware Form Data & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data Dummy
let books = [
    { id: 1, title: "Laskar Pelangi", authorId: 1, genre: "Novel" },
    { id: 2, title: "Bumi Manusia", authorId: 2, genre: "Sejarah" }
];

let authors = [
    { id: 1, name: "Andrea Hirata" },
    { id: 2, name: "Pramoedya Ananta Toer" }
];

// Helper Function: Gabung Buku & Penulis
function getFormattedBooks() {
    return books.map(book => {
        const author = authors.find(a => a.id === book.authorId);
        return {
            ...book,
            authorName: author ? author.name : 'Tidak Diketahui'
        };
    });
}

// =========================================================
// ROUTE FRONTEND (Masing-masing panggil file EJS tersendiri)
// =========================================================

// 1. Halaman Utama: Tampilkan Semua Data
app.get('/', (req, res) => {
    res.render('index', { books: getFormattedBooks() });
});

// 2. Halaman Khusus Buku
app.get('/books', (req, res) => {
    res.render('books-list', { books: getFormattedBooks() });
});

// 3. Halaman Khusus Penulis
app.get('/authors', (req, res) => {
    res.render('authors', { authors: authors });
});

// 4. Halaman Form Tambah Buku
app.get('/books/add', (req, res) => {
    res.render('tambah', { authors: authors });
});

// Proses Tambah Buku (POST)
app.post('/books/add', (req, res) => {
    const { title, genre, authorId } = req.body;
    const newBook = {
        id: books.length ? books[books.length - 1].id + 1 : 1,
        title,
        genre: genre || 'Umum',
        authorId: parseInt(authorId)
    };
    books.push(newBook);
    res.redirect('/books');
});

// 5. Halaman Form Edit Buku
app.get('/books/edit/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookToEdit = books.find(b => b.id === bookId);
    if (!bookToEdit) return res.redirect('/books');

    res.render('edit', { book: bookToEdit, authors: authors });
});

// Proses Update Buku (POST)
app.post('/books/update/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, genre, authorId } = req.body;
    
    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex !== -1) {
        books[bookIndex] = {
            id: bookId,
            title,
            genre,
            authorId: parseInt(authorId)
        };
    }
    res.redirect('/books');
});

// 6. Proses Hapus Buku
app.get('/books/delete/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter(b => b.id !== bookId);
    res.redirect('/books');
});

// Jalankan Server
app.listen(PORT, () => console.log(`Server running: http://localhost:3000`));