//! https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext
//! https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event
//! https://www.w3schools.com/tags/canvas_arc.asp

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let isDrawing = false;
let x = 0;
let y = 0;
let size = 30;
let color = 'black';

const drawLine = (x1, y1, x2, y2) => {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
};

const drawCircle = (x, y) => {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
};

const updateSizeOnScreen = () => {
	sizeEl.innerHTML = size;
};

colorEl.addEventListener('change', (e) => {
	color = e.target.value;
	updateSizeOnScreen();
});

clearEl.addEventListener('click', () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;

	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
	isDrawing = false;

	x = undefined;
	y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
	if (isDrawing) {
		drawCircle(e.offsetX, e.offsetY);
		drawLine(x, y, e.offsetX, e.offsetY);
		x = e.offsetX;
		y = e.offsetY;
	}
});

increaseBtn.addEventListener('click', () => {
	size += 5;

	if (size > 50) {
		size = 50;
	}

	updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
	size -= 5;

	if (size < 5) {
		size = 5;
	}

	updateSizeOnScreen();
});
