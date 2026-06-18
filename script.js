
/* ================= DATA ================= */

/* 📍 300 LOCATIONS (ROTA) */
const places = [
"Galata Kulesi","Galata Köprüsü","Karaköy","Kadıköy","Üsküdar","Ortaköy",
"Bebek","Arnavutköy","Emirgan","Yıldız Parkı","Maçka","Taksim","İstiklal",
"Cihangir","Beşiktaş","Dolmabahçe","Rumeli Hisarı","Anadolu Hisarı","Beykoz",
"Riva","Şile","Ağva","Belgrad Ormanı","Aydos Ormanı","Sarıyer","Tarabya",
"Balat","Fener","Sultanahmet","Gülhane","Pierre Loti","Kız Kulesi",
"Kuzguncuk","Çengelköy","Çamlıca","Büyükada","Heybeliada","Burgazada"
];

while(places.length < 300){
places.push(places[Math.floor(Math.random()*places.length)]);
}

/* 🎯 300 ACTIVITIES (ETKİNLİK - AYRI KATEGORİ) */
const activities = [

/* 💖 ROMANTİK (1-80) */
"birlikte kahve içmek","birlikte çay içmek","sinema izlemek","piknik yapmak","sahilde yürüyüş yapmak",
"gün batımı izlemek","gün doğumu izlemek","el ele yürümek","sarılmak","sohbet etmek",
"birlikte yemek yapmak","mum ışığında yemek yemek","romantik müzik dinlemek","dans etmek",
"birlikte film izlemek","yıldızları izlemek","yağmurda yürümek","deniz kenarında oturmak",
"gelecek hayalleri kurmak","birlikte fotoğraf çekmek","selfie çekmek","mektup yazmak",
"birbirine iltifat etmek","el ele şehir turu yapmak","sessizce birlikte oturmak",
"birlikte uyumak","kahvaltı hazırlamak","kahvaltı yapmak","tatlı paylaşmak",
"dondurma yemek","çikolata yemek","birlikte alışveriş yapmak","gece yürüyüşü yapmak",
"el ele sahil yürüyüşü yapmak","gökyüzünü izlemek","bulutlara bakmak","yağmur sesini dinlemek",
"birlikte kitap okumak","hikaye anlatmak","eski anıları konuşmak","gelecek planlamak",
"birlikte şarkı söylemek","playlist yapmak","el ele dans etmek","romantik film izlemek",
"aynı battaniyede oturmak","kahve dükkanında oturmak","kafe gezmek","şehir ışıklarını izlemek",
"köprüde yürümek","sahilde oturmak","gün batımında fotoğraf çekmek","deniz kokusu almak",
"birlikte pasta yemek","birbirine bakarak gülmek","sessizce el ele tutuşmak",
"birlikte dua etmek","birlikte meditasyon yapmak","birlikte spor yapmak",
"parkta oturmak","salıncakta sallanmak","çimlere uzanmak","doğa yürüyüşü yapmak",
"bisiklet sürmek","uçurtma uçurmak","kırda yürümek","orman gezisi yapmak",
"şehirde kaybolmak","metro ile gezmek","otobüsle keşif yapmak","yeni yerler görmek",
"fotoğraf albümü yapmak","anı biriktirmek","günlük yazmak","sürpriz yapmak",
"hediye almak","hediye vermek","birlikte gülmek","sarılıp uyumak",

/* 🎉 EĞLENCELİ (81-160) */
"kutu oyunu oynamak","uno oynamak","scrabble oynamak","bilgisayar oyunu oynamak",
"mobil oyun oynamak","meme izlemek","komik video izlemek","tiktok çekmek",
"vlog çekmek","dans videosu çekmek","challenge yapmak","prank yapmak",
"şarkı tahmin oyunu oynamak","film tahmin oyunu oynamak","yemek yarışması yapmak",
"fotoğraf yarışması yapmak","selfie yarışması yapmak","kahkaha krizi yaşamak",
"playlist yapmak","karaoke yapmak","şarkı söylemek","arabada müzik açmak",
"gece araba turu yapmak","bisiklet turu yapmak","koşu yapmak","spor yapmak",
"yoga yapmak","meditasyon yapmak","piknikte oyun oynamak","plajda oyun oynamak",
"dondurma yemek","hamburger yemek","pizza yemek","tatlı yemek",
"sokak lezzetleri denemek","yeni kafe denemek","yeni restoran denemek",
"gece yürüyüşü yapmak","gece ışıklarını izlemek","şehir turu yapmak",
"rastgele yürüyüş yapmak","haritasız gezmek","kaybolmayı denemek",
"alışveriş merkezine gitmek","sinema gecesi yapmak","evde sinema kurmak",
"patlamış mısır yemek","sokakta yemek yemek","çay bahçesinde oturmak",
"piknik yapmak","parkta koşmak","bisikletle gezmek","sokakları keşfetmek",

/* 🌿 DOĞA & DIŞ MEKAN (161-230) */
"sahilde yürümek","deniz kenarında oturmak","orman yürüyüşü yapmak",
"dağ yürüyüşü yapmak","piknik yapmak","göl kenarında oturmak",
"şelale görmek","doğa fotoğrafı çekmek","yıldız izlemek","kamp yapmak",
"çadır kurmak","ateş yakmak","marshmallow kızartmak","uçurtma uçurmak",
"balık tutmak","bisiklet sürmek","koşuya çıkmak","salıncakta sallanmak",
"çimlere uzanmak","doğada kahve içmek","piknik sepeti hazırlamak",
"doğa yürüyüşü yapmak","yeni park keşfetmek","botanik bahçesi gezmek",
"hayvanat bahçesi gezmek","ağaç dikmek","çiçek toplamak","yaprak toplamak",
"deniz kabuğu toplamak","güneşlenmek","yağmurda yürümek","kar topu oynamak",
"kar yağışını izlemek","gün doğumu izlemek","gün batımı izlemek",
"deniz dalgalarını izlemek","kuşları izlemek","doğada sessiz oturmak",
"orman sesi dinlemek","rüzgarı hissetmek","kamp ateşi başında oturmak",
"gökyüzünü izlemek","bulutları izlemek","doğa gezisi yapmak",
"şehir dışına kaçamak yapmak","köy gezisi yapmak","yaylaya gitmek",
"piknik alanı bulmak","nehir kenarında oturmak",

/* 🏙 ŞEHİR & KEŞİF (231-300) */
"Galata Kulesine gitmek","Kız Kulesini görmek","Ortaköyde gezmek",
"Bebekte yürümek","Karaköyde kahve içmek","Balatta sokak gezmek",
"Moda sahilinde yürümek","Çamlıca tepesine çıkmak","Üsküdar sahil gezmek",
"Kuzguncuk sokaklarında kaybolmak","Emirgan korusunda gezmek",
"Pierre Lotiye çıkmak","Büyükadaya gitmek","Heybeliadayı gezmek",
"Burgazada turu yapmak","Sultanahmet gezisi yapmak","Gülhane parkında yürümek",
"Taksimde gezmek","İstiklal caddesinde yürümek","Beşiktaş sahilinde oturmak",
"Dolmabahçe sarayını görmek","Riva sahilini keşfetmek","Şileye gitmek",
"Ağvaya gitmek","metro ile şehir turu yapmak","vapur yolculuğu yapmak",
"köprüden geçmek","gün batımında sahil yürümek","sokak fotoğrafı çekmek",
"eski mahalleleri gezmek","yeni yerler keşfetmek","harita olmadan gezmek"
];

