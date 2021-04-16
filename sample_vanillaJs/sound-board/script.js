const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
	const btn = document.createElement('button');
	btn.classList.add('btn');

	btn.innerText = sound;

	btn.addEventListener('click', () => {
		stopSongs();
		document.getElementById(sound).play();
	});

	document.getElementById(sound).volume = 0.2;

	document.body.appendChild(btn);
});

const stopSongs = () => {
	sounds.forEach((sound) => {
		const song = document.getElementById(sound);

		song.pause();
		song.currentTime = 0;
	});
};
