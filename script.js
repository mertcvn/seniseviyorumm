// ----------------------------------------------
// 1. AKTİVİTE HAVUZU (HER KATEGORİ 100 ADET)
// ----------------------------------------------
const romanticActivities = [
    "Mum ışığında ev yapımı akşam yemeği hazırla",
    "Birlikte yıldızları seyredin ve dilek tutun",
    "El ele tutuşup parkta uzun bir yürüyüş yapın",
    "Birbirinize aşk mektupları yazın ve okuyun",
    "Ortak bir çalma listesi oluşturun",
    "Sıcak çikolata eşliğinde balkonda sohbet edin",
    "Sürpriz bir kahvaltı hazırlayıp yatağa getir",
    "Birlikte bir dans öğrenin (vals, tango vb.)",
    "Gün batımını izlemek için bir tepeye çıkın",
    "El yapımı bir hediye verin",
    "Birbirinize en sevdiğiniz şiiri okuyun",
    "Aynı kitabı okuyun ve üzerine konuşun",
    "Geçmiş anıları konuşarak bir zaman tüneli yaratın",
    "Birlikte meditasyon yapın",
    "Birbirinize masaj yapın",
    "Çiçeklerle dolu bir piknik sepeti hazırlayın",
    "İlk tanıştığınız yeri ziyaret edin",
    "Birlikte bir film serisi maratonu yapın",
    "Birbirinize gelecek hayalleri anlatın",
    "Kendi kokunuzu birlikte tasarlayın",
    "Birlikte yoga yapın",
    "Ortak bir günlük tutmaya başlayın",
    "Yağmur altında dans edin",
    "Birlikte gönüllü bir iş yapın (hayvan barınağı vb.)",
    "Sürpriz bir hafta sonu kaçamağı planlayın",
    "Birbirinizin en sevdiği yemekleri pişirin",
    "Fotoğraf albümü hazırlayıp süsleyin",
    "Birlikte bir enstrüman öğrenmeye başlayın",
    "Akşam yemeğini terasta romantik ışıklarla donatın",
    "Birbirinize sevdiğiniz şarkıları söyleyin",
    "Birlikte bir resim yapın (tuval ve boya ile)",
    "Ortak bir 'yapılacaklar listesi' oluşturun",
    "Sabah erken kalkıp gün doğumunu izleyin",
    "Birlikte banyo yapın (köpük ve gül yapraklarıyla)",
    "Birbirinize en sevdiğiniz anıyı anlatan bir mektup yazın",
    "Birlikte bir pasta yapın ve süsleyin",
    "Aşk temalı bir film gecesi düzenleyin",
    "Ortak bir 'rüya panosu' hazırlayın",
    "Birlikte bir dil öğrenmeye başlayın",
    "Plajda romantik bir ateş yakıp marshmallow kızartın",
    "Birlikte bir spa günü yapın (evde)",
    "Birbirinizi en sevdiğiniz şarkıyla uyandırın",
    "El ele tutuşup sessizce oturun ve çevreyi izleyin",
    "Birlikte bir günlük tutun (her gün bir cümle)",
    "En sevdiğiniz restorana gidip aynı şeyi sipariş edin",
    "Birbirinize küçük sürpriz notlar saklayın",
    "Birlikte mum yapımı atölyesine katılın",
    "Aynı anda aynı filmi izleyip mesajlaşın (uzaktaysanız)",
    "Birlikte bir çiçek bahçesi ekin",
    "Birbirinizin burcunu araştırıp uyumunuzu okuyun",
    "Birlikte bir şiir yazın",
    "Sürpriz bir akşam yemeği rezervasyonu yapın",
    "Birlikte bir fotoğraf çekimi yapın (profesyonel veya selfie)",
    "Ay ışığında yürüyüş yapın",
    "Birlikte bir çikolata fondü yapın",
    "En sevdiğiniz şarkıyı çalıp slow dans edin",
    "Birlikte bir yıldız haritası satın alın (özel bir gününüzün)",
    "Romantik bir mektubu şişeye koyup saklayın",
    "Birlikte bir ağaç dikin",
    "Birbirinize en sevdiğiniz çocukluk anısını anlatın",
    "Birlikte bir takı yapın",
    "Ortak bir 'minnettarlık listesi' oluşturun",
    "Birlikte bir bulmaca çözün",
    "Birbirinize sürpriz bir video mesaj hazırlayın",
    "Birlikte bir seramik atölyesine gidin",
    "El yapımı bir kartpostal gönderin (posta ile)",
    "Birlikte bir çay saati düzenleyin (porselen fincanlarla)",
    "Birbirinizin en sevdiği tatlıyı yapın",
    "Birlikte bir uçurtma uçurun",
    "Aşk temalı bir çapraz bulmaca hazırlayın",
    "Birlikte bir balon patlatma oyunu oynayın (içine notlar koyarak)",
    "Sahilde taş toplayıp üzerine resim yapın",
    "Birlikte bir kar küresi yapın",
    "En sevdiğiniz aşk hikayesini birbirinize anlatın",
    "Birlikte bir lego seti yapın",
    "Ortak bir 'rüya seyahat' planı yapın",
    "Birbirinize sürpriz küçük hediyeler alın",
    "Birlikte bir şarap tadımı yapın (üzüm suyu da olur)",
    "Mumlarla dolu bir yol yapıp evde sürpriz hazırlayın",
    "Birlikte bir çizgi film izleyin (çocukluğunuza dönün)",
    "Birbirinizin avucuna kalp çizin",
    "Birlikte bir saat kulesi altında buluşun",
    "Sırt sırta verip kitap okuyun",
    "Birlikte bir kar tanesi kesme sanatı yapın",
    "En sevdiğiniz romantik repliği söyleyin",
    "Birlikte bir rüya yakalayıcı yapın",
    "Birbirinize 'Seni seviyorum' yazılı kurabiye yapın",
    "Birlikte bir fener uçurun (güvenli alanda)",
    "Ortak bir 'sonsuzluk kolyesi' takın",
    "Birlikte bir şelale ziyaret edin",
    "Aynı anda aynı yıldıza bakıp dilek tutun",
    "Birlikte bir el izi tablosu yapın",
    "Birbirinize en sevdiğiniz şiiri fısıldayın",
    "Birlikte bir sıcak hava balonuna binin (mümkünse)",
    "Romantik bir çalma listesini plak olarak hazırlayın",
    "Birlikte bir 'aşk ağacı' çizip parmak iziyle yaprak yapın",
    "Birbirinize 10 yıl sonrasına mektup yazın",
    "Birlikte bir gün batımı teknesine binin"
];

