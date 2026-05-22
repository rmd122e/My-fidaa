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