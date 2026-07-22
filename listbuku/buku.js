// 1. Ambil data dari localStorage saat halaman pertama kali dimuat
let dataBuku = JSON.parse(localStorage.getItem('daftarBukuSimpanan')) || [];

// 2. Ambil elemen DOM dari HTML
const inputBuku = document.querySelector('input[name="nama_buku"]');
const btnTambah = document.getElementById('tambah');
const listBuku = document.querySelector('.data-buku');

// 3. Fungsi untuk menyimpan data array ke LocalStorage
function simpanKeLocalStorage() {
  localStorage.setItem('daftarBukuSimpanan', JSON.stringify(dataBuku));
}

// 4. Fungsi untuk menampilkan data ke daftar (<ul>) + Tombol Edit & Hapus
function tampilkanData() {
  listBuku.innerHTML = '';

  dataBuku.forEach((buku) => {
    const li = document.createElement('li');
    
    // Tampilkan nama buku dan tombol aksi
    li.innerHTML = `
      <span>${buku.nama}</span>
      <button onclick="editBuku(${buku.id})">Edit</button>
      <button onclick="hapusBuku(${buku.id})">Hapus</button>
    `;

    listBuku.appendChild(li);
  });
}

// 5. Fungsi Tambah Buku
function tambahBuku() {
  const teksBuku = inputBuku.value.trim();

  if (teksBuku === '') {
    alert('Nama buku tidak boleh kosong!');
    return;
  }

  const bukuBaru = {
    id: Date.now(),
    nama: teksBuku
  };

  dataBuku.push(bukuBaru);
  simpanKeLocalStorage();
  inputBuku.value = '';
  tampilkanData();
}

// 6. Fungsi Hapus Buku
function hapusBuku(id) {
  dataBuku = dataBuku.filter(buku => buku.id !== id);
  simpanKeLocalStorage();
  tampilkanData();
}

// 7. Fungsi Edit Buku
function editBuku(id) {
  const buku = dataBuku.find(buku => buku.id === id);

  if (buku) {
    const namaBaru = prompt('Masukkan nama buku baru:', buku.nama);
    if (namaBaru && namaBaru.trim() !== '') {
      buku.nama = namaBaru.trim();
      simpanKeLocalStorage();
      tampilkanData();
    }
  }
}

// 8. Event Listener & Jalankan Tampilan Awal
btnTambah.addEventListener('click', tambahBuku);
tampilkanData();