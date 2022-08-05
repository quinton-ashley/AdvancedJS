let dictionary = [];
let words = [];
let board;

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
