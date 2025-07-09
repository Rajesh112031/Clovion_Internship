const books = [
    {
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science Fiction",
        year: 1965,
        description: "Set on the desert planet Arrakis, <i>Dune</i> follows young Paul Atreides as his family navigates a complex web of intrigue and power. This epic blends themes of ecology, politics, and human potential, exploring destiny and survival in a harsh universe. Herbert’s richly detailed world captivates with its intricate lore and philosophical depth.",
        rating: 4.5,
        image: "images/dune.jpg"
    },
    {
        title: "Foundation",
        author: "Isaac Asimov",
        genre: "Science Fiction",
        year: 1951,
        description: "<i>Foundation</i> chronicles the decline of a galactic empire through the lens of psychohistory, a science predicting societal trends. Hari Seldon’s plan to shorten an impending dark age unfolds across centuries, blending intellectual rigor with thrilling narrative. Asimov’s masterpiece remains a cornerstone of speculative fiction.",
        rating: 4.4,
        image: "images/foundation.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949,
        description: "In a totalitarian world, <i>1984</i> depicts Winston Smith’s struggle against an oppressive regime that controls thought and truth. Orwell’s chilling vision of surveillance, propaganda, and psychological manipulation remains a powerful warning about the erosion of freedom and individuality.",
        rating: 4.7,
        image: "images/1984.png"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        year: 1925,
        description: "Set in the Jazz Age, <i>The Great Gatsby</i> follows the enigmatic Jay Gatsby’s pursuit of the elusive Daisy Buchanan. Fitzgerald’s lyrical prose captures the hollow allure of wealth and the American Dream, crafting a timeless tragedy of love, ambition, and disillusionment.",
        rating: 4.4,
        image: "images/gatsby.jpg"
    }
];

