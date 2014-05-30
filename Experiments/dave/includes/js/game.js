// http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html

var Game = {};
var xMax,
    yMax;

$(document).ready(function(){
  xMax = parseInt($('#gamearea').attr('width'), 10);
  yMax = parseInt($('#gamearea').attr('height'), 10);
});

Game.fps = 30;

Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("gamearea").getContext("2d");
};

Game.draw = function(){
  var width = parseInt($('#gamearea').attr('width'), 10);
  this.context.clearRect(0,0,xMax,yMax); 
  for(var i = 0; i < this.entities.length; i++){
    this.entities[i].draw(this.context);
  }
  for(var i=0; i< width; i+=30){
  	this.context.beginPath();
  	this.context.moveTo(0,i);
  	this.context.lineTo(width,i);
  	this.context.stroke();
  	this.context.closePath();
  	this.context.beginPath();
  	this.context.moveTo(i,0);
  	this.context.lineTo(i,width);
  	this.context.stroke();
  	this.context.closePath();
  }
};

Game.update = function(){
  this.entities[0].update(this.context); 
};

Game.addPlayer = function(x, y){
  Game.entities.push(new Character(x, y));
};

Game.run = (function(){
  var loops = 0, skipTicks = 1000 / Game.fps, 
  maxFrameSkip = 10, 
  nextGameTick = (new Date).getTime();

return function() {
  loops = 0; 

  while ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
    Game.update();
    nextGameTick += skipTicks;
    loops++;
  }

  Game.draw();
};
})();