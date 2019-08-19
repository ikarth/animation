// Nathan Altice
// Updated: 5/19/19
// Tweens
// Tween with multiple parameters and callback function

// be strict
'use strict';

// define game
var game;
var tweenSpeed = 1500;

// Play state
var Play = function(game) {};
Play.prototype = {
	preload: function() {
		// load assets
		game.load.path = 'assets/img/';
		game.load.image('basketball', '1F3C0.png');
		game.load.image('tennis', '1F3BE.png');
		game.load.image('disc', '1F4BF.png');
		game.load.image('soccer', '26BD.png');
		game.load.image('baseball', '26BE.png');
		game.load.image('face', '1F636.png');
	},
	create: function() {
		// bg color
		game.stage.backgroundColor = "#11AFAF";

		// add sprite
		this.obj01 = game.add.sprite(0, 0, 'basketball'); 
		this.obj01.scale.set(0.5);

		// add tween
		this.bounce = game.add.tween(this.obj01);
		// create .to({properties}, <duration>, <ease>, <autoStart>, <delay>, <repeat>, <yoyo>)
		// -1 repeat = infinite
		// setting yoyo to true makes it loop back and forth
		this.bounce.to({
			x: game.world.width - this.obj01.width*6,
			y: game.world.height - this.obj01.height*6,
			angle: 360,
			alpha: 0.5
		}, tweenSpeed, Phaser.Easing.Cubic.InOut, true, 0, -1, true);
		// we need to add another tween to do size scaling
		this.scaling = game.add.tween(this.obj01.scale);
		this.scaling.to({x: 3, y: 3}, tweenSpeed, Phaser.Easing.Cubic.InOut, true, 0, -1, true);

		// callback on EVERY tween loop
		this.bounce.onLoop.add(function(){
			game.add.sprite(game.world.randomX, game.world.randomY, 'face');
		}, this);
		// callback on FIRST tween loop
		this.bounce.onLoop.addOnce(function(){
			game.add.sprite(game.world.randomX, game.world.randomY, 'baseball');
		}, this);

		
	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.R)) {
			game.state.start('Play');
		}
	},
	render: function() {
		game.debug.text('Press \'R\' to Reload state', 32, game.height - 32);
	}
}

// game and state
game = new Phaser.Game(800, 600, Phaser.AUTO);
game.state.add('Play', Play);
game.state.start('Play');

