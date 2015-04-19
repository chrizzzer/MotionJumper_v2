function update() {

	//  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;



    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }

    gest.options.subscribeWithCallback(function(gesture) {
        if (gesture.direction === "Up" || gesture.direction === "Long up")
        {
            //  Jump
        player.body.velocity.y = -300;
        }


        if (gesture.direction === "Left")
        {
            //  Move to the left
        player.body.velocity.x = -2500;

        player.animations.play('left');
        }

        if (gesture.direction === "Right")
        {
            //  Move to the right
        player.body.velocity.x = 2500;

        player.animations.play('right');
        }

    });


    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }

}