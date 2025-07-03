// Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Toggle View More / View Less
const moreBtn = document.getElementById("viewMoreBtn");
const lessBtn = document.getElementById("viewLessBtn");
const extraGallery = document.getElementById("extraGallery");

moreBtn.addEventListener("click", () => {
  extraGallery.classList.remove("collapsed");
  extraGallery.classList.add("expanded");
  moreBtn.classList.add("d-none");
  lessBtn.classList.remove("d-none");
});

lessBtn.addEventListener("click", () => {
  extraGallery.classList.add("collapsed");
  extraGallery.classList.remove("expanded");
  moreBtn.classList.remove("d-none");
  lessBtn.classList.add("d-none");
});


// Modal popup logic
const modal = new bootstrap.Modal(document.getElementById('polaroidModal'));
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

// Add event to all polaroid cards
document.querySelectorAll('.polaroid-card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    const title = card.querySelector('h5').innerText;
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalTitle.textContent = title;
    modalDescription.textContent = `${title} — A timeless masterpiece by Van Gogh.`;
    modal.show();
  });
});
