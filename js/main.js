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
    },
    create: function() {

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

        this.curve_display = this.add.bitmapData(450, 600);
        this.curve_display.addToWorld(0, 0);

        this.landscape_display = this.add.bitmapData(500, 300);
        this.landscape_display.addToWorld(50, 550);

		this.terrain_canvas = this.add.bitmapData(30, 80);
        this.terrain_display = this.add.bitmapData(300, 800);
        this.terrain_display.addToWorld(600, 50);
        

        this.points = [[0.0,1.0], [0.0,1.0]];

        this.points[0] = this.points[0].map(x => 50 + (x * 400.0));
        this.points[1] = this.points[1].map(x => 449 + (x * -400.0));

        this.landscape = new Array(600).fill(0.5);

        //this.display_path = Phaser.
        this.ball = game.add.sprite(500, 450, 'ball');
        this.ball.anchor.x = 0.5;
        this.ball.anchor.y = 0.5;
        this.ball.scale.set(0.75);

        this.ball_tween = game.add.tween(this.ball);
        this.ball_tween.to({x:[500], y:[50]}, 3000, Phaser.Easing.Linear.None);
        this.ball_tween.repeat(-1);
        this.ball_tween.start();

        this.plotTerrain(this.easing_options[this.current_easing]);
        this.plotLandscape(this.easing_options[this.current_easing]);
    }, 
    update: function() {
		if(game.input.keyboard.justPressed(Phaser.KeyCode.UP)) {
			this.current_easing += 1;
			this.current_easing %= this.easing_options.length;
			this.plotTerrain(this.easing_options[this.current_easing]);
            this.plotLandscape(this.easing_options[this.current_easing]);
		}
		if(game.input.keyboard.justPressed(Phaser.KeyCode.DOWN)) {
			this.current_easing -= 1;
			this.current_easing += this.easing_options.length;
			this.current_easing %= this.easing_options.length;
			this.plotTerrain(this.easing_options[this.current_easing]);
            this.plotLandscape(this.easing_options[this.current_easing]);
		}
		

        
        this.plotCurve(this.easing_options[this.current_easing]);
        this.ball_tween.easing(this.easing_options[this.current_easing]);
    },
    render: function() {
        game.debug.text("current easing function: " + this.easing_options_names[this.current_easing], 25, 32);
    },
    plotTerrain: function(easing_func) {
        this.terrain_canvas.clear();
        this.terrain_canvas.fill(0, 0, 255);
        var perlin_step = 0.17;
        //this.terrain_canvas.processPixelRGB(function(color, x, y) {
        //	color.r = 255;
        //	color.g = Math.random() * 0xFF;
       // 	color.b = Math.random() * 0xFF;
       // 	//console.log(color);
       // 	return color;
        //});
        for(var x = 0; x < 30; x++) {
           for(var y = 0; y < 80; y++) {
           	  var terrain_height = noise.perlin3(x * perlin_step, y * perlin_step, 0.6);
           	  terrain_height = easing_func(terrain_height);
           	  terrain_height = 128 + (terrain_height * 100);
           	  var water = 127;
           	  if (terrain_height > water) {
           	  	this.terrain_canvas.setPixel(x, y, 0, terrain_height, 0);
           	  } else {
           	  	this.terrain_canvas.setPixel(x, y, 0, 0, 256 - terrain_height);
           	  }
          }   
        }
        this.terrain_display.smoothed = false;
        this.terrain_display.draw(this.terrain_canvas, 0, 0, 300, 800);
    },
    plotLandscape: function(easing_func) {
        this.landscape_display.clear();
        this.landscape_display.fill(0, 0, 255, 0.8);
        var perlin_step = 0.08;
        for(var i = 0; i < this.landscape.length; i++) {
            this.landscape[i] = noise.perlin2(i * perlin_step, 0.6)
                            + (noise.perlin2(i * 2 * perlin_step, 0.7) * 0.5)
                            + (noise.perlin2(i * 4 * perlin_step, 0.64) * 0.25);
            var px = i;
            var py = 150 + (easing_func(this.landscape[i]) * 50);
			
            this.landscape_display.rect(px, py, 1, 300 - py, 'rgba(0, 200, 0, 1)');
        }
    },
    plotCurve: function(easing_func) {
        this.curve_display.clear();

        var curve_step = 1.0 / 500.0;
        for(var i = 1.0; i >= 0.0; i -= curve_step) {
            var px = this.math.catmullRomInterpolation(this.points[0], i);
            var py = this.math.catmullRomInterpolation(this.points[1], easing_func(i));
            this.curve_display.rect(px, py, 1.5, 1.5, 'rgba(255, 255, 255, 1)');
        }
        this.curve_display.line(50,50,50,450, 'rgba(255,0,0,0.65)', 2);
        this.curve_display.line(50,450,450,450, 'rgba(255,0,0,0.65)', 2);
    }
}

game = new Phaser.Game(950, 900, Phaser.AUTO);
game.state.add('AnimationCurves', AnimationCurves);
game.state.start('AnimationCurves');