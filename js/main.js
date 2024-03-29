// Isaac Karth
// 8/12/2019
// Animation and Tweening

'use strict';

// define game
var game;

var AnimationCurves = function(game) {};

AnimationCurves.prototype = {
    preload: function() {
        game.load.path = 'assets/img/';

        // chose your own image to use
        game.load.image('ball', '1F3C0.png');
    },
    create: function() {
    	this.color_spectrum = Phaser.Color.HSVColorWheel();
        noise.seed(Math.random());

        // pick a background color you like
        game.stage.backgroundColor = "#4598D0";

		// I left this handy list of easing functions here 
		// in this array for you to reference
        this.easing_options = [
            Phaser.Easing.Linear.None,
            Phaser.Easing.Bounce.In,
            Phaser.Easing.Bounce.Out,
            Phaser.Easing.Bounce.InOut,
            Phaser.Easing.Sinusoidal.In,
            Phaser.Easing.Sinusoidal.Out,
            Phaser.Easing.Sinusoidal.InOut,
            Phaser.Easing.Exponential.In,
            Phaser.Easing.Exponential.Out,
            Phaser.Easing.Exponential.InOut,
            Phaser.Easing.Circular.In,
            Phaser.Easing.Circular.Out,
            Phaser.Easing.Circular.InOut,
            Phaser.Easing.Elastic.In,
            Phaser.Easing.Elastic.Out,
            Phaser.Easing.Elastic.InOut,
            Phaser.Easing.Back.In,
            Phaser.Easing.Back.Out,
            Phaser.Easing.Back.InOut
        ];
        // Adding their names manually was much easier than 
        // extracting them from the function definition,
        // but it does mean that you need to keep the two
        // lists aligned...
        this.easing_options_names = [
            "Phaser.Easing.Linear.None",
            "Phaser.Easing.Bounce.In",
            "Phaser.Easing.Bounce.Out",
            "Phaser.Easing.Bounce.InOut",
            "Phaser.Easing.Sinusoidal.In",
            "Phaser.Easing.Sinusoidal.Out",
            "Phaser.Easing.Sinusoidal.InOut",
            "Phaser.Easing.Exponential.In",
            "Phaser.Easing.Exponential.Out",
            "Phaser.Easing.Exponential.InOut",
            "Phaser.Easing.Circular.In",
            "Phaser.Easing.Circular.Out",
            "Phaser.Easing.Circular.InOut",
            "Phaser.Easing.Elastic.In",
            "Phaser.Easing.Elastic.Out",
            "Phaser.Easing.Elastic.InOut",
            "Phaser.Easing.Back.In",
            "Phaser.Easing.Back.Out",
            "Phaser.Easing.Back.InOut"
        ];

        // Add your sprite here, something like this...
        this.ball = game.add.sprite(500, 450, 'ball');
        this.ball.anchor.x = 0.5;
        this.ball.anchor.y = 0.5;
        this.ball.scale.set(0.75);

        // Now add a tween to it!

        // And a second tween!

        // And chain a tween!

        // And a callback function!

    }, 
    update: function() {
    },
    render: function() {
        game.debug.text("Edit main.js to create your own easing animations", 25, 32);
    },
}

game = new Phaser.Game(950, 900, Phaser.AUTO);
game.state.add('AnimationCurves', AnimationCurves);
game.state.start('AnimationCurves');