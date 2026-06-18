// YouTube API ve Müzik Çalar
let player;
let currentVideoId = '450p7goxZqg'; // All of Me - John Legend (varsayılan)

// YouTube API hazır olduğunda
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        height: '70',
        width: '120',
        videoId: currentVideoId,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'playlist': currentVideoId
        },
        events: {
            'onReady': onPlayerReady,
            'onError': onPlayerError
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(50);
}

function onPlayerError(event) {
    console.log('Video yüklenemedi, yedek video deneniyor...');
    // Hata durumunda yedek video
    player.loadVideoById('kJQP7kiw5Fk'); // Despacito (yedek)
}

// Günün Şarkıları
const dailySongs = [
    { name: 'All of Me', artist: 'John Legend', videoId: '450p7goxZqg' },
    { name: 'Perfect', artist: 'Ed Sheeran', videoId: '2Vv-BfVoq4g' },
    { name: 'Geçer', artist: 'Tarkan', videoId: 'yP1FjDWkUZ4' },
    { name: 'Aşk', artist: 'Sezen Aksu', videoId: 'XrPmHBwHnOk' },
    { name: 'Can't Help Falling in Love', artist: 'Elvis Presley', videoId: 'vGJTaP6anOU' },
    { name: 'Thinking Out Loud', artist: 'Ed Sheeran', videoId: 'lp-EO5I60KA' },
    { name: 'Beni Benimle Bırak', artist: 'Manga', videoId: 'eCkKkYzJWb4' },
    { name: 'Aşk Laftan Anlamaz Ki', artist: 'Murat Boz', videoId: 'qGHP7GPLbvE' },
    { name: 'Just the Way You Are', artist: 'Bruno Mars', videoId: 'LjhCEhWiKXk' },
    { name: 'A Thousand Years', artist: 'Christina Perri', videoId: 'rtOvBOTyX00' },
    { name: 'Olmazsan Olmaz', artist: 'Güliz Ayla', videoId: '0zNg4YDZDVA' },
    { name: 'Seni Seviyorum', artist: 'Edis', videoId: 'MqDGg4WFiB4' },
    { name: 'Marry You', artist: 'Bruno Mars', videoId: 'OlKeXbqE9j4' },
    { name: 'Yalnız Çiçek', artist: 'Aleyna Tilki', videoId: '1a1QYgGCgRQ' }
];

// Günün Renkleri
const dailyColors = [
    { name: 'Aşk Pembesi', hex: '#FF69B4' },
    { name: 'Tutku Kırmızısı', hex: '#FF1744' },
    { name: 'Lavanta', hex: '#E6B0F0' },
    { name: 'Mercan', hex: '#FF7F50' },
    { name: 'Şeftali Çiçeği', hex: '#FFDAB9' },
    { name: 'Gül Kurusu', hex: '#C08081' },
    { name: 'Lila Rüyası', hex: '#C9A9E8' },
    { name: 'Nar Çiçeği', hex: '#E32636' },
    { name: 'Kiraz Çiçeği', hex: '#FFB7C5' },
    { name: 'Bordo Aşk', hex: '#800020' },
    { name: 'Fuşya', hex: '#FF00FF' },
    { name: 'Pudra Pembesi', hex: '#F4C2C2' },
    { name: 'Orkide', hex: '#DA70D6' },
    { name: 'Yakut', hex: '#E0115F' }
];

// 100 Romantik Aktivite
const romanticActivities = [
    "Gün batımını birlikte izleyin 🌅",
    "Mum ışığında akşam yemeği hazırlayın 🕯️",
    "Birlikte yıldızları seyredin ⭐",
    "Birbirinize aşk mektupları yazın ✉️",
    "Ortak bir fotoğraf albümü oluşturun 📸",
    "Birlikte spa günü yapın 💆",
    "Piknik sepeti hazırlayıp parka gidin 🧺",
    "Birbirinize masaj yapın 💆‍♀️",
    "Şömine başında sıcak çikolata için 🔥",
    "Birlikte dans edin 💃",
    "Romantik bir film maratonu yapın 🎬",
    "Aynı kitabı okuyup tartışın 📚",
    "Birlikte yemek kursuna katılın 👨‍🍳",
    "Sürpriz bir hafta sonu kaçamağı planlayın ✈️",
    "Çatı katında kahvaltı yapın 🥐",
    "Birbirinize şiir okuyun 📖",
    "Ortak bir 'yapılacaklar listesi' oluşturun 📋",
    "Birlikte gün doğumunu izleyin 🌄",
    "El ele tutuşup uzun bir yürüyüşe çıkın 🚶‍♂️",
    "Romantik bir çalma listesi oluşturun 🎵",
    "Birlikte yoga yapın 🧘",
    "Sıcak bir köpük banyosu hazırlayın 🛁",
    "Yıldızların altında kamp yapın ⛺",
    "Aşk temalı bir puzzle yapın 🧩",
    "Birlikte resim yapın 🎨",
    "Sevgilinizin favori tatlısını yapın 🍰",
    "Birbirinize sürpriz hediyeler alın 🎁",
    "Evinizde çadır kurup içinde film izleyin 🏕️",
    "Birlikte gönüllü çalışmasına katılın 🤝",
    "Birbiriniz için şarkı söyleyin 🎤"
];

// 100 Eğlenceli Aktivite
const funActivities = [
    "Karaoke gecesi yapın 🎤",
    "Escape room oynayın 🗝️",
    "Bowling'e gidin 🎳",
    "Birlikte paintball oynayın 🔫",
    "Su parkına gidin 🌊",
    "Bisiklet turuna çıkın 🚲",
    "Lunaparka gidin 🎡",
    "Masa oyunları gecesi düzenleyin 🎲",
    "Birlikte konsere gidin 🎸",
    "Trambolin parkına gidin 🤸",
    "Karting yapın 🏎️",
    "Birlikte dans kursuna gidin 💃",
    "Su topu savaşı yapın 💦",
    "Mini golf oynayın ⛳",
    "Birlikte spor salonuna gidin 💪",
    "Tematik bir parti düzenleyin 🎉",
    "Gece yarısı sinemasına gidin 🌙",
    "Birlikte dalga sörfü yapın 🏄",
    "Kaykay parkına gidin 🛹",
    "Birlikte çikolata yapım atölyesine katılın 🍫",
    "Plaj voleybolu oynayın 🏐",
    "Gece kulübünde dans edin 🕺",
    "Birlikte bir enstrüman öğrenin 🎸",
    "Su kayağı yapın 🎿",
    "Açık hava sinemasına gidin 🎥",
    "Birlikte koşuya çıkın 🏃",
    "Mangal partisi düzenleyin 🍖",
    "Kayak yapmaya gidin ⛷️",
    "Paint night etkinliğine katılın 🎨",
    "Gece yarısı yüzmeye gidin 🏊"
];

// 100 Anı Biriktirme Aktivitesi
const memoryActivities = [
    "Bir zaman kapsülü oluşturun 📦",
    "Birlikte video günlük tutun 📹",
    "Fotoğraf çekimi yapın 📸",
    "El izlerinizi bir tuvale çıkarın 🎨",
    "Birlikte bir şarkı besteleyin 🎼",
    "Her ay bir kutlama geleneği oluşturun 🎊",
    "Seyahat günlüğü tutun 📓",
    "Birbirinize geleceğe mektup yazın 💌",
    "Parmak boyasıyla dev bir resim yapın 🖌️",
    "İlişkinizin zaman çizelgesini oluşturun 📈",
    "Birlikte bir ağaç dikin 🌱",
    "Ortak bir blog açın 📝",
    "Profesyonel bir fotoğraf çekimi yaptırın 📷",
    "Balayı defterinizi şimdiden hazırlayın 📖",
    "İlk buluştuğunuz yeri ziyaret edin 🗺️",
    "Birlikte gönüllü çalışması yapın 🤲",
    "Birbirinizin en komik anlarını kaydedin 😂",
    "Kendi yemek kitabınızı oluşturun 📚",
    "Birlikte bir patchwork battaniye yapın 🧶",
    "Ortak bir vizyon panosu hazırlayın 🎯",
    "Aynı dövmeyi yaptırın (küçük bir şey) ⚡",
    "Birlikte bir sosyal sorumluluk projesi başlatın 💝",
    "İlişkinizin haritasını çıkarın 🗾",
    "Her yıl aynı pozda fotoğraf çekilin 📅",
    "Birlikte bir hikaye kitabı yazın 📖",
    "Ayak izlerinizi betona çıkarın 👣",
    "Birlikte bir müzik videosu çekin 🎬",
    "Ortak bir koleksiyon başlatın 🏺",
    "İlişkinizin şarkı listesini oluşturun 🎵",
    "Her yıl dönümünüzde yeni bir şey öğrenin 🎓"
];

// İstanbul Rotaları
const istanbulRoutes = [
    {
        name: 'Boğaz Hattı Rotası',
        places: [
            { name: 'Ortaköy Meydanı', maps: 'https://maps.google.com/?q=Ortaköy+Meydanı+İstanbul' },
            { name: 'Bebek Sahili', maps: 'https://maps.google.com/?q=Bebek+Sahili+İstanbul' },
            { name: 'Arnavutköy Balıkçısı', maps: 'https://maps.google.com/?q=Arnavutköy+İstanbul' }
        ]
    },
    {
        name: 'Tarihi Yarımada Rotası',
        places: [
            { name: 'Sultanahmet Camii', maps: 'https://maps.google.com/?q=Sultanahmet+Camii+İstanbul' },
            { name: 'Gülhane Parkı', maps: 'https://maps.google.com/?q=Gülhane+Parkı+İstanbul' },
            { name: 'Eminönü Balık Ekmek', maps: 'https://maps.google.com/?q=Eminönü+Balık+Ekmek+İstanbul' }
        ]
    },
    {
        name: 'Kadıköy Moda Rotası',
        places: [
            { name: 'Moda Sahili', maps: 'https://maps.google.com/?q=Moda+Sahili+Kadıköy' },
            { name: 'Barış Manço Müzesi', maps: 'https://maps.google.com/?q=Barış+Manço+Müzesi+Kadıköy' },
            { name: 'Kadife Sokak', maps: 'https://maps.google.com/?q=Kadife+Sokak+Kadıköy' }
        ]
    },
    {
        name: 'Adalar Rotası',
        places: [
            { name: 'Büyükada İskelesi', maps: 'https://maps.google.com/?q=Büyükada+İskelesi+İstanbul' },
            { name: 'Aya Yorgi Tepesi', maps: 'https://maps.google.com/?q=Aya+Yorgi+Tepesi+Büyükada' },
            { name: 'Fayton Turu', maps: 'https://maps.google.com/?q=Büyükada+Fayton+Tur+Güzergahı' }
        ]
    }
];

// Uçuşan kalpleri oluştur
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartEmojis = ['💖', '💕', '💝', '💗', '💓', '❤️', '🩷', '💘', '💞', '🫶'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 500);
}

