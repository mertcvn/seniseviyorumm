
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
"birlikte kahve içmek","sinema izlemek","piknik yapmak","yürüyüş yapmak",
"fotoğraf çekmek","yemek yapmak","oyun oynamak","müzik dinlemek",
"dans etmek","kitap okumak","film izlemek","sohbet etmek",
"gece yürüyüşü yapmak","gün batımı izlemek","el ele yürümek"
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
