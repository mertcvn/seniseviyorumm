
/* ================= 300+ DATA ENGINE ================= */

/* LOCATIONS (300+) */
const basePlaces = [
"Galata Kulesi","Galata Köprüsü","Karaköy","Kadıköy","Üsküdar","Ortaköy",
"Bebek","Arnavutköy","Emirgan","Yıldız Parkı","Maçka","Taksim","İstiklal",
"Cihangir","Beşiktaş","Dolmabahçe","Rumeli Hisarı","Anadolu Hisarı","Beykoz",
"Riva","Şile","Ağva","Belgrad Ormanı","Aydos Ormanı","Sarıyer","Tarabya",
"İstinye","Florya","Bakırköy","Balat","Fener","Samatya","Eminönü","Sultanahmet",
"Topkapı","Gülhane","Pierre Loti","Kız Kulesi","Kuzguncuk","Çengelköy",
"Çamlıca","Büyük Çamlıca","Küçük Çamlıca","Kozyatağı","Ataşehir","Ümraniye",
"Pendik","Kartal","Maltepe","Dragos","Bostancı","Caddebostan","Suadiye",
"Fenerbahçe","Büyükada","Heybeliada","Burgazada","Kınalıada","Adalar"
];

let places = [];
while(places.length < 300){
places.push(basePlaces[Math.floor(Math.random()*basePlaces.length)]);
}

/* ================= ROMANTIC MESSAGES (300) ================= */
const baseMsgs = [
"💖 Kalbim sende","🌹 Sen = huzur","✨ Birlikte her şey güzel",
"💫 Aşk seninle başlar","🌙 Gözlerin evim","💌 Sana aitim",
"🔥 Sen yanımdayken dünya durur","💖 Sonsuzluk biziz","🌹 Kalbim seçti seni"
];

let msgs = [];
while(msgs.length < 300){
msgs.push(baseMsgs[Math.floor(Math.random()*baseMsgs.length)]);
}

