// Nathan Altice
// Updated: 5/19/19
// Tweens
// Let's look at ALL the Phaser easing styles using .to tweens

// be strict
'use strict';

// define game
var game;
var tweenSpeed = 4000;

// Tween01 state
var Tween01 = function(game) {};
Tween01.prototype = {
	preload: function() {
		// load assets
		game.load.path = '../assets/openmoji72x72/';
		game.load.image('peace', '262E.png');
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

		// add sprites
		this.obj01 = game.add.sprite(0, 0, 'disc'); this.obj01.scale.set(0.5);
		this.obj02 = game.add.sprite(0, 36, 'tennis'); this.obj02.scale.set(0.5);
		this.obj03 = game.add.sprite(0, 72, 'tennis'); this.obj03.scale.set(0.5);
		this.obj04 = game.add.sprite(0, 108, 'tennis'); this.obj04.scale.set(0.5);
		this.obj05 = game.add.sprite(0, 144, 'basketball'); this.obj05.scale.set(0.5);
		this.obj06 = game.add.sprite(0, 180, 'basketball'); this.obj06.scale.set(0.5);
		this.obj07 = game.add.sprite(0, 216, 'basketball'); this.obj07.scale.set(0.5);
		this.obj08 = game.add.sprite(0, 252, 'peace'); this.obj08.scale.set(0.5);
		this.obj09 = game.add.sprite(0, 288, 'baseball'); this.obj09.scale.set(0.5);
		this.obj10 = game.add.sprite(0, 324, 'baseball'); this.obj10.scale.set(0.5);
		this.obj11 = game.add.sprite(0, 360, 'baseball'); this.obj11.scale.set(0.5);
		this.obj12 = game.add.sprite(0, 396, 'face'); this.obj12.scale.set(0.5);
		this.obj13 = game.add.sprite(0, 432, 'face'); this.obj13.scale.set(0.5);
		this.obj14 = game.add.sprite(0, 468, 'face'); this.obj14.scale.set(0.5);
		this.obj15 = game.add.sprite(0, 504, 'soccer'); this.obj15.scale.set(0.5);
		this.obj16 = game.add.sprite(0, 540, 'soccer'); this.obj16.scale.set(0.5);
		this.obj17 = game.add.sprite(0, 576, 'soccer'); this.obj17.scale.set(0.5);

		// add tweens (yes, this would be more efficient in a loop)
		// linear
		game.add.tween(this.obj01).to({
			x: game.world.width - this.obj01.width
		}, tweenSpeed, Phaser.Easing.Linear.None, true);

		// bounce
		game.add.tween(this.obj02).to({
			x: game.world.width - this.obj02.width
		}, tweenSpeed, Phaser.Easing.Bounce.In, true);

		game.add.tween(this.obj03).to({
			x: game.world.width - this.obj03.width
		}, tweenSpeed, Phaser.Easing.Bounce.Out, true);

		game.add.tween(this.obj04).to({
			x: game.world.width - this.obj04.width
		}, tweenSpeed, Phaser.Easing.Bounce.InOut, true);

		// quadratic
		game.add.tween(this.obj05).to({
			x: game.world.width - this.obj05.width
		}, tweenSpeed, Phaser.Easing.Quadratic.In, true);

		game.add.tween(this.obj06).to({
			x: game.world.width - this.obj06.width
		}, tweenSpeed, Phaser.Easing.Quadratic.Out, true);

		game.add.tween(this.obj07).to({
			x: game.world.width - this.obj07.width
		}, tweenSpeed, Phaser.Easing.Quadratic.InOut, true);

		// cubic
		game.add.tween(this.obj09).to({
			x: game.world.width - this.obj01.width
		}, tweenSpeed, Phaser.Easing.Cubic.In, true);

		game.add.tween(this.obj10).to({
			x: game.world.width - this.obj02.width
		}, tweenSpeed, Phaser.Easing.Cubic.Out, true);

		game.add.tween(this.obj11).to({
			x: game.world.width - this.obj03.width
		}, tweenSpeed, Phaser.Easing.Cubic.InOut, true);

		// quartic
		game.add.tween(this.obj12).to({
			x: game.world.width - this.obj04.width
		}, tweenSpeed, Phaser.Easing.Quartic.In, true);

		game.add.tween(this.obj13).to({
			x: game.world.width - this.obj05.width
		}, tweenSpeed, Phaser.Easing.Quartic.Out, true);

		game.add.tween(this.obj14).to({
			x: game.world.width - this.obj06.width
		}, tweenSpeed, Phaser.Easing.Quartic.InOut, true);

		// quintic
		game.add.tween(this.obj15).to({
			x: game.world.width - this.obj07.width
		}, tweenSpeed, Phaser.Easing.Quintic.In, true);

		game.add.tween(this.obj16).to({
			x: game.world.width - this.obj08.width
		}, tweenSpeed, Phaser.Easing.Quintic.Out, true);

		game.add.tween(this.obj17).to({
			x: game.world.width - this.obj09.width
		}, tweenSpeed, Phaser.Easing.Quintic.InOut, true);

		// add text
		let style = { font: "16px Calibri", fill: "#FFF", boundsAlignH: "center", boundsAlignV: "middle"};
		let yPos = 12;
		let easingTypes = [
			'Linear.None', 
			'Bounce.In',
			'Bounce.Out',
			'Bounce.InOut',
			'Quadratic.In',
			'Quadratic.Out',
			'Quadratic.InOut',
			'No Tween :^)',
			'Cubic.In', 
			'Cubic.Out',
			'Cubic.InOut',
			'Quartic.In',
			'Quartic.Out',
			'Quartic.InOut',
			'Quintic.In',
			'Quintic.Out',
			'Quintic.InOut'
		];
		for(let i = 0; i<easingTypes.length; i++) {
			game.add.text(game.world.centerX, yPos, easingTypes[i], style);
			yPos += 36;
		}
	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.R)) {
			game.state.start('Tween01');
		}
		if(game.input.keyboard.justPressed(Phaser.Keyboard.F)) {
			game.state.start('Tween02');
		}
	},
	render: function() {
		game.debug.text('Press \'R\' to Reload, \'F\' to Flip to new state', 32, game.height - 16);
	}
}

