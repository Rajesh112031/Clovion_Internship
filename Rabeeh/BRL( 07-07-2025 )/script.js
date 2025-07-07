const books = [
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", year: 1965, description: "A science fiction epic set on the desert planet Arrakis.", rating: 4.5, image: "images/dune.jpg" },
    { title: "Foundation", author: "Isaac Asimov", genre: "Science Fiction", year: 1951, description: "A saga of the collapse and rebirth of a galactic empire.", rating: 4.4, image: "images/foundation.jpg" },
    { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949, description: "A chilling tale of surveillance and totalitarianism.", rating: 4.7, image: "images/1984.png" },
    { title: "Of Mice and Men", author: "John Steinbeck", genre: "Fiction", year: 1937, description: "A story of friendship and dreams in the Great Depression.", rating: 4.5, image: "images/of-mice-and-men.jpg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, description: "A story of wealth and unrequited love.", rating: 4.4, image: "images/gatsby.jpg" },
    { title: "Beloved", author: "Toni Morrison", genre: "Fiction", year: 1987, description: "A haunting tale of slavery and its aftermath.", rating: 4.6, image: "images/beloved.jpg" },
    { title: "Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954, description: "An epic fantasy saga of good vs. evil.", rating: 4.9, image: "images/lotr.jpg" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951, description: "A story of teenage angst and rebellion.", rating: 4.3, image: "images/catcher.jpg" },
    { title: "The Road", author: "Cormac McCarthy", genre: "Post-Apocalyptic", year: 2006, description: "A father and son survive in a bleak world.", rating: 4.2, image: "images/road.webp" },
    { title: "Frankenstein", author: "Mary Shelley", genre: "Gothic", year: 1818, description: "A scientist creates a monstrous creature.", rating: 4.5, image: "images/frankenstein.jpg" },
    { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", year: 1932, description: "A dystopian vision of a controlled society.", rating: 4.3, image: "images/brave.webp" },
    { title: "Animal Farm", author: "George Orwell", genre: "Satire", year: 1945, description: "A satirical allegory of totalitarianism.", rating: 4.6, image: "images/animal.jpg" },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis", genre: "Fantasy", year: 1950, description: "A magical series of adventures in Narnia.", rating: 4.7, image: "images/narnia.jpg" },
    { title: "Charlotte's Web", author: "E.B. White", genre: "Children's Literature", year: 1952, description: "A heartwarming tale of friendship.", rating: 4.5, image: "images/charlotte.jpeg" },
    { title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophical Fiction", year: 1988, description: "A journey of self-discovery and destiny.", rating: 4.4, image: "images/alchemist.jpg" },
    { title: "The Shining", author: "Stephen King", genre: "Horror", year: 1977, description: "A chilling horror novel set in a haunted hotel.", rating: 4.6, image: "images/shining.jpg" }
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
        const authorInsight = document.querySelector('.author-insight');
        if (!seeMoreAuthorsBtn) {
            console.error('See more authors button not found');
            return;
        }
        if (seeMoreAuthorsBtn.textContent === 'See More Authors') {
            allAuthors.forEach((card, index) => {
                if (index >= 5) card.classList.remove('hidden');
            });
            seeMoreAuthorsBtn.textContent = 'See Less Authors';
            authorInsight.style.marginTop = '0';
        } else {
            allAuthors.forEach((card, index) => {
                if (index >= 5) card.classList.add('hidden');
            });
            seeMoreAuthorsBtn.textContent = 'See More Authors';
            authorInsight.style.marginTop = '0';
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
            // Quadratic easing for smoother pop-up
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
    const images = document.querySelectorAll('.banner-image');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('DOM loaded, initializing scripts...');
        // Remove no-js class to enable animations
        document.body.classList.remove('no-js');

        // Initialize banner image rotation
        rotateBannerImages();

        // Initialize book slider
        const slider = document.querySelector('.book-slider');
        if (slider) {
            slider.addEventListener('scroll', updateBookSlider);
            updateBookSlider();
            console.log('Book slider initialized');
        } else {
            console.warn('Book slider not found on this page');
        }

        // Initialize see more authors button
        const seeMoreAuthorsBtn = document.getElementById('see-more-authors-btn');
        if (seeMoreAuthorsBtn) {
            seeMoreAuthorsBtn.addEventListener('click', toggleAuthors);
            console.log('See more authors button initialized');
        }

        // Initialize view more button for latest updates
        const viewMoreBtn = document.getElementById('view-more-btn');
        if (viewMoreBtn) {
            viewMoreBtn.addEventListener('click', () => {
                window.location.href = 'books.html';
            });
            console.log('View more button initialized');
        }

        // Populate book list for books.html
        if (window.location.pathname.includes('books.html')) {
            const bookList = document.querySelector('.book-list');
            if (!bookList) {
                console.error('Book list container not found');
                return;
            }
            if (books.length === 0) {
                console.warn('Books array is empty, adding fallback content');
                bookList.innerHTML = `
                    <div class="book-card animate">
                        <h3 class="card-title">No Books Available</h3>
                        <p class="card-info">Please check back later for our book collection.</p>
                    </div>
                `;
                return;
            }
            books.forEach(book => {
                const card = document.createElement('div');
                card.className = 'book-card animate';
                card.dataset.title = book.title;
                card.innerHTML = `
                    <img src="${book.image}" alt="${book.title} Cover" class="book-cover">
                    <h3 class="card-title">${book.title}</h3>
                    <p class="card-info"><strong>Author:</strong> ${book.author}</p>
                    <p class="card-info"><strong>Genre:</strong> ${book.genre}</p>
                    <button class="btn-primary" onclick="showBookDetails('${book.title}')">View Details</button>
                `;
                bookList.appendChild(card);
            });
            console.log('Book list populated for books.html');
        }

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Only animate if not already animated
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    console.log('Animating element:', entry.target.className, entry.target);
                    entry.target.classList.add('visible');
                    entry.target.dataset.animated = 'true';
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '100px'
        });

        // Observe all elements with animate class, including feature and contribution boxes
        document.querySelectorAll('.animate, .feature-box, .contribution-box').forEach(element => {
            if (!element.dataset.animated) {
                observer.observe(element);
                console.log('Observing element:', element.className);
            }
        });

        // Fallback to ensure feature and contribution boxes are visible if observer fails
        setTimeout(() => {
            document.querySelectorAll('.feature-box, .contribution-box').forEach(box => {
                if (!box.classList.contains('visible')) {
                    console.warn('Fallback: Forcing visibility for', box.className);
                    box.classList.add('visible');
                    box.dataset.animated = 'true';
                }
            });
        }, 1000);

        console.log('Intersection Observer initialized for animations');
    } catch (error) {
        console.error('Error in DOMContentLoaded:', error);
        // Fallback to show all feature and contribution boxes on error
        document.querySelectorAll('.feature-box, .contribution-box').forEach(box => {
            box.classList.add('visible');
            box.dataset.animated = 'true';
        });
    }
});