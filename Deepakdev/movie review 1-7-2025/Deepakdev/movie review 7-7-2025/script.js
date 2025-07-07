const movies = [
  { title: "Inception", description: "A mind-bending thriller by Christopher Nolan that explores dreams within dreams.", image: "images/inception.png", rating: 4.5, link: "https://www.themoviedb.org/movie/27205", categories: ["Sci-Fi", "Thriller", "Action"] },
  { title: "Interstellar", description: "A journey through space and time, exploring love, physics, and humanity.", image: "images/interstellar.png", rating: 4.8, link: "https://www.themoviedb.org/movie/157336", categories: ["Sci-Fi", "Drama", "Adventure"] },
  { title: "The Dark Knight", description: "Heath Ledger’s Joker redefined villains in this gripping Batman classic.", image: "images/dark-knight.jpg", rating: 4.7, link: "https://www.themoviedb.org/movie/155", categories: ["Action", "Crime", "Drama"] },
  { title: "Avatar", description: "James Cameron’s visual masterpiece takes us deep into the world of Pandora.", image: "images/avatar.jpg", rating: 4.2, link: "https://www.themoviedb.org/movie/19995", categories: ["Sci-Fi", "Action", "Adventure"] },
  { title: "Oppenheimer", description: "Christopher Nolan’s historical drama explores the weight of invention and legacy.", image: "images/oppenheimer.jpg", rating: 4.6, link: "https://www.themoviedb.org/movie/872585", categories: ["Drama", "History", "Biography"] },
  { title: "The Matrix", description: "A groundbreaking sci-fi film about a simulated reality and rebellion.", image: "images/The Matrix.jpg", rating: 4.6, link: "https://www.themoviedb.org/movie/603", categories: ["Sci-Fi", "Action"] },
  { title: "The Lord of the Rings: The Fellowship of the Ring", description: "The epic journey of a young hobbit to destroy a powerful ring.", image: "images/The Lord of the Rings.jpg", rating: 4.7, link: "https://www.themoviedb.org/movie/120", categories: ["Fantasy", "Adventure", "Action"] },
  { title: "Titanic", description: "A romantic and tragic tale set aboard the doomed ship.", image: "images/Titanic.jpg", rating: 4.3, link: "https://www.themoviedb.org/movie/597", categories: ["Drama", "Romance", "History"] },
  { title: "The Shawshank Redemption", description: "A story of hope and friendship in a prison setting.", image: "images/The Shawshank Redemption.jpg", rating: 4.9, link: "https://www.themoviedb.org/movie/278", categories: ["Drama"] },
  { title: "Pulp Fiction", description: "A nonlinear crime saga with iconic dialogue and characters.", image: "images/Pulp Fiction.jpg", rating: 4.6, link: "https://www.themoviedb.org/movie/680", categories: ["Crime", "Drama"] },
  { title: "The Godfather", description: "A cinematic masterpiece about a mafia family’s rise and fall.", image: "images/The Godfather.jpg", rating: 4.9, link: "https://www.themoviedb.org/movie/238", categories: ["Crime", "Drama"] },
  { title: "Fight Club", description: "A provocative exploration of identity and rebellion.", image: "images/Fight Club.jpg", rating: 4.7, link: "https://www.themoviedb.org/movie/550", categories: ["Drama", "Thriller"] },
  { title: "Forrest Gump", description: "A heartwarming journey through decades of American history.", image: "images/Forrest Gump.jpg", rating: 4.6, link: "https://www.themoviedb.org/movie/13", categories: ["Drama", "Romance", "Comedy"] },
  { title: "Gladiator", description: "An epic tale of revenge and honor in ancient Rome.", image: "images/Gladiator.png", rating: 4.5, link: "https://www.themoviedb.org/movie/98", categories: ["Action", "Drama", "History"] },
  { title: "The Lion King", description: "A timeless animated story of courage and legacy.", image: "images/The Lion King.webp", rating: 4.4, link: "https://www.themoviedb.org/movie/8587", categories: ["Animation", "Drama", "Family"] },
];


let displayedMovies = 5; // Start with 5 movies on load
const moviesPerLoad = 5; // Number of movies to load each time
let selectedCategory = ""; // Track selected category for filtering

// Function to render movie cards
function renderMovies(filter = "", category = "") {
  const movieList = document.getElementById("movie-list");
  if (!movieList) return; // Exit if movie-list element doesn't exist
  movieList.innerHTML = "";
  let filteredMovies = movies;

  // Apply category filter only if a category is selected (not empty)
  if (category && category !== "") {
    filteredMovies = movies.filter(movie =>
      movie.categories.includes(category)
    );
  } else {
    filteredMovies = [...movies]; // Reset to all movies when no category is selected
  }

  // Apply search filter if provided
  if (filter && filter !== "") {
    filteredMovies = filteredMovies.filter(movie =>
      movie.title.toLowerCase().includes(filter.toLowerCase())
    );
  }

  filteredMovies = filteredMovies.slice(0, displayedMovies);

  if (filteredMovies.length === 0) {
    movieList.innerHTML = '<p class="no-results">No movies found.</p>';
  } else {
    filteredMovies.forEach(movie => {
      const movieCard = document.createElement("article");
      movieCard.className = "movie-box";
      movieCard.innerHTML = `
        <div class="movie-box-header">
          <h3>${movie.title}</h3>
        </div>
        <div class="movie-box-image">
          <img src="${movie.image}" alt="${movie.title} Poster" loading="lazy">
        </div>
        <div class="movie-box-details">
          <p>${movie.description}</p>
          <div class="rating">Rating: ${"★".repeat(Math.floor(movie.rating))} (${movie.rating}/5)</div>
        </div>
        <div class="movie-box-footer">
          <a href="${movie.link}" target="_blank" aria-label="Read review for ${movie.title}" class="review-link">Read Review</a>
        </div>
      `;
      movieList.appendChild(movieCard);
    });
  }

  // Show/hide load more button
  const loadMoreButton = document.getElementById("load-more");
  if (loadMoreButton) {
    loadMoreButton.style.display = displayedMovies >= (category && category !== "" ? filteredMovies.length : movies.length) && filter === "" ? "none" : "block";
  }
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const loadMoreButton = document.getElementById("load-more");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      displayedMovies = moviesPerLoad; // Reset to initial load on search
      renderMovies(e.target.value, selectedCategory);
    });
  }

  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      selectedCategory = e.target.value;
      displayedMovies = moviesPerLoad; // Reset to initial load on category change
      renderMovies(searchInput ? searchInput.value : "", selectedCategory);
    });
  }

  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", () => {
      displayedMovies += moviesPerLoad;
      renderMovies(searchInput ? searchInput.value : "", selectedCategory);
    });
  }

  renderMovies();
});