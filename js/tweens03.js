// Nathan Altice
// Updated: 5/19/19
// Tweens
// Chaining multiple tweens (w/ manual start via mouse click)

// be strict
'use strict';

// define game
var game;

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
		game.stage.backgroundColor = "#11AEBE";

		// add sprite
		this.obj01 = game.add.sprite(0, 0, 'tennis'); 
		this.obj02 = game.add.sprite(0, 72, 'soccer'); 
		this.obj03 = game.add.sprite(0, 144, 'disc'); 
		this.obj04 = game.add.sprite(0, 216, 'baseball'); 

		// add tweens
		// .to({properties}, <duration>, <ease>, <autoStart>, <delay>, <repeat>, <yoyo>)
		// 01
		this.tween01 = game.add.tween(this.obj01);
		this.tween01.to({
			x: game.width-this.obj01.width
		}, 1500, Phaser.Easing.Quadratic.Out, false);
		// 02
		this.tween02 = game.add.tween(this.obj02);
		this.tween02.to({
			x: game.world.centerX,
			y: game.world.centerY
		}, 1000, Phaser.Easing.Quintic.In, false);
		// 03
		this.tween03 = game.add.tween(this.obj03);
		this.tween03.to({
			y: game.world.centerY
		}, 750, Phaser.Easing.Back.In, false);
		// this one gets a callback
		this.tween03.onComplete.add(function(){
			game.add.sprite(0, 0, 'basketball');
		});
		// 04
		this.tween04 = game.add.tween(this.obj04);
		this.tween04.to({
			x: game.world.centerX
		}, 1250, Phaser.Easing.Bounce.In, false, 0, 2);
		// 06
		this.tween05 = game.add.tween(this.obj01);
		this.tween05.to({
			y: game.height-this.obj01.height
		}, 1000, Phaser.Easing.Cubic.InOut, false, 0, -1, true);
		
		// 4Chainz
		this.tween01.chain(this.tween02);
		this.tween02.chain(this.tween03);
		this.tween03.chain(this.tween04);
		this.tween04.chain(this.tween05);

		// set up mouse click to start
		game.input.onDown.addOnce(this.startTweens, this);
	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.R)) {
			game.state.start('Play');
		}
	},
	render: function() {
		game.debug.text('Press \'R\' to Reload state, click stage to start', 32, game.height - 32);
	},
	startTweens: function() {
		this.tween01.start();
	}
}

// game and state
game = new Phaser.Game(800, 600, Phaser.AUTO);
game.state.add('Play', Play);
game.state.start('Play');

