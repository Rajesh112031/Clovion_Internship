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
    { title: "The Color Purple", author: "Alice Walker", genre: "Fiction", year: 1982, description: "A story of resilience and empowerment.", rating: 4.7, image: "images/colorpurple.jpg" },
    // Gothic
    { title: "Frankenstein", author: "Mary Shelley", genre: "Gothic", year: 1818, description: "A scientist creates a tragic monster.", rating: 4.4, image: "images/frankenstein.jpg" },
    { title: "Dracula", author: "Bram Stoker", genre: "Gothic", year: 1897, description: "A vampire terrorizes Victorian England.", rating: 4.5, image: "images/dracula.jpg" },
    { title: "Wuthering Heights", author: "Emily Brontë", genre: "Gothic", year: 1847, description: "A dark tale of love and revenge.", rating: 4.3, image: "images/wuthering.jpeg" },
    { title: "Rebecca", author: "Daphne du Maurier", genre: "Gothic", year: 1938, description: "A mysterious tale of love and secrets.", rating: 4.6, image: "images/rebecca.jpg" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Gothic", year: 1890, description: "A man trades his soul for eternal youth.", rating: 4.5, image: "images/doriangray.jpg" },
    { title: "Jane Eyre", author: "Charlotte Brontë", genre: "Gothic", year: 1847, description: "A governess uncovers dark secrets.", rating: 4.7, image: "images/janeeyre.jpg" },
    { title: "The Turn of the Screw", author: "Henry James", genre: "Gothic", year: 1898, description: "A chilling ghost story.", rating: 4.3, image: "images/turnofscrew.jpg" },
    { title: "The Monk", author: "Matthew Gregory Lewis", genre: "Gothic", year: 1796, description: "A monk's descent into sin and horror.", rating: 4.2, image: "images/themonk.jpg" },
    // Historical Fiction
    { title: "The Book Thief", author: "Markus Zusak", genre: "Historical Fiction", year: 2005, description: "A girl finds solace in books during WWII.", rating: 4.8, image: "images/thief.jpg" },
    { title: "All the Light We Cannot See", author: "Anthony Doerr", genre: "Historical Fiction", year: 2014, description: "Two lives intersect during WWII.", rating: 4.7, image: "images/allthelight.jpg" },
    { title: "The Nightingale", author: "Kristin Hannah", genre: "Historical Fiction", year: 2015, description: "Sisters resist in Nazi-occupied France.", rating: 4.8, image: "images/nightingale.jpg" },
    { title: "The Pillars of the Earth", author: "Ken Follett", genre: "Historical Fiction", year: 1989, description: "A saga of cathedral building in medieval England.", rating: 4.6, image: "images/pillarsearth.jpg" },
    { title: "Gone with the Wind", author: "Margaret Mitchell", genre: "Historical Fiction", year: 1936, description: "A tale of love and survival during the Civil War.", rating: 4.5, image: "images/gonewind.jpg" },
    { title: "A Tale of Two Cities", author: "Charles Dickens", genre: "Historical Fiction", year: 1859, description: "A story of sacrifice during the French Revolution.", rating: 4.4, image: "images/taleoftwocities.jpg" },
    { title: "The Other Boleyn Girl", author: "Philippa Gregory", genre: "Historical Fiction", year: 2001, description: "A tale of the Tudor court.", rating: 4.3, image: "images/otherboleyn.jpg" },
    { title: "The Help", author: "Kathryn Stockett", genre: "Historical Fiction", year: 2009, description: "Maids and their employers in 1960s Mississippi.", rating: 4.7, image: "images/thehelp.jpg" },
    // Thriller
    { title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller", year: 2003, description: "A symbologist unravels a religious mystery.", rating: 4.5, image: "images/davinci.jpg" },
    { title: "Gone Girl", author: "Gillian Flynn", genre: "Thriller", year: 2012, description: "A woman’s disappearance reveals dark secrets.", rating: 4.4, image: "images/gonegirl.jpg" },
    { title: "The Girl on the Train", author: "Paula Hawkins", genre: "Thriller", year: 2015, description: "A woman witnesses a crime from a train.", rating: 4.3, image: "images/girltrain.jpg" },
    { title: "The Silence of the Lambs", author: "Thomas Harris", genre: "Thriller", year: 1988, description: "An FBI agent hunts a serial killer.", rating: 4.6, image: "images/silence.jpg" },
    { title: "Angels & Demons", author: "Dan Brown", genre: "Thriller", year: 2000, description: "A race against time to save the Vatican.", rating: 4.4, image: "images/angelsdemons.jpg" },
    { title: "The Bourne Identity", author: "Robert Ludlum", genre: "Thriller", year: 1980, description: "An amnesiac assassin uncovers his past.", rating: 4.5, image: "images/bourneidentity.jpg" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genre: "Thriller", year: 2005, description: "A hacker and journalist solve a mystery.", rating: 4.6, image: "images/dragontattoo.jpg" },
    { title: "The Firm", author: "John Grisham", genre: "Thriller", year: 1991, description: "A lawyer uncovers a deadly conspiracy.", rating: 4.4, image: "images/thefirm.jpg" },
    // Horror
    { title: "The Shining", author: "Stephen King", genre: "Horror", year: 1977, description: "A family is terrorized in an isolated hotel.", rating: 4.6, image: "images/shining.jpg" },
    { title: "It", author: "Stephen King", genre: "Horror", year: 1986, description: "A group of friends face a shape-shifting entity.", rating: 4.5, image: "images/it.jpg" },
    { title: "Dracula", author: "Bram Stoker", genre: "Horror", year: 1897, description: "A vampire terrorizes Victorian England.", rating: 4.5, image: "images/dracula.jpg" },
    { title: "The Exorcist", author: "William Peter Blatty", genre: "Horror", year: 1971, description: "A girl is possessed by a demonic force.", rating: 4.4, image: "images/exorcist.jpg" },
    { title: "Pet Sematary", author: "Stephen King", genre: "Horror", year: 1983, description: "A family discovers a cursed burial ground.", rating: 4.4, image: "images/petsematary.jpg" },
    { title: "Salem's Lot", author: "Stephen King", genre: "Horror", year: 1975, description: "Vampires take over a small town.", rating: 4.3, image: "images/salemslot.jpg" },
    { title: "Frankenstein", author: "Mary Shelley", genre: "Horror", year: 1818, description: "A scientist creates a tragic monster.", rating: 4.4, image: "images/frankenstein.jpg" },
    { title: "The Haunting of Hill House", author: "Shirley Jackson", genre: "Horror", year: 1959, description: "A group investigates a haunted mansion.", rating: 4.5, image: "images/hauntinghill.jpg" },
    // Children's Literature
    { title: "Charlotte's Web", author: "E.B. White", genre: "Children's Literature", year: 1952, description: "A pig and spider form an unlikely friendship.", rating: 4.7, image: "images/charlotte.jpg" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", genre: "Children's Literature", year: 1950, description: "Children discover a magical world.", rating: 4.6, image: "images/lionwitch.jpg" },
    { title: "Matilda", author: "Roald Dahl", genre: "Children's Literature", year: 1988, description: "A gifted girl uses her powers to overcome challenges.", rating: 4.8, image: "images/matilda.jpg" },
    { title: "The BFG", author: "Roald Dahl", genre: "Children's Literature", year: 1982, description: "A girl befriends a friendly giant.", rating: 4.6, image: "images/bfg.jpg" },
    { title: "James and the Giant Peach", author: "Roald Dahl", genre: "Children's Literature", year: 1961, description: "A boy embarks on a magical adventure.", rating: 4.5, image: "images/giantpeach.jpg" },
    { title: "The Secret Garden", author: "Frances Hodgson Burnett", genre: "Children's Literature", year: 1911, description: "A girl discovers a hidden garden.", rating: 4.6, image: "images/secretgarden.jpg" },
    { title: "Anne of Green Gables", author: "L.M. Montgomery", genre: "Children's Literature", year: 1908, description: "An orphan finds a home and family.", rating: 4.7, image: "images/annegreengables.jpg" },
    { title: "Winnie-the-Pooh", author: "A.A. Milne", genre: "Children's Literature", year: 1926, description: "Adventures of a bear and his friends.", rating: 4.8, image: "images/winniethepooh.jpg" },
    // Magical Realism
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", genre: "Magical Realism", year: 1967, description: "A multi-generational saga with magical elements.", rating: 4.7, image: "images/solitude.jpg" },
    { title: "Like Water for Chocolate", author: "Laura Esquivel", genre: "Magical Realism", year: 1989, description: "A tale of love and cooking infused with magic.", rating: 4.5, image: "images/likewater.jpg" },
    { title: "Midnight's Children", author: "Salman Rushdie", genre: "Magical Realism", year: 1981, description: "A boy’s life mirrors India’s history.", rating: 4.6, image: "images/midnightschildren.jpg" },
    { title: "The House of the Spirits", author: "Isabel Allende", genre: "Magical Realism", year: 1982, description: "A family saga with mystical elements.", rating: 4.7, image: "images/houseofspirits.jpg" },
    { title: "Beloved", author: "Toni Morrison", genre: "Magical Realism", year: 1987, description: "A haunting tale of slavery and spirits.", rating: 4.6, image: "images/beloved.jpg" },
    { title: "The Master and Margarita", author: "Mikhail Bulgakov", genre: "Magical Realism", year: 1967, description: "Satan visits Soviet Moscow.", rating: 4.5, image: "images/mastermargarita.jpg" },
    { title: "Love in the Time of Cholera", author: "Gabriel García Márquez", genre: "Magical Realism", year: 1985, description: "A lifelong love story with magical undertones.", rating: 4.6, image: "images/lovecholera.jpg" },
    { title: "The Wind-Up Bird Chronicle", author: "Haruki Murakami", genre: "Magical Realism", year: 1994, description: "A man searches for his missing wife in a surreal world.", rating: 4.5, image: "images/windupbird.jpg" }
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
    });

    genreSections.forEach(section => {
        const visibleCards = section.querySelectorAll('.book-card:not([style*="display: none"])');
        section.style.display = visibleCards.length > 0 ? 'block' : 'none';
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