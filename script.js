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
