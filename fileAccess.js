/**
 * keyword:
 * localStorage.setItem('testArray', JSON.stringify(obj))
 * JSON.parse(localStorage.getItem('testArray'));
 */

let movies = [
    // {
    //     name: ,
    //     picURL: ,
    //     genre: ,
    //     releaseDate: ,
    //     endDate: ,
    //     releaseStatus: , // ended, ongoing, coming soon
    //     synopsis: ,
    //     trailerLink: 
    // },
    {
        name: 'Perayaan Mati Rasa',
        picURL: 'images/perayaan mati rasa.jpg',
        genre: ['Drama', 'Family'],
        releaseDate: '29-1-2025',
        releaseStatus: 'Sedang Tayang',
        synopsis: 'Sebagai seorang anak pertama, IAN (Iqbaal Ramadhan) berjuang meraih mimpinya bersama para sahabatnya dan berusaha keras memenuhi semua ekspektasi yang ia bangun hingga membuatnya jauh dari keluarga. Namun, ketika sebuah peristiwa besar membuat Ian kehilangan orang tuanya secara tiba-tiba, Ian berusaha selalu kuat dan mengubur semua perasaannya hingga ia mati rasa.',
        trailerLink: 'https://youtu.be/lMrh1rsXvPE?si=17oRaO9pT4eDIqG6'
    },
    {
        name: 'Pengantin Setan',
        picURL: 'images/Pengantin Setan.jpg',
        genre: ['Horror'],
        releaseDate: '16-1-2025',
        releaseStatus: 'Sedang Tayang',
        synopsis: 'Echa (Erika Carlina) dan Ariel (Emir Mahira) tengah mengalami kerenggangan dalam hubungan rumah tangga mereka. Di tengah dinginnya hubungan, Echa menemukan kebahagiaan dalam mimpinya bersama pria tampan, yang ternyata jelmaan Jin Dasim, Jin penghancur rumah tangga. Saat mencoba rujuk, mereka harus menghadapi banyak teror yang mengancam nyawa. Echa dan Ariel harus mencari cara membebaskan diri dari belenggu gelap yang menghantui pernikahan mereka sebelum semuanya terlambat.',
        trailerLink: 'https://youtu.be/WC4NPlmtCRE?si=RTi3e0p9lO-i7rRb'
    },
    {
        name: 'Pengantin Iblis',
        picURL: 'images/Pengantin Iblis.jpg',
        genre: ['Thriller', 'Horror'],
        releaseDate: '29-1-2025',
        releaseStatus: 'Sedang Tayang',
        synopsis: 'Ranti (Taskya Namya) adalah seorang ibu dan istri yang sangat setia. Ranti memiliki seorang putri yang sangat ia cintai, Nina (Shaqueena M. Lukman), yang telah mengalami cacat sejak lahir. Suatu hari, Nina mengalami kecelakaan fatal yang membutuhkan penanganan segera. Namun suami Ranti yang bekerja sebagai pelaut tidak berada di rumah, dan keluarga besarnya juga tidak mampu membantu. Dalam keputusasaan, Ranti terpaksa menerima tawaran untuk menjadi Pengantin Iblis demi menyelamatkan Nina. Akhirnya, Nina berhasil disembuhkan, tetapi ada harga lain yang harus dibayar Ranti - harga yang melibatkan nyawa seluruh anggota keluarganya...',
        trailerLink: 'https://youtu.be/WC4NPlmtCRE?si=whXxU7zDAOjYlEhR' 
    },
    {
        name: 'Captain America: Brave New World',
        picURL: 'images/Captain America.jpg',
        genre: ['Superhero'],
        releaseDate: '1-2-2025',
        releaseStatus: 'Segera Ditayangkan',
        synopsis: 'Setelah bertemu dengan Presiden AS yang baru terpilih, Thaddeus Ross (Harrison Ford), Sam Wilson (Anthony Mackie), Captain America yang baru, menemukan dirinya berada di tengah-tengah konflik internasional dan harus mengungkap motif di balik rencana global yang jahat.',
        trailerLink: 'https://youtu.be/1pHDWnXmK7Y?si=Ub8k2ke2OcPlr57c'
    },
    {
        name: 'Coto Vs Konro',
        picURL: 'images/Coto.jpg',
        genre: ['Comedy', 'Drama'],
        releaseDate: '6-2-2025',
        releaseStatus: 'Segera Ditayangkan',
        synopsis: 'Di Kota Makassar Haji Matto (Luthfi Sato) bersama Ibunya Hj. Ratna (Andi Naufah Patadjangi) dan anaknya Sara (Nielam Amir) memiliki warung Coto Haji Matto yang menggunakan resep turun temurun nenek moyangnya selalu ramai pembeli. Hingga suatu hari, datanglah Daeng Sangkala (Awaluddin Tahir) yang berniat untuk membeli warung Coto Haji Matto dan ingin menjadikannya waralaba besar. Haji Matto yang idealis menolaknya dengan keras karena mempertahankan keasliannya warungnya sejak dulu tak boleh berubah. Beberapa minggu kemudian, Daeng Sangkala kembali bersama istrinya Lina (Aty Kodong) dan anaknya Rizal (Adit Triyuda) membuka Restoran makanan Konro yang bernama Konro Daeng Sangkala Letaknya tepat berhadapan langsung dengan warung Coto Haji Matto. Menerapkan strategi persaingan bisnis bersama Rustam (Pieter Ell) Konsultan berpengalaman. Meski sama-sama berbahan dasar daging, lama kelamaan manuver Konro Daeng Sangkala berhasil membuat pelanggan setia warung Haji Matto mulai pindah ke Restoran mereka sehingga Haji Matto yang tidak terima kini mau tak mau harus ikut berubah seiring persaingan yang makin tidak sehat.',
        trailerLink: 'https://youtu.be/-trZjYIoP18?si=3Hetr3q1R0mQaGeZ'
    },
    {
        name: 'Arwah Sinden',
        picURL: 'images/Arwah.jpg',
        genre: ['Horror'],
        releaseDate: '13-3-2025',
        releaseStatus: 'Coming Soon',
        synopsis: 'Empat sekawan arsitek Sergi (Rendy Septino), Dea (Ismi Melinda), Nike (Ade Kurnia) dan Fanya (Tyara Vanesha) mendapatkan tugas untuk merenovasi sebuah rumah. Pada saat kegiatan survey renovasi dilakukan mereka mengalami serangan-serangan hantu yang dikirimkan langsung oleh Kliman (Yama Carlos) mandor pertama yang membangun rumah tersebut. Kliman (Yama Carlos) memiliki rahasia yang dikubur dalam rumah tersebut sehingga membuat dia ketakutan apabila ada yang ingin membangun kembali rumah tersebut. Misteri mulai terpecahkan dengan kehadiran empat sekawan arsitek.',
        trailerLink: 'https://youtu.be/h2jCJcgmd0o?si=RkfoQpHADAYSD6Zk'
    },
    {
        name: 'Petaka Gunung Gede',
        picURL: 'images/Petaka.jpg',
        genre: ['Horror'],
        releaseDate: '6-2-2025',
        releaseStatus: 'Coming Soon',
        synopsis: 'Ketika semua orang menyalahkan Ita (Adzana Ashel) akibat melanggar mitos, Maya (Arla Ailani) tidak percaya. Apakah cuma karena hal itu sahabatnya harus menanggung akibat yang sangat mengenaskan? Ataukah ada hal lain yang Ita telah perbuat hingga ia harus menanggung siksa dan teror sedemikian kejamnya?',
        trailerLink: 'https://youtu.be/9OVaMQWYx_c?si=H6jqJSAyIAtl0ESi'
    }
]
WriteMovieListToTable(JSON.parse(localStorage.getItem('MovieList'))); // write table on start