const funActivities = [
    "Birlikte karaoke yapın",
    "Masa oyunu gecesi düzenleyin (Monopoly, Tabu vb.)",
    "Birlikte bir paintball oynayın",
    "Escape room'a gidin",
    "Birlikte bowling oynayın",
    "Trambolin parkına gidin",
    "Birlikte bir su savaşı yapın (su tabancasıyla)",
    "Lunaparka gidin ve çarpışan arabaya binin",
    "Birlikte bir dans challenge yapın (TikTok)",
    "Birlikte bir yemek yarışması yapın",
    "Evde kamp yapın (çadır kurup film izleyin)",
    "Birlikte bir video oyunu turnuvası yapın",
    "Birlikte paint night (şarap eşliğinde resim) yapın",
    "Birlikte bir komedi kulübüne gidin",
    "Birlikte bir mini golf oynayın",
    "Birlikte bir festival kıyafeti tasarlayın",
    "Birlikte bir çikolata yeme yarışması yapın",
    "Birlikte bir bilim merkezine gidin",
    "Birlikte bir akrobasi dersi alın (trapez vb.)",
    "Birlikte bir kaçış oyunu oynayın (board game)",
    "Birlikte bir çılgın saç modeli yapın",
    "Birlikte bir su parkına gidin",
    "Birlikte bir kör tadım yapın (baharatlar, meyveler)",
    "Birlikte bir doğaçlama tiyatro atölyesine katılın",
    "Birlikte bir langırt turnuvası yapın",
    "Birlikte bir maskeli balo düzenleyin",
    "Birlikte bir pijama partisi yapın",
    "Birlikte bir dart turnuvası yapın",
    "Birlikte bir uçurtma savaşı yapın",
    "Birlikte bir yastık savaşı yapın",
    "Birlikte bir çöp adam animasyonu yapın",
    "Birlikte bir dondurma yeme yarışı yapın",
    "Birlikte bir sosis partisi düzenleyin (mangal)",
    "Birlikte bir paten kayma günü yapın",
    "Birlikte bir lazer tag oynayın",
    "Birlikte bir sıfırıncı gün partisi yapın (tanışma yıldönümü)",
    "Birlikte bir mario kart turnuvası yapın",
    "Birlikte bir evcil hayvan kostüm yarışması izleyin",
    "Birlikte bir enstrüman çalma challenge yapın",
    "Birlikte bir frizbi oynayın",
    "Birlikte bir halat çekme oyunu oynayın",
    "Birlikte bir ip atlama rekoru deneyin",
    "Birlikte bir çuval yarışı yapın",
    "Birlikte bir yumurta taşıma yarışı yapın",
    "Birlikte bir sandalye kapmaca oynayın",
    "Birlikte bir sessiz sinema gecesi yapın",
    "Birlikte bir origami yarışması yapın",
    "Birlikte bir balon patlatmaca oynayın",
    "Birlikte bir kart hilesi öğrenin",
    "Birlikte bir hulahop yarışması yapın",
    "Birlikte bir şarkı söyleme yarışması yapın (X Factor gibi)",
    "Birlikte bir komik surat yarışması yapın",
    "Birlikte bir taş boyama yapın",
    "Birlikte bir limbo dansı yapın",
    "Birlikte bir heykel olma oyunu oynayın",
    "Birlikte bir su balonu savaşı yapın",
    "Birlikte bir çamur koşusuna katılın",
    "Birlikte bir renk partisi düzenleyin (toz boyalarla)",
    "Birlikte bir sokak lezzetleri turu yapın",
    "Birlikte bir kostüm partisi yapın",
    "Birlikte bir flash mob düzenleyin",
    "Birlikte bir şişme oyun parkına gidin",
    "Birlikte bir VR oyun merkezine gidin",
    "Birlikte bir canlı müzik bara gidin",
    "Birlikte bir açık hava sinemasına gidin",
    "Birlikte bir bisiklet turu yapın",
    "Birlikte bir kaykay öğrenmeye çalışın",
    "Birlikte bir top havuzuna dalın",
    "Birlikte bir çikolata fabrikası turu yapın",
    "Birlikte bir hayalet turuna katılın",
    "Birlikte bir tekne partisi yapın",
    "Birlikte bir renkli toz festivaline gidin",
    "Birlikte bir su altı dalışı deneyimi yapın",
    "Birlikte bir zipline macerası yaşayın",
    "Birlikte bir dağ kızağına binin",
    "Birlikte bir midilli turu yapın",
    "Birlikte bir fal baktırma gecesi yapın",
    "Birlikte bir karaoke taksi deneyimi yaşayın",
    "Birlikte bir buz pateni yapın",
    "Birlikte bir lazer labirent oyunu oynayın",
    "Birlikte bir trambolin parkında zıplayın",
    "Birlikte bir kaykay parkı deneyin",
    "Birlikte bir neon boya partisi yapın",
    "Birlikte bir bubble football oynayın",
    "Birlikte bir sumo güreşi yapın (şişme kostümlerle)",
    "Birlikte bir okçuluk deneyin",
    "Birlikte bir balta atma merkezine gidin",
    "Birlikte bir virtual reality kaçış oyunu oynayın",
    "Birlikte bir drone uçurun",
    "Birlikte bir ters ev ziyareti yapın",
    "Birlikte bir plaj voleybolu oynayın",
    "Birlikte bir deniz bisikleti sürün",
    "Birlikte bir rüzgar sörfü öğrenin",
    "Birlikte bir su kayağı yapın",
    "Birlikte bir yamaç paraşütü yapın (tandem)",
    "Birlikte bir sosis balon yarışı yapın",
    "Birlikte bir serbest düşüş simülatörü deneyin",
    "Birlikte bir akşam yemeği tiyatrosu izleyin",
    "Birlikte bir stand-up gösterisine gidin",
    "Birlikte bir sihirbazlık gösterisi izleyin"
];

