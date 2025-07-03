const books = [
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", year: 1965, description: "A science fiction epic set on the desert planet Arrakis.", rating: 4.5, image: "images/book1.jpg" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937, description: "A fantasy adventure about Bilbo Baggins.", rating: 4.8, image: "images/book2.jpg" },
    { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949, description: "A chilling tale of surveillance and totalitarianism.", rating: 4.7, image: "images/book3.jpg" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", year: 1813, description: "A romantic novel of manners.", rating: 4.6, image: "images/book4.jpg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, description: "A story of wealth and unrequited love.", rating: 4.4, image: "images/book5.jpg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, description: "A tale of justice and prejudice in the American South.", rating: 4.8, image: "images/book6.jpg" },
    { title: "Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954, description: "An epic fantasy saga of good vs. evil.", rating: 4.9, image: "images/book7.jpg" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951, description: "A story of teenage angst and rebellion.", rating: 4.3, image: "images/book8.jpg" },
    { title: "The Road", author: "Cormac McCarthy", genre: "Post-Apocalyptic", year: 2006, description: "A father and son survive in a bleak world.", rating: 4.2, image: "images/book9.jpg" },
    { title: "Frankenstein", author: "Mary Shelley", genre: "Gothic", year: 1818, description: "A scientist creates a monstrous creature.", rating: 4.5, image: "images/book10.jpg" }
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

function closeModal() {
    document.getElementById('book-details-modal').style.display = 'none';
}

function filterBooks() {
    const searchQuery = document.getElementById('search-bar').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.book-card');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const author = card.querySelector('p:nth-child(2)').textContent.split(': ')[1].toLowerCase();
        const matchesSearch = searchQuery === '' || title.includes(searchQuery) || author.includes(searchQuery);
        card.style.display = matchesSearch ? '' : 'none';
    });
}

function toggleCards() {
    const allCards = document.querySelectorAll('.book-card');
    const seeMoreBtn = document.getElementById('see-more-btn');
    const readingInsight = document.querySelector('.reading-insight');
    const detailedBooks = document.querySelector('.detailed-books');
    const collegeImage = document.querySelector('.college-image');
    const authorList = document.querySelector('.author-list');
    const authorInsight = document.querySelector('.author-insight');
    if (seeMoreBtn.textContent === 'See More') {
        allCards.forEach((card, index) => {
            if (index >= 8) card.classList.remove('hidden');
        });
        seeMoreBtn.textContent = 'See Less';
        [readingInsight, detailedBooks, collegeImage, authorList, authorInsight].forEach(el => el.style.marginTop = '2rem');
    } else {
        allCards.forEach((card, index) => {
            if (index >= 8) card.classList.add('hidden');
        });
        seeMoreBtn.textContent = 'See More';
        [readingInsight, detailedBooks, collegeImage, authorList, authorInsight].forEach(el => el.style.marginTop = '0');
    }
}

function toggleAuthors() {
    const allAuthors = document.querySelectorAll('.author-card');
    const seeMoreAuthorsBtn = document.getElementById('see-more-authors-btn');
    const authorInsight = document.querySelector('.author-insight');
    if (seeMoreAuthorsBtn.textContent === 'See More') {
        allAuthors.forEach((card, index) => {
            if (index >= 5) card.classList.remove('hidden');
        });
        seeMoreAuthorsBtn.textContent = 'See Less';
        authorInsight.style.marginTop = '2rem';
    } else {
        allAuthors.forEach((card, index) => {
            if (index >= 5) card.classList.add('hidden');
        });
        seeMoreAuthorsBtn.textContent = 'See More';
        authorInsight.style.marginTop = '0';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-bar').addEventListener('input', filterBooks);
    document.getElementById('see-more-btn').addEventListener('click', toggleCards);
    document.getElementById('see-more-authors-btn').addEventListener('click', toggleAuthors);
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
});