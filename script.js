/********************
  AŞK SİSTEMİ CORE JS
********************/

/* ===== DATA ===== */
const romantic = [];
const fun = [];
const memory = [];

for (let i = 1; i <= 300; i++) {
    romantic.push("Romantik an " + i);
    fun.push("Eğlenceli an " + i);
    memory.push("Birlikte hatıra " + i);
}

/* ===== LOGIN ===== */
function login() {
    const u1 = document.getElementById("u1").value;
    const u2 = document.getElementById("u2").value;
    const pass = document.getElementById("pass").value;

    if (pass === "ask123") {
        localStorage.setItem("u1", u1);
        localStorage.setItem("u2", u2);

        document.getElementById("login").style.display = "none";
        document.getElementById("app").style.display = "block";

        document.getElementById("title").innerText =
            "❤️ " + u1 + " & " + u2 + " Aşk Evreni ❤️";
    } else {
        alert("Yanlış şifre 😢");
    }
}

/* ===== HEARTS ANIMATION ===== */
setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
}, 200);

/* ===== COUNTDOWN ===== */
let countdownInterval;

function countdown() {
    clearInterval(countdownInterval);

    const dateValue = document.getElementById("date").value;
    if (!dateValue) return;

    const target = new Date(dateValue);

    countdownInterval = setInterval(() => {
        const now = new Date();
        const diff = target - now;

        if (diff <= 0) {
            document.getElementById("time").innerText =
                "❤️ BUGÜN BULUŞMA GÜNÜ!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        document.getElementById("time").innerText =
            days + " gün kaldı ❤️";
    }, 1000);
}

/* ===== YOUTUBE PLAYLIST ===== */
const playlistURL =
"https://www.youtube.com/embed/videoseries?list=PLbIn9TEuFDLrl-vt1zL1pd0MUipFgfiHc";

let isMuted = true;

function muteToggle() {
    const frame = document.getElementById("ytFrame");

    isMuted = !isMuted;
    frame.src = playlistURL + "&autoplay=1&mute=" + (isMuted ? "1" : "0");
}

function restartMusic() {
    const frame = document.getElementById("ytFrame");
    isMuted = true;
    frame.src = playlistURL + "&autoplay=1&mute=1";
}

function nextSong() {
    const frame = document.getElementById("ytFrame");
    frame.src = playlistURL + "&autoplay=1&mute=" + (isMuted ? "1" : "0");
}

/* ===== SURPRISE ===== */
function surprise() {
    const i = Math.floor(Math.random() * 300);

    const text =
        "❤️ " + romantic[i] + "<br>" +
        "🎮 " + fun[i] + "<br>" +
        "📸 " + memory[i];

    document.getElementById("mtext").innerHTML = text;
    document.getElementById("modal").style.display = "block";
}

/* ===== CHAT ===== */
function send() {
    const msg = document.getElementById("msg").value;

    if (!msg) return;

    const div = document.createElement("div");
    div.innerText = "💌 " + msg;

    document.getElementById("chat").appendChild(div);
    document.getElementById("msg").value = "";
}

/* ===== PHOTO ALBUM ===== */
function addPhoto(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        document.getElementById("gallery").appendChild(img);
    };

    reader.readAsDataURL(file);
}

/* ===== MINI GAME ===== */
let score = 0;

function startGame() {
    const circle = document.createElement("div");
    circle.className = "circle";

    circle.style.top = Math.random() * 80 + "vh";
    circle.style.left = Math.random() * 80 + "vw";

    document.body.appendChild(circle);

    circle.onclick = () => {
        score++;
        document.getElementById("score").innerText = score;
        circle.remove();
    };

    setTimeout(startGame, 900);
}

/* ===== MODAL CLOSE ===== */
function closeM() {
    document.getElementById("modal").style.display = "none";
}

/* ===== AUTO LOAD NAMES ===== */
window.onload = () => {
    const u1 = localStorage.getItem("u1");
    const u2 = localStorage.getItem("u2");

    if (u1 && u2) {
        const login = document.getElementById("login");
        const app = document.getElementById("app");

        login.style.display = "none";
        app.style.display = "block";

        document.getElementById("title").innerText =
            "❤️ " + u1 + " & " + u2 + " Aşk Evreni ❤️";
    }
};