const memoryActivities = [
    "Birlikte bir fotoğraf albümü oluşturun",
    "Bir anı kavanozu hazırlayın (küçük notlarla)",
    "Birlikte bir video günlük çekin",
    "Polaroid fotoğraf makinesiyle anı yakalayın",
    "Birlikte bir zaman kapsülü gömün",
    "En sevdiğiniz şarkıyı söylediğiniz bir ses kaydı yapın",
    "Birlikte bir el izi çerçevesi yapın",
    "Bir scrapbook (anı defteri) hazırlayın",
    "Birlikte bir takvim yapın (fotoğraflarınızla)",
    "Her ay bir 'en iyi an' fotoğrafı seçin",
    "Birlikte bir soy ağacı araştırın (sizin ilişkinizin ağacı)",
    "İlk randevunuzu yeniden canlandırın ve fotoğraflayın",
    "Birlikte bir 'ilişki haritası' çizin (önemli yerler)",
    "Birbirinize geleceğe mektup yazın ve saklayın",
    "Birlikte bir takımyıldızı belirleyin ve adlandırın",
    "Her yıl aynı pozda fotoğraf çekin",
    "Birlikte bir kumdan kale yapın ve fotoğraflayın",
    "En sevdiğiniz anıyı tuvale resmedin",
    "Birlikte bir 'ilkler' listesi tutun (ilk öpücük, ilk tatil vb.)",
    "Bir anı duvarı oluşturun (ipler ve mandallarla)",
    "Birlikte bir dijital fotoğraf çerçevesi hazırlayın",
    "Her ayın en güzel anısını yazıp kavanoza atın",
    "Birlikte bir 'aşk hikayesi' animasyonu yapın (basit)",
    "En sevdiğiniz tatilin fotoğraflarını baskı yapın",
    "Birlikte bir puzzle yapın ve çerçeveletin",
    "İlk tanışma mesajlarınızın ekran görüntüsünü saklayın",
    "Birlikte bir gölge kutusu yapın (bilet, taş, kurdele ile)",
    "Her yıl dönümünde bir mektup yazıp biriktirin",
    "Birlikte bir anı tüneli oluşturun (odada dekor olarak)",
    "En sevdiğiniz şarkının sözlerini yazıp süsleyin",
    "Birlikte bir röportaj yapın (video kaydı)",
    "En sevdiğiniz anıları sticker olarak bastırın",
    "Birlikte bir yıldönümü pastası geleneği başlatın",
    "Her yıl aynı ağacın önünde fotoğraf çekin",
    "Birlikte bir tuval üzerine 'aşk mektubu' yazın",
    "En komik anınızı karikatürize edin",
    "Birlikte bir anı taşı boyayın",
    "İlk tatilinizin kumunu şişede saklayın",
    "Birlikte bir 'mutluluk kavanozu' yapın",
    "En güzel anılarınızı sosyal medyada bir hikaye yapın",
    "Birlikte bir CD çalma listesi yapın ve kapağını tasarlayın",
    "Her hafta bir polaroid çekip duvara asın",
    "Birlikte bir 'hayatımızın film afişi' tasarlayın",
    "En sevdiğiniz konser biletini çerçeveletin",
    "Birlikte bir 'yılın en iyileri' ödül töreni yapın",
    "El yapımı bir takvimde her ayın fotoğrafını değiştirin",
    "Birlikte bir 'anılar haritası' oluşturun (Google Maps üzerinde)",
    "En sevdiğiniz anıyı anlatan bir şarkı yazın",
    "Birlikte bir 'zaman makinesi' kutusu yapın (her yıl açılan)",
    "İlk dans ettiğiniz şarkıyı notalara dökün",
    "Birlikte bir anı defteri zinciri yapın (arkadaşlar dahil)",
    "En güzel tatil anısını bir tabloya dönüştürün",
    "Birlikte bir 'aşk tarihi' belgeseli çekin",
    "Her doğum gününde bir video mesaj bırakın",
    "Birlikte bir 'sonsuzluk bilekliği' yapın",
    "En sevdiğiniz yemeğin tarifini birlikte yazıp saklayın",
    "Birlikte bir fotoğraf mozaik tablo yapın",
    "En güzel anıyı gölge oyunuyla canlandırın",
    "Birlikte bir 'aşk ağacı' dikin ve her yıl fotoğraflayın",
    "En sevdiğiniz şakayı not edin",
    "Birlikte bir anı bulutu yapın (kelime bulutu)",
    "Her yıl bir 'zaman kapsülü' açma partisi yapın",
    "Birlikte bir tişört tasarlayın (fotoğraf baskılı)",
    "En sevdiğiniz film repliğini canlandırıp kaydedin",
    "Birlikte bir 'minik anılar müzesi' oluşturun",
    "En komik surat ifadenizi fotoğraflayın",
    "Birlikte bir 'aşk günlüğü' uygulaması kullanın",
    "En sevdiğiniz şarkıyla bir klip çekin",
    "Her ay bir 'en iyi öpücük' selfie'si çekin",
    "Birlikte bir yastık üzerine el izi yapın",
    "En güzel iltifatları not edip kavanozda saklayın",
    "Birlikte bir masa takvimi yapın (her ay farklı fotoğraf)",
    "En sevdiğiniz manzarayı suluboya ile resmedin",
    "Birlikte bir 'anılar avı' oyunu oynayın",
    "Her yılbaşında bir 'yılın anıları' videosu yapın",
    "Birlikte bir magnet seti hazırlayın",
    "En güzel gülümsediğiniz fotoğrafı büyütüp asın",
    "Birlikte bir anı defteri zinciri yapın (yıllara göre)",
    "En sevdiğiniz tatil rotasını haritada işaretleyin",
    "Birlikte bir 'anı anahtarlığı' yapın",
    "En güzel çiçek fotoğrafınızı kurutup saklayın",
    "Birlikte bir 'aşk kartelası' yapın (renk kodlu anılar)",
    "Her ayın en güzel gün batımı fotoğrafını çekin",
    "Birlikte bir 'sonsuzluk yüzüğü' seremonisi yapın",
    "En sevdiğiniz çocukluk fotoğrafınızı birleştirin",
    "Birlikte bir 'anı halısı' dokuyun (küçük bir örnek)",
    "En güzel sarılma anınızı fotoğraflayın",
    "Birlikte bir 'minik mutluluklar' defteri tutun",
    "Her tatilden bir taş toplayıp üzerine tarih yazın",
    "Birlikte bir 'hayal panosu' fotoğrafı çekin",
    "En sevdiğiniz dondurma anısını canlandırın",
    "Birlikte bir 'sonsuzluk işareti' kolyesi yapın",
    "En güzel gülüşünüzün olduğu bir tablo yaptırın",
    "Birlikte bir 'aşk haritası' duvar sticker'ı yapın",
    "Her yıl aynı restoranda aynı masada fotoğraf çekin",
    "Birlikte bir 'anı kutusu' boyama atölyesi yapın",
    "En sevdiğiniz anıyı simgeleyen bir dövme yaptırın (geçici)",
    "Birlikte bir 'yıldönümü saati' yapın (fotoğraflı)"
];

