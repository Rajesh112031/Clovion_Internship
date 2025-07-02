// Movie data with hardcoded TMDB URLs, expanded to 10 movies
const movies = [
  { title: "Inception", description: "A mind-bending thriller by Christopher Nolan that explores dreams within dreams.", image: "images/inception.png", rating: 4.5, link: "https://www.themoviedb.org/movie/27205" },
  { title: "Interstellar", description: "A journey through space and time, exploring love, physics, and humanity.", image: "images/interstellar.png", rating: 4.8, link: "https://www.themoviedb.org/movie/157336" },
  { title: "The Dark Knight", description: "Heath Ledger’s Joker redefined villains in this gripping Batman classic.", image: "images/dark-knight.jpg", rating: 4.7, link: "https://www.themoviedb.org/movie/155" },
  { title: "Avatar", description: "James Cameron’s visual masterpiece takes us deep into the world of Pandora.", image: "images/avatar.jpg", rating: 4.2, link: "https://www.themoviedb.org/movie/19995" },
  { title: "Oppenheimer", description: "Christopher Nolan’s historical drama explores the weight of invention and legacy.", image: "images/oppenheimer.jpg", rating: 4.6, link: "https://www.themoviedb.org/movie/872585" },
  { title: "The Matrix", description: "A groundbreaking sci-fi film about a simulated reality and rebellion.", image: "images/The Matrix.jpg", rating: 4.6, link: "https://www.themoviedb.org/movie/603" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", description: "The epic journey of a young hobbit to destroy a powerful ring.", image: "images/The Lord of the Rings.jpg", rating: 4.7, link: "https://www.themoviedb.org/movie/120" },
  { title: "Titanic", description: "A romantic and tragic tale set aboard the doomed ship.", image: "images/titanic.jpg", rating: 4.3, link: "https://www.themoviedb.org/movie/597" },
  { title: "The Shawshank Redemption", description: "A story of hope and friendship in a prison setting.", image: "images/The Shawshank Redemption.jpg", rating: 4.9, link: "https://www.themoviedb.org/movie/278" },
  { title: "Pulp Fiction", description: "A nonlinear crime saga with iconic dialogue and characters.", image: "images/Pulp Fiction.jpg", rating: 4.6, link: "https://www.themoviedb.org/movie/680" },
  // Additional movies for the Reviews page
  { title: "The Godfather", description: "A cinematic masterpiece about a mafia family’s rise and fall.", image: "images/The Godfather.jpg", rating: 4.9, link: "https://www.themoviedb.org/movie/238" },
  { title: "Fight Club", description: "A provocative exploration of identity and rebellion.", image: "images/Fight Club.jpg", rating: 4.7, link: "https://www.themoviedb.org/movie/550" },
  { title: "Forrest Gump", description: "A heartwarming journey through decades of American history.", image: "images/Forrest Gump.jpg", rating: 4.6, link: "https://www.themoviedb.org/movie/13" },
  { title: "Gladiator", description: "An epic tale of revenge and honor in ancient Rome.", image: "images/Gladiator.png", rating: 4.5, link: "https://www.themoviedb.org/movie/98" },
  { title: "The Lion King", description: "A timeless animated story of courage and legacy.", image: "images/The Lion King.webp", rating: 4.4, link: "https://www.themoviedb.org/movie/8587" },
];

let displayedMovies = 5; // Start with 5 movies on load
const moviesPerLoad = 5; // Number of movies to load each time

// Function to render movie cards
function renderMovies(filter = "") {
  const movieList = document.getElementById("movie-list");
  if (!movieList) return; // Exit if movie-list element doesn't exist (e.g., on About or Contact pages)
  movieList.innerHTML = "";
  const filteredMovies = movies
    .filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
    .slice(0, displayedMovies);

  if (filteredMovies.length === 0) {
    movieList.innerHTML = '<p class="no-results">No movies found.</p>';
  } else {
    filteredMovies.forEach(movie => {
      const movieCard = document.createElement("article");
      movieCard.className = "movie-card";
      movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title} Poster" loading="lazy">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p>${movie.description}</p>
          <div class="rating">Rating: ${"★".repeat(Math.floor(movie.rating))} (${movie.rating}/5)</div>
          <a href="${movie.link}" target="_blank" aria-label="Read review for ${movie.title}">Read Review</a>
        </div>
      `;
      movieList.appendChild(movieCard);
    });
  }

  // Show/hide load more button
  const loadMoreButton = document.getElementById("load-more");
  if (loadMoreButton) {
    loadMoreButton.style.display = displayedMovies >= movies.length && filter === "" ? "none" : "block";
  }
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      displayedMovies = movies.length; // Reset to show all movies on search
      renderMovies(e.target.value);
    });
  }

  const loadMoreButton = document.getElementById("load-more");
  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", () => {
      displayedMovies += moviesPerLoad;
      renderMovies(searchInput ? searchInput.value : "");
    });
  }

  renderMovies();
});