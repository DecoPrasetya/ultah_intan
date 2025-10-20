// Menunggu sampai seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Bagian 1: Logika Tombol Pesan ---
    
    const button = document.getElementById('specialButton');
    const message = document.getElementById('specialMessage');
    
    button.addEventListener('click', function() {
        // Tampilkan pesan rahasia
        message.classList.remove('hidden');
        
        // Sembunyikan tombolnya
        button.style.display = 'none';
        
        // (Opsional) Panggil fungsi hati saat tombol diklik
        // createHearts(30); 
    });

    
    // --- Bagian 2: Logika Konfeti ---
    
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#e91e63', '#ffeb3b', '#4caf50', '#2196f3', '#9c27b0', '#ff9800'];

    function createConfetti(count) {
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Posisi horizontal acak
            confetti.style.left = Math.random() * 100 + 'vw';
            
            // Warna acak dari array 'colors'
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Durasi jatuh acak (antara 3 sampai 5 detik)
            confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
            
            // Waktu mulai acak (biar jatuhnya gak barengan)
            // Nilai negatif agar beberapa sudah jatuh saat halaman dibuka
            confetti.style.animationDelay = (Math.random() * -5) + 's';
            
            // Tambahkan ke container
            confettiContainer.appendChild(confetti);
        }
    }

    // Panggil fungsi untuk membuat 100 buah konfeti
    createConfetti(100);
});