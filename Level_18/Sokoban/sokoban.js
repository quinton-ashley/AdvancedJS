/**
 * @type Sprite
 */
let hero;

/**
 * @type Group
 */
let floors;

/**
 * @type Group
 */
let walls;

/**
 * @type Group
 */
let chests;

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

	/* HERO */
	hero = new Sprite();
	hero.layer = 1;
	hero.spriteSheet = loadImage('/img/questKid/questKid.png');

	floors = new Group();

	chests = new Group();

	goals = new Group();

	walls = new Group();
}

function setup() {}

function draw() {
	background(0);
}
