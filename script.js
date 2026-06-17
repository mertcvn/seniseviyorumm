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