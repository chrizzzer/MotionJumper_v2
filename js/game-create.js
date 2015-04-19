function create() {
	//Arcade physics system
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//use phasers builtin keyboard manager
	cursors = game.input.keyboard.createCursorKeys();

	//background
	game.add.sprite(0, 0, 'sky');

	platforms = game.add.group();

	platforms.enableBody = true;

	//create ground
	var ground = platforms.create(0, game.world.height - 64, 'ground');

	ground.scale.setTo(2, 2);

	ground.body.immovable = true;

	//creating two ledges
	var ledge = platforms.create(400, 400, 'ground');

	ledge.body.immovable = true;

	ledge = platforms.create(-150, 250, 'ground');

    ledge.body.immovable = true;

    //create player
    player = game.add.sprite(32, game.world.height - 150, 'dude');

    game.physics.arcade.enable(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

}