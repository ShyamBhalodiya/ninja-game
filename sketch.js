var ninja, zombie, tiles;

var ninja_idle, ninja_jump, ninja_run, back, tileImg, zombieM, zombieF;

var gamestate = "Start";

function preload() {
	//ninja idle
	ninja_idle = loadAnimation("Ninja/Idle__000.png", "Ninja/Idle__001.png");

	//ninja jump
	ninja_jump = loadAnimation("Ninja/Jump__000.png", "Ninja/Jump__002.png", "Ninja/Jump__004.png"
		, "Ninja/Jump__006.png", "Ninja/Jump__008.png");

	//ninja run
	ninja_run = loadAnimation("Ninja/Run__000.png", "Ninja/Run__002.png", "Ninja/Run__004.png",
		"Ninja/Run__006.png", "Ninja/Run__008.png", "Ninja/Run__009.png");

	//background
	back = loadImage("BG.png");

	//zombie male[M] 
	zombieM = loadImage("Zombie/Idle1.png");

	//tile image
	tileImg = loadImage("Tile.png");
}

function setup() {
	createCanvas(1000, 490);

	//ninja
	ninja = createSprite(100, 250);
	ninja.addAnimation("1", ninja_idle);
	ninja.addAnimation("2", ninja_jump);
	ninja.addAnimation("3", ninja_run);
	ninja.scale = 0.5;

	//surface 
	surface = createSprite(1500, 575, width * 20, 10);
	surface.visible = false;

	//zombie
	for (var i = 500; i < 2500; i += 700) {
		zombie = createSprite(i, 475);
		zombie.addImage(zombieM);
		zombie.scale = 0.4;
	}
	//tiles
	for (var i = -1500; i < 3000; i += 125) {
		tiles = createSprite(i, 640, 100, 100);
		tiles.addImage(tileImg);
	}
}


function draw() {
	background(back);

	if (istouching(ninja, tiles)) {
		ninja.velocityX = 0;
	}


	if (gamestate === "Start") {
		//controls for ninja
		ninjacontrols();
	}

	//camera
	camera.position.x = ninja.x;
	camera.position.y = ninja.y;

	if (ninja.x > 2700) {
		alert("Game Over");
	}

	//ending when ninja touches zombie
	endstate();

	drawSprites();
}

