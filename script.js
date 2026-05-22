// Fungsi utama untuk pindah halaman biasa
function nextPage(pageNumber) {
    const currentPage = document.querySelector('.dynamic-page.active');
    if (currentPage) {
        currentPage.classList.remove('active');
    }
    
    const targetPage = document.getElementById(`page-${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Fungsi kalau di Halaman 2 jawab "Tidak" (Tanya kenapa)
function showSakitPage() {
    const currentPage = document.querySelector('.dynamic-page.active');
    if (currentPage) {
        currentPage.classList.remove('active');
    }
    
    const sakitPage = document.getElementById('page-sakit');
    if (sakitPage) {
        sakitPage.classList.add('active');
    }
}

// Fungsi kalau di Halaman 4 jawab "Tidak" (Reminder makan)
function showReminderPage() {
    const currentPage = document.querySelector('.dynamic-page.active');
    if (currentPage) {
        currentPage.classList.remove('active');
    }
    
    const reminderPage = document.getElementById('page-reminder');
    if (reminderPage) {
        reminderPage.classList.add('active');
    }
}

// Fungsi reset untuk mengembalikan tombol ke tempat semula saat web diulang
function resetPage() {
    const tombolKabur = document.querySelectorAll('.btn-kabur');
    tombolKabur.forEach(tombol => {
        tombol.style.position = '';
        tombol.style.width = '';
        tombol.style.left = '';
        tombol.style.top = '';
    });
    nextPage(0);
}

// Logika Interaktif Tombol Menghindar
const tombolKabur = document.querySelectorAll('.btn-kabur');

tombolKabur.forEach(tombol => {
    function lari() {
        // Ambil ukuran asli tombol (supaya ukurannya tidak mengecil/berubah saat pindah)
        const lebarAsli = tombol.offsetWidth;
        tombol.style.width = `${lebarAsli}px`;
        
        // Ambil info posisi tombol saat ini di layar
        const posisiSekarang = tombol.getBoundingClientRect();
        
        // Jarak lompatan diatur dekat dulu (maksimal bergeser sejauh 60 sampai 120 piksel dari posisi awal)
        const jarakMin = 60;
        const jarakMaks = 120;
        
        // Acak arah (bisa minus ke kiri/atas, bisa plus ke kanan/bawah)
        const arahX = Math.random() < 0.5 ? -1 : 1;
        const arahY = Math.random() < 0.5 ? -1 : 1;
        
        // Hitung koordinat tujuan baru berdasar posisi sekarang ditambah jarak acak yang dekat
        let acakX = posisiSekarang.left + (arahX * (Math.random() * (jarakMaks - jarakMin) + jarakMin));
        let acakY = posisiSekarang.top + (arahY * (Math.random() * (jarakMaks - jarakMin) + jarakMin));
        
        // Batas aman layar agar tidak keluar jendela browser luar
        const batasMaksX = window.innerWidth - lebarAsli - 20;
        const batasMaksY = window.innerHeight - tombol.offsetHeight - 20;
        
        // Validasi posisi agar tetap berada di area dalam layar visual gawai
        acakX = Math.max(20, Math.min(acakX, batasMaksX));
        acakY = Math.max(20, Math.min(acakY, batasMaksY));
        
        // Terapkan perubahan posisi secara dinamis
        tombol.style.position = 'fixed';
        tombol.style.left = `${acakX}px`;
        tombol.style.top = `${acakY}px`;
    }

    // Untuk Laptop/PC (Kursor mendekat)
    tombol.addEventListener('mouseover', lari);
    
    // Untuk HP (Layar disentuh)
    tombol.addEventListener('touchstart', function(e) {
        e.preventDefault(); 
        lari();
    });
});
