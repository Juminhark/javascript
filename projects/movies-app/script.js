const apiURL =
	'https://api.themoviedb.org/3/movie/popular?api_key=dfb2e070ba861e718cebc8ee0b6e4931&language=en-US&page=1';
const imgPATH = 'https://image.tmdb.org/t/p/w1280';
const searchAPI =
	'https://api.themoviedb.org/3/search/movie?api_key=dfb2e070ba861e718cebc8ee0b6e4931&query=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const getClassByRate = (vote) => {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 5) {
		return 'orange';
	} else {
		return 'red';
	}
};

const getMovies = async (url) => {
	const resp = await fetch(url);
	const respData = await resp.json();

	showMovies(respData.results);
};

const showMovies = (movies) => {
	// clear main
	main.innerHTML = '';

	movies.forEach((movie) => {
		const { poster_path, title, vote_average, overview } = movie;

		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');

		movieEl.innerHTML = `
				<img
					src="${imgPATH + poster_path}"
					alt="${title}"
				/>
				<div class="movie-info">
					<h3>${title}</h3>
					<span class='${getClassByRate(vote_average)}'>${vote_average}</span>
        </div>
        <div class='overview'>
        <h3>overview</h3>
        ${overview}
        </div>
      `;

		main.appendChild(movieEl);
	});
};

getMovies(apiURL);

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const searchTerm = search.value;

	console.log(searchTerm);

	if (searchTerm) {
		getMovies(searchAPI + searchTerm);
		search.value = '';
	}
});