// ----------------------------------------------
// 2. İSTANBUL ROTALARI
// ----------------------------------------------
const routes = [
    {
        name: "🏛️ Tarihi Yarımada Rotası",
        places: [
            { name: "Ayasofya", link: "https://goo.gl/maps/1a2b3c4d5e" },
            { name: "Sultanahmet Camii", link: "https://goo.gl/maps/2b3c4d5e6f" },
            { name: "Yerebatan Sarnıcı", link: "https://goo.gl/maps/3c4d5e6f7g" }
        ]
    },
    {
        name: "🌆 Boğaz Kenarı Keyfi",
        places: [
            { name: "Ortaköy", link: "https://goo.gl/maps/4d5e6f7g8h" },
            { name: "Bebek Sahili", link: "https://goo.gl/maps/5e6f7g8h9i" },
            { name: "Arnavutköy", link: "https://goo.gl/maps/6f7g8h9i0j" }
        ]
    },
    {
        name: "🎨 Sanat ve Kültür Rotası",
        places: [
            { name: "İstanbul Modern", link: "https://goo.gl/maps/7g8h9i0j1k" },
            { name: "Galata Kulesi", link: "https://goo.gl/maps/8h9i0j1k2l" },
            { name: "Pera Müzesi", link: "https://goo.gl/maps/9i0j1k2l3m" }
        ]
    },
    {
        name: "🌳 Adalar Kaçamağı",
        places: [
            { name: "Büyükada", link: "https://goo.gl/maps/0j1k2l3m4n" },
            { name: "Heybeliada", link: "https://goo.gl/maps/1k2l3m4n5o" },
            { name: "Burgazada", link: "https://goo.gl/maps/2l3m4n5o6p" }
        ]
    },
    {
        name: "🛍️ Kadıköy - Moda Hattı",
        places: [
            { name: "Kadıköy Çarşı", link: "https://goo.gl/maps/3m4n5o6p7q" },
            { name: "Moda Sahili", link: "https://goo.gl/maps/4n5o6p7q8r" },
            { name: "Barış Manço Evi", link: "https://goo.gl/maps/5o6p7q8r9s" }
        ]
    }
];

