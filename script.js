(function() {
  const CORRECT_PASSWORD = 'askim123';
  const passwordOverlay = document.getElementById('passwordOverlay');
  const mainContent = document.getElementById('mainContent');

  if (sessionStorage.getItem('ask_rotasi_auth') === 'true') {
    passwordOverlay.style.display = 'none';
    mainContent.style.display = 'block';
    initAll();
  } else {
    passwordOverlay.style.display = 'flex';
    mainContent.style.display = 'none';
    document.getElementById('passwordSubmit').addEventListener('click', () => {
      if (document.getElementById('passwordInput').value.trim() === CORRECT_PASSWORD) {
        sessionStorage.setItem('ask_rotasi_auth', 'true');
        passwordOverlay.style.opacity = '0';
        setTimeout(() => {
          passwordOverlay.style.display = 'none';
          mainContent.style.display = 'block';
          initAll();
        }, 400);
      } else {
        document.getElementById('passwordError').textContent = '❌ Şifre yanlış!';
        document.getElementById('passwordInput').value = '';
      }
    });
  }

  function initAll() {
    // ── GECE MODU ───────────────────────
    const nightToggle = document.getElementById('nightModeToggle');
    nightToggle.addEventListener('click', () => {
      document.body.classList.toggle('night-mode');
      nightToggle.textContent = document.body.classList.contains('night-mode') ? '☀️' : '🌙';
    });
    const starsContainer = document.getElementById('starsContainer');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = star.style.height = Math.random() * 3 + 1 + 'px';
      star.style.animationDelay = Math.random() * 5 + 's';
      starsContainer.appendChild(star);
    }

    // ── AŞK SAYACI ─────────────────────
    const askBaslangic = new Date(2026, 4, 24);
    const daySpan = document.getElementById('dayCount');
    function gunSayisi() {
      const bugun = new Date();
      const fark = Math.floor((bugun - askBaslangic) / (1000 * 60 * 60 * 24));
      daySpan.textContent = fark;
    }
    gunSayisi();

    // ── GİZLİ MEKTUP ──────────────────
    const letterOverlay = document.getElementById('letterOverlay');
    document.getElementById('openLetterBtn').addEventListener('click', () => letterOverlay.style.display = 'flex');
    document.getElementById('closeLetterBtn').addEventListener('click', () => letterOverlay.style.display = 'none');
    document.getElementById('letterPasswordSubmit').addEventListener('click', () => {
      if (document.getElementById('letterPasswordInput').value === 'mektup123') {
        document.getElementById('letterContent').style.display = 'block';
        document.getElementById('letterError').textContent = '';
      } else {
        document.getElementById('letterError').textContent = '❌ Şifre yanlış!';
      }
    });

    // ── AŞK ÇARKI (20 segment, responsive) ─
    const canvas = document.getElementById('wheelCanvas');
    const ctx = canvas.getContext('2d');
    const wheelContainer = document.querySelector('.wheel-container');
    const segments = [
      '💋 Öpücük', '🤗 Sarılma', '💆 Masaj', '🎬 Film',
      '🍝 Yemek', '💃 Dans', '🎁 Hediye', '🌸 Çiçek',
      '📸 Foto', '👀 Göz', '🎤 Şarkı', '😂 Komik',
      '🍦 Dondurma', '🌙 Gece', '🎨 Resim', '✍️ Şiir',
      '💌 Mektup', '🍕 Pizza', '🎲 Oyun', '💭 Hayal'
    ];
    const segColors = [
      '#ff6b8a', '#ff9a9e', '#ffb6c1', '#ff3d6f',
      '#e84a6e', '#c1121f', '#ff7f7f', '#ff4d6d',
      '#ff8c94', '#ffaaa5', '#ff6f61', '#e63946',
      '#ffb3ba', '#ff8b94', '#c71585', '#ff69b4',
      '#ff1493', '#db7093', '#f06292', '#ad1457'
    ];
    let angle = 0;
    function resizeCanvas() {
      const size = wheelContainer.clientWidth;
      canvas.width = size;
      canvas.height = size;
      drawWheel();
    }
    function drawWheel() {
      const size = canvas.width;
      const center = size / 2;
      const radius = size * 0.42;
      const len = segments.length;
      const arc = (2 * Math.PI) / len;
      ctx.clearRect(0, 0, size, size);
      for (let i = 0; i < len; i++) {
        const start = i * arc;
        const end = start + arc;
        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, start, end);
        ctx.fillStyle = segColors[i];
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(start + arc / 2);
        let fontSize = Math.max(10, Math.floor(radius * 0.22));
        ctx.font = `bold ${fontSize}px 'Poppins', sans-serif`;
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(segments[i], radius * 0.75, 0);
        ctx.restore();
      }
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    document.getElementById('spinWheelBtn').addEventListener('click', () => {
      const spin = Math.random() * 3600 + 720;
      angle += spin;
      canvas.style.transition = 'transform 4s cubic-bezier(0.17,0.67,0.12,0.99)';
      canvas.style.transform = `rotate(${angle}deg)`;
      setTimeout(() => {
        const norm = (angle % 360 + 360) % 360;
        const idx = Math.floor(norm / (360 / segments.length)) % segments.length;
        document.getElementById('wheelResult').textContent = '🎉 ' + segments[idx] + '!';
      }, 4100);
    });

    // ── AKTİVİTE LİSTELERİ ────────────
    const romantic = [
      "Mum ışığında evde akşam yemeği","Birlikte gün batımı izleyin","El ele yıldızları seyredin",
      "Birbirinize aşk mektupları yazın","Ortak çalma listesi oluşturun","Sıcak çikolata eşliğinde balkonda sohbet",
      "Köpüklü banyo (gül yapraklarıyla)","Yatakta sürpriz kahvaltı","Aşk temalı film maratonu",
      "Birbirinize masaj yapın","Gül bahçesinde yürüyüş","Birlikte şiir yazın","Çatı katında piknik",
      "Boğaz kenarında balık ekmek + çay","Aynı kitabı okuyup tartışın","Birlikte meditasyon",
      "5 dakika sadece göz teması","Birbirinizin en sevdiği yemekleri pişirin","Çikolata fondü partisi",
      "Mum yapımı atölyesi","Gece yarısı sahilde yürüyüş","Zaman kapsülü gömün","Sırt sırta hayal paylaşımı",
      "Birbirinize şarkı söyleyin","Romantik çatı restoranı","Birlikte yoga","Gün doğumunu karşılayın",
      "Avuca not yazın","Aynı parfümü sıkın","Uçurtma uçurun","Birlikte tuval boyama","Pijama partisi + romantik komedi",
      "Hamur işi yapın","Vapurda boğaz turu","El ele fotoğraf turu","Sürpriz küçük hediyeler","Gönüllü çalışması",
      "Dans dersi (vals/tango)","Çiçekçiden çiçek seçin","Gece lambası altında fısıldaşma","Ortak günlük tutun",
      "Kuş yuvası yapın","Kamp ateşi marshmallow","Çocukluk fotoğraflarına bakın","Özel kokteyl icat edin",
      "Enstrüman öğrenmeye başlayın","Aynı filmi farklı yerden izleyin","Seramik boyama","Parmak izi kolyesi yapın",
      "Gece dondurma yemeye gidin","Online kursa katılın","Neden seni seviyorum listesi","Birlikte ağaç dikin",
      "Romantik otel kaçamağı","Takımyıldızlarını öğrenin","Gizli not bırakma oyunu","Eski şehir keşfi",
      "Birbirinize atkı örün","Vizyon panosu hazırlayın","Sabah koşusu","Kumsalda çıplak ayak yürüyün",
      "Puzzle tamamlayın","Sürpriz çiçek buketi","Fotoğraf albümü yapın","Aşk şiiri gecesi","Tatil planı hayal edin",
      "Şarkı ithaf edin","Lego seti tamamlayın","Taş toplayıp boyayın","Bağış kampanyası başlatın",
      "Teşekkür kartı yazın","Eşyaları birlikte düzenleyin","Eski film sinema keyfi","Evde sürpriz notlar saklayın",
      "Balon şişirip patlatmaca","Geri sayım takvimi yapın","Not koyup denize bırakın","En sevdiği tatlıyı yapın",
      "Kar altında yürüyüş","El yapımı sabun hediye","Teraryum yapın","Rolleri değişin (1 günlüğüne)",
      "Video günlüğü çekin","Evde spa günü","Hayır kurumuna bağış","Hayallerinizi anlatan mektup",
      "Güneşlenme seansı","En sevdiğiniz şarkıyı çalın","Çiçek bahçesi tasarlayın","İlk tanışma anını anlatın",
      "Tatlı tarifi icat edin","Sürpriz kutuları hazırlayın","Dilek feneri uçurun","Tüm gün güzel sözler fısıldayın",
      "Aşk hikayesi yazın","Seni seviyorum challenge","Yıldız haritası satın alın","Özel yüzük tasarlayın",
      "Anı duvarı oluşturun","100 sebep listesi hazırlayın"
    ];
    const fun = [
      "Karaoke gecesi","Bowling oynayın","Escape room","Lunaparka gidin","Paintball oynayın","Su parkına gidin",
      "Masa tenisi turnuvası","Bilardo oynayın","Lazer tag","Go-kart yarışı","Langırt oynayın","Trambolin parkı",
      "Mini golf","Okçuluk deneyin","Buz pateni","Kaykay/paten sürün","Tırmanış duvarı","VR oyun merkezi",
      "Su savaşı (su tabancası)","Dart oynayın","Kutu oyunları gecesi","Nintendo/Switch oynayın",
      "Paint & wine etkinliği","Komedi kulübüne gidin","Tematik parti düzenleyin","Flash mob'a katılın",
      "Sokak lezzetleri turu","Ukulele çalmayı deneyin","Gece kulübünde dans","Stand-up gösterisi",
      "Farklı mutfak yemek yarışı","Festival/panayıra gidin","Bilgi yarışması (Kahoot)","TikTok videosu çekin",
      "Bisiklet turu","Su balonu savaşı","Açık hava sineması","Konsere gidin","Komik fotoğraf çekimleri",
      "Piknik + frizbi","Kokteyl yapma yarışması","Sahne oyunu izleyin","Uçurtma uçurun (sahilde)",
      "Sokak sanatçısını izleyin","Kahve tadım turu","Cover şarkı kaydedin","Holi festival tarzı partisi",
      "Şehir turu oyunu (scavenger hunt)","Komedi filmi maratonu","Su kayağı/wakeboard","Dans challenge öğrenin",
      "Balkonda kamp yapın","Yemek yarışması izleyip aynısını yapın","Kart oyunları gecesi","Müzik festivaline gidin",
      "Sahilde voleybol","Fotoğraf yarışması yapın","Çizgi film maratonu","Evde saklambaç oynayın",
      "Korku filmi izleyip korkun","Masa oyunu kafeye gidin","Yoga challenge","Sokak basketbolu",
      "Yemek kursuna katılın","Çadır kurup içinde film izleyin","Müzik aleti yapın (marakas)","Gece yarısı yüzme",
      "Şişme botla denize açılın","Bilim deneyleri yapın","Rap şarkısı yazın","Sokak hayvanlarını besleme turu",
      "Grafiti duvarı boyayın","Evde moda defilesi","Radyo programı kaydedin","Çıplak ayak çimlerde koşun",
      "Şişe çevirmece","Evde balık tutma oyunu","Şaka planlayıp uygulayın","Sokak röportajları yapın",
      "Mini golf sahası inşa edin","Komik surat ifadeleri yapın","Challenge videosu çekin","Langırt turnuvası",
      "Komik şiir yarışması","Sokakta ip atlama","Çember çevirme yarışı","Balon patlatmaca (görevli)",
      "El gölgesi tiyatrosu","Komik aksanlarla sohbet","Yemek eleştirmeni gibi değerlendirin","Mini olimpiyatlar",
      "Kukla gösterisi yapın","Kumdan kale yapın","Çizgi roman yaratın","Evde lazertag (el feneriyle)",
      "Kahve falı baktırın","Sokak müzisyenlerine eşlik","Hayatta yapılacaklar listesi yazın"
    ];
    const memory = [
      "Profesyonel fotoğraf çekimi","Scrapbook hazırlayın","Polaroid ile günü belgeleyin","Zaman kapsülü hazırlayın",
      "Video günlük serisi başlatın","El izi çerçevesi yapın","Şarkı besteleyip kaydedin","Fotoğraf albümü oluşturun",
      "El işi projesi tamamlayın","Anıları haritada işaretleyin","Anı kutusu süsleyin","Her ay aynı pozda fotoğraf",
      "Fotoğraflı takvim tasarlayın","İlk tanıştığınız yeri ziyaret edin","Aile ağacı araştırması",
      "Geleceğe mektup yazın (5 yıl sonra aç)","İlişki belgeseli çekin","Anıları karikatürleştirin",
      "Podcast bölümü kaydedin","Parmak boyasıyla tablo","Dijital fotoğraf kitabı","İlk mesajların ekran görüntüsünü çerçeveletin",
      "İlişki zaman çizelgesi oluşturun","Her yıl aynı ağacın önünde fotoğraf","Şarkı listesi CD'si hazırlayın",
      "Anıları kavanozda biriktirin","Mozaik tablo yapın","İlk randevu kıyafetleriyle fotoğraf",
      "Mini müze köşesi (biletler, objeler)","Sesli mesaj kaydedip saklayın","Çizgi roman karakteri yaratın (siz ikiniz)",
      "İlişki haritası çizin","Şiir kitabı oluşturun","365 gün fotoğraf challenge","Tişört boyayın (el izleriyle)",
      "Anı şarkı listesi yapın","Kısa film senaryosu yazın","İlk yıl dönümü pastası","Çift logosu tasarlayın",
      "Anı mektuplarını postayla gönderin","Müzik kutusu yapın","Anı defterine çiçek kurutup yapıştırın",
      "Puzzle'ı çerçeveletin","En iyi anlar slayt gösterisi","Magnet koleksiyonu başlatın","Her seyahatten obje biriktirin",
      "Her ay mum yakıp dilek tutun","Anıları QR kodlara yükleyin","Kendi videolarınızla mini sinema",
      "İlk dans şarkısını plağa bastırın","Soy ağacı posterine fotoğraf ekleyin","Her yıl aynı restoranda aynı masa",
      "Hayat haritası çizin","Anı duvar takvimi yapın","Balon içine not koyup patlatın","İlişki istatistikleri çıkarın",
      "Damga/logo tasarlayın","Her ayın en güzel anını özetleyin","Rüya panosu hazırlayın",
      "İlk tanışma anını yeniden canlandırın","Sır kutusu yapın","Anı defterine resim çizin",
      "Müzik videosu çekin (lip-sync)","Aynı deftere not yazın (doğum günü)","Geçici dövme tasarlayın",
      "Başlangıç noktasına işaret koyun","Aşk sözlüğü oluşturun (özel kelimeler)","Tuval baskı yaptırın",
      "Yılın özeti videosu","İlk hediyeleştiğiniz objeyi sergileyin","Mini kütüphane oluşturun",
      "Her buluşmadan obje biriktirin","Rüya günlüğü tutun","Anıları suluboya ile resmedin",
      "LED ışıklı fotoğraf duvarı","Soundtrack albüm kapağı tasarlayın","Yıldız isimlendirme sertifikası alın",
      "Aynı pozda yaşlanma serisi","Mini bahçe ekin","Anıları origami ile simgeleyin","Anı takvimi yapın",
      "İlk buluşma mekanına her yıl gidin","Sonsuzluk bilekliği yapın","Parmak izlerini anı defterine basın",
      "Mini heykel yapın","En komik anı resmedin","Yıldönümü takvimi hazırlayın","Akrostiş şiir yazın",
      "Aşk ağacı çizin","Her yıl en güzel fotoğrafı seçin","QR kodlu anahtarlık yapın",
      "Anı defterine kurumuş çiçek yapıştırın","Mini sinema afişi tasarlayın","İlk seni seviyorum anını çerçeveletin",
      "Dilek kavanozu yapın","Gölge kutusunda anı sergisi","Aşk haritası oluşturun",
      "Yıl dönümünde video mesaj kaydedin","Mini galeri açın","İlişki başlangıç saatini saate kazıtın"
    ];

    // ── GÜNÜN RENGİ ────────────────────
    const dailyColors = [
      { name:'Aşk Pembesi', hex:'#FFB6C1', emoji:'💗' },{ name:'Tutku Kırmızısı', hex:'#E63946', emoji:'❤️' },
      { name:'Lavanta', hex:'#C9A7D4', emoji:'💜' },{ name:'Mercan', hex:'#FF7F7F', emoji:'🧡' },
      { name:'Şeftali', hex:'#FFDAB9', emoji:'🍑' },{ name:'Gül Kurusu', hex:'#C08081', emoji:'🥀' },
      { name:'Bordo', hex:'#800020', emoji:'🍷' },{ name:'Fuşya', hex:'#FF00FF', emoji:'💖' },
      { name:'Kiraz Çiçeği', hex:'#FFB7C5', emoji:'🌸' },{ name:'Yakut', hex:'#E0115F', emoji:'💎' },
      { name:'Orkide', hex:'#DA70D6', emoji:'🦋' },{ name:'Nar Çiçeği', hex:'#FF6B6B', emoji:'🌺' },
      { name:'Lila', hex:'#B695C0', emoji:'🪻' },{ name:'Çilek', hex:'#FC5A8D', emoji:'🍓' },
      { name:'Vişne', hex:'#9B1B30', emoji:'🍒' },{ name:'Şarap Kırmızısı', hex:'#722F37', emoji:'🍷' },
      { name:'Pudra Pembesi', hex:'#F4C2C2', emoji:'🎀' },{ name:'Karanfil', hex:'#FF6B8A', emoji:'💐' },
      { name:'Eflatun', hex:'#8B7DAF', emoji:'☂️' },{ name:'Somom', hex:'#FA8072', emoji:'🐠' },
      { name:'Kızılcık', hex:'#DC143C', emoji:'❤️‍🔥' },{ name:'Gül Pembesi', hex:'#FF66B2', emoji:'🌷' },
      { name:'Şampanya', hex:'#F7E7CE', emoji:'🥂' },{ name:'Mürdüm', hex:'#701C1C', emoji:'🫐' },
      { name:'Sakız Pembesi', hex:'#FFD1DC', emoji:'🩷' },{ name:'Alev Kırmızısı', hex:'#FF4500', emoji:'🔥' },
      { name:'İnci', hex:'#FDEEF4', emoji:'🦪' },{ name:'Kadife Kırmızı', hex:'#B31B1B', emoji:'🎭' },
      { name:'Bal Köpüğü', hex:'#FFF0F5', emoji:'🍯' },{ name:'Pasifik Pembesi', hex:'#F778A1', emoji:'🏝️' },
      { name:'Noel Kırmızısı', hex:'#C41E3A', emoji:'🎄' }
    ];
    const today = new Date();
    const color = dailyColors[(today.getDate()-1) % dailyColors.length];
    document.getElementById('colorSwatch').style.backgroundColor = color.hex;
    document.getElementById('colorSwatch').style.color = color.hex;
    document.getElementById('colorName').textContent = color.emoji + ' ' + color.name;
    document.getElementById('colorHex').textContent = color.hex;

    // ── GÜNÜN ŞARKISI & YOUTUBE ─────────
    const dailySongs = [
      { title:'Perfect', artist:'Ed Sheeran', ytId:'2Vv-BfVoq4g', emoji:'💒' },
      { title:'All of Me', artist:'John Legend', ytId:'450p7goxZqg', emoji:'💝' },
      { title:'Öp', artist:'Tarkan', ytId:'P9mwELXPGbA', emoji:'💋' },
      { title:'Ben De Yoluma Giderim', artist:'Sezen Aksu', ytId:'NHEj2N3PE0I', emoji:'🚶‍♀️' },
      { title:'Aşk Laftan Anlamaz', artist:'Buray', ytId:'kQKbFJ3Dxfg', emoji:'💬' },
      { title:'Love Me Like You Do', artist:'Ellie Goulding', ytId:'AJtDXIazrMo', emoji:'✨' },
      { title:'Seni Seviyorum', artist:'Gülşen', ytId:'kXYiU_JCYtU', emoji:'💌' },
      { title:'A Thousand Years', artist:'Christina Perri', ytId:'rtOvBOTyX00', emoji:'⏳' },
      { title:'Yalnızlar Treni', artist:'Manga', ytId:'e-ORhEE9VVg', emoji:'🚂' },
      { title:'Thinking Out Loud', artist:'Ed Sheeran', ytId:'lp-EO5I60KA', emoji:'🕺' },
      { title:'Sarı Çizmeli Mehmet Ağa', artist:'Barış Manço', ytId:'Nq1TnM8KXoM', emoji:'👢' },
      { title:'Just the Way You Are', artist:'Bruno Mars', ytId:'LjhCEhWiKXk', emoji:'🌟' },
      { title:'Unutulmaz', artist:'MFÖ', ytId:'V0PqJXQ2ZUg', emoji:'🎸' },
      { title:'Shallow', artist:'Lady Gaga & Bradley Cooper', ytId:'bo_efYhYU2A', emoji:'🎬' },
      { title:'Canım', artist:'Mustafa Sandal', ytId:'B4xO4QxhXLI', emoji:'💖' },
      { title:'Yellow', artist:'Coldplay', ytId:'yKNxeF4KMsY', emoji:'💛' },
      { title:'Kara Toprak', artist:'Aşık Veysel', ytId:'8qLl145FqQg', emoji:'🌍' },
      { title:'At Last', artist:'Etta James', ytId:'_1uunRdQ61M', emoji:'🎺' },
      { title:'Gitme', artist:'Yıldız Tilbe', ytId:'u9sUzFdXb9I', emoji:'😢' },
      { title:'Can\'t Help Falling in Love', artist:'Elvis Presley', ytId:'vGJTaP6anOU', emoji:'💘' },
      { title:'Senden Daha Güzel', artist:'Duman', ytId:'Mq2KbVxHxR0', emoji:'😍' },
      { title:'Make You Feel My Love', artist:'Adele', ytId:'0put0_a--Ng', emoji:'🎹' },
      { title:'Affet', artist:'Müslüm Gürses', ytId:'LwBmGQKJqT0', emoji:'🕊️' },
      { title:'I Will Always Love You', artist:'Whitney Houston', ytId:'3JWTaaS7LdU', emoji:'🎤' },
      { title:'Mavi Mavi', artist:'İbrahim Tatlıses', ytId:'dF6xZ2CkP9A', emoji:'💙' },
      { title:'Lover', artist:'Taylor Swift', ytId:'-BjZmE2gtdo', emoji:'🤍' },
      { title:'Haydi Gel İçelim', artist:'Yüksek Sadakat', ytId:'OB9kGvQwNCE', emoji:'🍻' },
      { title:'Right Here Waiting', artist:'Richard Marx', ytId:'S_E2EHVxNAE', emoji:'⏰' },
      { title:'Ya Sonra', artist:'Ajda Pekkan', ytId:'vN7HQrgakZU', emoji:'👑' },
      { title:'Best Part', artist:'Daniel Caesar & H.E.R.', ytId:'vBy7FaapGRY', emoji:'🌅' },
      { title:'İmkansız Aşk', artist:'Zeki Müren', ytId:'XVbKfOZzE5M', emoji:'🎭' }
    ];
    const doy = Math.floor((today - new Date(today.getFullYear(),0,0)) / 86400000);
    let currentSongIndex = doy % dailySongs.length;
    const song = dailySongs[currentSongIndex];
    document.getElementById('songTitle').textContent = song.title;
    document.getElementById('songArtist').textContent = song.artist;
    document.querySelector('.song-cover').textContent = song.emoji || '🎶';

    // YouTube
    let ytPlayer, ytReady = false, isMuted = true, currentVolume = 30;
    function loadYT() {
      if (window.YT && window.YT.Player) { createPlayer(); return; }
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
      window.onYouTubeIframeAPIReady = createPlayer;
    }
    function createPlayer() {
      if (ytPlayer) return;
      document.getElementById('ytPlayerContainer').innerHTML = '<div id="ytPlayerActual"></div>';
      ytPlayer = new YT.Player('ytPlayerActual', {
        videoId: song.ytId,
        width:1, height:1,
        playerVars: { autoplay:1, mute:1, controls:0, disablekb:1, fs:0, modestbranding:1, playsinline:1, rel:0 },
        events: {
          onReady: () => { ytReady = true; ytPlayer.setVolume(currentVolume); ytPlayer.playVideo(); },
          onError: () => playNextSong(),
          onStateChange: (e) => { if (e.data === 0) playNextSong(); }
        }
      });
    }
    function playNextSong() {
      currentSongIndex = (currentSongIndex + 1) % dailySongs.length;
      const s = dailySongs[currentSongIndex];
      if (ytPlayer && ytReady) { ytPlayer.loadVideoById(s.ytId); ytPlayer.setVolume(currentVolume); if (isMuted) ytPlayer.mute(); else ytPlayer.unMute(); }
      document.getElementById('songTitle').textContent = s.title;
      document.getElementById('songArtist').textContent = s.artist;
      document.querySelector('.song-cover').textContent = s.emoji || '🎶';
    }
    document.getElementById('btnPlay').addEventListener('click', () => { if (ytPlayer && ytReady) ytPlayer.playVideo(); });
    document.getElementById('btnPause').addEventListener('click', () => { if (ytPlayer && ytReady) ytPlayer.pauseVideo(); });
    document.getElementById('btnUnmute').addEventListener('click', () => {
      if (!ytPlayer || !ytReady) return;
      if (isMuted) { ytPlayer.unMute(); isMuted = false; }
      else { ytPlayer.mute(); isMuted = true; }
      const btn = document.getElementById('btnUnmute');
      btn.textContent = isMuted ? '🔇 Sesi Aç' : '🔊 Sesi Kıs';
      if (!isMuted) btn.classList.add('active-btn'); else btn.classList.remove('active-btn');
    });
    document.getElementById('volumeSlider').addEventListener('input', (e) => {
      currentVolume = parseInt(e.target.value);
      if (ytPlayer && ytReady) ytPlayer.setVolume(currentVolume);
    });
    document.getElementById('btnNextSong').addEventListener('click', playNextSong);
    loadYT();

    // ── ROTALAR (100 adet, ilk 3'ü görünür) ─
    const routes = [
      const routes = [
      { name:'🌅 Sultanahmet Klasik', stops:[ {name:'Ayasofya', query:'Ayasofya+i+Kebir+Camii+İstanbul'}, {name:'Sultanahmet Camii', query:'Sultanahmet+Camii+İstanbul'}, {name:'Yerebatan Sarnıcı', query:'Yerebatan+Sarnıcı+İstanbul'}, {name:'Gülhane Parkı', query:'Gülhane+Parkı+İstanbul'} ] },
      { name:'🕌 Süleymaniye & Vefa', stops:[ {name:'Süleymaniye Camii', query:'Süleymaniye+Camii+İstanbul'}, {name:'Vefa Bozacısı', query:'Vefa+Bozacısı+İstanbul'}, {name:'İstanbul Üniversitesi', query:'İstanbul+Üniversitesi+Beyazıt'}, {name:'Beyazıt Meydanı', query:'Beyazıt+Meydanı+İstanbul'} ] },
      { name:'🎭 Beyoğlu Sanat', stops:[ {name:'İstiklal Caddesi', query:'İstiklal+Caddesi+İstanbul'}, {name:'Galata Kulesi', query:'Galata+Kulesi+İstanbul'}, {name:'Pera Müzesi', query:'Pera+Müzesi+İstanbul'}, {name:'Çiçek Pasajı', query:'Çiçek+Pasajı+Beyoğlu+İstanbul'} ] },
      { name:'🌊 Kadıköy & Moda', stops:[ {name:'Moda Sahili', query:'Moda+Sahili+Kadıköy+İstanbul'}, {name:'Boğa Heykeli', query:'Kadıköy+Boğa+Heykeli+İstanbul'}, {name:'Süreyya Operası', query:'Süreyya+Operası+Kadıköy+İstanbul'}, {name:'Kadıköy Çarşı', query:'Kadıköy+Çarşı+İstanbul'} ] },
      { name:'⛴️ Üsküdar & Kuzguncuk', stops:[ {name:'Kız Kulesi', query:'Kız+Kulesi+İstanbul'}, {name:'Fethi Paşa Korusu', query:'Fethi+Paşa+Korusu+Üsküdar'}, {name:'Kuzguncuk Evleri', query:'Kuzguncuk+İstanbul'}, {name:'Çınaraltı', query:'Çınaraltı+Üsküdar+İstanbul'} ] },
      { name:'🏰 Beşiktaş & Ortaköy', stops:[ {name:'Dolmabahçe Sarayı', query:'Dolmabahçe+Sarayı+İstanbul'}, {name:'Ortaköy Camii', query:'Ortaköy+Camii+İstanbul'}, {name:'Beşiktaş İskelesi', query:'Beşiktaş+İskelesi+İstanbul'}, {name:'Yıldız Parkı', query:'Yıldız+Parkı+Beşiktaş+İstanbul'} ] },
      { name:'🌳 Sarıyer Boğaz', stops:[ {name:'Emirgan Korusu', query:'Emirgan+Korusu+İstanbul'}, {name:'Rumeli Hisarı', query:'Rumeli+Hisarı+İstanbul'}, {name:'Garipçe', query:'Garipçe+Sarıyer+İstanbul'}, {name:'Rumeli Feneri', query:'Rumeli+Feneri+İstanbul'} ] },
      { name:'🏝️ Büyükada', stops:[ {name:'Büyükada İskelesi', query:'Büyükada+İskelesi+İstanbul'}, {name:'Aya Yorgi Kilisesi', query:'Aya+Yorgi+Kilisesi+Büyükada'}, {name:'Adaküre', query:'Adaküre+Büyükada'}, {name:'Nizam Plajı', query:'Nizam+Plajı+Büyükada'} ] },
      { name:'🏛️ Eminönü & Kapalıçarşı', stops:[ {name:'Mısır Çarşısı', query:'Mısır+Çarşısı+İstanbul'}, {name:'Kapalıçarşı', query:'Kapalıçarşı+İstanbul'}, {name:'Nuruosmaniye Camii', query:'Nuruosmaniye+Camii+İstanbul'}, {name:'Çemberlitaş', query:'Çemberlitaş+İstanbul'} ] },
      { name:'🌉 Boğaz Hattı', stops:[ {name:'Eminönü İskelesi', query:'Eminönü+İskelesi+İstanbul'}, {name:'Beşiktaş İskelesi', query:'Beşiktaş+İskelesi+İstanbul'}, {name:'Kanlıca İskelesi', query:'Kanlıca+İskelesi+İstanbul'}, {name:'Anadolu Kavağı', query:'Anadolu+Kavağı+İstanbul'} ] },
      { name:'🎨 Karaköy & Galata', stops:[ {name:'Karaköy İskelesi', query:'Karaköy+İskelesi+İstanbul'}, {name:'İstanbul Modern', query:'İstanbul+Modern+Müzesi'}, {name:'Galata Köprüsü', query:'Galata+Köprüsü+İstanbul'}, {name:'Galata Kulesi', query:'Galata+Kulesi+İstanbul'} ] },
      { name:'🌸 Çamlıca Tepesi', stops:[ {name:'Büyük Çamlıca Tepesi', query:'Büyük+Çamlıca+Tepesi+İstanbul'}, {name:'Küçük Çamlıca Korusu', query:'Küçük+Çamlıca+Korusu+İstanbul'}, {name:'Çamlıca Camii', query:'Çamlıca+Camii+İstanbul'}, {name:'Beylerbeyi Sarayı', query:'Beylerbeyi+Sarayı+İstanbul'} ] },
      { name:'🛍️ Nişantaşı & Teşvikiye', stops:[ {name:'Abdi İpekçi Caddesi', query:'Abdi+İpekçi+Caddesi+İstanbul'}, {name:'Teşvikiye Camii', query:'Teşvikiye+Camii+İstanbul'}, {name:'Maçka Parkı', query:'Maçka+Parkı+İstanbul'}, {name:'City\'s AVM', query:'Citys+Nişantaşı+İstanbul'} ] },
      { name:'🌿 Belgrad Ormanı', stops:[ {name:'Belgrad Ormanı', query:'Belgrad+Ormanı+İstanbul'}, {name:'Neşet Suyu', query:'Neşet+Suyu+Belgrad+Ormanı'}, {name:'Bentler', query:'Bentler+Belgrad+Ormanı'}, {name:'Atatürk Arboretumu', query:'Atatürk+Arboretumu+İstanbul'} ] },
      { name:'🏖️ Şile & Ağva', stops:[ {name:'Şile Plajı', query:'Şile+Plajı+İstanbul'}, {name:'Şile Feneri', query:'Şile+Feneri'}, {name:'Ağva', query:'Ağva+İstanbul'}, {name:'Kurfallı Plajı', query:'Kurfallı+Plajı+Şile'} ] },
      { name:'⛪ Balat & Fener', stops:[ {name:'Balat Evleri', query:'Balat+Evleri+İstanbul'}, {name:'Fener Rum Lisesi', query:'Fener+Rum+Lisesi+İstanbul'}, {name:'Sveti Stefan Kilisesi', query:'Demir+Kilise+İstanbul'}, {name:'Cibali', query:'Cibali+İstanbul'} ] },
      { name:'☕ Eyüp & Pierre Loti', stops:[ {name:'Eyüp Sultan Camii', query:'Eyüp+Sultan+Camii+İstanbul'}, {name:'Pierre Loti Tepesi', query:'Pierre+Loti+Tepesi+İstanbul'}, {name:'Feshane', query:'Feshane+Eyüp+İstanbul'}, {name:'Miniatürk', query:'Miniatürk+İstanbul'} ] },
      { name:'🦅 Anadolu Kavağı', stops:[ {name:'Anadolu Kavağı', query:'Anadolu+Kavağı+İstanbul'}, {name:'Yoros Kalesi', query:'Yoros+Kalesi+İstanbul'}, {name:'Kavak Plajı', query:'Kavak+Plajı+Anadolu+Kavağı'}, {name:'Balık Restoranları', query:'Anadolu+Kavağı+Balık+Restoran'} ] },
      { name:'🏘️ Heybeliada', stops:[ {name:'Heybeliada İskelesi', query:'Heybeliada+İskelesi+İstanbul'}, {name:'Ruhban Okulu', query:'Heybeliada+Ruhban+Okulu'}, {name:'Değirmenburnu', query:'Değirmenburnu+Heybeliada'}, {name:'Çam Limanı', query:'Çam+Limanı+Heybeliada'} ] },
      { name:'⛵ Kınalıada', stops:[ {name:'Kınalıada İskelesi', query:'Kınalıada+İskelesi+İstanbul'}, {name:'Kınalıada Plajı', query:'Kınalıada+Plajı'}, {name:'Hristos Tepesi', query:'Hristos+Tepesi+Kınalıada'}, {name:'Manastır Koyu', query:'Manastır+Koyu+Kınalıada'} ] },
      { name:'🏰 Rumeli Hisarı & Bebek', stops:[ {name:'Rumeli Hisarı', query:'Rumeli+Hisarı+İstanbul'}, {name:'Bebek Sahili', query:'Bebek+Sahili+İstanbul'}, {name:'Bebek Parkı', query:'Bebek+Parkı+İstanbul'}, {name:'Arnavutköy', query:'Arnavutköy+İstanbul'} ] },
      { name:'🌉 Boğaz Köprüsü Altı', stops:[ {name:'15 Temmuz Şehitler Köprüsü', query:'15+Temmuz+Şehitler+Köprüsü+İstanbul'}, {name:'Ortaköy', query:'Ortaköy+İstanbul'}, {name:'Kuruçeşme', query:'Kuruçeşme+İstanbul'}, {name:'Arnavutköy', query:'Arnavutköy+İstanbul'} ] },
      { name:'🎓 Boğaziçi Üniversitesi', stops:[ {name:'Boğaziçi Üniversitesi', query:'Boğaziçi+Üniversitesi+İstanbul'}, {name:'Bebek', query:'Bebek+İstanbul'}, {name:'Hisarüstü', query:'Hisarüstü+İstanbul'}, {name:'Nispetiye Caddesi', query:'Nispetiye+Caddesi+İstanbul'} ] },
      { name:'🖼️ Haliç Kıyısı', stops:[ {name:'Haliç', query:'Haliç+İstanbul'}, {name:'Rahmi Koç Müzesi', query:'Rahmi+Koç+Müzesi+İstanbul'}, {name:'Eyüp Sultan', query:'Eyüp+Sultan+Camii+İstanbul'}, {name:'Miniatürk', query:'Miniatürk+İstanbul'} ] },
      { name:'🎪 Vialand', stops:[ {name:'Vialand', query:'Vialand+İstanbul'}, {name:'İsfanbul', query:'İsfanbul+İstanbul'}, {name:'Eyüp', query:'Eyüp+İstanbul'}, {name:'Alibeyköy Barajı', query:'Alibeyköy+Barajı+İstanbul'} ] },
      { name:'🌲 Polonezköy', stops:[ {name:'Polonezköy', query:'Polonezköy+İstanbul'}, {name:'Polonezköy Tabiat Parkı', query:'Polonezköy+Tabiat+Parkı'}, {name:'Restoranlar', query:'Polonezköy+Restoran'}, {name:'Zofia Rizi Anı Evi', query:'Zofia+Rizi+Anı+Evi+Polonezköy'} ] },
      { name:'🏞️ Göktürk & Kemerburgaz', stops:[ {name:'Göktürk Göleti', query:'Göktürk+Göleti+İstanbul'}, {name:'Kemerburgaz Ormanı', query:'Kemerburgaz+Ormanı+İstanbul'}, {name:'Kemer Country', query:'Kemer+Country+İstanbul'}, {name:'Kent Ormanı', query:'Kemerburgaz+Kent+Ormanı'} ] },
      { name:'🏟️ Fenerbahçe & Kalamış', stops:[ {name:'Fenerbahçe Burnu', query:'Fenerbahçe+Burnu+İstanbul'}, {name:'Kalamış Parkı', query:'Kalamış+Parkı+İstanbul'}, {name:'Fenerbahçe Parkı', query:'Fenerbahçe+Parkı+İstanbul'}, {name:'Kalamış Marina', query:'Kalamış+Marina+İstanbul'} ] },
      { name:'🍽️ Kadıköy Çarşı', stops:[ {name:'Boğa Heykeli', query:'Kadıköy+Boğa+Heykeli+İstanbul'}, {name:'Çiya Sofrası', query:'Çiya+Sofrası+Kadıköy'}, {name:'Balık Pazarı', query:'Kadıköy+Balık+Pazarı'}, {name:'Moda Caddesi', query:'Moda+Caddesi+Kadıköy'} ] },
      { name:'🎶 Caddebostan & Bağdat', stops:[ {name:'Caddebostan Sahili', query:'Caddebostan+Sahili+İstanbul'}, {name:'Bağdat Caddesi', query:'Bağdat+Caddesi+İstanbul'}, {name:'Suadiye Plajı', query:'Suadiye+Plajı+İstanbul'}, {name:'Caddebostan Kültür Merkezi', query:'Caddebostan+Kültür+Merkezi+İstanbul'} ] },
      { name:'🌅 Bostancı Sahil', stops:[ {name:'Bostancı İskelesi', query:'Bostancı+İskelesi+İstanbul'}, {name:'Bostancı Sahil Yolu', query:'Bostancı+Sahil+Yolu'}, {name:'Bostancı Lunapark', query:'Bostancı+Lunapark'}, {name:'Gösteri Merkezi', query:'Bostancı+Gösteri+Merkezi'} ] },
      { name:'🏖️ Maltepe Sahil', stops:[ {name:'Maltepe Sahili', query:'Maltepe+Sahili+İstanbul'}, {name:'Maltepe Park', query:'Maltepe+Park+İstanbul'}, {name:'Küçükyalı', query:'Küçükyalı+İstanbul'}, {name:'İdealtepe', query:'İdealtepe+İstanbul'} ] },
      { name:'🏝️ Kartal & Dragos', stops:[ {name:'Dragos Tepesi', query:'Dragos+Tepesi+İstanbul'}, {name:'Dragos Sahili', query:'Dragos+Sahili+İstanbul'}, {name:'Kartal İskelesi', query:'Kartal+İskelesi+İstanbul'}, {name:'Aydos Ormanı', query:'Aydos+Ormanı+İstanbul'} ] },
      { name:'🌲 Pendik & Aydos', stops:[ {name:'Pendik Sahili', query:'Pendik+Sahili+İstanbul'}, {name:'Aydos Dağı', query:'Aydos+Dağı+İstanbul'}, {name:'Pendik Marina', query:'Pendik+Marina+İstanbul'}, {name:'Çamlık Parkı', query:'Çamlık+Parkı+Pendik'} ] },
      { name:'⛵ Tuzla', stops:[ {name:'Tuzla Sahili', query:'Tuzla+Sahili+İstanbul'}, {name:'Viaport Marina', query:'Viaport+Marina+Tuzla'}, {name:'Tuzla Tersanesi', query:'Tuzla+Tersanesi+İstanbul'}, {name:'Şifa Plajı', query:'Şifa+Plajı+Tuzla'} ] },
      { name:'🕌 Fatih & Çarşamba', stops:[ {name:'Fatih Camii', query:'Fatih+Camii+İstanbul'}, {name:'Kariye Müzesi', query:'Kariye+Müzesi+İstanbul'}, {name:'Edirnekapı', query:'Edirnekapı+İstanbul'}, {name:'Mihrimah Sultan Camii', query:'Mihrimah+Sultan+Camii+Edirnekapı'} ] },
      { name:'📚 Beyazıt & Laleli', stops:[ {name:'Beyazıt Meydanı', query:'Beyazıt+Meydanı+İstanbul'}, {name:'Beyazıt Kütüphanesi', query:'Beyazıt+Devlet+Kütüphanesi+İstanbul'}, {name:'Laleli Camii', query:'Laleli+Camii+İstanbul'}, {name:'İstanbul Üniversitesi', query:'İstanbul+Üniversitesi+Laleli'} ] },
      { name:'🎨 Taksim & Cihangir', stops:[ {name:'Taksim Meydanı', query:'Taksim+Meydanı+İstanbul'}, {name:'Gezi Parkı', query:'Gezi+Parkı+İstanbul'}, {name:'Cihangir Parkı', query:'Cihangir+Parkı+İstanbul'}, {name:'Cihangir Kahveleri', query:'Cihangir+Kahve+İstanbul'} ] },
      { name:'🎸 Kadıköy Moda Kafe', stops:[ {name:'Moda Çay Bahçesi', query:'Moda+Çay+Bahçesi+Kadıköy'}, {name:'Moda İskelesi', query:'Moda+İskelesi+İstanbul'}, {name:'Barış Manço Evi', query:'Barış+Manço+Evi+Moda'}, {name:'Sarıca Paşa Konağı', query:'Sarıca+Paşa+Konağı+Kadıköy'} ] },
      { name:'🌸 Çengelköy & Beylerbeyi', stops:[ {name:'Çengelköy Sahili', query:'Çengelköy+Sahili+İstanbul'}, {name:'Beylerbeyi Sarayı', query:'Beylerbeyi+Sarayı+İstanbul'}, {name:'Beylerbeyi Camii', query:'Beylerbeyi+Camii+İstanbul'}, {name:'Çengelköy Börekçisi', query:'Çengelköy+Börekçisi'} ] },
      { name:'🌉 Kandilli & Vaniköy', stops:[ {name:'Kandilli Sahili', query:'Kandilli+Sahili+İstanbul'}, {name:'Vaniköy Camii', query:'Vaniköy+Camii+İstanbul'}, {name:'Kandilli Rasathanesi', query:'Kandilli+Rasathanesi+İstanbul'}, {name:'Küçüksu Kasrı', query:'Küçüksu+Kasrı+İstanbul'} ] },
      { name:'🏰 Anadolu Hisarı', stops:[ {name:'Anadolu Hisarı', query:'Anadolu+Hisarı+İstanbul'}, {name:'Göksu Deresi', query:'Göksu+Deresi+İstanbul'}, {name:'Küçüksu Kasrı', query:'Küçüksu+Kasrı+İstanbul'}, {name:'Kanlıca', query:'Kanlıca+İstanbul'} ] },
      { name:'🍦 Kanlıca', stops:[ {name:'Kanlıca İskelesi', query:'Kanlıca+İskelesi+İstanbul'}, {name:'Kanlıca Yoğurdu', query:'Kanlıca+Yoğurdu+İstanbul'}, {name:'Mihrabat Korusu', query:'Mihrabat+Korusu+İstanbul'}, {name:'Kanlıca Sahili', query:'Kanlıca+Sahili+İstanbul'} ] },
      { name:'🌳 Yeniköy & Tarabya', stops:[ {name:'Yeniköy Sahili', query:'Yeniköy+Sahili+İstanbul'}, {name:'Tarabya Sahili', query:'Tarabya+Sahili+İstanbul'}, {name:'Tarabya Parkı', query:'Tarabya+Parkı+İstanbul'}, {name:'Sait Halim Paşa Konağı', query:'Sait+Halim+Paşa+Konağı+Yeniköy'} ] },
      { name:'🏞️ Büyükdere & Sarıyer', stops:[ {name:'Büyükdere Sahili', query:'Büyükdere+Sahili+İstanbul'}, {name:'Sadberk Hanım Müzesi', query:'Sadberk+Hanım+Müzesi+İstanbul'}, {name:'Sarıyer İskelesi', query:'Sarıyer+İskelesi+İstanbul'}, {name:'Hacıosman Korusu', query:'Hacıosman+Korusu+İstanbul'} ] },
      { name:'🍷 Kilyos', stops:[ {name:'Kilyos Plajı', query:'Kilyos+Plajı+İstanbul'}, {name:'Burç Beach', query:'Burç+Beach+Kilyos'}, {name:'Kilyos Kalesi', query:'Kilyos+Kalesi+İstanbul'}, {name:'Kumköy', query:'Kumköy+İstanbul'} ] },
      { name:'⛪ Burgazada', stops:[ {name:'Burgazada İskelesi', query:'Burgazada+İskelesi+İstanbul'}, {name:'Sait Faik Müzesi', query:'Sait+Faik+Müzesi+Burgazada'}, {name:'Kalpazankaya', query:'Kalpazankaya+Burgazada'}, {name:'Burgazada Plajı', query:'Burgazada+Plajı'} ] },
      { name:'🏛️ Sultanahmet Akşam', stops:[ {name:'Sultanahmet Camii', query:'Sultanahmet+Camii+İstanbul'}, {name:'Dikilitaş', query:'Dikilitaş+Sultanahmet'}, {name:'Alman Çeşmesi', query:'Alman+Çeşmesi+Sultanahmet'}, {name:'Arasta Bazaar', query:'Arasta+Bazaar+İstanbul'} ] },
      { name:'🌙 Galata Kulesi Gece', stops:[ {name:'Galata Kulesi', query:'Galata+Kulesi+İstanbul'}, {name:'Serdar-ı Ekrem Caddesi', query:'Serdarı+Ekrem+Caddesi+İstanbul'}, {name:'Galata Köprüsü', query:'Galata+Köprüsü+İstanbul'}, {name:'Karaköy', query:'Karaköy+İstanbul'} ] },
      { name:'☕ Bağdat Caddesi', stops:[ {name:'Caddebostan', query:'Caddebostan+İstanbul'}, {name:'Suadiye', query:'Suadiye+İstanbul'}, {name:'Erenköy', query:'Erenköy+İstanbul'}, {name:'Göztepe Parkı', query:'Göztepe+Parkı+İstanbul'} ] },
      { name:'🏙️ Maslak & Levent', stops:[ {name:'Kanyon AVM', query:'Kanyon+AVM+İstanbul'}, {name:'Metrocity', query:'Metrocity+İstanbul'}, {name:'Maslak', query:'Maslak+İstanbul'}, {name:'İstinye Park', query:'İstinye+Park+AVM'} ] },
      { name:'🎭 AKM & Taksim', stops:[ {name:'Atatürk Kültür Merkezi', query:'Atatürk+Kültür+Merkezi+İstanbul'}, {name:'Taksim Meydanı', query:'Taksim+Meydanı+İstanbul'}, {name:'İstiklal Caddesi', query:'İstiklal+Caddesi+İstanbul'}, {name:'Gezi Parkı', query:'Gezi+Parkı+İstanbul'} ] },
      { name:'🌃 İstinye & Tarabya', stops:[ {name:'İstinye Park', query:'İstinye+Park+AVM'}, {name:'İstinye Sahili', query:'İstinye+Sahili+İstanbul'}, {name:'Tarabya', query:'Tarabya+İstanbul'}, {name:'Yeniköy', query:'Yeniköy+İstanbul'} ] },
      { name:'🛳️ Kabataş İskelesi', stops:[ {name:'Kabataş İskelesi', query:'Kabataş+İskelesi+İstanbul'}, {name:'Dolmabahçe Sarayı', query:'Dolmabahçe+Sarayı+İstanbul'}, {name:'Beşiktaş İskelesi', query:'Beşiktaş+İskelesi+İstanbul'}, {name:'Maçka Parkı', query:'Maçka+Parkı+İstanbul'} ] },
      { name:'🍗 Kız Kulesi', stops:[ {name:'Kız Kulesi', query:'Kız+Kulesi+İstanbul'}, {name:'Üsküdar İskelesi', query:'Üsküdar+İskelesi+İstanbul'}, {name:'Salacak', query:'Salacak+Üsküdar'}, {name:'Üsküdar Sahili', query:'Üsküdar+Sahili+İstanbul'} ] },
      { name:'🎣 Rumeli Feneri', stops:[ {name:'Rumeli Feneri', query:'Rumeli+Feneri+İstanbul'}, {name:'Garipçe', query:'Garipçe+İstanbul'}, {name:'Poyrazköy', query:'Poyrazköy+İstanbul'}, {name:'Kumköy', query:'Kumköy+İstanbul'} ] },
      { name:'🏖️ Kilyos Plajları', stops:[ {name:'Solar Beach', query:'Solar+Beach+Kilyos'}, {name:'Uzunya', query:'Uzunya+Kilyos'}, {name:'Nonstop Beach', query:'Nonstop+Beach+Kilyos'}, {name:'Tirmata Plajı', query:'Tirmata+Plajı+Kilyos'} ] },
      { name:'🌳 Atatürk Arboretumu', stops:[ {name:'Atatürk Arboretumu', query:'Atatürk+Arboretumu+İstanbul'}, {name:'Kemerburgaz', query:'Kemerburgaz+İstanbul'}, {name:'Belgrad Ormanı', query:'Belgrad+Ormanı+İstanbul'}, {name:'Bahçeköy', query:'Bahçeköy+İstanbul'} ] },
      { name:'🏛️ Miniatürk', stops:[ {name:'Miniatürk', query:'Miniatürk+İstanbul'}, {name:'Haliç', query:'Haliç+İstanbul'}, {name:'Rahmi Koç Müzesi', query:'Rahmi+Koç+Müzesi+İstanbul'}, {name:'Eyüp', query:'Eyüp+İstanbul'} ] },
      { name:'🎢 Vialand Eğlence', stops:[ {name:'Vialand', query:'Vialand+İstanbul'}, {name:'Nefeskesen', query:'Nefeskesen+Vialand'}, {name:'Su Oyunları', query:'Vialand+Su+Oyunları'}, {name:'Vialand AVM', query:'Vialand+AVM'} ] },
      { name:'🦁 İstanbul Akvaryum', stops:[ {name:'İstanbul Akvaryum', query:'İstanbul+Akvaryum+Florya'}, {name:'Florya Sahili', query:'Florya+Sahili+İstanbul'}, {name:'Florya Atatürk Köşkü', query:'Florya+Atatürk+Köşkü'}, {name:'Şenlikköy', query:'Şenlikköy+İstanbul'} ] },
      { name:'🐠 Sea Life İstanbul', stops:[ {name:'Sea Life', query:'Sea+Life+İstanbul+Forum'}, {name:'Forum İstanbul AVM', query:'Forum+İstanbul+AVM'}, {name:'Bayrampaşa', query:'Bayrampaşa+İstanbul'}, {name:'Eyüp', query:'Eyüp+İstanbul'} ] },
      { name:'🦜 Kuş Cenneti', stops:[ {name:'İstanbul Kuş Cenneti', query:'İstanbul+Kuş+Cenneti+Küçükçekmece'}, {name:'Küçükçekmece Gölü', query:'Küçükçekmece+Gölü'}, {name:'Avcılar Sahili', query:'Avcılar+Sahili'}, {name:'Ispartakule', query:'Ispartakule+İstanbul'} ] },
      { name:'🎪 Bakırköy Sahil', stops:[ {name:'Bakırköy Sahili', query:'Bakırköy+Sahili+İstanbul'}, {name:'Ataköy Marina', query:'Ataköy+Marina+İstanbul'}, {name:'Yeşilköy Sahili', query:'Yeşilköy+Sahili+İstanbul'}, {name:'Florya', query:'Florya+İstanbul'} ] },
      { name:'🏖️ Yeşilköy & Florya', stops:[ {name:'Yeşilköy Sahili', query:'Yeşilköy+Sahili+İstanbul'}, {name:'Florya Atatürk Köşkü', query:'Florya+Atatürk+Köşkü'}, {name:'İstanbul Akvaryum', query:'İstanbul+Akvaryum+Florya'}, {name:'Yeşilköy Çarşı', query:'Yeşilköy+Çarşı+İstanbul'} ] },
      { name:'🎵 Harbiye Açıkhava', stops:[ {name:'Harbiye Açıkhava Tiyatrosu', query:'Harbiye+Açıkhava+Tiyatrosu+İstanbul'}, {name:'Askeri Müze', query:'Askeri+Müze+İstanbul'}, {name:'Nişantaşı', query:'Nişantaşı+İstanbul'}, {name:'Maçka Parkı', query:'Maçka+Parkı+İstanbul'} ] },
      { name:'🛍️ Cevahir AVM', stops:[ {name:'Cevahir AVM', query:'Cevahir+AVM+İstanbul'}, {name:'Şişli', query:'Şişli+İstanbul'}, {name:'Mecidiyeköy', query:'Mecidiyeköy+İstanbul'}, {name:'Trump Towers', query:'Trump+Towers+İstanbul'} ] },
      { name:'🌃 Bağdat Caddesi Alışveriş', stops:[ {name:'Bağdat Caddesi', query:'Bağdat+Caddesi+İstanbul'}, {name:'Caddebostan', query:'Caddebostan+İstanbul'}, {name:'Suadiye', query:'Suadiye+İstanbul'}, {name:'Erenköy', query:'Erenköy+İstanbul'} ] },
      { name:'🍣 Nişantaşı Kafeler', stops:[ {name:'Abdi İpekçi Caddesi', query:'Abdi+İpekçi+Caddesi+İstanbul'}, {name:'Teşvikiye Camii', query:'Teşvikiye+Camii+İstanbul'}, {name:'City\'s', query:'Citys+Nişantaşı'}, {name:'Maçka Parkı', query:'Maçka+Parkı+İstanbul'} ] },
      { name:'🍰 Bebek Kahvaltı', stops:[ {name:'Bebek Sahili', query:'Bebek+Sahili+İstanbul'}, {name:'Bebek Kahvecileri', query:'Bebek+Kahve+İstanbul'}, {name:'Bebek Parkı', query:'Bebek+Parkı+İstanbul'}, {name:'Arnavutköy', query:'Arnavutköy+İstanbul'} ] },
      { name:'🥙 Ortaköy Kumpir', stops:[ {name:'Ortaköy Meydanı', query:'Ortaköy+Meydanı+İstanbul'}, {name:'Ortaköy Camii', query:'Ortaköy+Camii+İstanbul'}, {name:'Kumpirciler', query:'Ortaköy+Kumpir'}, {name:'Boğaz Köprüsü Manzarası', query:'Ortaköy+Boğaz+Köprüsü+Manzara'} ] },
      { name:'☕ Moda Çay Bahçesi', stops:[ {name:'Moda Çay Bahçesi', query:'Moda+Çay+Bahçesi+Kadıköy'}, {name:'Moda Sahili', query:'Moda+Sahili+Kadıköy'}, {name:'Moda İskelesi', query:'Moda+İskelesi+İstanbul'}, {name:'Kadıköy Boğa', query:'Kadıköy+Boğa+Heykeli+İstanbul'} ] },
      { name:'🎸 Kadıköy Sahne', stops:[ {name:'Kadıköy Sahne', query:'Kadıköy+Sahne+İstanbul'}, {name:'Barlar Sokağı', query:'Barlar+Sokağı+Kadıköy'}, {name:'Kadıköy İskelesi', query:'Kadıköy+İskelesi+İstanbul'}, {name:'Moda', query:'Moda+Kadıköy'} ] },
      { name:'🌉 Boğaz Turu Uzun', stops:[ {name:'Eminönü', query:'Eminönü+İstanbul'}, {name:'Üsküdar', query:'Üsküdar+İstanbul'}, {name:'Beşiktaş', query:'Beşiktaş+İstanbul'}, {name:'Sarıyer', query:'Sarıyer+İstanbul'} ] },
      { name:'🏖️ Prens Adaları Turu', stops:[ {name:'Büyükada', query:'Büyükada+İstanbul'}, {name:'Heybeliada', query:'Heybeliada+İstanbul'}, {name:'Burgazada', query:'Burgazada+İstanbul'}, {name:'Kınalıada', query:'Kınalıada+İstanbul'} ] },
      { name:'🌳 Fenerbahçe Parkı', stops:[ {name:'Fenerbahçe Parkı', query:'Fenerbahçe+Parkı+İstanbul'}, {name:'Kalamış Marina', query:'Kalamış+Marina+İstanbul'}, {name:'Fenerbahçe Burnu', query:'Fenerbahçe+Burnu+İstanbul'}, {name:'Fenerbahçe Stadı', query:'Fenerbahçe+Stadı+İstanbul'} ] },
      { name:'🏛️ Dolmabahçe & Beşiktaş', stops:[ {name:'Dolmabahçe Sarayı', query:'Dolmabahçe+Sarayı+İstanbul'}, {name:'Saat Kulesi', query:'Dolmabahçe+Saat+Kulesi+İstanbul'}, {name:'Beşiktaş İskelesi', query:'Beşiktaş+İskelesi+İstanbul'}, {name:'Vodafone Park', query:'Vodafone+Park+İstanbul'} ] },
      { name:'🌲 Yıldız Parkı Piknik', stops:[ {name:'Yıldız Parkı', query:'Yıldız+Parkı+Beşiktaş+İstanbul'}, {name:'Malta Köşkü', query:'Malta+Köşkü+Yıldız+Parkı'}, {name:'Çadır Köşkü', query:'Çadır+Köşkü+Yıldız+Parkı'}, {name:'Beşiktaş', query:'Beşiktaş+İstanbul'} ] },
      { name:'🏞️ Küçüksu & Beykoz', stops:[ {name:'Küçüksu Kasrı', query:'Küçüksu+Kasrı+İstanbul'}, {name:'Beykoz Korusu', query:'Beykoz+Korusu+İstanbul'}, {name:'Anadolu Hisarı', query:'Anadolu+Hisarı+İstanbul'}, {name:'Beykoz İskelesi', query:'Beykoz+İskelesi+İstanbul'} ] },
      { name:'⛵ Çubuklu & Paşabahçe', stops:[ {name:'Çubuklu Sahili', query:'Çubuklu+Sahili+İstanbul'}, {name:'Paşabahçe', query:'Paşabahçe+İstanbul'}, {name:'Hidiv Kasrı', query:'Hidiv+Kasrı+İstanbul'}, {name:'Çubuklu İskelesi', query:'Çubuklu+İskelesi+İstanbul'} ] },
      { name:'🏘️ Kuzguncuk Turu', stops:[ {name:'Kuzguncuk Evleri', query:'Kuzguncuk+İstanbul'}, {name:'Kuzguncuk Bostanı', query:'Kuzguncuk+Bostanı'}, {name:'Kuzguncuk İskelesi', query:'Kuzguncuk+İskelesi+İstanbul'}, {name:'Üryanizade Camii', query:'Üryanizade+Camii+Kuzguncuk'} ] },
      { name:'🌸 Beylerbeyi Sarayı', stops:[ {name:'Beylerbeyi Sarayı', query:'Beylerbeyi+Sarayı+İstanbul'}, {name:'Beylerbeyi Sahili', query:'Beylerbeyi+Sahili+İstanbul'}, {name:'Beylerbeyi Camii', query:'Beylerbeyi+Camii+İstanbul'}, {name:'Çengelköy', query:'Çengelköy+İstanbul'} ] },
      { name:'🌉 Fatih Sultan Mehmet Köprüsü', stops:[ {name:'FSM Köprüsü', query:'Fatih+Sultan+Mehmet+Köprüsü+İstanbul'}, {name:'Rumeli Hisarı', query:'Rumeli+Hisarı+İstanbul'}, {name:'Anadolu Hisarı', query:'Anadolu+Hisarı+İstanbul'}, {name:'Emirgan', query:'Emirgan+İstanbul'} ] }
    ];
    ];
    // Render routes
    const routesContainer = document.getElementById('routesContainer');
    routesContainer.innerHTML = '';
    routes.forEach((r, index) => {
      const div = document.createElement('div');
      div.className = 'route-set';
      if (index >= 3) div.classList.add('route-hidden');
      div.innerHTML = `<div class="route-title">${r.name}</div><div class="route-stops">` +
        r.stops.map((s,i) => `${i>0?'<span class="route-arrow">→</span>':''}<a class="route-stop" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.query)}" target="_blank" rel="noopener">${s.name}</a>`).join('') +
        '</div>';
      routesContainer.appendChild(div);
    });
    // Toggle button
    const toggleBtn = document.getElementById('toggleRoutesBtn');
let allVisible = false;

toggleBtn.addEventListener('click', () => {
  const hiddenRoutes = document.querySelectorAll('.route-set.route-hidden');
  if (!allVisible) {
    // Tüm gizli rotaları göster
    hiddenRoutes.forEach(el => el.classList.remove('route-hidden'));
    toggleBtn.innerHTML = '▲ Daha Az Göster';
    allVisible = true;
  } else {
    // İlk 3 hariç hepsini gizle
    const allRoutes = document.querySelectorAll('.route-set');
    allRoutes.forEach((el, idx) => {
      if (idx >= 3) el.classList.add('route-hidden');
    });
    toggleBtn.innerHTML = '▼ Daha Fazla Göster';
    allVisible = false;
    // İsteğe bağlı: yukarı kaydır
    routesContainer.scrollIntoView({ behavior: 'smooth' });
  }
});

    // ── TARİH & SÜRPRİZ ────────────────
    const datePicker = document.getElementById('datePicker');
    datePicker.value = today.toISOString().split('T')[0];
    const lastGen = { romantic:[], fun:[], memory:[] };
    function getUnique(cat) {
      const pool = cat === 'romantic' ? romantic : cat === 'fun' ? fun : memory;
      const arr = cat === 'romantic' ? lastGen.romantic : cat === 'fun' ? lastGen.fun : lastGen.memory;
      if (arr.length >= pool.length * 0.7) arr.length = 0;
      const avail = [];
      for (let i=0; i<pool.length; i++) if (!arr.includes(i)) avail.push(i);
      if (!avail.length) { arr.length = 0; for (let i=0; i<pool.length; i++) avail.push(i); }
      const pick = avail[Math.floor(Math.random() * avail.length)];
      arr.push(pick);
      return { index:pick, text:pool[pick] };
    }
    document.getElementById('surpriseBtn').addEventListener('click', () => {
      if (!datePicker.value) return;
      const btn = document.getElementById('surpriseBtn');
      const rect = btn.getBoundingClientRect();
      burst(rect.left+rect.width/2, rect.top+rect.height/2, 35);
      confetti(rect.left+rect.width/2, rect.top+rect.height/2, 50);
      const picks = [
        { ...getUnique('romantic'), category:'💖 Romantik', emoji:'💖', delay:0 },
        { ...getUnique('fun'), category:'🎉 Eğlenceli', emoji:'🎉', delay:150 },
        { ...getUnique('memory'), category:'📸 Anı Biriktirme', emoji:'📸', delay:300 }
      ].sort(()=>Math.random()-0.5);
      ['card0','card1','card2'].forEach((id,i) => {
        const card = document.getElementById(id);
        card.classList.remove('revealed');
        card.innerHTML = '<span class="mystery-text">❓</span><span class="mystery-label">?</span><div class="card-shimmer"></div>';
        setTimeout(() => {
          card.classList.add('revealed');
          card.innerHTML = `<div class="card-icon">${picks[i].emoji}</div><div class="card-category">${picks[i].category}</div><div class="card-activity">${picks[i].text}</div>`;
        }, picks[i].delay+200);
      });
      activityHistory.push(...picks.map(p => ({ text:p.text, category:p.category, emoji:p.emoji, date:datePicker.value })));
      saveHistory();
      showToast(`✨ ${new Date(datePicker.value).toLocaleDateString('tr-TR',{weekday:'long',year:'numeric',month:'long',day:'numeric'})} için 3 aktivite!`);
    });

    // ── GEÇMİŞ ─────────────────────────
    let activityHistory = [];
    const historyContainer = document.getElementById('historyContainer');
    function loadHistory() {
      const s = localStorage.getItem('activityHistory');
      if (s) try { activityHistory = JSON.parse(s); } catch(e) { activityHistory = []; }
      renderHistory();
    }
    function saveHistory() {
      if (activityHistory.length > 30) activityHistory = activityHistory.slice(-30);
      localStorage.setItem('activityHistory', JSON.stringify(activityHistory));
      renderHistory();
    }
    function renderHistory() {
      if (!activityHistory.length) {
        historyContainer.innerHTML = '<span style="opacity:0.5;font-size:0.8rem;">Henüz aktivite üretilmedi</span>';
        return;
      }
      historyContainer.innerHTML = activityHistory.slice().reverse().slice(0,15).map(a => `<span class="history-badge">${a.emoji||''} ${a.text}</span>`).join('');
    }
    document.getElementById('clearHistory').addEventListener('click', () => { activityHistory = []; saveHistory(); showToast('🗑️ Geçmiş temizlendi'); });
    loadHistory();

    // ── TOAST ───────────────────────────
    let toastTimer;
    function showToast(msg) {
      const toast = document.getElementById('toast');
      clearTimeout(toastTimer);
      toast.textContent = msg;
      toast.classList.add('show');
      toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
    }

    // ── BURST & CONFETTI ────────────────
    function burst(x, y, n=28) {
      const emojis = ['❤️','💖','💗','💝','💘','💕','💞','🩷','❤️‍🔥','💓','🫶','💟'];
      const container = document.getElementById('burstContainer');
      for (let i=0; i<n; i++) {
        const h = document.createElement('span');
        h.className = 'burst-heart';
        h.textContent = emojis[Math.floor(Math.random()*emojis.length)];
        h.style.left = x + 'px';
        h.style.top = y + 'px';
        const a = Math.random()*Math.PI*2, d = 60+Math.random()*180;
        h.style.setProperty('--bx', Math.cos(a)*d*0.5+'px');
        h.style.setProperty('--by', Math.sin(a)*d*0.5-Math.random()*60+'px');
        h.style.setProperty('--ex', Math.cos(a)*d+'px');
        h.style.setProperty('--ey', Math.sin(a)*d-Math.random()*100+'px');
        container.appendChild(h);
        setTimeout(() => { if (h.parentNode) h.remove(); }, 1800);
      }
    }
    function confetti(x, y, n=40) {
      const emojis = ['🎉','✨','💖','🌟','💫','🎊','💝','🥳','💗','🎀','💘','🌸'];
      for (let i=0; i<n; i++) {
        const p = document.createElement('span');
        p.className = 'confetti-piece';
        p.textContent = emojis[Math.floor(Math.random()*emojis.length)];
        p.style.left = (x + (Math.random()-0.5)*300) + 'px';
        p.style.top = (y - Math.random()*80) + 'px';
        document.body.appendChild(p);
        setTimeout(() => { if (p.parentNode) p.remove(); }, 3500);
      }
    }

    // ── FLOATING HEARTS ──────────────────
    function spawnFloat() {
      const container = document.getElementById('floatingHearts');
      if (container.children.length > 20) return;
      const h = document.createElement('span');
      h.className = 'float-heart';
      h.textContent = ['💖','💗','💝','💘','💕','🩷','💞','🌸','✨','💫'][Math.floor(Math.random()*10)];
      h.style.left = Math.random()*95+'%';
      h.style.fontSize = (14+Math.random()*28)+'px';
      container.appendChild(h);
      setTimeout(() => { if (h.parentNode) h.remove(); }, parseFloat(h.style.animationDuration)*1000+500);
    }
    setInterval(spawnFloat, 1500);
    for (let i=0; i<10; i++) setTimeout(spawnFloat, i*400);

    // ── MOUSE TRAIL ──────────────────────
    let mt;
    document.addEventListener('mousemove', (e) => {
      if (mt) return;
      mt = setTimeout(() => { mt = null; }, 120);
      if (Math.random() < 0.65) return;
      const h = document.createElement('span');
      h.className = 'mouse-heart';
      h.textContent = ['💖','💗','🩷','💕','✨'][Math.floor(Math.random()*5)];
      h.style.left = e.clientX+'px';
      h.style.top = e.clientY+'px';
      document.body.appendChild(h);
      setTimeout(() => { if (h.parentNode) h.remove(); }, 850);
    });

    // ── SLIDER ──────────────────────────
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-img');
    const dots = document.querySelectorAll('.dot');
    function showSlide(i) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active-dot'));
      slides[i].classList.add('active');
      dots[i].classList.add('active-dot');
    }
    document.querySelector('.prev-btn').addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
    document.querySelector('.next-btn').addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);

    // ── SÜRÜKLE BIRAK ──────────────────
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const extraPhotos = document.getElementById('extraPhotos');
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.style.background='rgba(255,107,138,0.2)'; });
    dropZone.addEventListener('dragleave', () => { dropZone.style.background=''; });
    dropZone.addEventListener('drop', e => {
      e.preventDefault();
      dropZone.style.background='';
      handleFiles(e.dataTransfer.files);
    });
    fileInput.addEventListener('change', () => handleFiles(fileInput.files));
    function handleFiles(files) {
      for (let file of files) {
        if (!file.type.startsWith('image/')) continue;
        const reader = new FileReader();
        reader.onload = e => {
          const img = document.createElement('img');
          img.src = e.target.result;
          extraPhotos.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    }

    // ── SÜRPRİZ MESAJ ───────────────────
    document.getElementById('secretMessageBtn').addEventListener('click', () => {
      const popup = document.createElement('div');
      popup.className = 'secret-popup';
      popup.textContent = '💖 Seni her gün daha çok seviyorum Mercan! 💖';
      popup.addEventListener('click', () => popup.remove());
      document.body.appendChild(popup);
      setTimeout(() => { if (popup.parentNode) popup.remove(); }, 4000);
    });

    console.log('💖 Aşk Rotası - tüm özellikler aktif!');
  }
})();
