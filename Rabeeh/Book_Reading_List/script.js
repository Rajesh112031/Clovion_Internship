const books = [
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", year: 1965, description: "A science fiction epic set on the desert planet Arrakis.", rating: 4.5, image: "images/dune.jpg" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937, description: "A fantasy adventure about Bilbo Baggins.", rating: 4.8, image: "images/hobbit.jpeg" },
    { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949, description: "A chilling tale of surveillance and totalitarianism.", rating: 4.7, image: "images/1984.png" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", year: 1813, description: "A romantic novel of manners.", rating: 4.6, image: "images/pride.jpeg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, description: "A story of wealth and unrequited love.", rating: 4.4, image: "images/gatsby.jpg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, description: "A tale of justice and prejudice in the American South.", rating: 4.8, image: "images/mockingbird.webp" },
    { title: "Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954, description: "An epic fantasy saga of good vs. evil.", rating: 4.9, image: "images/lotr.jpg" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951, description: "A story of teenage angst and rebellion.", rating: 4.3, image: "images/catcher.jpg" },
    { title: "The Road", author: "Cormac McCarthy", genre: "Post-Apocalyptic", year: 2006, description: "A father and son survive in a bleak world.", rating: 4.2, image: "images/road.webp" },
    { title: "Frankenstein", author: "Mary Shelley", genre: "Gothic", year: 1818, description: "A scientist creates a monstrous creature.", rating: 4.5, image: "images/frankenstein.jpg" }
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
                <h2>${book.title}</h2>
                <img src="${book.image}" alt="${book.title} Cover">
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Year:</strong> ${book.year}</p>
                <p><strong>Description:</strong> ${book.description}</p>
                <p><strong>Rating:</strong> ${book.rating}/5</p>
                <p><strong>Publisher:</strong> ${book.publisher}</p>
                <p><strong>ISBN:</strong> ${book.isbn}</p>
                <p><strong>Page Count:</strong> ${book.pageCount}</p>
                <a href="#" class="btn" onclick="closeModal()">Close</a>
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
    const genreFilter = document.getElementById('genre-filter').value;
    const searchQuery = document.getElementById('search-bar').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.book-card');

    cards.forEach(card => {
        const genre = card.querySelector('p:nth-child(3)').textContent.split(': ')[1];
        const title = card.querySelector('h3').textContent.toLowerCase();
        const author = card.querySelector('p:nth-child(2)').textContent.split(': ')[1].toLowerCase();
        const matchesGenre = genreFilter === 'all' || genre === genreFilter;
        const matchesSearch = searchQuery === '' || title.includes(searchQuery) || author.includes(searchQuery);
        card.style.display = matchesGenre && matchesSearch ? '' : 'none';
    });
}

function toggleCards() {
    const hiddenCards = document.querySelectorAll('.book-card.hidden');
    const seeMoreBtn = document.getElementById('see-more-btn');
    if (hiddenCards.length > 0) {
        hiddenCards.forEach(card => card.classList.remove('hidden'));
        seeMoreBtn.textContent = 'See Less';
    } else {
        const allCards = document.querySelectorAll('.book-card');
        allCards.forEach((card, index) => {
            if (index >= 4) card.classList.add('hidden');
        });
        seeMoreBtn.textContent = 'See More';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('genre-filter').addEventListener('change', filterBooks);
    document.getElementById('search-bar').addEventListener('input', filterBooks);
    document.getElementById('see-more-btn').addEventListener('click', toggleCards);
});