// Benzersiz aktivite seçimi
let usedActivities = {
    romantic: [],
    fun: [],
    memory: []
};

function getUniqueActivities() {
    // Tüm aktiviteler kullanıldıysa sıfırla
    if (usedActivities.romantic.length >= romanticActivities.length) {
        usedActivities.romantic = [];
    }
    if (usedActivities.fun.length >= funActivities.length) {
        usedActivities.fun = [];
    }
    if (usedActivities.memory.length >= memoryActivities.length) {
        usedActivities.memory = [];
    }
    
    // Benzersiz aktivite seç
    const getUnique = (arr, used) => {
        let available = arr.filter((_, index) => !used.includes(index));
        let randomIndex = Math.floor(Math.random() * available.length);
        let originalIndex = arr.indexOf(available[randomIndex]);
        used.push(originalIndex);
        return available[randomIndex];
    };
    
    const selected = {
        romantic: getUnique(romanticActivities, usedActivities.romantic),
        fun: getUnique(funActivities, usedActivities.fun),
        memory: getUnique(memoryActivities, usedActivities.memory)
    };
    
    return selected;
}

// Aktiviteleri göster
function showActivities() {
    const activitiesGrid = document.getElementById('activitiesGrid');
    const placeholder = document.getElementById('activitiesPlaceholder');
    const activities = getUniqueActivities();
    
    activitiesGrid.innerHTML = `
        <div class="activity-card">
            <div class="activity-emoji">💖</div>
            <div class="activity-category">Romantik Aktivite</div>
            <div class="activity-text">${activities.romantic}</div>
        </div>
        <div class="activity-card">
            <div class="activity-emoji">🎉</div>
            <div class="activity-category">Eğlenc