// ----------------------------------------------
// 3. GÜNÜN RENGİ VE ŞARKISI
// ----------------------------------------------
const colorsOfDay = [
    { name: "Aşk Pembesi", hex: "#FF69B4", emoji: "💗" },
    { name: "Tutku Kırmızısı", hex: "#DC143C", emoji: "❤️‍🔥" },
    { name: "Lavanta", hex: "#B57EDC", emoji: "💜" },
    { name: "Mercan", hex: "#FF7F50", emoji: "🧡" },
    { name: "Şeftali", hex: "#FFDAB9", emoji: "🍑" },
    { name: "Gül Kurusu", hex: "#C08081", emoji: "🌹" },
    { name: "Menekşe", hex: "#8A2BE2", emoji: "💜" }
];

const songsOfDay = [
    { title: "Şımarık", artist: "Tarkan", videoId: "kR0wmJUdIH0" },
    { title: "Perfect", artist: "Ed Sheeran", videoId: "2Vv-BfVoq4g" },
    { title: "Küçüğüm", artist: "Sezen Aksu", videoId: "iZJ2Z9vQlDc" },
    { title: "All of Me", artist: "John Legend", videoId: "450p7goxZqg" },
    { title: "Yalnızlar Rıhtımı", artist: "Erkin Koray", videoId: "DR2D4_n9m58" },
    { title: "Can't Help Falling in Love", artist: "Elvis Presley", videoId: "vGJTaP6anOU" },
    { title: "Seni Yerler", artist: "Mabel Matiz", videoId: "0aRb4Hw6t3I" }
];

