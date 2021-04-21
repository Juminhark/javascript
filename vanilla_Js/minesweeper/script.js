// Display / UI

import { createBoard } from './minesweeper.js';

const board = createBoard(2, 2);
const boardElement = document.querySelector('.board');
board.forEach((row) => {
	row.forEach((tile) => {
		boardElement.append(tile.element);
	});
});

// 1. Populate a board with tiles/mines

// 2. Left click on tiles
// a. Reveal tiles

// 3. Right click on tiles
// a. Mark tiles

// 4. Check for win/lose
