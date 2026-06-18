// ============ GLOBAL DEĞİŞKENLER ============
let player;
let currentSongIndex = 0;
let isPlaying = true;
let currentVolume = 50;
let selectedDate = null;
let currentTheme = 'pink';
let relationshipStartDate = null;
let selectedMood = 'romantic';

// Veri Depolama
let favoritesList = JSON.parse(localStorage.getItem('loveFavorites')) || [];
let completedActivities = JSON.parse(localStorage.getItem('loveCompleted')) || [];
let loveNotes = JSON.parse(localStorage.getItem('loveNotes')) || [];
let activityRatings = JSON.parse(localStorage.getItem('loveRatings')) || {};

// Kullanılan aktiviteleri takip et
let usedActivities = {
    romantic: [],
    fun: [],
    memory: []
};

// YouTube API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        height: '70',
        width: '120',
        videoId: dailySongs[0].videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'loop': 0,
            'playlist': dailySongs.map(s => s.videoId).join(',')
        },
        events: {
            'onReady': onPlayerReady,
            'onError': onPlayerError,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(currentVolume);
    updatePlayPauseButton();
}

function onPlayerError(event) {
    console.log('Video yüklenemedi, sonraki şarkıya geçiliyor...');
    nextSong();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        nextSong();
    }
    updatePlayPauseButton();
}

// ============ VERİ SETLERİ ============
const dailySongs = [
    { name: 'All of Me', artist: 'John Legend', videoId: '450p7goxZqg' },
    { name: 'Perfect', artist: 'Ed Sheeran', videoId: '2Vv-BfVoq4g' },
    { name: 'Geçer', artist: 'Tarkan', videoId: 'yP1FjDWkUZ4' },
    { name: 'Aşk', artist: 'Sezen Aksu', videoId: 'XrPmHBwHnOk' },
    { name: 'Can\'t Help Falling in Love', artist: 'Elvis Presley', videoId: 'vGJTaP6anOU' },
    { name: 'Thinking Out Loud', artist: 'Ed Sheeran', videoId: 'lp-EO5I60KA' },
    { name: 'Aşk Laftan Anlamaz Ki', artist: 'Murat Boz', videoId: 'qGHP7GPLbvE' },
    { name: 'Just the Way You Are', artist: 'Bruno Mars', videoId: 'LjhCEhWiKXk' },
    { name: 'A Thousand Years', artist: 'Christina Perri', videoId: 'rtOvBOTyX00' },
    { name: 'Seni Seviyorum', artist: 'Edis', videoId: 'MqDGg4WFiB4' },
    { name: 'Marry You', artist: 'Bruno Mars', videoId: 'OlKeXbqE9j4' },
    { name: 'Yalnız Çiçek', artist: 'Aleyna Tilki', videoId: '1a1QYgGCgRQ' },
    { name: 'Beni Benimle Bırak', artist: 'Manga', videoId: 'eCkKkYzJWb4' },
    { name: 'Olmazsan Olmaz', artist: 'Güliz Ayla', videoId: '0zNg4YDZDVA' }
];

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