const loveQuotes = [
    "Aşk, birlikte bakmak değil, aynı yöne bakmaktır.",
    "Seninle her an, bir ömre bedel.",
    "Kalbim seninle attığı sürece her şey güzel.",
    "Sen benim en güzel tesadüfümsün.",
    "Birlikte geçen her saniye, zamana kazınmış bir hatıradır.",
    "Aşk, iki kişilik bir dünya hayal etmektir.",
    "Gözlerin, güneşin doğduğu en güzel yer.",
    "Seninle sessizlik bile şarkı gibi.",
    "Her nefeste biraz daha sen.",
    "Sonsuzluk, seninle başlar."
];

// ----------------------------------------------
// 4. UYGULAMA DEĞİŞKENLERİ VE FONKSİYONLAR
// ----------------------------------------------
let usedRomantic = [];
let usedFun = [];
let usedMemory = [];
let favorites = JSON.parse(localStorage.getItem('loveFavorites')) || [];

function getUniqueRandomActivity(pool, usedList) {
    if (usedList.length >= pool.length) {
        usedList.length = 0; // sıfırla
    }
    const available = pool.filter(a => !usedList.includes(a));
    const randomIndex = Math.floor(Math.random() * available.length);
    const selected = available[randomIndex];
    usedList.push(selected);
    return selected;
}

function generateSurprise() {
    const dateInput = document.getElementById('datePicker');
    if (!dateInput.value) {
        alert('Lütfen önce bir buluşma tarihi seç! 💕');
        return;
    }

    const romantic = getUniqueRandomActivity(romanticActivities, usedRomantic);
    const fun = getUniqueRandomActivity(funActivities, usedFun);
    const memory = getUniqueRandomActivity(memoryActivities, usedMemory);

    document.getElementById('romanticActivity').textContent = romantic;
    document.getElementById('funActivity').textContent = fun;
    document.getElementById('memoryActivity').textContent = memory;

    // Kartları göster
    ['cardRomantic', 'cardFun', 'cardMemory'].forEach(id => {
        document.getElementById(id).classList.add('revealed');
    });

    // Favori butonlarını ekle (daha önce eklenmediyse)
    document.querySelectorAll('.activity-card .card-back').forEach(back => {
        if (!back.querySelector('.fav-btn')) {
            const favBtn = document.createElement('button');
            favBtn.className = 'fav-btn';
            favBtn.textContent = '⭐ Favorilere Ekle';
            favBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const activityText = back.querySelector('.activity-text').textContent;
                addToFavorites(activityText);
            });
            back.appendChild(favBtn);
        }
    });
}

