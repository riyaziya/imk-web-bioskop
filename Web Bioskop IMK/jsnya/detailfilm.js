// ============ DATA ============
const allFilms = {
  hailmary: {
    title: "Project Hail Mary",
    rating: "13+",
    genre: "Sci-fi, Adventure, Drama",
    score: "8,4/10",
    director: "Phil Lord & Christopher Miller",
    cast: "Ryan Gosling, Sandra Huller, James Ortiz",
    sinopsis: `Dr. Ryland Grace terbangun sendirian di sebuah pesawat luar angkasa tanpa
      mengingat siapa dirinya atau mengapa ia berada di sana. Saat ingatannya perlahan
      kembali, ia menyadari bahwa ia menjalankan misi penting untuk menyelamatkan Bumi
      dari ancaman yang dapat memusnahkan kehidupan. Dalam perjalanannya, ia harus
      mengandalkan kecerdasan dan ilmu pengetahuan untuk menghadapi tantangan
      yang belum pernah dihadapi umat manusia.`,
    poster: "../img/hailmary-poster.jpg",
    trailerThumb: "../img/hailmary-trailer-thumb.jpg",
    trailerVideo: "../video/hailmary-trailer.mp4",
    jadwalLink: "jadwal.html?id=hailmary"
  },
  dune3: {
    title: "Dune: Part Three",
    rating: "13+",
    genre: "Sci-fi, Adventure",
    score: "8,9/10",
    director: "Denis Villeneuve",
    cast: "Timothee Chalamet, Zendaya, Florence Pugh",
    sinopsis: `Paul Atreides melanjutkan perjuangannya memimpin bangsa Fremen
      melawan kekuatan yang mengancam masa depan Arrakis, sambil menghadapi
      beban visinya sendiri tentang jalan yang harus ia tempuh.`,
    poster: "../img/dune3-poster.jpg",
    trailerThumb: "../img/dune3-trailer-thumb.jpg",
    trailerVideo: "../video/dune3-trailer.mp4",
    jadwalLink: "jadwal.html?id=dune3"
  }
};

// ============ LOGIC RENDER (INI YANG HILANG) ============
function getFilmIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderFilmDetail(data) {
  document.getElementById("filmTitle").textContent = data.title;
  document.getElementById("filmRating").textContent = data.rating;
  document.getElementById("filmGenre").textContent = data.genre;

  document.getElementById("filmScore").innerHTML =
    `${data.score} <span class="star">★</span>`;

  document.getElementById("filmDirector").textContent = data.director;
  document.getElementById("filmCast").textContent = data.cast;
  document.getElementById("filmSinopsis").textContent = data.sinopsis;

  const posterEl = document.getElementById("posterImg");
  posterEl.src = data.poster;
  posterEl.alt = `Poster ${data.title}`;

  const trailerThumbEl = document.getElementById("trailerThumb");
  trailerThumbEl.src = data.trailerThumb;
  trailerThumbEl.alt = `Trailer ${data.title}`;

  document.getElementById("trailerSource").src = data.trailerVideo;
  document.getElementById("trailerVideo").load();

  document.title = `${data.title} - Detail Film`;
}

// ============ JALANKAN SAAT HALAMAN DIBUKA ============
document.addEventListener("DOMContentLoaded", () => {
  const filmId = getFilmIdFromUrl();
  const data = allFilms[filmId];

  if (!data) {
    document.querySelector(".info-col").innerHTML = "<p>Film tidak ditemukan.</p>";
    return;
  }

  renderFilmDetail(data);

  const trailerBox = document.getElementById("trailerBox");
  const playBtn = document.getElementById("playBtn");
  const video = document.getElementById("trailerVideo");

  playBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    trailerBox.classList.add("playing");
    video.play();
  });

  trailerBox.addEventListener("click", () => {
    if (!trailerBox.classList.contains("playing")) {
      trailerBox.classList.add("playing");
      video.play();
    }
  });

  document.querySelector(".btn-jadwal").addEventListener("click", () => {
    window.location.href = data.jadwalLink;
  });
});