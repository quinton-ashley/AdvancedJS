let dictionary = [];
let commonWords = [];
let wordle;

async function setup() {
	/* load the text files*/

	startGame();
}

/* Display all the boxes for the letters */
function displayBoxes() {}

async function startGame() {
	/* pick new word */

	displayBoxes();
	await prompt('Guess the word!', 3, 18, 20);
}

function displayInfo() {
	let row = 10;
	txtRect(row, 20, 3, 3, 'solid');
	txt('letter is not found in word', row, 24);
	row += 3;
	txtRect(row, 20, 3, 3, 'outline');
	txt('letter is in the word', row, 24);
	row += 3;
	txtRect(row, 20, 3, 3, 'dashed');
	txt('letter is in the correct position', row, 24, 14);
}

async function displayScore() {
	await eraseRect(9, 19, 20, 11);
	let str = score + '/' + total + ' correct\n\nGuess Distribution\n\n';
	for (let i = 0; i < 6; i++) {
		str += `Guess ${i + 1}: ${distribution[i]}\n`;
	}
	txt(str, 9, 19);
}
