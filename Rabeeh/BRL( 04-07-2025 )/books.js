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
    { title: "Stranger in a Strange Land", author: "Robert A. Heinlein", genre: "Science Fiction", year: 1961, description: "A human raised by Martians returns to Earth.", rating: 4.3, image: "images/stranger.jpg" },
    { title: "The Martian", author: "Andy Weir", genre: "Science Fiction", year: 2011, description: "An astronaut survives alone on Mars.", rating: 4.8, image: "images/martian.jpg" },
    { title: "Project Hail Mary", author: "Andy Weir", genre: "Science Fiction", year: 2021, description: "A lone astronaut saves humanity.", rating: 4.9, image: "images/hailmary.jpg" },
    { title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction", year: 1932, description: "A dystopian vision of a controlled society.", rating: 4.5, image: "images/brave.webp" },
    { title: "The Road", author: "Cormac McCarthy", genre: "Science Fiction", year: 2006, description: "A father and son survive in a post-apocalyptic world.", rating: 4.2, image: "images/road.webp" },
    { title: "I, Robot", author: "Isaac Asimov", genre: "Science Fiction", year: 1950, description: "Short stories about robots and ethics.", rating: 4.3, image: "images/irobot.jpg" },
    { title: "The Time Machine", author: "H.G. Wells", genre: "Science Fiction", year: 1895, description: "A journey to the distant future.", rating: 4.2, image: "images/timemachine.jpg" },
    { title: "1984", author: "George Orwell", genre: "Science Fiction", year: 1949, description: "A chilling tale of surveillance and totalitarianism.", rating: 4.7, image: "images/1984.png" },
    { title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Science Fiction", year: 1953, description: "A future where books are banned.", rating: 4.5, image: "images/fahrenheit.jpg" },
    { title: "Flowers for Algernon", author: "Daniel Keyes", genre: "Science Fiction", year: 1966, description: "A man’s intelligence is artificially enhanced.", rating: 4.6, image: "images/algernon.jpg" },
    { title: "The War of the Worlds", author: "H.G. Wells", genre: "Science Fiction", year: 1898, description: "Martians invade Earth.", rating: 4.3, image: "images/warworlds.jpg" },
    { title: "A Canticle for Leibowitz", author: "Walter M. Miller Jr.", genre: "Science Fiction", year: 1959, description: "A post-apocalyptic tale of knowledge preservation.", rating: 4.4, image: "images/canticle.jpg" },
    // Fantasy
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937, description: "A fantasy adventure about Bilbo Baggins.", rating: 4.8, image: "images/hobbit.jpeg" },
    { title: "Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954, description: "An epic fantasy saga of good vs. evil.", rating: 4.9, image: "images/lotr.jpg" },
    { title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954, description: "The first part of the Lord of the Rings saga.", rating: 4.8, image: "images/fellowship.jpg" },
    { title: "The Two Towers", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954, description: "The second part of the Lord of the Rings saga.", rating: 4.8, image: "images/towers.jpg" },
    { title: "The Return of the King", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1955, description: "The final part of the Lord of the Rings saga.", rating: 4.9, image: "images/king.jpg" },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy", year: 1997, description: "A young wizard’s journey begins.", rating: 4.7, image: "images/philosopher.jpg" },
    { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", genre: "Fantasy", year: 1998, description: "Harry faces a mysterious threat at Hogwarts.", rating: 4.6, image: "images/chamber.jpg" },
    { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling", genre: "Fantasy", year: 1999, description: "Harry learns about his parents’ past.", rating: 4.8, image: "images/prisoner.jpg" },
    { title: "Harry Potter and the Goblet of Fire", author: "J.K. Rowling", genre: "Fantasy", year: 2000, description: "Harry competes in a dangerous tournament.", rating: 4.7, image: "images/fire.jpg" },
    { title: "Harry Potter and the Order of the Phoenix", author: "J.K. Rowling", genre: "Fantasy", year: 2003, description: "Harry fights against rising darkness.", rating: 4.6, image: "images/phoenix.jpg" },
    { title: "Harry Potter and the Half-Blood Prince", author: "J.K. Rowling", genre: "Fantasy", year: 2005, description: "Harry uncovers Voldemort’s secrets.", rating: 4.7, image: "images/prince.jpg" },
    { title: "Harry Potter and the Deathly Hallows", author: "J.K. Rowling", genre: "Fantasy", year: 2007, description: "The final battle against Voldemort.", rating: 4.8, image: "images/hallows.jpg" },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis", genre: "Fantasy", year: 1950, description: "Children discover a magical world.", rating: 4.6, image: "images/narnia.jpg" },
    { title: "A Game of Thrones", author: "George R.R. Martin", genre: "Fantasy", year: 1996, description: "Political intrigue in a fantasy world.", rating: 4.7, image: "images/thrones.jpg" },
    { title: "The Night Circus", author: "Erin Morgenstern", genre: "Fantasy", year: 2011, description: "A magical circus hosts a secret duel.", rating: 4.5, image: "images/circus.jpg" },
    { title: "Mistborn: The Final Empire", author: "Brandon Sanderson", genre: "Fantasy", year: 2006, description: "A thief leads a rebellion in a magical world.", rating: 4.7, image: "images/mistborn.jpg" },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", year: 2007, description: "A young wizard’s rise to legend.", rating: 4.8, image: "images/namewind.jpg" },
    { title: "The Wheel of Time", author: "Robert Jordan", genre: "Fantasy", year: 1990, description: "An epic quest to save the world.", rating: 4.6, image: "images/wheeloftime.jpg" },
    { title: "The Sword of Truth", author: "Terry Goodkind", genre: "Fantasy", year: 1994, description: "A young man discovers his magical destiny.", rating: 4.5, image: "images/swordtruth.jpg" },
    { title: "The Lies of Locke Lamora", author: "Scott Lynch", genre: "Fantasy", year: 2006, description: "A con artist navigates a dangerous city.", rating: 4.6, image: "images/lockelamora.jpg" },
    { title: "The Way of Kings", author: "Brandon Sanderson", genre: "Fantasy", year: 2010, description: "Epic tale of war and honor.", rating: 4.8, image: "images/waykings.jpg" },
    // Other genres (to be added as needed)
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", year: 1813, description: "A romantic novel of manners.", rating: 4.6, image: "images/pride.jpeg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, description: "A story of wealth and unrequited love.", rating: 4.4, image: "images/gatsby.jpg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, description: "A tale of justice and prejudice in the American South.", rating: 4.8, image: "images/mockingbird.webp" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951, description: "A story of teenage angst and rebellion.", rating: 4.3, image: "images/catcher.jpg" },
    { title: "Frankenstein", author: "Mary Shelley", genre: "Gothic", year: 1818, description: "A scientist creates a monstrous creature.", rating: 4.5, image: "images/frankenstein.jpg" },
    { title: "Animal Farm", author: "George Orwell", genre: "Satire", year: 1945, description: "A satirical allegory of totalitarianism.", rating: 4.5, image: "images/animal.jpg" },
    { title: "Charlotte's Web", author: "E.B. White", genre: "Children's Literature", year: 1952, description: "A tale of friendship on a farm.", rating: 4.7, image: "images/charlotte.jpeg" },
    { title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophical Fiction", year: 1988, description: "A journey of self-discovery.", rating: 4.6, image: "images/alchemist.jpg" },
    { title: "The Shining", author: "Stephen King", genre: "Horror", year: 1977, description: "A family faces supernatural terror.", rating: 4.5, image: "images/shining.jpg" },
    { title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller", year: 2003, description: "A mystery involving ancient secrets.", rating: 4.4, image: "images/davinci.jpg" },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", genre: "Dystopian", year: 1985, description: "A dystopian tale of oppression.", rating: 4.6, image: "images/tale.jpg" },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", genre: "Magical Realism", year: 1967, description: "A multi-generational saga.", rating: 4.7, image: "images/solitude.jpg" },
    { title: "The Book Thief", author: "Markus Zusak", genre: "Historical Fiction", year: 2005, description: "A girl finds solace in books during WWII.", rating: 4.8, image: "images/thief.jpg" }
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

function toggleGenreCards(genre) {
    const section = document.querySelector(`.genre-section[data-genre="${genre}"]`);
    const cards = section.querySelectorAll('.book-card');
    const button = section.querySelector('.see-more-btn');
    if (button.textContent === 'See More') {
        cards.forEach((card, index) => {
            if (index >= 8) card.classList.remove('hidden');
        });
        button.textContent = 'See Less';
    } else {
        cards.forEach((card, index) => {
            if (index >= 8) card.classList.add('hidden');
        });
        button.textContent = 'See More';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-bar').addEventListener('input', filterBooks);
    document.querySelectorAll('.see-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const genre = button.getAttribute('data-genre');
            toggleGenreCards(genre);
        });
    });
});