var Tween02 = function(game) {};
Tween02.prototype = {
	create: function() {
		// bg color
		game.stage.backgroundColor = "#DDAFAF";

// add sprites
		this.obj01 = game.add.sprite(0, 0, 'disc'); this.obj01.scale.set(0.5);
		this.obj02 = game.add.sprite(0, 36, 'disc'); this.obj02.scale.set(0.5);
		this.obj03 = game.add.sprite(0, 72, 'disc'); this.obj03.scale.set(0.5);
		this.obj04 = game.add.sprite(0, 108, 'tennis'); this.obj04.scale.set(0.5);
		this.obj05 = game.add.sprite(0, 144, 'tennis'); this.obj05.scale.set(0.5);
		this.obj06 = game.add.sprite(0, 180, 'tennis'); this.obj06.scale.set(0.5);
		this.obj07 = game.add.sprite(0, 216, 'basketball'); this.obj07.scale.set(0.5);
		this.obj08 = game.add.sprite(0, 252, 'basketball'); this.obj08.scale.set(0.5);
		this.obj09 = game.add.sprite(0, 288, 'basketball'); this.obj09.scale.set(0.5);
		this.obj10 = game.add.sprite(0, 324, 'baseball'); this.obj10.scale.set(0.5);
		this.obj11 = game.add.sprite(0, 360, 'baseball'); this.obj11.scale.set(0.5);
		this.obj12 = game.add.sprite(0, 396, 'baseball'); this.obj12.scale.set(0.5);
		this.obj13 = game.add.sprite(0, 432, 'face'); this.obj13.scale.set(0.5);
		this.obj14 = game.add.sprite(0, 468, 'face'); this.obj14.scale.set(0.5);
		this.obj15 = game.add.sprite(0, 504, 'face'); this.obj15.scale.set(0.5);
		this.obj16 = game.add.sprite(0, 540, 'soccer'); this.obj16.scale.set(0.5);
		this.obj17 = game.add.sprite(0, 576, 'soccer'); this.obj17.scale.set(0.5);

		// add tweens (yes, this would be more efficient in a loop)
		// sinusoidal
		game.add.tween(this.obj01).to({
			x: game.world.width - this.obj01.width
		}, tweenSpeed, Phaser.Easing.Sinusoidal.In, true);

		game.add.tween(this.obj02).to({
			x: game.world.width - this.obj02.width
		}, tweenSpeed, Phaser.Easing.Sinusoidal.Out, true);

		game.add.tween(this.obj03).to({
			x: game.world.width - this.obj03.width
		}, tweenSpeed, Phaser.Easing.Sinusoidal.InOut, true);

		// exponential
		game.add.tween(this.obj04).to({
			x: game.world.width - this.obj04.width
		}, tweenSpeed, Phaser.Easing.Exponential.In, true);

		game.add.tween(this.obj05).to({
			x: game.world.width - this.obj05.width
		}, tweenSpeed, Phaser.Easing.Exponential.Out, true);

		game.add.tween(this.obj06).to({
			x: game.world.width - this.obj06.width
		}, tweenSpeed, Phaser.Easing.Exponential.InOut, true);

		// circular
		game.add.tween(this.obj07).to({
			x: game.world.width - this.obj07.width
		}, tweenSpeed, Phaser.Easing.Circular.In, true);

		game.add.tween(this.obj08).to({
			x: game.world.width - this.obj01.width
		}, tweenSpeed, Phaser.Easing.Circular.Out, true);

		game.add.tween(this.obj09).to({
			x: game.world.width - this.obj02.width
		}, tweenSpeed, Phaser.Easing.Circular.InOut, true);

		// elastic
		game.add.tween(this.obj10).to({
			x: game.world.width - this.obj03.width
		}, tweenSpeed, Phaser.Easing.Elastic.In, true);

		game.add.tween(this.obj11).to({
			x: game.world.width - this.obj04.width
		}, tweenSpeed, Phaser.Easing.Elastic.Out, true);

		game.add.tween(this.obj12).to({
			x: game.world.width - this.obj05.width
		}, tweenSpeed, Phaser.Easing.Elastic.InOut, true);

		// back
		game.add.tween(this.obj13).to({
			x: game.world.width - this.obj06.width
		}, tweenSpeed, Phaser.Easing.Back.In, true);

		game.add.tween(this.obj14).to({
			x: game.world.width - this.obj07.width
		}, tweenSpeed, Phaser.Easing.Back.Out, true);

		game.add.tween(this.obj15).to({
			x: game.world.width - this.obj08.width
		}, tweenSpeed, Phaser.Easing.Back.InOut, true);

		// linear (again)
		game.add.tween(this.obj16).to({
			x: game.world.width - this.obj09.width
		}, tweenSpeed, Phaser.Easing.Linear.None, true);

		// add text
		let style = { font: "16px Calibri", fill: "#FFF", boundsAlignH: "center", boundsAlignV: "middle"};
		let yPos = 12;
		let easingTypes = [
			'Sinusoidal.In',
			'Sinusoidal.Out',
			'Sinusoidal.InOut',
			'Exponential.In',
			'Exponential.Out',
			'Exponential.InOut',
			'Circular.In', 
			'Circular.Out',
			'Circular.InOut',
			'Elastic.In',
			'Elastic.Out',
			'Elastic.InOut',
			'Back.In',
			'Back.Out',
			'Back.InOut',
			'Linear.None',
			'NO TWEEN'
		];
		for(let i = 0; i<easingTypes.length; i++) {
			game.add.text(game.world.centerX, yPos, easingTypes[i], style);
			yPos += 36;
		}
	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.R)) {
			game.state.start('Tween02');
		}
		if(game.input.keyboard.justPressed(Phaser.Keyboard.F)) {
			game.state.start('Tween01');
		}
	},
	render: function() {
		game.debug.text('\'R\' to Reload, \'F\' to Flip state', 32, game.height - 16);
	}
}

// game and state
game = new Phaser.Game(800, 648, Phaser.AUTO);
game.state.add('Tween01', Tween01);
game.state.add('Tween02', Tween02);
game.state.start('Tween01');

