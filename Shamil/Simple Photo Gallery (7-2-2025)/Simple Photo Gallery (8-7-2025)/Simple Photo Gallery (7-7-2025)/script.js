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


// =============================// ✅ Carousel for Highlights Section
// =============================
const viewport = document.getElementById("carouselViewport");
const nextBtn = document.getElementById("carouselNext");
const prevBtn = document.getElementById("carouselPrev");
const cards = document.querySelectorAll(".highlight-card");

let currentIndex = 0;
let visibleCards = 3;
let scrollInterval = null;

function scrollToIndex(index) {
  const cardWidth = cards[0].offsetWidth + 24; // width + gap
  viewport.scrollTo({
    left: index * cardWidth,
    behavior: "smooth",
  });
}

function nextScroll() {
  currentIndex++;
  if (currentIndex > cards.length - visibleCards) {
    currentIndex = 0;
  }
  scrollToIndex(currentIndex);
}

function prevScroll() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - visibleCards;
  }
  scrollToIndex(currentIndex);
}

nextBtn.addEventListener("click", () => {
  clearInterval(scrollInterval);
  nextScroll();
  startAutoScroll();
});

prevBtn.addEventListener("click", () => {
  clearInterval(scrollInterval);
  prevScroll();
  startAutoScroll();
});

function startAutoScroll() {
  scrollInterval = setInterval(nextScroll, 3000);
}

window.addEventListener("load", () => {
  startAutoScroll();
});




// =============================
// ✅ Parallax Achievements Section
// =============================
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax-achievements');
    if (parallax) {
        const offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.5 + 'px';
    }
});

// Animate any element with .animate on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate');
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Animate category rows on scroll
const rows = document.querySelectorAll('.category-row');

function revealOnScroll() {
  rows.forEach(row => {
    const rect = row.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      row.classList.add('animate-visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // in case already visible

// Discover All Categories Button (basic behavior)
function discoverAll() {
  alert("Redirecting to all categories...");
  // Replace with actual navigation if needed:
  // window.location.href = "/categories.html";
}

 

// ==========================
// ✅ Counter Animation
// ==========================
window.addEventListener("load", () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});

// Optional: Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      timelineObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

timelineItems.forEach(item => timelineObserver.observe(item));