while(activities.length < 300){
activities.push(activities[Math.floor(Math.random()*activities.length)]);
}

/* 💖 300 ROMANTIC MESSAGES */
const msgs = [
"💖 Kalbim sende","🌹 Sen benim huzurumsun","✨ Birlikte güzelsin",
"💌 Aşk biziz","🌙 Gözlerin evim"
];

while(msgs.length < 300){
msgs.push(msgs[Math.floor(Math.random()*msgs.length)]);
}

/* ================= MEMORY ================= */
let data = [];

/* ================= INIT ================= */
function init(){
document.getElementById("msg").innerHTML =
msgs[Math.floor(Math.random()*msgs.length)];
}
window.onload = init;

/* ================= SURPRISE SYSTEM (FIXED CORE) ================= */
function surprise(){

const date = document.getElementById("date").value;
if(!date){
alert("Tarih seç!");
return;
}

/* 🎯 ETKİNLİK (SADECE AKTİVİTE) */
const activity = activities[Math.floor(Math.random()*activities.length)];

/* 🗺 ROTA (SADECE LOKASYON) */
const r1 = places[Math.floor(Math.random()*places.length)];
const r2 = places[Math.floor(Math.random()*places.length)];
const r3 = places[Math.floor(Math.random()*places.length)];

/* SAVE */
data.push({date, activity, r1, r2, r3});

/* 💥 CLEAN OUTPUT (AYRI AYRI) */
document.getElementById("out").innerHTML = `
💖 <b>${date}</b>

<hr>

🎯 <b>BUGÜNÜN ETKİNLİĞİ</b><br>
👉 ${activity}

<hr>

🗺 <b>GEZİ ROTASI</b><br>
👉 ${r1}<br>
👉 ${r2}<br>
👉 ${r3}
`;

/* RIGHT PANEL */
document.getElementById("mapBox").innerHTML = `
🗺 <b>ROTA PLAN</b><br>
${r1} → ${r2} → ${r3}
`;

renderLog();
}

/* ================= LOG FIXED ================= */
function renderLog(){
let log = document.getElementById("log");
log.innerHTML = "";

data.slice().reverse().forEach(i=>{
log.innerHTML += `
<div class="card">

📅 <b>${i.date}</b>

<hr>

🎯 ETKİNLİK<br>
${i.activity}

<hr>

🗺 ROTA<br>
${i.r1}<br>
${i.r2}<br>
${i.r3}

</div>
`;
});
}

/* ================= ROMANTIC WORD ================= */
function loveWord(){
document.getElementById("out").innerHTML =
msgs[Math.floor(Math.random()*msgs.length)];
}

/* ================= MAP MODE ================= */
function mapMode(){

let a = places[Math.floor(Math.random()*places.length)];
let b = places[Math.floor(Math.random()*places.length)];
let c = places[Math.floor(Math.random()*places.length)];

document.getElementById("mapBox").innerHTML =
`🗺 <b>RANDOM ROMANTIC ROUTE</b><br>${a} → ${b} → ${c}`;
}
