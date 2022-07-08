let inp;

// value is the text the user entered in the input
function onSubmit(value) {}

// called every time the user enters text in the input
function onChange(value) {
	letterSounds.A.play(); // example plays letter A sound
}

async function nextWord() {
	await erase(); // erase the screen

	// create the input for letters
	inp = input('', 0, 0, onSubmit, onChange);
}

async function startGame() {
	await alert('Press enter to start');
	nextWord();
}

startGame();
