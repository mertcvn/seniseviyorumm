
/* =========================
   SMART LOVE ENGINE (300 EVENTS)
========================= */

/* --- ROMANTIC (100) --- */
const romantic = [
"Gün batımında sahil yürüyüşü yapın ve sessizce manzarayı izleyin.",
"Kafede uzun bir sohbet ederek birbirinizi daha derin tanıyın.",
"Birlikte gün doğumunu izleyip hayallerinizi paylaşın.",
"Doğada piknik yaparak huzurlu bir gün geçirin.",
"Yıldızları izleyip gelecek planlarınızı konuşun.",
"El ele yürüyüş yapıp şehir ışıklarını izleyin.",
"Birlikte deniz kenarında oturup dalga seslerini dinleyin.",
"Küçük bir not yazıp birbirinize verin.",
"Birlikte eski anılarınızı konuşun.",
"Birlikte sessiz bir müzik dinleme zamanı geçirin."
];

/* 100 ROMANTIC FILLER */
for(let i=10;i<100;i++){
    romantic.push("Birlikte huzurlu ve sakin bir gün planlayın ve anın tadını çıkarın.");
}

/* --- FUN (100) --- */
const fun = [
"Evde film gecesi yapıp abur cubur savaşı yapın.",
"Sokakta rastgele yemek turu yapın.",
"Oyun oynayıp kaybedene komik ceza verin.",
"Dans challenge yapın ve en komiğini seçin.",
"Fotoğraf challenge yapın ve en iyi kareyi bulun.",
"Karaoke gecesi yapın.",
"Birlikte yemek yapıp yarışın.",
"Şehirde keşif turu yapın.",
"Meme üretme yarışması yapın.",
"Rastgele yürüyüş yapıp kaybolmayı deneyin."
];

for(let i=10;i<100;i++){
    fun.push("Birlikte eğlenceli bir aktivite yapın ve bol bol gülün.");
}

/* --- MEMORY (100) --- */
const memory = [
"O günün anısını temsil eden fotoğraf çekin.",
"Birbirinize mektup yazın ve saklayın.",
"O günü anlatan şarkı seçin.",
"Küçük bir hatıra kutusu yapın.",
"O günü 3 kelimeyle anlatın.",
"Birlikte video çekin.",
"Geleceğe mesaj yazın.",
"Bir anı defteri oluşturun.",
"Bir fotoğraf albümü oluşturun.",
"O günü ses kaydıyla anlatın."
];

for(let i=10;i<100;i++){
    memory.push("O günü hatırlatacak küçük bir anı oluşturun ve saklayın.");
}

/* =========================
   SEED SYSTEM
========================= */
function getSeed(dateStr){
    const d = new Date(dateStr);
    return (d.getDate() + d.getMonth()*11 + d.getFullYear()) % 100;
}

/* =========================
   MAIN GENERATOR
========================= */
function generatePlan(){

    const date = document.getElementById("date").value;
    const out = document.getElementById("output");

    if(!date){
        out.innerHTML = "Lütfen tarih seç ❤️";
        return;
    }

    const i = getSeed(date);

    out.innerHTML = `
        <div style="line-height:1.7">

        ❤️ <b>Romantik Aktivite</b><br>
        ${romantic[i]}

        <br><br>
        🎮 <b>Eğlenceli Aktivite</b><br>
        ${fun[i]}

        <br><br>
        📸 <b>Anı Aktivitesi</b><br>
        ${memory[i]}

        </div>
    `;
}

/* =========================
   TODAY AUTO
========================= */
function todayPlan(){
    const t = new Date().toISOString().split("T")[0];
    document.getElementById("date").value = t;
    generatePlan();
}
