const phoneNumber = "91XXXXXXXXXX";

const message = `Hey UMA ❤️

Innaiku un birthday...

Un smile paatha happiness varudhu 😊

Un message paatha day complete aagudhu 💌

Un presence paatha peace kidaikudhu 🌙

Indha birthday la
nee romba happy ah irukanum ✨

Happy Birthday UMA 🎂

- Krishna ❤️`;

let i = 0;

function typeWriter(){

if(i < message.length){

document.getElementById("typewriter").innerHTML +=
message.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

typeWriter();

const stars =
document.getElementById("stars");

for(let i=0;i<150;i++){

let star =
document.createElement("div");

star.classList.add("star");

star.style.left =
Math.random()*100+"vw";

star.style.top =
Math.random()*100+"vh";

stars.appendChild(star);

}

setInterval(()=>{

let heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left =
Math.random()*100+"vw";

heart.style.fontSize =
(20+Math.random()*20)+"px";

heart.style.animationDuration =
(4+Math.random()*4)+"s";

document
.getElementById("hearts-container")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

},300);

document
.getElementById("surpriseBtn")
.addEventListener("click",()=>{

document
.getElementById("surpriseMessage")
.style.display="block";

const cards =
document.querySelectorAll(".reason-card");

cards.forEach((card,index)=>{

setTimeout(()=>{

card.style.display="block";

},index*700);

});

});

document
.getElementById("yesBtn")
.addEventListener("click",()=>{

document
.getElementById("finalMessage")
.style.display="block";

document
.getElementById("finalMessage")
.scrollIntoView({
behavior:"smooth"
});

});

const noBtn =
document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{

noBtn.style.position="absolute";

noBtn.style.left =
Math.random()*70+"vw";

noBtn.style.top =
Math.random()*70+"vh";

});

document
.getElementById("whatsappLink")
.addEventListener("click",(e)=>{

e.preventDefault();

window.open(
"https://wa.me/" + phoneNumber,
"_blank"
);

});
// SONG BUTTON



const photos =
document.querySelectorAll(".gallery img");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

window.open(
photo.src,
"_blank"
);

});

});
const playSongBtn =
document.getElementById("playSongBtn");

const birthdaySong =
document.getElementById("birthdaySong");

if(playSongBtn && birthdaySong){

playSongBtn.addEventListener("click",()=>{

if(birthdaySong.paused){

birthdaySong.play();

playSongBtn.innerHTML =
"⏸ Pause Song ❤️";

}else{

birthdaySong.pause();

playSongBtn.innerHTML =
"▶ Play Our Song ❤️";

}

});

}
const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[currentSlide]
.classList.add("active");

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

}

showSlide();

setInterval(showSlide,5000);
.cake{
font-size:100px;
margin-top:20px;
animation:bounce 2s infinite;
}

.letter-section,
.surprise-section,
.before-go,
#proposalSection{
margin-top:50px;
}

.letter-box,
.proposal-card,
#finalMessage{
background:rgba(255,255,255,0.08);
padding:25px;
border-radius:20px;
backdrop-filter:blur(10px);
}

#typewriter{
line-height:1.9;
white-space:pre-line;
}

#surpriseBtn{
padding:15px 30px;
border:none;
border-radius:30px;
background:#ff4f81;
color:white;
font-size:18px;
cursor:pointer;
}

#surpriseMessage{
display:none;
margin-top:30px;
}

.reason-card{
display:none;
background:rgba(255,255,255,0.08);
padding:18px;
margin:15px 0;
border-radius:15px;
animation:fadeUp .8s ease;
}

.buttons{
margin-top:20px;
}

#yesBtn,#noBtn{
padding:14px 25px;
border:none;
border-radius:30px;
font-size:18px;
cursor:pointer;
margin:10px;
}

#yesBtn{
background:#00c853;
color:white;
}

#noBtn{
background:#ff1744;
color:white;
position:relative;
}

#finalMessage{
display:none;
margin-top:30px;
text-align:center;
}

.whatsapp-box{
text-align:center;
margin-top:30px;
}

.whatsapp-box img{
transition:.3s;
}

.whatsapp-box img:hover{
transform:scale(1.1);
}

#stars{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
z-index:0;
}

.star{
position:absolute;
width:3px;
height:3px;
background:white;
border-radius:50%;
animation:twinkle 2s infinite;
}

#hearts-container{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
pointer-events:none;
z-index:1;
}

.heart{
position:absolute;
color:#ff4f81;
animation:fall linear forwards;
}

@keyframes glow{
from{
text-shadow:0 0 10px white;
}
to{
text-shadow:0 0 30px #ff4f81;
}
}

@keyframes bounce{
50%{
transform:translateY(-15px);
}
}

@keyframes twinkle{
50%{
opacity:.3;
}
}

@keyframes fall{
to{
transform:translateY(110vh);
}
}

@keyframes fadeUp{
from{
opacity:0;
transform:translateY(20px);
}
to{
opacity:1;
transform:translateY(0);
}
}
.song-section{
text-align:center;
margin-top:60px;
padding:25px;
background:rgba(255,255,255,0.08);
border-radius:20px;
}

#playSongBtn{
padding:15px 30px;
border:none;
border-radius:30px;
background:#ff4f81;
color:white;
font-size:18px;
cursor:pointer;
margin-top:15px;
}

.gallery{
max-width:350px;
margin:auto;
position:relative;
}

.slide{
display:none;
width:100%;
height:450px;
object-fit:cover;
border-radius:25px;
box-shadow:0 0 25px rgba(255,255,255,.2);
}

.slide.active{
display:block;
animation:fadePhoto 1s;
}

@keyframes fadePhoto{
from{
opacity:0;
}
to{
opacity:1;
}
}