const giftIdeas = [
    { idea: 'El yapımı fotoğraf albümü', category: 'Kişisel' },
    { idea: 'Özel tasarım kolye', category: 'Takı' },
    { idea: 'Sürpriz konser bileti', category: 'Deneyim' },
    { idea: 'Romantik akşam yemeği', category: 'Deneyim' },
    { idea: 'Kişiye özel şiir kitabı', category: 'Kişisel' },
    { idea: 'Hafta sonu kaçamağı', category: 'Seyahat' },
    { idea: 'Aşk mektubu koleksiyonu', category: 'Kişisel' },
    { idea: 'Çift bileklikleri', category: 'Takı' },
    { idea: 'Spa günü rezervasyonu', category: 'Deneyim' },
    { idea: 'Yıldız haritası posteri', category: 'Dekorasyon' },
    { idea: 'Kişiye özel parfüm', category: 'Kişisel' },
    { idea: 'Balonla sürpriz', category: 'Sürpriz' }
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
    "Birbiriniz için şarkı söyleyin 🎤",
    "Balkonda kahvaltı yapın 🥞",
    "Birlikte bir enstrüman çalmayı öğrenin 🎹",
    "Ay ışığında yürüyüşe çıkın 🌙",
    "Birbirinize masal anlatın 📖",
    "Ortak bir rüya günlüğü tutun 📓",
    "Birlikte meditasyon yapın 🧘‍♂️",
    "Sıcak şarap yapıp için 🍷",
    "Birbirinizin saçını yapın 💇",
    "Birlikte çiçek ekin 🌸",
    "Sürpriz bir kahvaltı hazırlayın 🍳",
    "Birlikte şiir yazın ✍️",
    "Birbirinize sürpriz notlar bırakın 📝",
    "Birlikte mum yapın 🕯️",
    "Ortak bir şarkı seçin ve dans edin 💑",
    "Birlikte günlük tutun 📔",
    "Birbirinizin en sevdiği filmi izleyin 🎥",
    "Birlikte yemek yapın 👩‍🍳",
    "Birbirinize iltifat edin 💝",
    "Birlikte bir hayal panosu oluşturun 🎯",
    "Sürpriz bir hediye paketi hazırlayın 🎀"
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
    "Gece yarısı yüzmeye gidin 🏊",
    "Birlikte zumba yapın 💃",
    "Laser tag oynayın 🔫",
    "Birlikte uçurtma uçurun 🪁",
    "Sokak basketbolu oynayın 🏀",
    "Birlikte bisiklet kiralayıp gezin 🚴",
    "Trambolinde zıplayın 🤸‍♀️",
    "Birlikte kumdan kale yapın 🏰",
    "Su savaşı yapın 🔫💦",
    "Birlikte paten kayın ⛸️",
    "Maceraya atılın - paraşüt yapın 🪂",
    "Birlikte yemek yarışması yapın 👨‍🍳",
    "Çılgın bir kostüm partisi düzenleyin 🎭",
    "Birlikte dağ yürüyüşü yapın 🏔️",
    "Go-kart yarışı yapın 🏁",
    "Birlikte dalış yapın 🤿",
    "Tırmanma duvarına gidin 🧗",
    "Birlikte buz pateni yapın ⛸️",
    "Müzik festivaline gidin 🎪",
    "Birlikte rafting yapın 🛶",
    "Sokak dansı yapın 🕺"
];

// 100 Anı Aktivitesi
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
    "Her yıl dönümünüzde yeni bir şey öğrenin 🎓",
    "Birlikte bir mozaik yapın 🎨",
    "Aile büyüklerinizle röportaj yapın 🎙️",
    "Çocukluk fotoğraflarınızı birleştirin 📷",
    "Birlikte bir bahçe oluşturun 🌻",
    "Ortak bir şiir yazın ✍️",
    "Yıllık fotoğraf kitabı hazırlayın 📚",
    "El yapımı yılbaşı süsleri yapın 🎄",
    "Birlikte bir sosyal medya hesabı açın 📱",
    "İlişkinizin belgeselini çekin 🎥",
    "Birlikte bir duvar resmi yapın 🖼️",
    "Ortak bir yemek tarifi defteri oluşturun 📖",
    "Her ay yeni bir hobi deneyin 🎯",
    "Birlikte bir müzik kutusu yapın 🎵",
    "Anılarınızı resimleyin 🎨",
    "Birlikte bir takvim oluşturun 📅",
    "Ortak bir vizyon haritası çizin 🗺️",
    "Birlikte bir şarkı kaydedin 🎙️",
    "İlişkinizin timeline'ını oluşturun 📊",
    "Birlikte bir kısa film çekin 🎬",
    "Ortak bir yaşam manifestosu yazın ✍️"
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
    },
    {
        name: 'Galata & Karaköy Rotası',
        places: [
            { name: 'Galata Kulesi', maps: 'https://maps.google.com/?q=Galata+Kulesi+İstanbul' },
            { name: 'Karaköy Güllüoğlu', maps: 'https://maps.google.com/?q=Karaköy+Güllüoğlu+İstanbul' },
            { name: 'Galata Köprüsü', maps: 'https://maps.google.com/?q=Galata+Köprüsü+İstanbul' }
        ]
    },
    {
        name: 'Nişantaşı & Teşvikiye Rotası',
        places: [
            { name: 'Maçka Parkı', maps: 'https://maps.google.com/?q=Maçka+Parkı+İstanbul' },
            { name: 'Nişantaşı Kafeleri', maps: 'https://maps.google.com/?q=Nişantaşı+Kahve+Dünyası' },
            { name: 'City\'s Alışveriş Merkezi', maps: 'https://maps.google.com/?q=Citys+Nişantaşı+İstanbul' }
        ]
    }
];

