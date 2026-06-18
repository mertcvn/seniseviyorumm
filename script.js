
/* ================= RESET ================= */
*{
margin:0;
padding:0;
box-sizing:border-box;
}

/* ================= BACKGROUND ================= */
body{
font-family:'Montserrat',sans-serif;
background:radial-gradient(circle at top,#2a0000,#000 60%);
color:white;
overflow:hidden;
}

/* animated glow background */
body::before{
content:"";
position:fixed;
inset:0;
background:
radial-gradient(circle at 20% 20%, rgba(255,46,99,0.25), transparent 40%),
radial-gradient(circle at 80% 30%, rgba(255,120,160,0.15), transparent 45%),
radial-gradient(circle at 50% 80%, rgba(255,0,80,0.12), transparent 50%);
animation:bgMove 10s infinite alternate ease-in-out;
pointer-events:none;
}

@keyframes bgMove{
0%{transform:scale(1) rotate(0deg);}
100%{transform:scale(1.15) rotate(2deg);}
}

/* ================= LAYOUT ================= */
.container{
display:flex;
height:100vh;
}

/* LEFT PANEL */
.left{
flex:2;
padding:30px;
}

/* RIGHT PANEL */
.right{
flex:1;
background:rgba(255,255,255,0.05);
backdrop-filter:blur(20px);
border-left:1px solid rgba(255,255,255,0.1);
padding:20px;
overflow-y:auto;
}

/* ================= TITLE ================= */
h1{
font-family:'Playfair Display',serif;
font-size:44px;
color:#ff3b6b;
text-shadow:0 0 25px #ff2e63, 0 0 40px #ff7aa2;
animation: glow 3s infinite alternate;
}

@keyframes glow{
from{filter:drop-shadow(0 0 5px #ff2e63);}
to{filter:drop-shadow(0 0 20px #ff7aa2);}
}

/* ================= INPUTS ================= */
input{
width:100%;
padding:12px;
margin-top:10px;
border:none;
border-radius:12px;
background:rgba(255,255,255,0.08);
color:white;
outline:none;
backdrop-filter:blur(10px);
}

/* ================= BUTTONS ================= */
button{
padding:12px;
margin-top:10px;
border:none;
border-radius:12px;
cursor:pointer;
background:linear-gradient(135deg,#ff2e63,#ff7aa2);
color:white;
box-shadow:0 0 20px #ff2e63;
transition:0.3s;
position:relative;
overflow:hidden;
}

button:hover{
transform:scale(1.05);
filter:brightness(1.2);
}

/* shine effect */
button::after{
content:"";
position:absolute;
top:0;
left:-100%;
width:100%;
height:100%;
background:rgba(255,255,255,0.25);
transform:skewX(-20deg);
transition:0.4s;
}

button:hover::after{
left:120%;
}

/* ================= CARDS ================= */
.card{
background:rgba(255,255,255,0.06);
padding:15px;
margin-top:10px;
border-radius:18px;
backdrop-filter:blur(18px);
box-shadow:0 0 25px rgba(255,0,100,0.2);
transition:0.3s;
border:1px solid rgba(255,255,255,0.08);
}

.card:hover{
transform:translateY(-5px) scale(1.02);
box-shadow:0 0 40px rgba(255,46,99,0.35);
}

/* ================= GLASS ================= */
.glass{
background:rgba(255,255,255,0.05);
padding:18px;
border-radius:20px;
backdrop-filter:blur(20px);
border:1px solid rgba(255,255,255,0.1);
margin-top:10px;
}

/* ================= HEARTS ================= */
.heart{
position:absolute;
color:#ff2e63;
animation:float 6s linear forwards;
filter:drop-shadow(0 0 10px #ff2e63);
}

@keyframes float{
0%{transform:translateY(100vh) scale(0);}
100%{transform:translateY(-10vh) scale(1.5);}
}

/* ================= PHOTO ================= */
#photo{
width:100%;
max-width:320px;
border-radius:16px;
margin-top:10px;
box-shadow:0 0 30px #ff2e63;
transition:0.3s;
}

#photo:hover{
transform:scale(1.03);
}

/* ================= MUSIC ================= */
.music{
position:absolute;
bottom:20px;
left:20px;
background:rgba(255,255,255,0.08);
padding:10px;
border-radius:15px;
backdrop-filter:blur(10px);
}

/* ================= SCROLL ================= */
.right::-webkit-scrollbar{
width:6px;
}

.right::-webkit-scrollbar-thumb{
background:#ff2e63;
border-radius:10px;
}
