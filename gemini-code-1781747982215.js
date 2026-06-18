// 1. GÜNÜN SÖZÜ MANTIĞI (Her gün otomatik değişir)
const sozler = [
    "Seninle her an bir mucize.",
    "Dünyadaki en güzel yer senin yanın.",
    "İyi ki hayatımdasın.",
    // Buraya 365 güne kadar söz ekleyebilirsin
];
const bugun = new Date().getDate();
document.getElementById("gununSozu").innerText = sozler[bugun % sozler.length];

// 2. ETKİNLİK HAVUZU (300 adet)
const etkinlikHavuzu = {
    eglenceli: ["Go-kart", "Bowling", "Evde oyun gecesi", "Mutfakta pizza yapımı", /* ... 100 adet ... */],
    romantik: ["Boğaz'da gün batımı", "Yıldızları izle", "Birlikte resim yapın", /* ... 100 adet ... */],
    ani: ["Zaman kapsülü hazırla", "Fotoğraf albümü düzenle", "Birbirinize mektup yazın", /* ... 100 adet ... */]
};

// 3. ROTA HAVUZU (100 adet)
const rotalar = [
    "Galata ve Karaköy sokakları", "Moda sahilinde yürüyüş", "Emirgan Korusu", /* ... 100 adet ... */
];

// 4. SÜRPRİZ FONKSİYONU
function surprizYap() {
    const e = etkinlikHavuzu.eglenceli[Math.floor(Math.random() * etkinlikHavuzu.eglenceli.length)];
    const r = etkinlikHavuzu.romantik[Math.floor(Math.random() * etkinlikHavuzu.romantik.length)];
    const a = etkinlikHavuzu.ani[Math.floor(Math.random() * etkinlikHavuzu.ani.length)];
    
    document.getElementById("sonuc").innerHTML = `
        <div style="padding:15px; background:#fff0f3; border-radius:10px;">
            <p>🎉 <b>Eğlence:</b> ${e}</p>
            <p>💖 <b>Romantik:</b> ${r}</p>
            <p>📸 <b>Anı:</b> ${a}</p>
        </div>`;
}

// 5. ROTA FONKSİYONU
function rotaGetir() {
    const secilenRota = rotalar[Math.floor(Math.random() * rotalar.length)];
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(secilenRota + " İstanbul")}`;
    
    document.getElementById("rotaSonuc").innerHTML = `
        <p>📍 Bugün rotanız: <b>${secilenRota}</b></p>
        <a href="${mapsLink}" target="_blank" style="color:red;">Google Maps'te Göster</a>`;
}