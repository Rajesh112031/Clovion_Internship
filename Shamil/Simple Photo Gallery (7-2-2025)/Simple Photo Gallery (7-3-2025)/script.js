// ======================
// Fullscreen Slideshow
// ======================
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

// ================
// Lightbox Viewer
// ================
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

document.querySelectorAll('.category-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

// ========================
// Sticky Navbar on Scroll
// ========================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ==========================
// Light/Dark Mode Toggle
// ==========================
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const toggleButton = document.querySelector('.toggle-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}
// =============================
// Photo Highlights: Infinite Loop Carousel
// =============================
const carousel = document.getElementById('highlightCarousel');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');

let cards = Array.from(carousel?.children || []);
let index = 0;
let autoScroll;

// ✅ 1. Clone first and last few cards
function cloneForLooping() {
    const cloneStart = cards.slice(0, 2).map(card => card.cloneNode(true));
    const cloneEnd = cards.slice(-2).map(card => card.cloneNode(true));

    cloneStart.forEach(clone => carousel.appendChild(clone));
    cloneEnd.forEach(clone => carousel.insertBefore(clone, carousel.firstChild));

    cards = Array.from(carousel.children);
}

// ✅ 2. Scroll to the actual first card (not clone)
function jumpToReal(indexOffset = 2) {
    const card = cards[indexOffset];
    if (!card) return;
    carousel.scrollLeft = card.offsetLeft - (carousel.offsetWidth / 2 - card.offsetWidth / 2);
    index = indexOffset;
    updateCenteredCard();
}

// ✅ 3. Update centered zoom
function updateCenteredCard() {
    cards.forEach(card => card.classList.remove('centered'));
    cards[index]?.classList.add('centered');
}

// ✅ 4. Move to next card
function goNext() {
    index++;
    carousel.scrollTo({
        left: cards[index]?.offsetLeft - (carousel.offsetWidth / 2 - cards[index].offsetWidth / 2),
        behavior: 'smooth'
    });

    if (index >= cards.length - 2) {
        setTimeout(() => {
            jumpToReal(2); // Reset to first real card
        }, 500);
    }

    updateCenteredCard();
}

// ✅ 5. Move to previous card
function goPrev() {
    index--;
    carousel.scrollTo({
        left: cards[index]?.offsetLeft - (carousel.offsetWidth / 2 - cards[index].offsetWidth / 2),
        behavior: 'smooth'
    });

    if (index <= 1) {
        setTimeout(() => {
            jumpToReal(cards.length - 4); // Reset to last real card
        }, 500);
    }

    updateCenteredCard();
}

// ✅ Auto Scroll
function startAutoSlide() {
    autoScroll = setInterval(goNext, 3000);
}
function stopAutoSlide() {
    clearInterval(autoScroll);
}

// ✅ Manual Scroll Watcher
carousel?.addEventListener('scroll', () => {
    clearTimeout(carousel._scrollTimer);
    carousel._scrollTimer = setTimeout(highlightCenterCard, 200);
});

function highlightCenterCard() {
    const centerX = carousel.scrollLeft + carousel.offsetWidth / 2;
    let closest = null;
    let minDistance = Infinity;

    cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(centerX - cardCenter);
        if (distance < minDistance) {
            minDistance = distance;
            closest = i;
        }
    });

    if (closest !== null) {
        index = closest;
        updateCenteredCard();
    }
}

// ✅ Button Events
nextBtn?.addEventListener('click', () => {
    stopAutoSlide();
    goNext();
    startAutoSlide();
});

prevBtn?.addEventListener('click', () => {
    stopAutoSlide();
    goPrev();
    startAutoSlide();
});

// ✅ Initialize
if (carousel && cards.length) {
    cloneForLooping();
    jumpToReal(); // jump to actual first real slide
    startAutoSlide();
}
