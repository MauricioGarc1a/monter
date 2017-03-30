Candy.Game = function(game) {
  this._player = null;
  this._candyGroup = null;
  this._spawnCandyTimer = 0;
  this._fontStyle = null;
  Candy._scoreText = null;
  Candy._score = 0;
  Candy._health = 0;
};
Candy.Game.prototype = {
    create: function()
    {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 200;

    this.add.sprite(0, 0, 'background');
    this.add.sprite(-30, Candy.GAME_HEIGHT-160, 'floor');
    this.add.sprite(10, 5, 'score-bg');
    this.add.button(Candy.GAME_WIDTH-96-10, 5, 'button-pause', this.managePause, this);

    this._player = this.add.sprite(5, 760, 'monster-idle');
    this._player.animations.add('idle', [0,1,2,3,4,5,6,7,8,9,10,11,12], 10, true);
    this._player.animations.play('idle');

    this._spawnCandyTimer = 0;
    Candy._health = 10;

    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    },
    managePause: function()
    {
        // ...
    },
    update: function()
    {
        // ...
    }
};
Candy.item = {
    spawnCandy: function(game)
    {
        // ...
    },
    clickCandy: function(candy)
    {
        // ...
    },
    removeCandy: function(candy)
    {
        // ...
    }
};