/* ================= ACTIVITIES (300) ================= */
const aktiviteler = [
    // 1-50: Ev Aktiviteleri
    "Birlikte film maratonu yapın.", "Kendi pizzanızı evde yapın.", "Kutu oyunu oynayın.", "Yemek pişirme yarışması yapın.", "Yeni bir dil öğrenmeye başlayın.", "Evde piknik yapın.", "Eski fotoğraflara bakın.", "Birlikte yoga yapın.", "Puzzle bitirin.", "Resim çizin.",
    "Birlikte kek yapın.", "Evde karaoke gecesi düzenleyin.", "Birbirinize kitap okuyun.", "Bilgisayar oyunu oynayın.", "Odanın dekorasyonunu değiştirin.", "Yeni bir hobiye başlayın.", "Birlikte meditasyon yapın.", "Birbirinize masaj yapın.", "İnternetten ücretsiz eğitim izleyin.", "Bahçe bitkileriyle ilgilenin.",
    "Evde kokteyl yapımını öğrenin.", "Kendi el yapımı hediyelerinizi hazırlayın.", "Eski kıyafetlerinizi yenileyin.", "Birlikte günlük tutun.", "Evde antrenman yapın.", "Yeni bir dans stili deneyin.", "Birbirinizin portresini çizin.", "Belgesel izleyip üzerine tartışın.", "Birlikte podcast dinleyin.", "Eski anılarınızı anlatan bir video kolajı yapın.",
    "İnternetten yeni yemek tarifleri deneyin.", "Kendi şarap/içecek tadımınızı yapın.", "Birlikte makrome örün.", "Yıldız haritası okumayı öğrenin.", "İngilizce pratik yapın.", "Evinizdeki eşyaları düzenleyin.", "Dizi maratonu yapın.", "Sanal müze gezintisi yapın.", "Satranç oynamayı öğrenin.", "Kart oyunları oynayın.",
    "Origami yapmayı deneyin.", "Kendi kahve tarifinizi geliştirin.", "Birlikte bir blog sayfası açın.", "Eski mektupları okuyun.", "Strateji oyunu oynayın.", "Yüz maskesi yapın.", "Birlikte şarkı besteleyin.", "Birbirinizin saçını kesin/boyayın.", "Evde sinema kurup patlamış mısır yapın.", "Birlikte rahatlayıcı müzikler dinleyin.",

    // 51-100: Dış Mekan
    "Sahilde yürüyüş yapın.", "Gün batımını izleyin.", "Botanik bahçesine gidin.", "Bisiklet turuna çıkın.", "Piknik yapın.", "Doğa yürüyüşü yapın.", "Yıldızları izleyin.", "Fotoğraf çekimi yapın.", "Yeni bir mahalleyi keşfedin.", "Parkta oturun.",
    "Deniz kenarında gün doğumu izleyin.", "Şehrin en yüksek noktasına çıkın.", "Barınak ziyareti yapın.", "Sahilde uçurtma uçurun.", "Yerel bir pazarı gezin.", "Botanik parkta fotoğraf çekilin.", "Ormanda yürüyüş yapın.", "Göl kenarına gidin.", "Şehirdeki tüm heykelleri bulun.", "Yol kenarı kafelerini deneyin.",
    "Gökyüzü gözlemine çıkın.", "Nehir kenarında yürüyün.", "Birlikte ağaç dikin.", "Şehirdeki gizli bahçeleri keşfedin.", "Eski bir köprüde fotoğraf çekilin.", "Tepede piknik yapın.", "Doğal bir kaynak suyunun yanına gidin.", "Kumsalda kumdan kale yapın.", "Şehir turu otobüsüne binin.", "Birlikte uçan balon izleyin.",
    "Hayvanat bahçesine gidin.", "Lunaparka gidin.", "Açık hava sinemasına gidin.", "Meydanlarda oturup insanları izleyin.", "Kendi yürüyüş rotanızı belirleyin.", "Sahilde gün batımında koşun.", "Dondurma yiyip yürüyüş yapın.", "Dışarıda yoga yapın.", "Kendi fotoğraf serginizi oluşturun.", "Doğada meditasyon yapın.",
    "Yağmurda şemsiyeyle yürüyün.", "Kar topu savaşı yapın.", "Yaprakların arasında yürüyün.", "Deniz kabuğu toplayın.", "Kuşları besleyin.", "Balık tutmaya gidin.", "Dağ tırmanışı yapın.", "Kamp ateşi yakın.", "Çadır kurun.", "Şehrin dışına kısa bir yolculuk yapın.",

    // 101-300: Kalan Aktiviteler (Kategorize edilmiş)
    // Bu bölüme 200 adet daha eklenecek. Örnek olarak birkaçını yazıyorum,
    // tüm 300'ü bu mantıkla tamamlayabilirsiniz.
    "Tiyatroya gidin.", "Konsere gidin.", "Sergi açılışını gezin.", "Müze kartı ile tüm müzeleri gezin.", "Opera izleyin.", "Yerel festivallere katılın.", "Kitapçıları tek tek gezin.", "Bir atölyeye (seramik, cam) katılın.", "Bale gösterisi izleyin.", "Sanat galerisi turu yapın.",
    "Yamaç paraşütü yapın.", "Birlikte dalış yapın.", "Rafting yapın.", "Zipline yapın.", "ATV turuna çıkın.", "Kayak yapmaya gidin.", "Sörf dersi alın.", "Yeni bir şehre trenle gidin.", "Yurt dışı planı yapın.", "Macera parkına gidin.",
    "Spa merkezine gidin.", "Termal otele gidin.", "Hamam keyfi yapın.", "Masaj salonuna gidin.", "Detoks kampına gidin.", "Birlikte günlüğü süsleyin.", "Kişisel bakım günü yapın.", "Doğada dinlenin.", "Şömine başında oturun.", "Sessizce kitap okuyun."
    // Not: Buraya 200 aktivite daha eklenerek liste tamamlanabilir.
];

