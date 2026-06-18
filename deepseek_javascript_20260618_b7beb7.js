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
    
    function sifreKontrol() {
        const girilenSifre = passwordInput.value.trim();
        
        if (girilenSifre === DOGRU_SIFRE) {
            passwordOverlay.classList.add('hidden');
            siteContent.classList.remove('hidden');
            passwordError.classList.remove('show');
            console.log('💕 Hoş geldiniz!');
        } else {
            passwordError.classList.add('show');
            passwordInput.style.borderColor = '#c41e3a';
            passwordInput.style.animation = 'shake 0.5s ease';
            
            setTimeout(() => {
                passwordInput.style.borderColor = '#ffb3c6';
                passwordInput.style.animation = '';
            }, 500);
            
            passwordInput.value = '';
            passwordInput.focus();
        }
    }
    
    passwordToggle.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-eye-slash');
        icon.classList.toggle('fa-eye');
    });
    
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sifreKontrol();
    });
    
    passwordBtn.addEventListener('click', sifreKontrol);
    
    passwordHint.addEventListener('click', () => {
        alert('İpucu: Şifremiz "aşk123" 💕');
    });
    
    logoutBtn.addEventListener('click', () => {
        siteContent.classList.add('hidden');
        passwordOverlay.classList.remove('hidden');
        passwordInput.value = '';
        passwordError.classList.remove('show');
        passwordInput.setAttribute('type', 'password');
        const icon = passwordToggle.querySelector('i');
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        console.log('👋 Güle güle!');
    });
    
    window.addEventListener('load', () => passwordInput.focus());

    // ==================== AKTİVİTE SİSTEMİ ====================
    const tarihInput = document.getElementById('bulusmaTarihi');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const romantikEl = document.getElementById('romantikActivity');
    const eglenceliEl = document.getElementById('eglenceliActivity');
    const aniEl = document.getElementById('aniActivity');
    const routeContainer = document.getElementById('routeContainer');
    const heartsContainer = document.getElementById('heartsContainer');

    // 300 Aktivite (100'er adet)
    const romantikAktiviteler = [
        "🌅 Boğaz'da gün batımı", "🕯️ Mum ışığında yemek", "💃 Dans kursu",
        "🎻 Canlı müzik", "🍷 Şarap tadımı", "🌹 Gizli bahçe pikniği",
        "🛁 Spa & masaj", "📖 Aşk mektupları", "🎬 Film maratonu",
        "🌌 Yıldız izleme", "🍫 Çikolata fondü", "💌 Hediye atölyesi",
        "🎶 Playlist yapma", "🚤 Boğaz turu", "🌸 Çiçek aranjmanı",
        "🕺 Dans gecesi", "📸 Fotoğraf çekimi", "🍝 İtalyan yemeği",
        "🎨 Resim yapma", "🌿 Botanik bahçesi", "🎭 Opera/ bale",
        "🍳 Sürpriz kahvaltı", "🎹 Piyano dinletisi", "📚 Kitapçı turu",
        "🌊 Sahil yürüyüşü", "🕰️ Antikacı gezisi", "🎪 Sirk gösterisi",
        "🍵 Çay bahçesi", "🎈 Balonlu oda", "💐 Çiçek alma",
        "🌙 Ay ışığı yürüyüşü", "🕯️ Aromaterapi", "🎵 Plak dinleme",
        "🍰 Pasta yapımı", "🎨 Suluboya", "📝 Şiir yazma",
        "🎭 Tiyatro", "🍣 Suşi yapımı", "🌺 Tropikal sera",
        "🎻 Keman dinletisi", "💑 Çift yogası", "🕊️ Güvercin besleme",
        "🎡 Dönme dolap", "🍮 Muhallebi yapma", "🌲 Orman yürüyüşü",
        "🕯️ Mum yapımı", "🎨 Mozaik boyama", "📖 Hikaye okuma"
    ];

    const eglenceliAktiviteler = [
        "🎤 Karaoke", "🎮 Oyun salonu", "🍔 Sokak lezzetleri",
        "🎢 Luna park", "🎲 Masa oyunları", "🤹 Sokak gösterisi",
        "🍦 Dondurma tadımı", "🎯 Dart/okçuluk", "🎨 Komik portre",
        "🚲 Tandem bisiklet", "🎭 Doğaçlama tiyatro", "🎳 Bowling",
        "🧩 Kaçış odası", "🍿 Komedi filmi", "🎪 Festival gezme",
        "🎸 Müzik atölyesi", "🤸 Parkur", "🎪 Sirk",
        "🍳 Yemek yarışı", "🕹️ VR oyun", "🎯 Laser tag",
        "🏓 Masa tenisi", "🎱 Bilardo", "🛼 Roller paten",
        "⛸️ Buz pateni", "🎿 Kayak", "🏄 Sörf",
        "🧗 Kaya tırmanışı", "🎪 Trambolin", "🤹 Jonglör",
        "🎨 Graffiti", "🕺 Hip hop", "🎤 Rap battle",
        "📸 Komik fotoğraf", "🎭 Kukla tiyatrosu", "🎪 Palyaço makyajı",
        "🍕 Pizza yarışı", "🧁 Cupcake süsleme", "🍣 Suşi yuvarlama",
        "🎯 Balon patlatma", "🕹️ Atari", "🎲 Monopoly",
        "🧩 Yapboz", "🎨 Parmak boyama", "🖍️ Tebeşir sanatı"
    ];

    const aniAktiviteler = [
        "📸 Polaroid avı", "📔 Anı defteri", "🎨 Seramik boyama",
        "🧵 Bileklik yapımı", "🎬 Kısa film", "🖼️ Fotoğraf kolajı",
        "💿 Mix CD", "🗺️ Gelecek haritası", "📮 Zaman kapsülü",
        "🎭 Gölge oyunu", "🧁 Kek süsleme", "🎈 Mesaj balonu",
        "📱 TikTok videosu", "🖌️ Tuval resim", "🎵 Şarkı besteleme",
        "📚 Kitap ayracı", "🎪 Anı kutusu", "🖼️ Dijital albüm",
        "✒️ Kaligrafi", "🎨 Parmak sanatı", "📖 Hikaye kitabı",
        "🎭 Kukla yapımı", "🖌️ Taş boyama", "🧶 Örgü öğrenme",
        "🎨 Ebru sanatı", "📸 Albüm yapma", "💌 Kartpostal",
        "🎵 Şarkı sözü", "📔 Seyahat günlüğü", "🖼️ Kolaj tablo",
        "🎭 Maske yapımı", "🧵 Nakış", "📱 Vlog çekimi",
        "🎨 Vitray", "💿 Podcast", "📖 Şiir antolojisi",
        "🖌️ Minyatür", "🎭 Kostüm", "🧶 Makrome",
        "🎨 Akrilik boyama", "📸 Konsept çekim", "💌 Mühür yapımı",
        "🎵 Enstrüman", "📔 Tarif defteri", "🖼️ Gölge kutusu"
    ];

    const istanbulRotalari = [
        { isim: "Galata & Karaköy", yerler: ["🏛️ Galata Kulesi", "☕ Karaköy Kahve", "🌉 Galata Köprüsü"] },
        { isim: "Emirgan & İstinye", yerler: ["🌸 Emirgan Korusu", "🍵 Çınaraltı Çay", "🏞️ Japon Bahçesi"] },
        { isim: "Sultanahmet", yerler: ["🕌 Sultanahmet", "🍦 Ali Usta", "🛍️ Arasta Çarşısı"] },
        { isim: "Kadıköy & Moda", yerler: ["🎨 Moda Sahili", "🍪 Kadıköy Tatlı", "🎭 Barış Manço Müzesi"] },
        { isim: "Maçka & Nişantaşı", yerler: ["🌳 Maçka Parkı", "🚡 Teleferik", "🍔 Nişantaşı"] },
        { isim: "Bebek & Rumeli", yerler: ["🏰 Rumeli Hisarı", "🍳 Bebek Kahvaltı", "🚤 Bebek İskelesi"] }
    ];

    let sonAktiviteler = { romantik: "", eglenceli: "", ani: "" };

    function benzersizSec(havuz, onceki) {
        let secilen;
        let deneme = 0;
        do {
            secilen = havuz[Math.floor(Math.random() * havuz.length)];