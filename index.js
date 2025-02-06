
function ShowAllMovieCards() {
    let movieList = JSON.parse(localStorage.getItem('MovieList'));
    let cardHolder = document.getElementById('FilmListCardHolder');
    cardHolder.innerHTML = '';
    for (let movie of movieList) {
        cardHolder.innerHTML += `<div class="col">
        <div class="card h-100">
          <img
            src="${movie.picURL}"
            class="card-img-top"
            alt="${movie.name}"
          />
          <div class="card-body">
            <a class="card-title" href="#">${movie.name}</a>
            <p class="card-text">${GenreToString(movie.genre)}</p>
          </div>
          <button class="btn card-footer dark-blue">
            <span>Beli tiket</span>
          </button>
        </div>
      </div>`
    }
}

function GenreToString(genres) {
    let string = '';
    for (let genreIndex in genres) {
        string += genres[genreIndex];
        if (genres.length > Number(genreIndex) + 1) {
            string += ', ';
        }
    }
    
    return string;
}
ShowAllMovieCards();