var xMax,
    yMax;

$(document).ready(function(){
  xMax = parseInt($('#gamearea').attr('width'), 10);
  yMax = parseInt($('#gamearea').attr('height'), 10);

  console.log(xMax);
  console.log(yMax);
});

function Character(x, y){
  this.x = x;
  this.y = y;
  this.dude = new Image();
  this.dude.src = "includes/img/person.png";
}

Character.prototype.draw = function(context){
  if(this.dude.complete){
    context.drawImage(this.dude, this.x, this.y);
  };
};

Character.prototype.update = function(context){
  if (Key.isDown(Key.UP)) this.moveUp();
  if (Key.isDown(Key.LEFT)) this.moveLeft();
  if (Key.isDown(Key.DOWN)) this.moveDown();
  if (Key.isDown(Key.RIGHT)) this.moveRight();
}

Character.prototype.moveUp = function(){
  if(this.y > 0)
    this.y -= 30;
    console.log(this.y);
};
Character.prototype.moveDown = function(){
  if(this.y < (yMax - 30))
    this.y += 30;
    console.log(this.y);
};
Character.prototype.moveLeft = function(){
  if(this.x > 0)
    this.x -= 30;
    console.log(this.x);
};
Character.prototype.moveRight = function(){
  if(this.x < (xMax - 30))
    this.x += 30;
    console.log(this.x);
};