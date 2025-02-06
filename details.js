var hash = window.location.hash.slice(1)
ChangeMovieDetailText(hash);

function ChangeMovieDetailText(hash) {
    let detail = document.getElementById('DetailStatus');
    let movieList = JSON.parse(localStorage.getItem('MovieList'));
    
    for (let movieIndex in movieList) {
        if (movieIndex === hash) {
            let movie = movieList[movieIndex];
            detail.innerHTML = `<div class="col-3" style="border-right: 1px solid #f16634">
          <img
            src="${movie.picURL}"
            alt="${movie.name}"
          />
        </div>
        <div class="col-8">
          <h3>${movie.name}</h3>
          <p>Genre: ${GenreToString(movie.genre)}</p>
          <p>
            Deskripsi: ${movie.synopsis}
          </p>
          <p>Tanggal Tayang: ${movie.releaseDate}</p>
          <button class="btn orange">Beli tiket</button>
        </div>`
        }
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
