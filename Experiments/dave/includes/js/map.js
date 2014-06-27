document.addEventListener("DOMContentLoaded", init, false);

  function init()
  {
    var canvas = document.getElementById("gamearea");
    canvas.addEventListener("mousedown", getClick, false);
  }

getClick = function(e){
	var canvas = document.getElementById("gamearea");
	var pos = new Array();
	var x = e.x - canvas.offsetLeft;
	var y = e.y - canvas.offsetTop;
	pos['x'] = x;
	pos['y'] = y;
	return pos;
}

