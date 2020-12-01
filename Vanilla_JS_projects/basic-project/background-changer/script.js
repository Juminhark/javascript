const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	document.body.style.background = randomBg();
});

const randomBg = () => {
	return `hsl(${Math.floor(Math.random() * 360)}, 60%, 40%)`;
};
