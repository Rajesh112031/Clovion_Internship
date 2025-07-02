// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.fullscreen-slideshow img');
const quotes = document.querySelectorAll('.slideshow-quote');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    quotes.forEach((quote, i) => {
        quote.classList.toggle('active', i === index);
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Lightbox (placeholder for index page)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});

// Sticky navbar effect
window.addEventListener('scroll', () => {
    const navbar = document.getElemen// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.fullscreen-slideshow img');
const quotes = document.querySelectorAll('.slideshow-quote');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    quotes.forEach((quote, i) => {
        quote.classList.toggle('active', i === index);
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});

// Sticky navbar effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Light/Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const toggleButton = document.querySelector('.toggle-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Optional Lightbox Trigger (for future image click interactions)
document.querySelectorAll('.category-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});
tById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Light/Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const toggleButton = document.querySelector('.toggle-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}
