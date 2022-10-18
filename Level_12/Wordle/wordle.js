let dictionary = [];
let commonWords = [];

async function setup() {
	/* load the text files*/

	startGame();
}

setup();

/* Display all the boxes for the letters */
function displayBoxes() {}

async function startGame() {
	/* pick new word */

	displayBoxes();
	await prompt('Guess the word!', 3, 18, 20);
}

function displayInfo() {
	let row = 10;
	textRect(row, 20, 3, 3, 'solid');
	text('letter is not found in word', row, 24);
	row += 3;
	textRect(row, 20, 3, 3, 'outline');
	text('letter is in the word', row, 24);
	row += 3;
	textRect(row, 20, 3, 3, 'dashed');
	text('letter is in the correct position', row, 24, 14);
}
