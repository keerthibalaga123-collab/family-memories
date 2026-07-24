const startBtn = document.getElementById("startBtn");
const gallery = document.getElementById("gallery");
const ending = document.getElementById("ending");
const welcome = document.querySelector(".welcome");

const image = document.getElementById("slideImage");
const quote = document.getElementById("quote");
const music = document.getElementById("bgMusic");

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
];

const quotes = [
    "❤️ Family is where life begins and love never ends.",
    "🥰 Every picture holds a beautiful memory.",
    "💖 Together is our favorite place to be.",
    "🌸 Happiness is spending time with family.",
    "❤️ Thank you for filling my life with love."
];

let current = 0;

startBtn.addEventListener("click", () => {

    welcome.style.display = "none";
    gallery.style.display = "flex";

    music.play();

    startSlideShow();

});

function startSlideShow(){

    image.src = photos[current];
    quote.innerHTML = quotes[current];

    const interval = setInterval(() => {

        current++;

        if(current >= photos.length){

            clearInterval(interval);

            gallery.style.display = "none";
            ending.style.display = "flex";

            return;
        }

        image.style.opacity = 0;

        setTimeout(() => {

            image.src = photos[current];
            quote.innerHTML = quotes[current];

            image.style.opacity = 1;

        },500);

    },5000);

}
