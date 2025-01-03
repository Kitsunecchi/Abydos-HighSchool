// Ambil semua elemen gambar dan informasi karakter
const images = document.querySelectorAll('.characters .img');
const info = document.querySelectorAll('.char-column .char-info');
const circles = document.querySelectorAll('.visual-clr span'); // Ambil elemen lingkaran
let currentIndex = 0; // Indeks gambar saat ini

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      // Reset semua lingkaran
      circles.forEach((c) => {
        c.classList.remove('active');
      });
  
      // Tambahkan kelas aktif pada lingkaran yang ditekan
      circle.classList.add('active');
  
      // Tampilkan gambar dan informasi sesuai indeks yang ditekan
      showImage(index);
    });
  });

// Fungsi untuk menampilkan gambar dan informasi berdasarkan indeks
function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none'; // Tampilkan gambar yang sesuai dengan indeks
    });
    
    info.forEach((charInfo, i) => {
        charInfo.style.display = (i === index) ? 'block' : 'none'; // Tampilkan informasi karakter yang sesuai dengan indeks
    });

    // Reset semua lingkaran
    circles.forEach(circle => {
        circle.classList.remove('active'); // Hapus kelas aktif dari semua lingkaran
    });
    
    // Tambahkan kelas aktif pada lingkaran yang sesuai
    circles[index].classList.add('active');
}

// Fungsi untuk menampilkan gambar berikutnya
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Pindah ke gambar berikutnya, kembali ke awal jika sudah di akhir
    showImage(currentIndex); // Tampilkan gambar dan informasi sesuai indeks yang baru
}

// Fungsi untuk menampilkan gambar sebelumnya
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Pindah ke gambar sebelumnya, kembali ke akhir jika sudah di awal
    showImage(currentIndex); // Tampilkan gambar dan informasi sesuai indeks yang baru
}

// Tambahkan event listener untuk tombol
document.getElementById('left-btn').addEventListener('click', showPreviousImage);
document.getElementById('right-btn').addEventListener('click', showNextImage);

// Tampilkan gambar dan informasi pertama saat halaman dimuat
showImage(currentIndex);