function AddTemplateMovies(movies) {
    localStorage.setItem('MovieList', JSON.stringify(movies));
}

function AddElementToMovieList() {
    let movieName = document.getElementById('MovieName').value;
    let moviePicURL = document.getElementById('MoviePicURL').value;
    let movieGenre = document.getElementById('MovieGenre').value;
    let movieReleaseDate = document.getElementById('MovieReleaseDate').value;
    let movieReleaseStatus = document.getElementById('MovieReleaseStatus').value;
    let movieSynopsis = document.getElementById('MovieSynopsis').value;
    let movieTrailerLink = document.getElementById('MovieTrailerLink').value;

    let movie = {
        name: movieName,
        picURL: moviePicURL,
        genre: StringToGenre(movieGenre),
        releaseDate: movieReleaseDate,
        releaseStatus: movieReleaseStatus,
        synopsis: movieSynopsis,
        trailerLink: movieTrailerLink
    }
    
    let movieList = JSON.parse(localStorage.getItem('MovieList'));
    
    movieList.push(movie);
    localStorage.setItem('MovieList', JSON.stringify(movieList));

    ForceShowTable();
}

function ShowEditModal(index) {
    let movieList = JSON.parse(localStorage.getItem('MovieList'));
    
    let movie = movieList[index];

    let editMovieID = document.getElementById('editMovieID')
    let editMovieName = document.getElementById('editMovieName')
    let editMoviePicURL = document.getElementById('editMoviePicURL')
    let editMovieGenre = document.getElementById('editMovieGenre')
    let editMovieReleaseDate = document.getElementById('editMovieReleaseDate')
    let editMovieReleaseStatus = document.getElementById('editMovieReleaseStatus')
    let editMovieSynopsis = document.getElementById('editMovieSynopsis')
    let editMovieTrailerLink = document.getElementById('editMovieTrailerLink')
    
    editMovieID.value = index
    editMovieName.value = movie.name
    editMoviePicURL.value = movie.picURL
    editMovieGenre.value = movie.genre
    editMovieReleaseDate.value = movie.releaseDate
    editMovieReleaseStatus.value = movie.releaseStatus
    editMovieSynopsis.innerText = movie.synopsis
    editMovieTrailerLink.value = movie.trailerLink
}

