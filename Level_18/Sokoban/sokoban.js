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
	world.offset.x = 104;
	world.offset.y = 48;

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

	player = new Sprite();
	player.layer = 1;
	player.spriteSheet = loadImage('/img/questKid/questKid.png');
}

function setup() {}

function draw() {}
