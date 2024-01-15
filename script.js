
let movieList = document.getElementById("movieList");
let movieInfo = document.getElementById("movieInfo");
let showTop20Comedy = document.getElementById("top20Comedy");

console.log("hej från js");


showTop20Comedy.addEventListener("click", function () {
    // Replace "28" with the desired genre ID (e.g., 28 for Action)
    let genreId = 35;

    // API endpoint to fetch top-rated movies of a specific genre
    let topMoviesUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=88d6f906b386ac47c004701d8f545df8&with_genres=${genreId}`;

    // Call the fetchMovies function to fetch and display the top 10 movies
    fetchMovies(topMoviesUrl);
});


function fetchMovies(url) {
    return fetch(url)
        .then(res => res.json())
        .then(data => printMovieList(data.results));
}

function searchMovies() {
    let searchTerm = document.getElementById("searchInput").value;
    let searchUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchTerm}&api_key=88d6f906b386ac47c004701d8f545df8`;
 
    fetchMovies(searchUrl);
    let headLineSearch = document.createElement("h2");
    headLineSearch.innerText = "Sökresultat";
    movieList.appendChild(headLineSearch)
}

function printMovieList(movies) {
    movieList.innerHTML = "";

    movies.forEach(movie => {
        let li = document.createElement("li");
        li.innerText = movie.original_title;

        li.addEventListener("click", () => {
            printMovieInfo(movie);
        });

        movieList.appendChild(li);
    });
}

function printMovieInfo(movie) {
    movieInfo.innerHTML = "";

    let movieDiv = document.createElement("div");
    let movieHeadline = document.createElement("h2");
    movieHeadline.innerText = movie.original_title;

    let movieText = document.createElement("p");
    movieText.innerText = movie.overview;

    let movieImg = document.createElement("img");
    movieImg.style.width = "500px";
    movieImg.src = "https://image.tmdb.org/t/p/original/" + movie.poster_path;

    movieDiv.append(movieHeadline, movieText, movieImg);
    movieInfo.appendChild(movieDiv);
}

fetchMovies("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=88d6f906b386ac47c004701d8f545df8");