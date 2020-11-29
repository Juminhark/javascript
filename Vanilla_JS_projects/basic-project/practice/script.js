//* Navigation
const btnNav = document.getElementById('btn-nav');
const nav = document.getElementById('nav');

btnNav.addEventListener('click', () => {
	btnNav.classList.toggle('active');
	nav.classList.toggle('active');
});

//* Notification
const btnNotify = document.getElementById('btn-notify');
const container = document.getElementById('container');

btnNotify.addEventListener('click', () => {
	createNotification();
});

const createNotification = () => {
	const notify = document.createElement('div');
	notify.classList.add('toast');

	notify.innerHTML = 'notification';

	container.appendChild(notify);

	setTimeout(() => {
		notify.remove();
	}, 3000);
};

//* Auto Write Text
const auto = document.getElementById('auto');
const text =
	'괴물과 싸우는 사람은 그 싸움 속에서 스스로 괴물이 되지 않도록 조심해야 한다. 우리가 그 심연을 오랫동안 들여다본다면, 심연 또한 우리를 들여다보게 될 것이다 - 프리드리히 니체 『선악의 저편』';
const textArr = text.split('');

let init = '';
let index = 0;

const writeText = () => {
	if (textArr[index] !== '-') {
		init += textArr[index];
	} else {
		init += '</br>';
		init += textArr[index];
	}

	auto.innerHTML = init;

	index++;

	if (index == text.length) {
		clearInterval(refreshInterval);
	}
};

let refreshInterval = setInterval(writeText, 30);
