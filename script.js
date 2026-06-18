// ==================== AŞK DOLU AKTİVİTELER - JAVASCRIPT ====================
(function() {
    'use strict';

    // DOM
    const tarihInput = document.getElementById('tarihInput');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const romantikCard = document.getElementById('romantikCard');
    const eglenceliCard = document.getElementById('eglenceliCard');
    const aniCard = document.getElementById('aniCard');
    const routesContainer = document.getElementById('routesContainer');
    const youtubePlayer = document.getElementById('youtubePlayer');
    const confettiContainer = document.getElementById('confettiContainer');
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    const countdownText = document.getElementById('countdownText');
    const activityCounter = document.getElementById('activityCounter');
    const favoritesSection = document.getElementById('favoritesSection');
    const favoritesList = document.getElementById('favoritesList');
    const colorPreview = document.getElementById('colorPreview');
    const colorName = document.getElementById('colorName');
    const colorCode = document.getElementById('colorCode');
    const songName = document.getElementById('songName');
    const songArtist = document.getElementById('songArtist');

    let kesfedilenSayi = 0;
    let favoriler = JSON.parse(localStorage.getItem('favoriAktiviteler') || '[]');
    let sonAktiviteler = { romantik: '', eglenceli: '', ani: '' };

    // ==================== 300 AKTİVİTE ====================
    const romantikAktiviteler = [
        "🌅 Boğaz'da gün batımı", "🕯️ Mum ışığında yemek", "💃 Dans kursu", "🎻 Canlı müzik",
        "🍷 Şarap tadımı", "🌹 Gizli bahçe pikniği", "🛁 Spa & masaj", "📖 Aşk mektupları",
        "🎬 Film maratonu", "🌌 Yıldız izleme", "🍫 Çikolata fondü", "💌 Hediye atölyesi",
        "🎶 Playlist yapma", "🚤 Boğaz turu", "🌸 Çiçek aranjmanı", "🕺 Dans gecesi",
        "📸 Fotoğraf çekimi", "🍝 İtalyan yemeği", "🎨 Resim yapma", "🌿 Botanik bahçesi",
        "🎭 Opera/bale", "🍳 Sürpriz kahvaltı", "🎹 Piyano dinletisi", "📚 Kitapçı turu",
        "🌊 Sahil yürüyüşü", "🕰️ Antikacı gezisi", "🍵 Çay bahçesi", "🎈 Balonlu oda",
        "💐 Çiçek alma", "🌙 Ay ışığı yürüyüşü", "🎵 Plak dinleme", "🍰 Pasta yapımı",
        "📝 Şiir yazma", "🎭 Tiyatro", "🍣 Suşi yapımı", "💑 Çift yogası",
        "🎡 Dönme dolap", "🌲 Orman yürüyüşü", "🕯️ Mum yapımı", "🎨 Mozaik boyama",
        "📖 Hikaye okuma", "🍯 Bal tadımı", "🌅 Sabah güneşi", "🎻 Keman dinletisi",
        "🕊️ Güvercin besleme", "🖼️ Sanat galerisi", "🍮 Muhallebi yapma", "🌺 Tropikal sera",
        "💌 Mektup yazma", "🕯️ Aromaterapi", "🌿 Bitki yetiştirme", "🎶 Müzik kutusu",
        "🌹 Gül bahçesi", "🎻 Oda müziği", "🍵 Japon çayı", "🌸 Sakura izleme",
        "🎨 Ebru sanatı", "🕯️ Mumlu akşam", "📸 Albüm hazırlama", "🎭 Gölge oyunu",
        "🌙 Gece pikniği", "🎵 Vinyl gecesi", "💑 Meditasyon", "🍫 Çikolata yapımı",
        "🌅 Gün batımı teknesi", "🎨 Seramik boyama", "🕊️ Kuş sesleri", "📖 Şiir antolojisi",
        "🎹 Müzik dersi", "🌿 Lavanta bahçesi", "🍷 Şarap mahzeni", "🎭 Bale gösterisi",
        "🕯️ El yapımı mum", "🌌 Meteor yağmuru", "🎨 Tuval boyama", "💌 Kartpostal yazma",
        "🌅 Deniz kenarı kahvaltı", "🎨 Suluboya", "🍷 Peynir & şarap", "🎵 Canlı caz",
        "🌹 Gül yapraklı banyo", "📸 Polaroid çekim", "🎨 Karakalem portre", "🕯️ El ele masaj",
        "🌿 Ormanda kamp", "🍫 Çikolata tadımı", "🎻 Viyolonsel", "💑 Sokak dansı",
        "🌅 Balon turu", "🕯️ Şömine başı", "🎨 Mozaik lamba", "🌌 Gözlemevi"
    ];

    const eglenceliAktiviteler = [
        "🎤 Karaoke", "🎮 Oyun salonu", "🍔 Sokak lezzetleri", "🎢 Luna park",
        "🎲 Masa oyunları", "🤹 Sokak gösterisi", "🍦 Dondurma tadımı", "🎯 Dart",
        "🎨 Komik portre", "🚲 Tandem bisiklet", "🎭 Doğaçlama tiyatro", "🎳 Bowling",
        "🧩 Kaçış odası", "🍿 Komedi filmi", "🎪 Festival", "🎸 Müzik atölyesi",
        "🤸 Parkur", "🕹️ VR oyun", "🍳 Yemek yarışı", "🎯 Laser tag",
        "🏓 Masa tenisi", "🎱 Bilardo", "🛼 Roller paten", "⛸️ Buz pateni",
        "🎿 Kayak", "🏄 Sörf", "🧗 Kaya tırmanışı", "🎪 Trambolin",
        "🤹 Jonglör", "🎨 Graffiti", "🕺 Hip hop", "🎤 Rap battle",
        "📸 Komik fotoğraf", "🎭 Kukla tiyatrosu", "🍕 Pizza yarışı", "🧁 Cupcake süsleme",
        "🍣 Suşi yuvarlama", "🎯 Balon patlatma", "🕹️ Atari", "🎲 Monopoly",
        "🧩 Yapboz", "🎨 Parmak boyama", "🖍️ Tebeşir sanatı", "🎈 Su balonu",
        "🔫 Su tabancası", "🎤 Yetenek yarışması", "💃 Dans yarışması", "🎸 Hava gitarı",
        "🎮 Wii Sports", "🎯 Halka atma", "🏹 Ok atma", "🪓 Balta atma",
        "🎳 Mini bowling", "⛳ Mini golf", "🏓 Pickleball", "🤸 Jimnastik",
        "🛹 Kaykay", "🏀 Basketbol", "⚽ Futbol", "🏐 Voleybol",
        "🎾 Tenis", "🏸 Badminton", "🏒 Hokey", "🎿 Su kayağı",
        "🏊 Yüzme", "🤿 Şnorkel", "🐠 Akvaryum", "🦁 Hayvanat bahçesi",
        "🐒 Maymun besleme", "🦜 Papağan", "🐎 Ata binme", "🐪 Deve turu",
        "🎢 Su kaydırağı", "🏰 Kumdan kale", "🪁 Uçurtma", "🪂 Yamaç paraşütü",
        "🚁 Helikopter turu", "🏎️ Go-kart", "🎳 Disko bowling", "🕺 Silent disco",
        "🎪 Palyaço makyajı", "🎈 Balon hayvan", "🎭 Kostüm parti", "🍕 Yeme yarışı"
    ];

    const aniAktiviteler = [
        "📸 Polaroid avı", "📔 Anı defteri", "🎨 Seramik boyama", "🧵 Bileklik yapımı",
        "🎬 Kısa film", "🖼️ Fotoğraf kolajı", "💿 Mix CD", "🗺️ Gelecek haritası",
        "📮 Zaman kapsülü", "🎭 Gölge oyunu", "🧁 Kek süsleme", "🎈 Mesaj balonu",
        "📱 TikTok videosu", "🖌️ Tuval resim", "🎵 Şarkı besteleme", "📚 Kitap ayracı",
        "🎪 Anı kutusu", "🖼️ Dijital albüm", "✒️ Kaligrafi", "🎨 Parmak sanatı",
        "📖 Hikaye kitabı", "🎭 Kukla yapımı", "🖌️ Taş boyama", "🧶 Örgü öğrenme",
        "🎨 Ebru sanatı", "📸 Albüm yapma", "💌 Kartpostal", "🎵 Şarkı sözü",
        "📔 Seyahat günlüğü", "🖼️ Kolaj tablo", "🎭 Maske yapımı", "🧵 Nakış",
        "📱 Vlog çekimi", "🎨 Vitray", "💿 Podcast", "📖 Şiir antolojisi",
        "🖌️ Minyatür", "🎭 Kostüm", "🧶 Makrome", "🎨 Akrilik boyama",
        "📸 Konsept çekim", "💌 Mühür yapımı", "🎵 Enstrüman", "📔 Tarif defteri",
        "🖼️ Gölge kutusu", "🎨 Mozaik sanatı", "📱 Stop motion", "💿 Cover kaydetme",
        "✒️ Hat sanatı", "🧵 Keçe sanatı", "🎭 Gölge tiyatrosu", "📸 Anı köşesi",
        "🖌️ Karakalem portre", "🎨 Pastel boya", "💌 Mektup kutusu", "🧶 Amigurumi",
        "📖 Anı defteri süsleme", "🎭 Origami", "🖼️ Çerçeve süsleme", "🎨 Su mermeri",
        "📱 Animasyon", "💿 Sesli mesaj", "✒️ El yazısı", "🧵 Kumaş boyama",
        "🎨 Sabun yapımı", "🖌️ Ahşap boyama", "📸 Siyah-beyaz fotoğraf", "🎭 Papier-mâché",
        "🧶 Ponpon yapımı", "💌 Zarf süsleme", "🎨 Mum boyama", "📔 Planner süsleme",
        "🖼️ Duvar sanatı", "✒️ Davetiye", "🧵 Patchwork", "🎨 Batik",
        "📱 Dijital scrapbook", "💿 Müzik videosu", "🎭 Gölge kuklası", "🖌️ Suluboya kart",
        "🧶 Dantel", "🎨 Kolaj sanatı", "📸 360 fotoğraf", "💌 Balonlu mektup",
        "✒️ İsim yazma", "🧵 Kanaviçe", "🎭 Maskot yapımı", "📔 Anı baskısı"
    ];

    // ==================== ROTALAR ====================
    const rotalar = [
        [
            { isim: '🏛️ Galata Kulesi', link: '