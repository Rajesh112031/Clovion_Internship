const books = [
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", year: 1965, description: "A science fiction epic set on the desert planet Arrakis.", rating: 4.5, image: "images/dune.jpg" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937, description: "A fantasy adventure about Bilbo Baggins.", rating: 4.8, image: "images/hobbit.jpeg" },
    { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949, description: "A chilling tale of surveillance and totalitarianism.", rating: 4.7, image: "images/1984.png" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", year: 1813, description: "A romantic novel of manners.", rating: 4.6, image: "images/pride.jpeg" },
    { title: "A Fine Balance", author: "Rohinton Mistry", genre: "Literary Fiction", year: 1995, description: "A sweeping historical novel set in 1970s India during the Emergency.", rating: 4.4, image: "https://m.media-amazon.com/images/I/91t3mHJfVSL.jpg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, description: "A story of wealth and unrequited love.", rating: 4.4, image: "images/gatsby.jpg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, description: "A tale of justice and prejudice in the American South.", rating: 4.8, image: "images/mockingbird.webp" },
    { title: "Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954, description: "An epic fantasy saga of good vs. evil.", rating: 4.9, image: "images/lotr.jpg" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951, description: "A story of teenage angst and rebellion.", rating: 4.3, image: "images/catcher.jpg" },
    { title: "The Road", author: "Cormac McCarthy", genre: "Post-Apocalyptic", year: 2006, description: "A father and son survive in a bleak world.", rating: 4.2, image: "images/road.webp" },
    { title: "Frankenstein", author: "Mary Shelley", genre: "Gothic", year: 1818, description: "A scientist creates a monstrous creature.", rating: 4.5, image: "images/frankenstein.jpg" }
];

const authors = [
    { name: "Frank Herbert", description: "Known for Dune series, a groundbreaking science fiction saga.", image: "images/author1.jpg" },
    { name: "J.R.R. Tolkien", description: "Master of Middle-earth sagas, creator of The Lord of the Rings.", image: "images/author2.jpg" },
    { name: "George Orwell", description: "Author of dystopian classics like 1984 and Animal Farm.", image: "images/author3.jpg" },
    { name: "Jane Austen", description: "Renowned for romantic novels like Pride and Prejudice.", image: "images/author4.jpeg" },
    { name: "F. Scott Fitzgerald", description: "Chronicler of the Jazz Age with works like The Great Gatsby.", image: "images/author5.jpg" },
    { name: "Harper Lee", description: "Author of Southern literature classic To Kill a Mockingbird.", image: "images/author6.jpg" },
    { name: "J.D. Salinger", description: "Known for youthful narratives like The Catcher in the Rye.", image: "images/author7.jpg" },
    { name: "Cormac McCarthy", description: "Master of bleak fiction with The Road and Blood Meridian.", image: "images/author8.jpg" },
    { name: "Mary Shelley", description: "Pioneer of Gothic tales with Frankenstein.", image: "images/author9.jpg" },
    { name: "Paulo Coelho", description: "Author of philosophical works like The Alchemist.", image: "images/author10.jpg" },
    { name: "Aldous Huxley", description: "Famous for dystopian vision in Brave New World.", image: "images/author11.jpg" },
    { name: "C.S. Lewis", description: "Creator of The Chronicles of Narnia series.", image: "images/author12.jpeg" },
    { name: "E.B. White", description: "Beloved for children’s classic Charlotte's Web.", image: "images/author13.jpg" },
    { name: "Stephen King", description: "Master of horror with The Shining and more.", image: "images/author14.jpg" },
    { name: "Dan Brown", description: "Thriller writer known for The Da Vinci Code.", image: "images/author15.jpg" }
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
            alert('Book details not found.');
        }
    });
}

function showAuthorDetails(name) {
    const author = authors.find(a => a.name === name);
    if (author) {
        const content = document.getElementById('author-details-content');
        content.innerHTML = `
            <h2 class="modal-title">${author.name}</h2>
            <img src="${author.image}" alt="${author.name}" class="modal-author-image">
            <p class="modal-info"><strong>Description:</strong> ${author.description}</p>
            <button class="btn-primary" onclick="closeAuthorModal()">Close</button>
        `;
        document.getElementById('author-details-modal').style.display = 'block';
    } else {
        alert('Author details not found.');
    }
}

function closeModal() {
    document.getElementById('book-details-modal').style.display = 'none';
}

function closeAuthorModal() {
    document.getElementById('author-details-modal').style.display = 'none';
}

function toggleAuthors() {
    const allAuthors = document.querySelectorAll('.author-card');
    const seeMoreAuthorsBtn = document.getElementById('see-more-authors-btn');
    const authorInsight = document.querySelector('.author-insight');
    if (seeMoreAuthorsBtn.textContent === 'See More Authors') {
        allAuthors.forEach(card => card.classList.remove('hidden'));
        seeMoreAuthorsBtn.textContent = 'See Less Authors';
        authorInsight.style.marginTop = '2rem';
    } else {
        allAuthors.forEach((card, index) => {
            if (index >= 5) card.classList.add('hidden');
        });
        seeMoreAuthorsBtn.textContent = 'See More Authors';
        authorInsight.style.marginTop = '0';
    }
}

function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const updateCounter = () => {
        start += increment;
        element.textContent = Math.round(start);
        if (start < target) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    requestAnimationFrame(updateCounter);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('see-more-authors-btn').addEventListener('click', toggleAuthors);

    // Populate book slider
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const slider = document.querySelector('.book-image-slider');
        const container = document.createElement('div');
        container.className = 'book-slider-container';
        for (let set = 0; set < 3; set++) {
            books.forEach(book => {
                const img = document.createElement('img');
                img.src = book.image;
                img.alt = `${book.title} Cover`;
                img.className = 'book-slider-img';
                container.appendChild(img);
            });
        }
        slider.appendChild(container);

        const images = document.querySelectorAll('.book-slider-img');
        const imageWidth = images[0].offsetWidth;
        const sliderWidth = slider.offsetWidth;
        const centerPosition = sliderWidth / 2;

        function updatePoppedImage() {
            images.forEach((img, index) => {
                const imgRect = img.getBoundingClientRect();
                const imgCenter = imgRect.left + imgRect.width / 2;
                const isCentered = Math.abs(imgCenter - centerPosition) < imgRect.width / 2;
                img.classList.toggle('popped', isCentered);
            });
        }

        updatePoppedImage();
        let animationFrameId;
        function checkPopped() {
            updatePoppedImage();
            animationFrameId = requestAnimationFrame(checkPopped);
        }
        checkPopped();

        container.addEventListener('animationiteration', () => {
            container.style.transition = 'none';
            container.style.transform = 'translateX(0)';
            void container.offsetWidth;
            container.style.transition = 'transform 0.3s ease';
        });

        window.addEventListener('unload', () => {
            cancelAnimationFrame(animationFrameId);
        });
    }

    // Populate books.html
    if (window.location.pathname.includes('books.html')) {
        const bookList = document.querySelector('.book-list');
        books.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
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
    }

    // Animate contribution numbers
    const counters = document.querySelectorAll('.contribution-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        animateCounter(counter, target, 2000);
    });

    // Author card click event
    const authorCards = document.querySelectorAll('.author-card');
    authorCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.dataset.name;
            showAuthorDetails(name);
        });
    });

    // Intersection Observer for slide-up animations
    const elements = document.querySelectorAll('.slide-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});