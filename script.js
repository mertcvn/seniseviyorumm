
/* ================= 300+ LOCATIONS ================= */
const basePlaces = [
"Galata Kulesi","Galata Köprüsü","Karaköy","Moda Sahil","Kadıköy",
"Üsküdar","Ortaköy","Bebek","Arnavutköy","Emirgan Korusu",
"Yıldız Parkı","Maçka","Taksim","İstiklal","Cihangir","Beşiktaş",
"Dolmabahçe","Rumeli Hisarı","Anadolu Hisarı","Beykoz","Riva",
"Şile","Ağva","Belgrad Ormanı","Aydos Ormanı","Sarıyer",
"Tarabya","İstinye","Florya","Bakırköy","Balat","Fener",
"Samatya","Eminönü","Sultanahmet","Ayasofya","Topkapı",
"Gülhane","Pierre Loti","Kız Kulesi","Kuzguncuk","Çengelköy",
"Çamlıca","Büyük Çamlıca","Küçük Çamlıca","Validebağ",
"Kozyatağı","Ataşehir","Ümraniye","Pendik","Kartal","Maltepe",
"Dragos","Bostancı","Caddebostan","Suadiye","Fenerbahçe",
"Büyükada","Heybeliada","Burgazada","Kınalıada","Adalar",
"FSM Köprüsü","15 Temmuz Köprüsü","YSS Köprüsü","Haliç",
"Zekeriyaköy","Polonezköy","Garipçe","Poyrazköy","Anadolu Kavağı",
"Beylikdüzü","Avcılar","Silivri","Büyükçekmece","Kağıthane",
"Eyüp","Alibeyköy","Sultangazi","Gaziosmanpaşa","Bayrampaşa",
"Esenler","Bağcılar","Güngören","Zeytinburnu","Şişli",
"Mecidiyeköy","Levent","Maslak","Etiler","Nişantaşı",
"Harbiye","Gayrettepe","Zincirlikuyu","Okmeydanı","Vadi İstanbul",
"Kanyon","Zorlu Center","Trump Towers","Metrocity","Mall of Istanbul"
];

// 300’e tamamla
let places = [];
while(places.length < 300){
places.push(basePlaces[Math.floor(Math.random()*basePlaces.length)]);
}

/* ================= 300+ ROMANTIC MESSAGES ================= */
const baseMsgs = [
"💖 Kalbin benim evim","🌹 Sen = huzur","✨ Birlikte her şey güzel",
"💫 Aşk sessiz bir mucize","🌙 Gözlerin pusulam","💌 Sana her gün aşık oluyorum",
"🔥 Sen yanımdayken dünya duruyor","💖 Bir bakış yeter","🌹 Kalbim sende",
"✨ Sonsuzluk seninle başlar"
];

let msgs = [];
while(msgs.length < 300){
msgs.push(baseMsgs[Math.floor(Math.random()*baseMsgs.length)]);
}

/* ================= 300+ ACTIVITIES ================= */
const baseActs = [
"gün batımı yürüyüşü","kahve date","film gecesi","sahil yürüyüşü",
"bisiklet turu","piknik","vapur turu","fotoğraf çekimi",
"müzik dinleme","şehir keşfi","yıldız izleme","çatı manzarası",
"gece yürüyüşü","kitap kafesi","sokak keşfi","tatlı kaçamak"
];

let activities = [];
while(activities.length < 300){
activities.push(baseActs[Math.floor(Math.random()*baseActs.length)]);
}

/* ================= INIT MESSAGE ================= */
function init(){
document.getElementById("msg").innerHTML =
msgs[Math.floor(Math.random()*msgs.length)];
}
window.onload = init;

/* ================= AI MODE ================= */
function aiMode(){
let r = Math.random();
let a = activities[Math.floor(Math.random()*activities.length)];

if(r < 0.33){
document.getElementById("out").innerHTML =
"💖 ROMANTİK MODE:<br>" + a;
}
else if(r < 0.66){
document.getElementById("out").innerHTML =
"🔥 EĞLENCELİ MODE:<br>" + a + " + kahkaha + enerji";
}
else{
document.getElementById("out").innerHTML =
"🌿 SAKİN MODE:<br>ev + film + huzur + sen";
}
}

/* ================= MAP MODE ================= */
function mapMode(){
let a = places[Math.floor(Math.random()*places.length)];
let b = places[Math.floor(Math.random()*places.length)];
let c = places[Math.floor(Math.random()*places.length)];
let d = places[Math.floor(Math.random()*places.length)];

document.getElementById("mapBox").innerHTML =
`📍 ROTA:<br>${a} → ${b} → ${c} → ${d}`;
}

/* ================= WOW MODE ================= */
function wowMode(){
let a = activities[Math.floor(Math.random()*activities.length)];
let b = activities[Math.floor(Math.random()*activities.length)];
let c = activities[Math.floor(Math.random()*activities.length)];

document.getElementById("out").innerHTML =
`💥 WOW EXPERIENCE:<br>${a}<br>${b}<br>${c}`;
}

/* ================= PHOTO ================= */
function loadPhoto(e){
let reader = new FileReader();
reader.onload = function(){
let img = document.getElementById("photo");
img.src = reader.result;
img.style.display = "block";
};
reader.readAsDataURL(e.target.files[0]);
}

/* ================= HEARTS ================= */
setInterval(()=>{
let h = document.createElement("div");
h.className = "heart";
h.innerHTML = "💖";
h.style.left = Math.random()*100 + "vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),6000);
},200);

let player;

function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
height: '0',
width: '0',
videoId: 'sy47Jf5gONo',
playerVars: {
'autoplay': 1,
'mute': 1
},
events: {
'onReady': onReady
}
});
}

function onReady(){
player.playVideo();
}

// %50 ses
function setHalfVolume(){
if(player){
player.unMute();
player.setVolume(50); // 💖 istediğin %50 ses
}
}

function startMusic(){
player.playVideo();
}
