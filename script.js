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

// Logika Interaktif Tombol Menghindar (Aman untuk GitHub Pages & Chrome)
const tombolKabur = document.querySelectorAll('.btn-kabur');

tombolKabur.forEach(tombol => {
    function lari() {
        // 1. Kunci ukuran tombol agar tidak mengecil saat berubah jadi fixed
        const lebarAsli = tombol.offsetWidth;
        tombol.style.width = `${lebarAsli}px`;
        
        // 2. Ambil ukuran layar browser Fida saat itu
        const lebarLayar = window.innerWidth;
        const tinggiLayar = window.innerHeight;
        
        // 3. Cari titik tengah layar (lokasi kartu web kamu berada)
        const tengahX = lebarLayar / 2;
        const tengahY = tinggiLayar / 2;
        
        // 4. Batasi jarak lari tombol agar hanya bergeser sedikit di sekitar area kartu
        // Jarak acak berkisar antara -80px sampai +80px dari titik tengah layar
        const rentangLari = 80; 
        const acakX = tengahX + (Math.random() * (rentangLari * 2) - rentangLari) - (lebarAsli / 2);
        const acakY = tengahY + (Math.random() * (rentangLari * 2) - rentangLari) - (tombol.offsetHeight / 2);
        
        // 5. Batas aman final agar tombol mutlak tidak bablas keluar dari tepi layar HP/Laptop
        const batasMaksX = lebarLayar - lebarAsli - 20;
        const batasMaksY = tinggiLayar - tombol.offsetHeight - 20;
        
        const koordinatX = Math.max(20, Math.min(acakX, batasMaksX));
        const koordinatY = Math.max(20, Math.min(acakY, batasMaksY));
        
        // 6. Eksekusi perpindahan posisi secara paksa dan instan
        tombol.style.position = 'fixed';
        tombol.style.left = `${koordinatX}px`;
        tombol.style.top = `${koordinatY}px`;
    }

    // Trigger saat kursor PC/Laptop mendekati tombol
    tombol.addEventListener('mouseover', lari);
    
    // Trigger saat layar HP/Smartphone disentuh oleh Fida
    tombol.addEventListener('touchstart', function(e) {
        e.preventDefault(); // Menghentikan aksi default klik bawaan browser Chrome
        lari();
    });
});
