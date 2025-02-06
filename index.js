let movies = [
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

CaseOfMoviesIsEmpty();

function CaseOfMoviesIsEmpty() {
  if (!localStorage.getItem("MovieList")) {
    localStorage.setItem('MovieList', JSON.stringify(movies));
  }
}

function ShowAllMovieCards() {
  let movieList = JSON.parse(localStorage.getItem("MovieList"));
  let cardHolder = document.getElementById("FilmListCardHolder");
  cardHolder.innerHTML = "";
  for (let movieIndex in movieList) {
    movie = movieList[movieIndex];
    cardHolder.innerHTML += `<div class="col">
        <div class="card h-100">
          <img
            src="${movie.picURL}"
            class="card-img-top"
            alt="${movie.name}"
          />
          <div class="card-body">
            <a class="card-title" href="/movie_details.html#${movieIndex}">${
      movie.name
    }</a>
            <p class="card-text">${GenreToString(movie.genre)}</p>
          </div>
          <a href="/movie_details.html#${movieIndex}" style="width: 100%;">
          <button class="btn card-footer dark-blue" style="width: 100%;">
            <span>Beli tiket</span>
          </button>
          </a>
        </div>
      </div>`;
  }
}

function GenreToString(genres) {
  let string = "";
  for (let genreIndex in genres) {
    string += genres[genreIndex];
    if (genres.length > Number(genreIndex) + 1) {
      string += ", ";
    }
  }

  return string;
}
ShowAllMovieCards();