async function fetchBookDetails(title) {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}`);
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            const book = data.items[0].volumeInfo;
            return {
                title: book.title || title,
                author: book.authors ? book.authors.join(', ') : 'Unknown',
                genre: book.categories ? book.categories[0] : 'Unknown',
                year: book.publishedDate ? book.publishedDate.split('-')[0] : 'Unknown',
                description: book.description || 'No description available.',
                rating: book.averageRating || 'Not rated',
                image: book.imageLinks ? book.imageLinks.thumbnail : 'images/placeholder.jpg',
                publisher: book.publisher || 'Unknown',
                isbn: book.industryIdentifiers ? book.industryIdentifiers[0].identifier : 'Unknown',
                pageCount: book.pageCount || 'Unknown'
            };
        }
    } catch (error) {
        console.error('Error fetching book details:', error);
    }
    const localBook = books.find(b => b.title === title);
    return localBook ? { ...localBook, publisher: 'Unknown', isbn: 'Unknown', pageCount: 'Unknown' } : null;
}

function showBookDetails(title) {
    fetchBookDetails(title).then(book => {
        if (book) {
            const content = document.getElementById('book-details-content');
            content.innerHTML = `
                <h2 class="modal-title">${book.title}</h2>
                <img src="${book.image}" alt="${book.title} Cover" class="modal-image">
                <p class="modal-info"><strong>Author:</strong> ${book.author}</p>
                <p class="modal-info"><strong>Genre:</strong> ${book.genre}</p>
                <p class="modal-info"><strong>Year:</strong> ${book.year}</p>
                <p class="modal-info"><strong>Description:</strong> ${book.description}</p>
                <p class="modal-info"><strong>Rating:</strong> ${book.rating}/5</p>
                <p class="modal-info"><strong>Publisher:</strong> ${book.publisher}</p>
                <p class="modal-info"><strong>ISBN:</strong> ${book.isbn}</p>
                <p class="modal-info"><strong>Page Count:</strong> ${book.pageCount}</p>
                <button class="btn-primary" onclick="closeModal()">Close</button>
            `;
            document.getElementById('book-details-modal').style.display = 'block';
            setTimeout(() => {
                document.querySelectorAll('.modal-title, .modal-info').forEach(text => {
                    text.classList.add('visible');
                    text.dataset.animated = 'true';
                });
            }, 100);
        } else {
            console.error('Book details not found for:', title);
            alert('Book details not found.');
        }
    }).catch(error => {
        console.error('Error in showBookDetails:', error);
    });
}

function closeModal() {
    document.getElementById('book-details-modal').style.display = 'none';
}

function toggleAuthors() {
    try {
        const allAuthors = document.querySelectorAll('.author-card');
        const seeMoreAuthorsBtn = document.getElementById('see-more-authors-btn');
        if (!seeMoreAuthorsBtn) {
            console.error('See more authors button not found');
            return;
        }
        if (seeMoreAuthorsBtn.textContent === 'See More Authors') {
            allAuthors.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.remove('hidden');
                    card.classList.remove('visible');
                    card.dataset.animated = 'false';
                    card.querySelectorAll('.author-name, .author-desc').forEach(text => {
                        text.classList.remove('visible');
                        text.dataset.animated = 'false';
                    });
                }
            });
            seeMoreAuthorsBtn.textContent = 'See Less Authors';
        } else {
            allAuthors.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                    card.dataset.animated = 'false';
                    card.querySelectorAll('.author-name, .author-desc').forEach(text => {
                        text.classList.remove('visible');
                        text.dataset.animated = 'false';
                    });
                }
            });
            seeMoreAuthorsBtn.textContent = 'See More Authors';
        }
    } catch (error) {
        console.error('Error in toggleAuthors:', error);
    }
}

function updateBookSlider() {
    try {
        const slider = document.querySelector('.book-slider');
        if (!slider) {
            console.warn('Book slider not found');
            return;
        }
        const books = document.querySelectorAll('.slider-book');
        const sliderRect = slider.getBoundingClientRect();
        const center = sliderRect.left + sliderRect.width / 2;

        books.forEach(book => {
            const bookRect = book.getBoundingClientRect();
            const bookCenter = bookRect.left + bookRect.width / 2;
            const distance = Math.abs(center - bookCenter);
            const maxDistance = sliderRect.width / 2;
            const scale = 1 + (0.2 * (1 - (distance / maxDistance) ** 2));

            if (distance < maxDistance / 2) {
                book.classList.add('center');
                book.style.transform = `scale(${Math.max(1, Math.min(scale, 1.2))})`;
            } else {
                book.classList.remove('center');
                book.style.transform = 'scale(1)';
            }
        });
    } catch (error) {
        console.error('Error in updateBookSlider:', error);
    }
}

function rotateBannerImages() {
    try {
        const images = document.querySelectorAll('.banner-image');
        if (!images.length) {
            console.warn('No banner images found');
            return;
        }
        let currentIndex = 0;

        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
            document.querySelectorAll('.banner-title, .banner-subtitle, .banner-note').forEach(text => {
                text.classList.remove('visible');
                text.dataset.animated = 'false';
                setTimeout(() => {
                    text.classList.add('visible');
                    text.dataset.animated = 'true';
                }, 100);
            });
        }, 3000);
    } catch (error) {
        console.error('Error in rotateBannerImages:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('DOM loaded, initializing scripts...');
        document.body.classList.remove('no-js');

        rotateBannerImages();

        const slider = document.querySelector('.book-slider');
        if (slider) {
            slider.addEventListener('scroll', updateBookSlider);
            updateBookSlider();
            console.log('Book slider initialized');
        } else {
            console.warn('Book slider not found on this page');
        }

        const seeMoreAuthorsBtn = document.getElementById('see-more-authors-btn');
        if (seeMoreAuthorsBtn) {
            seeMoreAuthorsBtn.addEventListener('click', toggleAuthors);
            console.log('See more authors button initialized');
        }

        const bookList = document.querySelector('.book-list');
        if (bookList) {
            const latestBooks = books.slice(0, 4);
            latestBooks.forEach((book, index) => {
                const card = document.createElement('div');
                card.className = 'book-card animate';
                card.dataset.title = book.title;
                const detailsAlignment = index % 2 === 0 ? 'row' : 'row-reverse';
                card.innerHTML = `
                    <div class="book-details">
                        <h3 class="card-title">${book.title}</h3>
                        <p class="card-info"><strong>Author:</strong> ${book.author}</p>
                        <p class="card-info"><strong>Genre:</strong> ${book.genre}</p>
                        <p class="card-info"><strong>Published:</strong> ${book.year}</p>
                        <p class="card-info"><strong>Description:</strong> ${book.description}</p>
                        <button class="btn-primary" onclick="showBookDetails('${book.title}')">View Details</button>
                    </div>
                    <img src="${book.image}" alt="${book.title} Cover" class="book-cover">
                `;
                bookList.appendChild(card);
            });
            console.log('Latest updates book cards added');
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!entry.target.dataset.animated || entry.target.dataset.animated === 'false') {
                        entry.target.classList.add('visible');
                        entry.target.dataset.animated = 'true';
                        entry.target.querySelectorAll('.card-title, .card-info, .author-name, .author-desc, .insight-text, .content-text, .contact-text').forEach(text => {
                            text.classList.add('visible');
                            text.dataset.animated = 'true';
                        });
                    }
                } else {
                    if (entry.target.dataset.animated === 'true') {
                        entry.target.classList.remove('visible');
                        entry.target.dataset.animated = 'false';
                        entry.target.querySelectorAll('.card-title, .card-info, .author-name, .author-desc, .insight-text, .content-text, .contact-text').forEach(text => {
                            text.classList.remove('visible');
                            text.dataset.animated = 'false';
                        });
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.book-card, .feature-box, .contribution-box, .author-card, .insight-container, .content-text, .contact-text, .gallery-image').forEach(element => {
            observer.observe(element);
        });

        document.querySelectorAll('.slider-book').forEach(book => {
            book.addEventListener('click', () => {
                const title = book.alt.replace(' Cover', '');
                showBookDetails(title);
            });
        });

        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Form submitted');
                alert('Thank you for your message!');
                contactForm.reset();
            });
        }

        let isMouseDown = false;
        let startX, scrollLeft;

        if (slider) {
            slider.addEventListener('mousedown', (e) => {
                isMouseDown = true;
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
                slider.style.cursor = 'grabbing';
            });

            slider.addEventListener('mouseleave', () => {
                isMouseDown = false;
                slider.style.cursor = 'grab';
            });

            slider.addEventListener('mouseup', () => {
                isMouseDown = false;
                slider.style.cursor = 'grab';
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isMouseDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
            });
        }

        console.log('All event listeners and observers initialized');
    } catch (error) {
        console.error('Error in DOMContentLoaded:', error);
    }
});