function EditElementToMovieList() {
    let movieList = JSON.parse(localStorage.getItem('MovieList'))
    let movieID = document.getElementById('editMovieID').value;
    let editedMovieList = [];
    for (let movieIndex in movieList) {
        if (movieID != movieIndex) {
            editedMovieList.push(movieList[movieIndex]);
        } else {
            let movieName = document.getElementById('editMovieName').value;
            let moviePicURL = document.getElementById('editMoviePicURL').value;
            let movieGenre = document.getElementById('editMovieGenre').value;
            let movieReleaseDate = document.getElementById('editMovieReleaseDate').value;
            let movieReleaseStatus = document.getElementById('editMovieReleaseStatus').value;
            let movieSynopsis = document.getElementById('editMovieSynopsis').value;
            let movieTrailerLink = document.getElementById('editMovieTrailerLink').value;
        
            let movie = {
                name: movieName,
                picURL: moviePicURL,
                genre: StringToGenre(movieGenre),
                releaseDate: movieReleaseDate,
                releaseStatus: movieReleaseStatus,
                synopsis: movieSynopsis,
                trailerLink: movieTrailerLink
            }
            
            editedMovieList.push(movie);
        }
    }
    localStorage.setItem('MovieList', JSON.stringify(editedMovieList));
    
    ForceShowTable();
}

function DeleteElementOnMovieList(index) {
    let movieList = JSON.parse(localStorage.getItem('MovieList'));
    let editedMovieList = [];
    for (let movieIndex in movieList) {
        if (index != movieIndex) {
            editedMovieList.push(movieList[movieIndex]);
        }
    }
    localStorage.setItem('MovieList', JSON.stringify(editedMovieList));
    ForceShowTable();
}

