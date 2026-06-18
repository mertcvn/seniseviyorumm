// ==================== 300 AKTİVİTELİ AŞK UYGULAMASI ====================
(function() {
    'use strict';

    // ==================== ŞİFRE SİSTEMİ ====================
    const DOGRU_SIFRE = "aşk123";
    
    const passwordOverlay = document.getElementById('passwordOverlay');
    const siteContent = document.getElementById('siteContent');
    const passwordInput = document.getElementById('passwordInput');
    const passwordBtn = document.getElementById('passwordBtn');
    const passwordError = document.getElementById('passwordError');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordHint = document.getElementById('passwordHint');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Sayfa yüklendiğinde
    window.addEventListener('DOMContentLoaded', function() {
        passwordOverlay.style.display = 'flex';
        siteContent.style.display = 'none';
        siteContent.classList.remove('visible');
        passwordInput.focus();
    });
    
    // Şifre kontrolü
    function sifreKontrol() {
        const girilenSifre = passwordInput.value.trim();
        
        if (girilenSifre === DOGRU_SIFRE) {
            passwordOverlay.style.display = 'none';
            siteContent.style.display = 'flex';
            siteContent.classList.add('visible');
            passwordError.classList.remove('show');
            passwordInput.value = '';
            siteyiBaslat();
            console.log('💕 Hoş geldiniz!');
        } else {
            passwordError.classList.add('show');
            passwordInput.style.borderColor = '#c41e3a';
            passwordInput.style.animation = 'shake 0.5s ease';
            
            setTimeout(() => {
                passwordInput.style.borderColor = '#ffb3c6';
                passwordInput.style.animation = '';
            }, 1000);
            
            passwordInput.value = '';
            passwordInput.focus();
        }
    }
    
    // Şifre göster/gizle
    passwordToggle.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.innerHTML = '<i class="fas fa-eye"></i>';
        } else {
            passwordInput.type = 'password';
            this.innerHTML = '<i class="fas fa-eye-slash"></i>';
        }
    });
    
    // Enter ile giriş
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sifreKontrol();
    });
    
    // Buton tıklama
    passwordBtn.addEventListener('click', sifreKontrol);
    
    // Şifre ipucu
    passwordHint.addEventListener('click', function() {
        alert('💕 Şifremiz: aşk123');
    });
    
    // Çıkış yap
    logoutBtn.addEventListener('click', function() {
        siteContent.style.display = 'none';
        siteContent.classList.remove('visible');
        passwordOverlay.style.display = 'flex';
        passwordInput.value = '';
        passwordError.classList.remove('show');
        passwordInput.type = 'password';
        passwordToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
        passwordInput.focus();
        
        // Müziği durdur
        document.getElementById('youtubePlayer').src = '';
        
        // Aktiviteleri sıfırla
        sifirlaAktiviteler();
        
        console.log('👋 Güle güle!');
    });

    // ==================== SİTE BAŞLATMA ====================
    function siteyiBaslat() {
        // Tarihi bugüne ayarla
        document.getElementById('bulusmaTarihi').value = new Date().toISOString().slice(0, 10);
        
        // Günün rengi ve şarkısı
        gununRenginiAyarla();
        gununSarkisiniAyarla();
        
        // Uçuşan kalpler
        kalpOlustur();
        
        // Müzik başlat
        muzikBaslat();
        
        // Aktiviteleri sıfırla (boş göster)
        sifirlaAktiviteler();
    }

    // ==================== GÜNÜN RENGİ ====================
    const renkler = [
        { isim: "Aşk Pembesi", renk: "#ff6b9d" },
        { isim: "Tutku Kırmızısı", renk: "#e63946" },
        { isim: "Romantik Mor", renk: "#9b59b6" },
        { isim: "Şeftali Rüyası", renk: "#ff9a8b" },
        { isim: "Gül Kırmızısı", renk: "#c41e3a" },
       