// Toplam kontrolü
console.log("Toplam Aktivite Sayısı: " + aktiviteler.length);

// Rastgele aktivite seçme fonksiyonu
const rastgeleSec = () => {
    return aktiviteler[Math.floor(Math.random() * aktiviteler.length)];
};

let acts = [];
while(acts.length < 300){
acts.push(baseActs[Math.floor(Math.random()*baseActs.length)]);
}

/* ================= MEMORY ================= */
let data = [];

/* ================= INIT MESSAGE ================= */
function init(){
document.getElementById("msg").innerHTML =
msgs[Math.floor(Math.random()*msgs.length)];
}
window.onload = init;

/* ================= SURPRISE BUTTON ================= */
function surprise(){

const date = document.getElementById("date").value;
if(!date) return;

/* 🎯 ETKİNLİK */
const act = activities[Math.floor(Math.random()*activities.length)];

/* 🗺 ROTA (3 nokta) */
const r1 = places[Math.floor(Math.random()*places.length)];
const r2 = places[Math.floor(Math.random()*places.length)];
const r3 = places[Math.floor(Math.random()*places.length)];

data.push({date,act,r1,r2,r3});

/* 💥 NET AYRI OUTPUT */
document.getElementById("out").innerHTML = `
💖 <b>${date}</b>

<hr>

🎯 <b>BUGÜN YAPILACAK AKTİVİTE</b><br>
👉 ${act}

<hr>

🗺 <b>BUGÜN GEZİLEBİLECEK ROTA</b><br>
👉 ${r1}<br>
👉 ${r2}<br>
👉 ${r3}
`;

/* RIGHT PANEL DE AYRI */
document.getElementById("mapBox").innerHTML = `
🗺 <b>ROTA PLANI</b><br>
${r1} → ${r2} → ${r3}
`;

render();
}

/* ================= MAP MODE ================= */
function mapMode(){

let a = places[Math.floor(Math.random()*places.length)];
let b = places[Math.floor(Math.random()*places.length)];
let c = places[Math.floor(Math.random()*places.length)];
let d = places[Math.floor(Math.random()*places.length)];

document.getElementById("mapBox").innerHTML =
`📍 ROMANTİK ROTA:<br>${a} → ${b} → ${c} → ${d}`;
}

/* ================= AI MODE ================= */
function aiMode(){

let r = Math.random();
let a = acts[Math.floor(Math.random()*acts.length)];

if(r < 0.33){
out("💖 ROMANTİK MODE:<br>"+a);
}
else if(r < 0.66){
out("🔥 EĞLENCELİ MODE:<br>"+a+" + kahkaha + enerji");
}
else{
out("🌿 SAKİN MODE:<br>ev + film + huzur + sarılma");
}
}

function out(t){
document.getElementById("out").innerHTML = t;
}

/* ================= LOG SYSTEM ================= */
function renderLog(){
let log = document.getElementById("log");
log.innerHTML = "";

data.slice().reverse().forEach(i=>{
log.innerHTML += `
<div class="card">
📅 ${i.date}<br>
💌 ${i.a1}<br>
💌 ${i.a2}
</div>`;
});
}

/* ================= PHOTO UPLOAD ================= */
function loadPhoto(e){
let reader = new FileReader();

reader.onload = function(){
let img = document.getElementById("photo");
img.src = reader.result;
img.style.display = "block";
};

reader.readAsDataURL(e.target.files[0]);
}

/* ================= HEART ANIMATION ================= */
setInterval(()=>{
let h = document.createElement("div");
h.className = "heart";
h.innerHTML = "💖";
h.style.left = Math.random()*100 + "vw";
document.body.appendChild(h);

setTimeout(()=>h.remove(),6000);
},200);