function ShowItemModal(index, property) {
    let itemElement = document.getElementById('itemModalText');
    let movieList = JSON.parse(localStorage.getItem('MovieList'));
    for (let movieIndex in movieList) {
        if (movieIndex == index) {
            itemElement.innerHTML = movieList[movieIndex][property];
        }
    }

}

function AddTemplate() {
    AddTemplateMovies(movies);
    ForceShowTable();
}

function ForceShowTable() {
    WriteMovieListToTable(JSON.parse(localStorage.getItem('MovieList')));
    HideFunctionButton();
}

// txt translator
function StringToArray(string) {
    let bigArray = [];
    let array = [];
    let tempStr = '';
    for (let char of string) {
        if (char === '|') {
            array.push(tempStr);
            tempStr = '';
        } else if (char === ';') {
            array.push(tempStr);
            bigArray.push(array);
            tempStr = '';
            array = [];
        } else {
            tempStr += char;
        }
    }
    return bigArray
}

function ArrayToObject(array) {
    let bigArray = [];
    for (let movie of array) {
        let tempObject = {
            judulFilm: movie[0],
            linkImg: movie[1],
            genre: GenreDivider(movie[2]),
            tanggalTayang: movie[3],
            releaseStatus: movie[4],
            synopsis: movie[5],
            trailerLink: movie[6]
        }
        bigArray.push(tempObject);
    }
    
    return bigArray;
}

function GenreDivider(genreString) {
    let array = [];
    let string = '';
    for (let char of genreString) {
        if (char === ',') {
            array.push(string);
            string = '';
        } else {
            string += char;
        }
    }
    array.push(string);
    return array;
}

// to html translator
function WriteMovieListToTable(movies) {
    let target = document.getElementById('MoviesTable');
    target.innerHTML = '';
    for (let movieIndex in movies) {
        target.innerHTML += `<tr>
            <th scope="row"style="text-align: center;">${Number(movieIndex) + 1}</th>
            <td>${movies[movieIndex].name}</td>
            <td style="text-align: center;"><button style="border-radius: 5px;" data-bs-toggle="modal" data-bs-target="#showItemModal" onclick="ShowItemModal(${movieIndex}, 'picURL')">Lihat</button></td>
            <td style="text-align: center;">${GenreToString(movies[movieIndex].genre)}</td>
            <td style="text-align: center;">${movies[movieIndex].releaseDate}</td>
            <td style="text-align: center;">${movies[movieIndex].releaseStatus}</td>
            <td style="text-align: center;"><button style="border-radius: 5px;" data-bs-toggle="modal" data-bs-target="#showItemModal" onclick="ShowItemModal(${movieIndex}, 'synopsis')">Lihat</button></td>
            <td style="text-align: center;"><button style="border-radius: 5px;" data-bs-toggle="modal" data-bs-target="#showItemModal" onclick="ShowItemModal(${movieIndex}, 'trailerLink')">Lihat</button></td>
            <td style="text-align: center;" class="deleteRow"><button style="border-radius: 5px;" onClick="DeleteElementOnMovieList(${movieIndex})">Delete</button></td>
            <td style="text-align: center;" class="editRow"><button style="border-radius: 5px;" data-bs-toggle="modal" data-bs-target="#editModal" onclick="ShowEditModal(${movieIndex})">Edit</button></td>
            </tr>`;
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

function StringToGenre(string) {
    let genres = [];
    let tempStr = '';
    for (let char of string) {
        if ((char === ',' || char === ' ') && tempStr !== '') {
            genres.push(tempStr);
            tempStr = '';
        } else if (char !== ',' && char !== ' ') {
            tempStr += char;
        }
    }
    genres.push(tempStr);
    return genres;
}