// ============ UÇUŞAN EFEKTLER ============
function createFloatingElements() {
    const container = document.getElementById('floatingElements');
    const emojis = ['💖', '💕', '💝', '💗', '💓', '❤️', '🩷', '💘', '💞', '🫶', '✨', '🌟', '💫', '🎀', '🌸'];
    
    setInterval(() => {
        const element = document.createElement('div');
        element.className = 'floating-item';
        element.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        element.style.left = Math.random() * 100 + '%';
        element.style.fontSize = (Math.random() * 25 + 15) + 'px';
        element.style.animationDuration = (Math.random() * 5 + 5) + 's';
        element.style.opacity = Math.random() * 0.6 + 0.2;
        container.appendChild(element);
        
        setTimeout(() => {
            element.remove();
        }, 8000);
    }, 400);
}

// ============ TEMA YÖNETİMİ ============
function initTheme() {
    const savedTheme = localStorage.getItem('loveTheme') || 'pink';
    setTheme(savedTheme);
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            setTheme(theme);
            localStorage.setItem('loveTheme', theme);
            showToast('Tema değiştirildi! 🎨', 'info');
        });
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.theme-btn[data-theme="${theme}"]`).classList.add('active');
    currentTheme = theme;
}

// ============ AŞK SAYACI ============
function initLoveCounter() {
    const savedDate = localStorage.getItem('relationshipStart');
    if (savedDate) {
        relationshipStartDate = new Date(savedDate);
        updateLoveCounter();
        setInterval(updateLoveCounter, 60000); // Her dakika güncelle
    } else {
        // İlk ziyarette tarih sor
        setTimeout(() => {
            const date = prompt('💕 İlişkinizin başlangıç tarihini girin (YYYY-MM-DD):', '2024-01-01');
            if (date) {
                relationshipStartDate = new Date(date);
                localStorage.setItem('relationshipStart', date);
                updateLoveCounter();
                setInterval(updateLoveCounter, 60000);
            }
        }, 1000);
    }
}

function updateLoveCounter() {
    if (!relationshipStartDate) return;
    
    const now = new Date();
    const diffTime = Math.abs(now - relationshipStartDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('counterDays').textContent = diffDays;
}

// ============ GÜNLÜK ÖĞELER ============
function updateDailyItems() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    
    // Günün rengi
    const colorIndex = dayOfYear % dailyColors.length;
    const color = dailyColors[colorIndex];
    document.getElementById('colorCircle').style.background = color.hex;
    document.getElementById('colorName').textContent = color.name;
    document.getElementById('colorHex').textContent = color.hex;
    
    // Günün hediyesi
    const giftIndex = (dayOfYear + 7) % giftIdeas.length;
    const gift = giftIdeas[giftIndex];
    document.getElementById('giftIdea').textContent = gift.idea;
    document.getElementById('giftCategory').textContent = gift.category;
    
    // Geri sayım
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    // Örnek: Sevgililer Günü'ne geri sayım
    const now = new Date();
    const currentYear = now.getFullYear();
    let valentinesDay = new Date(currentYear, 1, 14); // 14 Şubat
    
    // Eğer bu yılki Sevgililer Günü geçtiyse, gelecek yıla ayarla
    if (now > valentinesDay) {
        valentinesDay = new Date(currentYear + 1, 1, 14);
    }
    
    const diff = valentinesDay - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdownDays').textContent = String(days).padStart(2, '0');
    document.getElementById('countdownHours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdownMinutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdownSeconds').textContent = String(seconds).padStart(2, '0');
}

// ============ MÜZİK KONTROLLERİ ============
function updateSongDisplay() {
    const song = dailySongs[currentSongIndex];
    document.getElementById('songName').textContent = song.name;
    document.getElementById('songArtist').textContent = song.artist;
}

function playPause() {
    if (player && player.getPlayerState) {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            isPlaying = false;
        } else {
            player.playVideo();
            isPlaying = true;
        }
        updatePlayPauseButton();
    }
}

function updatePlayPauseButton() {
    const btn = document.getElementById('playPauseBtn');
    if (isPlaying) {
        btn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        btn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % dailySongs.length;
    if (player && player.loadVideoById) {
        player.loadVideoById(dailySongs[currentSongIndex].videoId);
        updateSongDisplay();
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + dailySongs.length) % dailySongs.length;
    if (player && player.loadVideoById) {
        player.loadVideoById(dailySongs[currentSongIndex].videoId);
        updateSongDisplay();
    }
}

function changeVolume(value) {
    currentVolume = value;
    if (player && player.setVolume) {
        player.setVolume(value);
    }
}

// ============ AKTİVİTE YÖNETİMİ ============
function getUniqueActivities() {
    // Tüm aktiviteler kullanıldıysa sıfırla
    Object.keys(usedActivities).forEach(key => {
        const arr = key === 'romantic' ? romanticActivities : 
                   key === 'fun' ? funActivities : memoryActivities;
        if (usedActivities[key].length >= arr.length) {
            usedActivities[key] = [];
        }
    });
    
    const getUnique = (arr, used) => {
        let available = arr.filter((_, index) => !used.includes(index));
        if (available.length === 0) {
            used.length = 0;
            available = [...arr];
        }
        let randomIndex = Math.floor(Math.random() * available.length);
        let originalIndex = arr.indexOf(available[randomIndex]);
        used.push(originalIndex);
        return { text: available[randomIndex], index: originalIndex };
    };
    
    return {
        romantic: getUnique(romanticActivities, usedActivities.romantic),
        fun: getUnique(funActivities, usedActivities.fun),
        memory: getUnique(memoryActivities, usedActivities.memory)
    };
}

function showActivities() {
    const activitiesGrid = document.getElementById('activitiesGrid');
    const placeholder = document.getElementById('activitiesPlaceholder');
    const actions = document.getElementById('activityActions');
    const activities = getUniqueActivities();
    
    if (!selectedDate) {
        showToast('Lütfen önce bir tarih seçin! 📅', 'warning');
        return;
    }
    
    activitiesGrid.innerHTML = createActivityCard('💖', 'Romantik Aktivite', activities.romantic, 'romantic') +
                               createActivityCard('🎉', 'Eğlenceli Aktivite', activities.fun, 'fun') +
                               createActivityCard('📸', 'Anı Biriktirme', activities.memory, 'memory');
    
    placeholder.style.display = 'none';
    activitiesGrid.style.display = 'grid';
    actions.style.display = 'flex';
    
    // Event listener'ları ekle
    addActivityCardListeners();
    
    // İstatistikleri güncelle
    updateStats();
    
    showToast('Sürpriz aktiviteleriniz hazır! 💝', 'success');
}

function createActivityCard(emoji, category, activity, type) {
    const isFavorited = favoritesList.includes(activity.text);
    const isCompleted = completedActivities.includes(activity.text);
    const rating = activityRatings[activity.text] || 0;
    
    return `
        <div class="activity-card" data-activity="${activity.text}" data-type="${type}">
            <div class="activity-emoji">${emoji}</div>
            <div class="activity-category">${category}</div>
            <div class="activity-text">${activity.text}</div>
            <div class="star-rating" data-activity="${activity.text}">
                ${[1,2,3,4,5].map(star => 
                    `<span class="star ${star <= rating ? 'selected' : ''}" data-star="${star}">⭐</span>`
                ).join('')}
            </div>
            <div class="activity-card-actions">
                <button class="card-action-btn favorite-btn ${isFavorited ? 'favorited' : ''}" 
                        data-activity="${activity.text}" title="Favorilere ekle">
                    <i class="fas fa-heart"></i>
                </button>
                <button class="card-action-btn complete-btn ${isCompleted ? 'completed' : ''}" 
                        data-activity="${activity.text}" title="Tamamlandı olarak işaretle">
                    <i class="fas fa-check"></i>
                </button>
                <button class="card-action-btn photo-btn" 
                        data-activity="${activity.text}" title="Fotoğraf ekle">
                    <i class="fas fa-camera"></i>
                </button>
            </div>
        </div>
    `;
}

function addActivityCardListeners() {
    // Favori butonları
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const activity = btn.dataset.activity;
            toggleFavorite(activity, btn);
        });
    });
    
    // Tamamlandı butonları
    document.querySelectorAll('.complete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const activity = btn.dataset.activity;
            toggleComplete(activity, btn);
        });
    });
    
    // Fotoğraf butonları
    document.querySelectorAll('.photo-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const activity = btn.dataset.activity;
            openPhotoModal(activity);
        });
    });
    
    // Yıldız puanlama
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            const rating = parseInt(star.dataset.star);
            const activity = star.parentElement.dataset.activity;
            rateActivity(activity, rating);
        });
        
        star.addEventListener('mouseenter', (e) => {
            const stars = star.parentElement.querySelectorAll('.star');
            const rating = parseInt(star.dataset.star);
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        star.addEventListener('mouseleave', (e) => {
            const stars = star.parentElement.querySelectorAll('.star');
            const activity = star.parentElement.dataset.activity;
            const currentRating = activityRatings[activity] || 0;
            stars.forEach((s, index) => {
                if (index < currentRating) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('active', 'selected');
                }
            });
        });
    });
    
    // Aktivite kartına tıklama - detay modalı
    document.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener('click', () => {
            const activity = card.dataset.activity;
            showActivityDetail(activity);
        });
    });
}

function toggleFavorite(activity, btn) {
    const index = favoritesList.indexOf(activity);
    if (index > -1) {
        favoritesList.splice(index, 1);
        btn.classList.remove('favorited');
        showToast('Favorilerden çıkarıldı 💔', 'info');
    } else {
        favoritesList.push(activity);
        btn.classList.add('favorited');
        showToast('Favorilere eklendi! 💖', 'success');
    }
    localStorage.setItem('loveFavorites', JSON.stringify(favoritesList));
    updateFavoritesDisplay();
    updateStats();
}

function toggleComplete(activity, btn) {
    const index = completedActivities.indexOf(activity);
    if (index > -1) {
        completedActivities.splice(index, 1);
        btn.classList.remove('completed');
        showToast('Tamamlandı işareti kaldırıldı', 'info');
    } else {
        completedActivities.push(activity);
        btn.classList.add('completed');
        showToast('Aktivite tamamlandı! 🎉', 'success');
    }
    localStorage.setItem('loveCompleted', JSON.stringify(completedActivities));
    updateStats();
}

function rateActivity(activity, rating) {
    activityRatings[activity] = rating;
    localStorage.setItem('loveRatings', JSON.stringify(activityRatings));
    
    // Yıldızları güncelle
    const starContainer = document.querySelector(`.star-rating[data-activity="${activity}"]`);
    if (starContainer) {
        starContainer.querySelectorAll('.star').forEach((s, index) => {
            if (index < rating) {
                s.classList.add('selected');
                s.classList.remove('active');
            } else {
                s.classList.remove('selected', 'active');
            }
        });
    }
    
    showToast(`${rating} yıldız verildi! ⭐`, 'success');
}

function showActivityDetail(activity) {
    const modal = document.getElementById('activityDetailModal');
    const content = document.getElementById('activityDetailContent');
    const rating = activityRatings[activity] || 0;
    
    content.innerHTML = `
        <h3 style="color: var(--accent-dark); margin-bottom: 20px;">📋 Aktivite Detayı</h3>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">${activity}</p>
        <div style="margin-bottom: 20px;">
            <strong>Puanınız:</strong> 
            <span style="font-size: 1.5rem;">
                ${'⭐'.repeat(rating)}${rating === 0 ? 'Henüz puanlanmadı' : ''}
            </span>
        </div>
        <div>
            <strong>Durum:</strong>
            ${completedActivities.includes(activity) ? 
                '<span style="color: green;">✅ Tamamlandı</span>' : 
                '<span style="color: orange;">⏳ Bekliyor</span>'}
            ${favoritesList.includes(activity) ? 
                '<span style="color: red; margin-left: 10px;">❤️ Favori</span>' : ''}
        </div>
    `;
    
    modal.classList.add('show');
}

// ============ FAVORİ YÖNETİMİ ============
function updateFavoritesDisplay() {
    const grid = document.getElementById('favoritesGrid');
    
    if (favoritesList.length === 0) {
        grid.innerHTML = `
            <div class="no-favorites">
                <i class="fas fa-star"></i>
                <p>Henüz favori aktiviteniz yok</p>
            </div>
        `;
    } else {
        grid.innerHTML = favoritesList.map(fav => `
            <div class="favorite-item">
                <button class="favorite-remove" data-activity="${fav}">
                    <i class="fas fa-times"></i>
                </button>
                <p style="margin-top: 10px;">${fav}</p>
                <div style="margin-top: 10px; color: var(--accent);">
                    ${'⭐'.repeat(activityRatings[fav] || 0)}
                </div>
            </div>
        `).join('');
        
        // Kaldırma butonları
        document.querySelectorAll('.favorite-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const activity = btn.dataset.activity;
                const index = favoritesList.indexOf(activity);
                if (index > -1) {
                    favoritesList.splice(index, 1);
                    localStorage.setItem('loveFavorites', JSON.stringify(favoritesList));
                    updateFavoritesDisplay();
                    updateStats();
                    showToast('Favorilerden kaldırıldı', 'info');
                }
            });
        });
    }
    
    document.getElementById('favCount').textContent = favoritesList.length;
}

// ============ AŞK NOTLARI ============
function addLoveNote() {
    const input = document.getElementById('loveNoteInput');
    const