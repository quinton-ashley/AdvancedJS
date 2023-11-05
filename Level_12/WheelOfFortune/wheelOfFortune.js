let phrases, phrase, words;

let bigBuzzer = `
|⎺|__  _   _ ___________ _ __
| '_ \\| | | |_  /_  / _ \\ '__|
| |_) | |_| |/ / / /  __/ |
|_.__/ \\__,_/___/___\\___|_|`.slice(1);

async function setup() {
	/* Create the buzzer button */
	button(bigBuzzer, 18, 5, buzz);

	// the category of theses phrases is "Fun and Games"
	let data = await fetch(QuintOS.dir + '/phrases.txt');
	let phrasesList = await data.text();

	log(phrasesList);

	/* Split phrasesList into an array of phrases */

	/* Pick a random phrase */

	/* Split the phrase into an array of words */
}

/* Display a textRect for each letter in the phrase */
function displayBoxes() {}

/* Add a letter to a random empty box */
async function addLetter() {}

/* Prompt the user to guess and check if their guess is correct */
function buzz() {}
