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
        game.load.image('ball', '1F3C0.png');

        game.load.image('8ball', '1F3B1.png');
		game.load.image('tennis', '1F3BE.png');
		game.load.image('sun', '1F31E.png');
		game.load.image('soccer', '26BD.png');
		game.load.image('baseball', '26BE.png');
		game.load.image('face', '1F60E.png');

		this.sprite_list = ['8ball', 'tennis', 'sun', 'soccer', 'baseball', 'face'];

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

    },
    create: function() {
        game.stage.backgroundColor = "#4598D0";

        this.ball = game.add.sprite(500, 450, 'ball');
        this.ball.anchor.x = 0.5;
        this.ball.anchor.y = 0.5;
        this.ball.scale.set(0.75);
    }, 
    update: function() {
		
    },
    render: function() {
        game.debug.text("current easing function: " + this.easing_options_names[this.current_easing], 25, 32);
    }
}

game = new Phaser.Game(950, 900, Phaser.AUTO);
game.state.add('AnimationCurves', AnimationCurves);
game.state.start('AnimationCurves');