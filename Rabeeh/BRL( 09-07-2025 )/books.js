const books = [
    // Science Fiction
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", year: 1965, description: "A science fiction epic set on the desert planet Arrakis.", rating: 4.5, image: "images/dune.jpg" },
    { title: "Foundation", author: "Isaac Asimov", genre: "Science Fiction", year: 1951, description: "A saga about the fall and rise of galactic empires.", rating: 4.4, image: "images/foundation.jpg" },
    { title: "Neuromancer", author: "William Gibson", genre: "Science Fiction", year: 1984, description: "A cyberpunk tale of hacking and AI.", rating: 4.3, image: "images/neuromancer.jpg" },
    { title: "Snow Crash", author: "Neal Stephenson", genre: "Science Fiction", year: 1992, description: "A fast-paced cyberpunk adventure.", rating: 4.2, image: "images/snowcrash.jpg" },
    { title: "Ender's Game", author: "Orson Scott Card", genre: "Science Fiction", year: 1985, description: "A young boy trains to fight an alien war.", rating: 4.6, image: "images/endersgame.jpg" },
    { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", genre: "Science Fiction", year: 1969, description: "An exploration of gender and politics on an alien world.", rating: 4.5, image: "images/lefthand.jpg" },
    { title: "Hyperion", author: "Dan Simmons", genre: "Science Fiction", year: 1989, description: "A complex tale of pilgrimage and cosmic war.", rating: 4.7, image: "images/hyperion.jpg" },
    { title: "Do Androids Dream of Electric Sheep?", author: "Philip K. Dick", genre: "Science Fiction", year: 1968, description: "A bounty hunter tracks rogue androids.", rating: 4.4, image: "images/androids.jpg" },
    // Fantasy
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937, description: "Bilbo Baggins' adventure with dwarves and a dragon.", rating: 4.7, image: "images/hobbit.jpeg" },
    { title: "Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954, description: "An epic quest to destroy the One Ring.", rating: 4.8, image: "images/lotr.jpg" },
    { title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954, description: "The first part of the Lord of the Rings trilogy.", rating: 4.8, image: "images/fellowship.jpg" },
    { title: "The Two Towers", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954, description: "The second part of the Lord of the Rings trilogy.", rating: 4.8, image: "images/towers.jpg" },
    { title: "The Return of the King", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1955, description: "The final part of the Lord of the Rings trilogy.", rating: 4.9, image: "images/king.jpg" },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy", year: 1997, description: "A young wizard discovers his destiny.", rating: 4.7, image: "images/philosopher.jpg" },
    { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", genre: "Fantasy", year: 1998, description: "Harry returns to Hogwarts and faces a monster.", rating: 4.6, image: "images/chamber.jpg" },
    { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling", genre: "Fantasy", year: 1999, description: "Harry learns about Sirius Black.", rating: 4.8, image: "images/prisoner.jpg" },
    // Fiction
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", year: 1813, description: "A romantic tale of manners and marriage.", rating: 4.6, image: "images/pride.jpeg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, description: "A tale of wealth and unattainable love.", rating: 4.4, image: "images/gatsby.jpg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, description: "A story of racial injustice and moral growth.", rating: 4.8, image: "images/mockingbird.webp" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951, description: "A young man's rebellion against conformity.", rating: 4.3, image: "images/catcher.jpg" },
    { title: "Of Mice and Men", author: "John Steinbeck", genre: "Fiction", year: 1937, description: "A story of friendship and dreams during the Great Depression.", rating: 4.5, image: "images/ofmicemen.jpg" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway", genre: "Fiction", year: 1926, description: "A tale of expatriates in post-WWI Europe.", rating: 4.2, image: "images/sunrises.jpg" },
    { title: "Beloved", author: "Toni Morrison", genre: "Fiction", year: 1987, description: "A haunting tale of slavery and its aftermath.", rating: 4.6, image: "images/beloved.jpg" },
    { title: "The Color Purple", author: "Alice Walker", genre: "Fiction", year: 1982, description: "A story of resilience and empowerment.", rating: 4.7, image: "images/colorpurple.jpg" }
];

async function fetchBookDetails(title) {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            const book = data.items[0].volumeInfo;
            return {
                title: book.title || title,
                author: book.authors ? book.authors.join(', ') : 'Unknown Author',
                description: book.description || 'No description available.',
                image: book.imageLinks ? book.imageLinks.thumbnail : books.find(b => b.title === title)?.image || 'images/placeholder.jpg',
                year: book.publishedDate ? new Date(book.publishedDate).getFullYear() : 'Unknown',
                rating: book.averageRating || books.find(b => b.title === title)?.rating || 'No rating'
            };
        }
        return books.find(b => b.title === title) || { title, author: 'Unknown', description: 'No description available.', image: 'images/placeholder.jpg', year: 'Unknown', rating: 'No rating' };
    } catch (error) {
        console.error('Error fetching book details:', error);
        return books.find(b => b.title === title) || { title, author: 'Unknown', description: 'No description available.', image: 'images/placeholder.jpg', year: 'Unknown', rating: 'No rating' };
    }
}

async function showBookDetails(title) {
    const modal = document.getElementById('book-details-modal');
    const modalContent = document.getElementById('book-details-content');
    modalContent.innerHTML = '<p>Loading...</p>';

    const book = await fetchBookDetails(title);
    modalContent.innerHTML = `
        <h2 class="modal-title">${book.title}</h2>
        <img src="${book.image}" alt="${book.title} Cover" class="modal-image">
        <p class="modal-info"><strong>Author:</strong> ${book.author}</p>
        <p class="modal-info"><strong>Year:</strong> ${book.year}</p>
        <p class="modal-info"><strong>Rating:</strong> ${book.rating}</p>
        <p class="modal-info"><strong>Description:</strong> ${book.description}</p>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('book-details-modal');
    modal.style.display = 'none';
}

function filterBooks() {
    const searchTerm = document.getElementById('search-bar')?.value.toLowerCase() || '';
    const bookCards = document.querySelectorAll('.book-card');
    const genreSections = document.querySelectorAll('.genre-section');

    bookCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const isVisible = title.includes(searchTerm);
        card.style.display = isVisible ? 'block' : 'none';
        if (!isVisible) {
            card.classList.add('hidden');
        } else if (card.parentElement.querySelectorAll('.book-card:not(.hidden)').length <= 4) {
            card.classList.remove('hidden');
        }
    });

    genreSections.forEach(section => {
        const visibleCards = section.querySelectorAll('.book-card:not([style*="display: none"])');
        section.style.display = visibleCards.length > 0 ? 'block' : 'none';
        const seeMoreBtn = section.querySelector('.see-more-btn');
        if (seeMoreBtn) {
            seeMoreBtn.textContent = section.querySelectorAll('.book-card.hidden').length > 0 ? 'See More' : 'See Less';
        }
    });
}

function toggleGenreCards(genre) {
    const section = document.querySelector(`.genre-section[data-genre="${genre}"]`);
    const hiddenCards = section.querySelectorAll('.book-card.hidden');
    const seeMoreBtn = section.querySelector('.see-more-btn');

    hiddenCards.forEach(card => {
        card.classList.toggle('hidden');
        card.style.display = card.classList.contains('hidden') ? 'none' : 'block';
    });

    seeMoreBtn.textContent = hiddenCards[0]?.classList.contains('hidden') ? 'See More' : 'See Less';
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('DOM loaded, initializing scripts...');

        // Initialize see more buttons
        document.querySelectorAll('.see-more-btn').forEach(button => {
            button.addEventListener('click', () => {
                const genre = button.getAttribute('data-genre');
                toggleGenreCards(genre);
            });
        });

        // Initially hide cards beyond the first 4 per genre
        document.querySelectorAll('.genre-section').forEach(section => {
            const bookCards = section.querySelectorAll('.book-card');
            bookCards.forEach((card, index) => {
                if (index >= 4) {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });
            const seeMoreBtn = section.querySelector('.see-more-btn');
            if (seeMoreBtn) {
                seeMoreBtn.textContent = bookCards.length > 4 ? 'See More' : 'See Less';
            }
        });

        // Attach search bar event listener
        const searchBar = document.getElementById('search-bar');
        if (searchBar) {
            searchBar.addEventListener('input', filterBooks);
        }
    } catch (error) {
        console.error('Error in DOMContentLoaded:', error);
    }
});