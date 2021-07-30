//? Fetch Errors
//? Only throws an error
//? Error Response still a response (400 - 500)

const url = 'https://www.course-api.com/react-tours-project';
const urlError = 'https://www.course-api.com/react-tours-projects';

const getTours = async () => {
	try {
		const resp = await fetch(urlError);
		// console.log(resp);  // 404 error
		// const tours = await resp.json();
		// console.log(tours); // 404 error

		if (!resp.ok) {
			const msg = `There was an error ${resp.status} ${resp.statusText}`;
			throw new Error(msg);
		}
	} catch (err) {
		console.error(err);
	}
};

const btn = document.querySelector('.btn');
btn.addEventListener('click', getTours);
