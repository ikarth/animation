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
    },
    create: function() {

    	this.color_spectrum = Phaser.Color.HSVColorWheel();

        noise.seed(Math.random());

        game.stage.backgroundColor = "#4598D0";

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
        this.current_easing = 0;

        this.ball = game.add.sprite(500, 450, 'ball');
        this.ball.anchor.x = 0.5;
        this.ball.anchor.y = 0.5;
        this.ball.scale.set(0.75);

        this.ball_tween = game.add.tween(this.ball);
        this.ball_tween.to({x:[500], y:[50]}, 3000, Phaser.Easing.Linear.None);
        this.ball_tween.repeat(-1);
        this.ball_tween.start();

		this.tween_speed = 3000;
		let text_style = { font: "16px Calibri", fill: "#FFF", boundsAlignH: "center", boundsAlignV: "middle"};
		this.balls = []
        for(var i = 0; i < this.easing_options.length; i++) {
        	var y_position = 42 + (42 * i);
        	var new_ball = game.add.sprite(0, y_position, this.sprite_list[i % this.sprite_list.length]);
        	new_ball.scale.set(0.5);
        	var new_tween = game.add.tween(new_ball).to({x: game.world.width - new_ball.width},
        								this.tween_speed, 
        								this.easing_options[i],
        								true);
			new_tween.yoyo(true, 1000);
			new_tween.repeat(-1, 1000);
        	game.add.text(48, y_position, this.easing_options_names[i], text_style)
        	
			this.balls.push(new_ball);
        }
    }, 
    update: function() {
		if(game.input.keyboard.justPressed(Phaser.KeyCode.UP)) {
			this.current_easing += 1;
			this.current_easing %= this.easing_options.length;
		}
		if(game.input.keyboard.justPressed(Phaser.KeyCode.DOWN)) {
			this.current_easing -= 1;
			this.current_easing += this.easing_options.length;
			this.current_easing %= this.easing_options.length;
		}
        this.ball_tween.easing(this.easing_options[this.current_easing]);
    },
    render: function() {
        game.debug.text("current easing function: " + this.easing_options_names[this.current_easing], 25, 32);
    }
}

game = new Phaser.Game(950, 900, Phaser.AUTO);
game.state.add('AnimationCurves', AnimationCurves);
game.state.start('AnimationCurves');