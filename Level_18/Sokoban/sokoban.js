/**
 * @type Sprite
 */
let player;

/**
 * @type Group
 */
let walls;

/**
 * @type Group
 */
let boxes;

/**
 * @type Group
 */
let goals;

function preload() {
	// translates the origin (0, 0)
	world.origin.x = 104;
	world.origin.y = 48;

	allSprites.tileSize = 32;
	allSprites.pixelPerfect = true;
	allSprites.rotationLock = true;
	allSprites.spriteSheet = loadImage('/img/questKid/world.png');
	allSprites.resetAnimationsOnChange = true;

	walls = new Group();

	boxes = new Group();

	/* PART A: Choose a tile to represent the box goal positions on the floor */
	goals = new Group();

	/* PLAYER */

	player = new Sprite(0, 0);
	player.layer = 1;
	player.spriteSheet = loadImage('/img/questKid/questKid.png');
	player.addAnis({
		idle: { row: 0, frames: 1 }
	});
}

function setup() {}

function draw() {}
