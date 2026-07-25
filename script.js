// ==========================
// FAMILY MEMORIES SCRIPT
// ==========================

// Images
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

// Captions
const captions = [
    "❤️ Our Beautiful Family",
    "😊 Every Smile Has A Story",
    "🌸 Love That Never Fades",
    "🏡 Home Is Where Family Is",
    "✨ Beautiful Memories",
    "💖 Together Forever",
    "📸 Every Picture Speaks",
    "🤍 Blessed Moments",
    "🎉 Happiness Together",
    "🌈 Our Precious Journey",
    "💞 Family Means Everything",
    "🙏 Grateful For Every Moment",
    "❤️ Forever Together"
];

let current = 0;
let slideInterval;

// Elements
const loader = document.getElementById("loader");
const intro = document.getElementById("intro");
const gallery = document.getElementById("gallery");
const ending = document.getElementById("ending");

const photo = document.getElementById("photo");
const quote = document.getElementById("quote");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playPauseBtn = document.getElementById("playPause");

const bgMusic = document.getElementById("bgMusic");

// Loader
window.onload = () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 2500);
};

// Start Journey
startBtn.addEventListener("click", () => {

    intro.style.display = "none";
    gallery.style.display = "flex";

    updateSlide();

    bgMusic.play().catch(() => {});

    slideInterval = setInterval(nextSlide, 5000);
});

// Update Slide
function updateSlide() {

    photo.style.opacity = 0;

    setTimeout(() => {

        photo.src = photos[current];
        quote.textContent = captions[current];
        counter.textContent = `${current + 1} / ${photos.length}`;

        progressBar.style.width =
            ((current + 1) / photos.length) * 100 + "%";

        photo.style.opacity = 1;

    }, 500);
}

// Next Slide
function nextSlide() {

    current++;

    if (current >= photos.length) {

        clearInterval(slideInterval);

        gallery.style.display = "none";

        ending.style.display = "flex";

        return;
    }

    updateSlide();
}

// Previous
prevBtn.addEventListener("click", () => {

    if (current > 0) {

        current--;

        updateSlide();
    }

});

// Next
nextBtn.addEventListener("click", () => {

    if (current < photos.length - 1) {

        current++;

        updateSlide();
    }

});

// Music Play / Pause
let playing = true;

playPauseBtn.addEventListener("click", () => {

    if (playing) {

        bgMusic.pause();

        playPauseBtn.innerHTML =
            '<i class="fa-solid fa-play"></i>';

    } else {

        bgMusic.play();

        playPauseBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';
    }

    playing = !playing;

});

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 500);