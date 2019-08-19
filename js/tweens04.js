// Nathan Altice
// Updated: 5/19/19
// Tweens
// Experiment with Tweens and Physics
// See http://www.html5gamedevs.com/topic/9146-collision-between-a-sprite-and-a-tweened-sprite/
// (The above thread explains why this is wonky and only sort of works)

// be strict
'use strict';

// define game
var game;
var tweenSpeed = 1500;

// Play state
var Play = function(game) {
	this.VELOCITY = 300;
};
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

		// physics
		game.physics.startSystem(Phaser.Physics.ARCADE);

		// add sprite and tween
		this.obj01 = game.add.sprite(36, game.world.centerY, 'soccer'); 
		this.obj01.anchor.setTo(0.5);
		this.bounce = game.add.tween(this.obj01);
		// .to({properties}, <duration>, <ease>, <autoStart>, <delay>, <repeat>, <yoyo>)
		this.bounce.to({
			x: game.world.width - this.obj01.width/2
		}, tweenSpeed, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);

		this.obj02 = game.add.sprite(36, game.world.centerY-144, 'baseball'); 
		this.obj02.anchor.setTo(0.5);
		this.bounce = game.add.tween(this.obj02);
		// .to({properties}, <duration>, <ease>, <autoStart>, <delay>, <repeat>, <yoyo>)
		this.bounce.to({
			x: game.world.width - this.obj02.width/2
		}, tweenSpeed*2, Phaser.Easing.Cubic.InOut, true, 0, -1, true);

		// add player
		this.p1 = game.add.sprite(game.world.centerX, game.height-72, 'face');
		this.p1.anchor.setTo(0.5);

		// add physics
		game.physics.arcade.enable([this.obj01, this.obj02, this.p1]);
		// circle bodies!
		this.p1.body.setCircle(36);
		this.obj01.body.setCircle(36);
		// other physics stuff
		this.p1.body.collideWorldBounds = true;
		this.p1.body.tilePadding.set(32);

		this.obj01.body.collideWorldBounds = true;
		this.obj02.body.collideWorldBounds = true;
		
	},
	update: function() {
		// collision
		game.physics.arcade.collide(this.p1, this.obj01);
		game.physics.arcade.collide(this.p1, this.obj02);
		game.physics.arcade.collide(this.obj01, this.obj02);

		// player control
		this.p1.body.velocity.setTo(0);
		if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			this.p1.body.velocity.y = -this.VELOCITY;
		} else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			this.p1.body.velocity.y = this.VELOCITY;
		} else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			this.p1.body.velocity.x = -this.VELOCITY;
		} else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			this.p1.body.velocity.x = this.VELOCITY;
		}

		// state restart
		if(game.input.keyboard.justPressed(Phaser.Keyboard.R)) {
			game.state.start('Play');
		}
	},
	render: function() {
		game.debug.text('Press \'R\' to Reload state, Arrows to control face', 32, game.height - 32);
		game.debug.body(this.p1);
		game.debug.body(this.obj01);
		game.debug.body(this.obj02);
	}
}

// game and state
game = new Phaser.Game(800, 600, Phaser.AUTO);
game.state.add('Play', Play);
game.state.start('Play');

