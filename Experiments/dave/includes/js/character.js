var xMax,
    yMax,
    xTar,
    yTar,
    xLast=0,
    yLast=0,
    speed = 5,
    clicked = false,
    distance;




$(document).ready(function(){
  xMax = parseInt($('#gamearea').attr('width'), 10);
  yMax = parseInt($('#gamearea').attr('height'), 10);

  console.log(xMax);
  console.log(yMax);

  $("#gamearea").click(function(e){
    var canvasOffset = $(this).parent().offset();
    xTar = e.pageX - canvasOffset.left;
    yTar = e.pageY - canvasOffset.top; 
    clicked = true;
    //alert("clicked: x:"+xTar+" y:"+yTar)
  });
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
  if(clicked){
    this.moveMouse(xTar, yTar);
    clicked = false;
  }
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

Character.prototype.moveMouse = function(xTar, yTar){
  var indicesTar = convertToIndex(xTar, yTar);
  var indicesLast = convertToIndex(xLast, yLast);
  console.log(indicesLast);
  console.log(indicesTar);

  if(indicesTar[0] != indicesLast[0] && indicesTar[1] != indicesLast[1]){ 
    var calculatedSpeed = Math.sqrt(Math.pow(speed,2)*2);
    if(!(Math.abs(indicesLast[0] - indicesTar[0]) == Math.abs(indicesLast[1] - indicesTar[1])))
      calculatedSpeed = Math.floor(calculatedSpeed);
  }
  else{ 
    var calculatedSpeed = speed;
  }/*MERICA*/
  console.log("DAT SPEED " + calculatedSpeed);
  
  distance =  Math.sqrt(Math.abs(Math.pow(indicesTar[0] - indicesLast[0], 2) + Math.pow(indicesTar[1] - indicesLast[1], 2) ) );
  console.log("distance: "+distance);
  if(distance <= calculatedSpeed){
      var peter = convertToPix(xTar, yTar);
      this.x = peter[0];
      this.y = peter[1];
      xLast = this.x;
      yLast = this.y;
  }
}

