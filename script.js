// ---------------- Loading Screen ----------------

window.onload = function () {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 3000);

};

// ---------------- Elements ----------------

const beginBtn = document.getElementById("beginBtn");

// ---------------- Quotes ----------------

const quotes = [

"The beginning of our beautiful family ❤️",

"A daughter who fills every day with happiness ❤️",

"A brother who is a friend forever ❤️",

"A mother's love is endless ❤️",

"Growing with dreams and happiness ❤️",

"A father's love is silent but priceless ❤️",

"Every smile creates another memory ❤️",

"Partners in childhood... Friends forever ❤️",

"Together every moment becomes special ❤️",

"Dream big... Smile always ❤️",

"Family is life's greatest blessing ❤️",

"Love grows stronger every day ❤️",

"Family isn't just important... It's everything ❤️"

];

// ---------------- Photos ----------------

const photos = [

"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg",

"images/photo5.jpg",

"images/photo6.jpg",

"images/photo7.jpg",

"images/photo8.jpg",

"images/photo9.jpg",

"images/photo10.jpg",

"images/photo11.jpg",

"images/photo12.jpg",

"images/photo13.jpg"

];

let current = 0;

// ---------------- Begin ----------------

beginBtn.addEventListener("click", () => {

    showGallery();

});

// ---------------- Create Gallery ----------------

function showGallery() {

    document.body.innerHTML = `

<div id="gallery">

<img id="photo" src="${photos[0]}">

<h2 id="caption">${quotes[0]}</h2>

</div>

`;

    slideShow();

}

// ---------------- Slide Show ----------------

function slideShow() {

    const image = document.getElementById("photo");
    const caption = document.getElementById("caption");

    setInterval(() => {

        current++;

        if (current >= photos.length) {

            showEnding();
            return;

        }

        image.style.opacity = 0;

        setTimeout(() => {

            image.src = photos[current];

            caption.innerHTML = quotes[current];

            image.style.opacity = 1;

        }, 800);

    }, 5000);

}

// ---------------- Ending ----------------

function showEnding() {

    document.body.innerHTML = `

<div id="ending">

<h1>❤️ Thank You ❤️</h1>

<p>

No matter where life takes us,

our hearts always find their way home.

</p>

<h2>

I Love My Family Forever ❤️

</h2>

<h3>

~ Keerthi

</h3>

</div>

`;

}
// ================= Floating Hearts =================

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(20+Math.random()*30)+"px";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,500);
