function preload() {
	eatSound = loadSound(QuintOS.dir + '/sounds/retro_collect_pickup_item_20.wav');
	eatSound.setVolume(0.3);

	crashSound = loadSound(QuintOS.dir + '/sounds/retro_crash_damage_01.wav');
	crashSound.setVolume(0.3);

	moveSounds = [];

	for (let i = 1; i < 10; i++) {
		sound = loadSound(QuintOS.dir + '/sounds/Footstep1__00' + i + '.wav');
		sound.setVolume(0.3);
		moveSounds[i] = sound;
	}

	world.offset.y = 16;

	allSprites.tileSize = 8;
	allSprites.spriteSheet = loadImage(QuintOS.dir + '/img/world.png');

	pipes = new Group();
	pipes.layer = 1;
	pipes.addAnis({
		'+': [0, 2],
		'├': [1, 2],
		'-': [2, 2],
		'┤': [3, 2],
		'┬': { pos: [1, 2], rotation: 90 },
		'|': { pos: [2, 2], rotation: 90 },
		'┴': { pos: [3, 2], rotation: 90 },
		'┌': [4, 2],
		'┐': [5, 2],
		'└': [6, 2],
		'┘': [7, 2]
	});
}

function setup() {
	/* Part A: create the grass field */

	createTiles([
		'┌├----------------┤┐',
		'┬                  ┬',
		'|                  |',
		'|                  |',
		'|                  |',
		'|                  |',
		'|                  |',
		'|                  |',
		'|                  |',
		'|                  |',
		'|                  |',
		'|                  |',
		'|                  |',
		'┴                  ┴',
		'└├----------------┤┘'
	]);
	selectMode();
}

function selectMode() {}

function draw() {
	background(2);
}
