/**
 * keyword:
 * localStorage.setItem('testArray', JSON.stringify(obj))
 * JSON.parse(localStorage.getItem('testArray'));
 */

// read and write
function WriteDataToLocal(name, picURL, genre, releaseDate, endDate, releaseStatus, synopsis, trailerLink) {    
    let movie = {
        name,
        pictureLink: picURL,
        genre,
        releaseDate,
        endDate,
        releaseStatus, // ended, ongoing, coming soon
        synopsis,
        trailerLink
    }
    localStorage.setItem('testArray', JSON.stringify(movie))
}

function ReadDataFromLocal() {
    let movies = JSON.parse(localStorage.getItem('MovieList'));
    for (let item of object){
        console.log(item);
        
    }
    
}

function AddTemplateMovies(movies) {
    localStorage.setItem('MovieList', JSON.stringify(movies));
}

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
        picURL: 'perayaan mati rasa.jpg',
        genre: ['Drama', 'Family'],
        releaseDate: '29 januari 2025',
        releaseStatus: 'Sedang Tayang',
        synopsis: 'Sebagai seorang anak pertama, IAN (Iqbaal Ramadhan) berjuang meraih mimpinya bersama para sahabatnya dan berusaha keras memenuhi semua ekspektasi yang ia bangun hingga membuatnya jauh dari keluarga. Namun, ketika sebuah peristiwa besar membuat Ian kehilangan orang tuanya secara tiba-tiba, Ian berusaha selalu kuat dan mengubur semua perasaannya hingga ia mati rasa.',
        trailerLink: 'https://youtu.be/lMrh1rsXvPE?si=17oRaO9pT4eDIqG6'
    },
    {
        name: 'Pengantin Setan',
        picURL: 'Pengantin Setan.jpg',
        genre: ['Horror'],
        releaseDate: '16 Januari 2025',
        releaseStatus: 'Sedang Tayang',
        synopsis: 'Echa (Erika Carlina) dan Ariel (Emir Mahira) tengah mengalami kerenggangan dalam hubungan rumah tangga mereka. Di tengah dinginnya hubungan, Echa menemukan kebahagiaan dalam mimpinya bersama pria tampan, yang ternyata jelmaan Jin Dasim, Jin penghancur rumah tangga. Saat mencoba rujuk, mereka harus menghadapi banyak teror yang mengancam nyawa. Echa dan Ariel harus mencari cara membebaskan diri dari belenggu gelap yang menghantui pernikahan mereka sebelum semuanya terlambat.',
        trailerLink: 'https://youtu.be/WC4NPlmtCRE?si=RTi3e0p9lO-i7rRb'
    },
    {
        name: 'Pengantin Iblis',
        picURL: 'Pengantin Iblis.jpg',
        genre: ['Thriller', 'Horror'],
        releaseDate: '29 Januari 2025',
        releaseStatus: 'Sedang Tayang',
        synopsis: 'Ranti (Taskya Namya) adalah seorang ibu dan istri yang sangat setia. Ranti memiliki seorang putri yang sangat ia cintai, Nina (Shaqueena M. Lukman), yang telah mengalami cacat sejak lahir. Suatu hari, Nina mengalami kecelakaan fatal yang membutuhkan penanganan segera. Namun suami Ranti yang bekerja sebagai pelaut tidak berada di rumah, dan keluarga besarnya juga tidak mampu membantu. Dalam keputusasaan, Ranti terpaksa menerima tawaran untuk menjadi Pengantin Iblis demi menyelamatkan Nina. Akhirnya, Nina berhasil disembuhkan, tetapi ada harga lain yang harus dibayar Ranti - harga yang melibatkan nyawa seluruh anggota keluarganya...',
        trailerLink: 'https://youtu.be/WC4NPlmtCRE?si=whXxU7zDAOjYlEhR' 
    },
    {
        name: 'Captain America: Brave New World',
        picURL: 'Captain America.jpg',
        genre: ['Superhero'],
        releaseDate: 'In Cinemas Februari 2025',
        releaseStatus: 'Coming Soon',
        synopsis: 'Setelah bertemu dengan Presiden AS yang baru terpilih, Thaddeus Ross (Harrison Ford), Sam Wilson (Anthony Mackie), Captain America yang baru, menemukan dirinya berada di tengah-tengah konflik internasional dan harus mengungkap motif di balik rencana global yang jahat.',
        trailerLink: 'https://youtu.be/1pHDWnXmK7Y?si=Ub8k2ke2OcPlr57c'
    },
    {
        name: 'Coto Vs Konro',
        picURL: 'Coto.jpg',
        genre: ['Comedy', 'Drama'],
        releaseDate: '6 Februari 2025',
        releaseStatus: 'Sedang Tayang',
        synopsis: 'Di Kota Makassar Haji Matto (Luthfi Sato) bersama Ibunya Hj. Ratna (Andi Naufah Patadjangi) dan anaknya Sara (Nielam Amir) memiliki warung Coto Haji Matto yang menggunakan resep turun temurun nenek moyangnya selalu ramai pembeli. Hingga suatu hari, datanglah Daeng Sangkala (Awaluddin Tahir) yang berniat untuk membeli warung Coto Haji Matto dan ingin menjadikannya waralaba besar. Haji Matto yang idealis menolaknya dengan keras karena mempertahankan keasliannya warungnya sejak dulu tak boleh berubah. Beberapa minggu kemudian, Daeng Sangkala kembali bersama istrinya Lina (Aty Kodong) dan anaknya Rizal (Adit Triyuda) membuka Restoran makanan Konro yang bernama Konro Daeng Sangkala Letaknya tepat berhadapan langsung dengan warung Coto Haji Matto. Menerapkan strategi persaingan bisnis bersama Rustam (Pieter Ell) Konsultan berpengalaman. Meski sama-sama berbahan dasar daging, lama kelamaan manuver Konro Daeng Sangkala berhasil membuat pelanggan setia warung Haji Matto mulai pindah ke Restoran mereka sehingga Haji Matto yang tidak terima kini mau tak mau harus ikut berubah seiring persaingan yang makin tidak sehat.',
        trailerLink: 'https://youtu.be/-trZjYIoP18?si=3Hetr3q1R0mQaGeZ'
    }
]

// AddTemplateMovies(movies);
WriteMovieListToTable(JSON.parse(localStorage.getItem('MovieList')));

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
    for (let movie of movies) {
        target.innerHTML += `<tr>
            <th scope="row">1</th>
            <td>${movie.name}</td>
            <td style="text-align: center;"><button style="border-radius: 5px;">Lihat</button></td>
            <td style="text-align: center;">${GenreToString(movie.genre)}</td>
            <td style="text-align: center;">${movie.releaseDate}</td>
            <td style="text-align: center;">${movie.releaseStatus}</td>
            <td style="text-align: center;"><button style="border-radius: 5px;">Lihat</button></td>
            <td style="text-align: center;"><button style="border-radius: 5px;">Lihat</button></td>
            <td style="text-align: center;" class="deleteRow"><button style="border-radius: 5px;">Delete</button></td>
            <td style="text-align: center;" class="editRow"><button style="border-radius: 5px;">Edit</button></td>
            </tr>`;
    }
}

function GenreToString(genres) {
    let string = '';
    for (let genreIndex in genres) {
        string += genres[genreIndex];
        if (genres.length > genreIndex + 1) {
            string += ', ';
        }
    }
    return string;
}