function addToFavorites(activity) {
    if (!favorites.includes(activity)) {
        favorites.push(activity);
        localStorage.setItem('loveFavorites', JSON.stringify(favorites));
        renderFavorites();
    }
}

function renderFavorites() {
    const section = document.getElementById('favoritesSection');
    const list = document.getElementById('favoritesList');
    if (favorites.length === 0) {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
        list.innerHTML = '';
        favorites.forEach((fav, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${fav}</span><button class="fav-remove-btn" data-index="${index}">🗑️</button>`;
            li.querySelector('.fav-remove-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                favorites.splice(index, 1);
                localStorage.setItem('loveFavorites', JSON.stringify(favorites));
                renderFavorites();
            });
            list.appendChild(li);
        });
    }
}

function setDailyColor() {
    const today = new Date();
    const color = colorsOfDay[today.getDate() % colorsOfDay.length];
    document.getElementById('colorBox').style.backgroundColor = color.hex;
    document.getElementById('colorName').textContent = `${color.emoji} ${color.name}`;
    document.getElementById('colorHex').textContent = color.hex;
}

function setDailySong() {
    const today = new Date();
    const song = songsOfDay[today.getDate() % songsOfDay.length];
    document.getElementById('songTitle').textContent = song.title;
    document.getElementById('songArtist').textContent = song.artist;
    const player = document.getElementById('youtubePlayer');
    // mute=1 sayesinde otomatik oynatma izni alınır
    player.src = `https://www.youtube.com/embed/${song.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${song.videoId}&enablejsapi=1`;
}

function toggleMusic() {
    const player = document.getElementById('youtubePlayer');
    const btn = document.getElementById('toggleMusic');
    if (player.src.includes('autoplay=1')) {
        player.src = player.src.replace('autoplay=1', 'autoplay=0');
        btn.textContent = '🔇 Ses Aç';
    } else {
        player.src = player.src.replace('autoplay=0', 'autoplay=1');
        btn.textContent = '🔇 Ses Kapat';
    }
}

function renderRoutes() {
    const grid = document.getElementById('routesGrid');
    grid.innerHTML = '';
    routes.forEach(route => {
        const setDiv = document.createElement('div');
        setDiv.className = 'route-set';
        setDiv.innerHTML = `<span class="route-name">${route.name}</span>`;
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'route-details';
        route.places.forEach(place => {
            const link = document.createElement('a');
            link.className = 'route-link';
            link.href = place.link;
            link.target = '_blank';
            link.rel = 'noopener';
            link.innerHTML = `📍 ${place.name}`;
            detailsDiv.appendChild(link);
        });
        setDiv.appendChild(detailsDiv);
        grid.appendChild(setDiv);
    });
}

function setDailyQuote() {
    const today = new Date();
    document.getElementById('loveQuote').textContent = loveQuotes[today.getDate() % loveQuotes.length];
}

function updateDaysCounter() {
    const startDate = new Date('2026-05-28'); // 3 hafta öncesi (bugün 18 Haziran 2026)
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('daysCounter').textContent = diffDays;
}

function createHearts() {
    const container = document.getElementById('heartsContainer');
    const emojis = ['❤️', '💕', '💗', '💖', '💘', '💝', '💞', '💓'];
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 10000);
    }, 300);
}

function setDefaultDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    document.getElementById('datePicker').value = `${yyyy}-${mm}-${dd}`;
}

// Event Listeners
document.getElementById('surpriseBtn').addEventListener('click', generateSurprise);
document.getElementById('toggleMusic').addEventListener('click', toggleMusic);
document.getElementById('newQuoteBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    document.getElementById('loveQuote').textContent = loveQuotes[randomIndex];
});
document.getElementById('clearFavorites').addEventListener('click', () => {
    if (confirm('Favori listenizi temizlemek istediğinize emin misiniz?')) {
        favorites = [];
        localStorage.setItem('loveFavorites', JSON.stringify(favorites));
        renderFavorites();
    }
});

// Sayfa yüklendiğinde
window.addEventListener('load', () => {
    setDailyColor();
    setDailySong();
    renderRoutes();
    setDailyQuote();
    updateDaysCounter();
    createHearts();
    setDefaultDate();
    renderFavorites();
});