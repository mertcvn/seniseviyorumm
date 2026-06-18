const tasks = [
"Boğazda gün batımı yürüyüşü 🌅",
"Kahve içip uzun sohbet ☕",
"Birlikte yemek yapma 🍝",
"Film gecesi 🎬",
"El ele şehir turu 🚶‍♂️",
"Piknik yapmak 🧺",
"Fotoğraf çekmek 📸",
"Yeni tatlı denemek 🍰",
"Gece sahil yürüyüşü 🌙",
"Playlist yapmak 🎧"
];

const messages = [
"Bugün seni biraz daha fazla seviyorum 💖",
"Sen benim en güzel tesadüfümsün ✨",
"Birlikte her şey daha güzel 💕",
"Kalbim hep seninle 🫶",
"Bugün sadece sana ait 💌"
];

function openSurprise() {
    const date = document.getElementById("date").value;

    if(!date){
        alert("Bir tarih seç 💖");
        return;
    }

    const d = new Date(date);

    const index = (d.getDate() + d.getMonth()) % tasks.length;
    const msgIndex = Math.floor(Math.random() * messages.length);

    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="card">
            <h2>💖 Bugünün Sürprizi</h2>
            <p>${tasks[index]}</p>
            <hr style="opacity:0.2">
            <p style="opacity:0.8">${messages[msgIndex]}</p>
        </div>
    `;
}

const places = [
"Galata Kulesi","Galata Köprüsü","Karaköy sahil","Karaköy sokakları","Tersane İstanbul",
"Moda sahil","Moda iskelesi","Moda parkı","Yoğurtçu Parkı","Kadıköy çarşı",
"Bahariye Caddesi","Kadıköy iskele","Rıhtım yürüyüş yolu","Fenerbahçe parkı",
"Caddebostan sahili","Caddebostan plajı","Suadiye sahili","Bostancı sahil",
"Maltepe sahil parkı","Kartal sahil","Dragos tepesi","İdealtepe sahil",
"Pendik sahil","Tuzla marina","Viaport marina","Aydos Ormanı","Aydos göleti",
"Üsküdar sahil","Salacak","Kız Kulesi karşısı","Kuzguncuk sokakları",
"Çengelköy sahili","Beylerbeyi sahil","Kuleli sahili","Çamlıca Tepesi",
"Büyük Çamlıca Camii çevresi","Küçük Çamlıca tepesi","Validebağ Korusu",
"Altunizade","Acıbadem sokakları","Kozyatağı park","Ataşehir finans merkezi",
"Ümraniye teraslar","Sancaktepe orman yolu","Sultanbeyli gölet",
"Beşiktaş sahil","Ortaköy meydanı","Ortaköy cami önü","Arnavutköy sahil",
"Bebek sahili","Emirgan Korusu","Yıldız Parkı","Maçka Parkı","Dolmabahçe Sarayı",
"Fındıklı sahil","Kabataş sahil","Taksim Meydanı","İstiklal Caddesi",
"Cihangir sokakları","Harbiye","Nişantaşı","Abdi İpekçi Caddesi","Etiler",
"Levent","Maslak","Zincirlikuyu","Gayrettepe","İstinye sahil","Tarabya sahil",
"Sarıyer sahil","Rumeli Hisarı","Anadolu Hisarı","Beykoz sahil","Paşabahçe",
"Kavacık","Polonezköy","Riva sahili","Poyrazköy","Anadolu Kavağı",
"Yoros Kalesi","Garipçe köyü","Belgrad Ormanı","Zekeriyaköy orman yolu",
"Florya sahili","Yeşilköy sahil","Bakırköy sahil","Ataköy marina",
"Küçükçekmece gölü","Büyükçekmece sahili","Silivri sahili","Avcılar sahili",
"Esenyurt gölet","Beylikdüzü sahil","Sefaköy park","Bahçelievler sokakları",
"Bağcılar meydanı","Esenler park","Bayrampaşa","Gaziosmanpaşa",
"Sultangazi","Eyüp Sultan","Pierre Loti tepesi","Balat renkli evler",
"Fener Rum Patrikhanesi","Samatya sahili","Yedikule surları","Topkapı Sarayı",
"Sultanahmet Meydanı","Ayasofya çevresi","Gülhane Parkı","Eminönü meydanı",
"Sirkeci","Sirkeci sahil","Vapur iskeleleri","Eminönü balık ekmek",
"Balat kafeler","Karaköy kafeleri","Moda kafeleri","Nişantaşı kafeleri",
"Beyoğlu arka sokaklar","Galata arka sokaklar","Tünel","Kasımpaşa sahili",
"Okmeydanı park","Şişli","Mecidiyeköy","Fulya","Okmeydanı",
"Kağıthane deresi","Seyrantepe","Alibeyköy barajı","Alibeyköy park",
"Vialand çevresi","Eyüp sahil yolu","Haliç sahil","Haliç köprüleri",
"Unkapanı","Cibali","Fener sahil","Ayvansaray","Sütlüce sahili",
"Miniatürk","Halıcıoğlu","Okmeydanı üst yollar","TEM seyir noktaları",
"FSM köprüsü manzarası","15 Temmuz Köprüsü manzarası","Yavuz Sultan Selim Köprüsü",
"Boğaz hattı","Vapur rotası","Adalar iskelesi","Büyükada",
"Heybeliada","Burgazada","Kınalıada","Adalar bisiklet yolu",
"Büyükada tepe yolu","Heybeliada orman yolu","Burgazada sahil",
"Kınalıada kayalıklar","Adalar gün batımı","Adalar sabah rotası",
"Boğaz turu","Lüks yat rotası","Sahil yürüyüş hattı","Sokak kafeleri",
"Kitap kafeler","Sahil bankları","Manzara noktaları","Gizli bahçeler",
"Çatı teraslar","Sky lounge noktaları","AVM terasları","Metro üst geçit manzaraları",
"Vadi İstanbul","Zorlu Center çevresi","İstanbul Sapphire","Metrocity",
"Kanyon AVM çevresi","Trump Towers çevresi","İstanbul Forum","Mall of Istanbul",
"Ataköy 5. kısım sahili","Yenibosna","Florya Atatürk Ormanı","Atatürk Havalimanı çevresi",
"Yeşilköy marina","Florya akvaryum çevresi","Bakırköy Botanik Park","Galleria çevresi",
"Ataköy sahil park","Bostancı Gösteri Merkezi çevresi","Kadıköy sahil hattı"
];
