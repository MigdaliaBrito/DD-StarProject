var Key = {
  _pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  MOUSE: 0,

  isDown: function(keyCode){
    return this._pressed[keyCode];
  },

  isUp: function(keyCode){
    return this._pressed[keyCode];
  },

  onKeydown: function(event){
    this._pressed[event.keyCode] = true;
  },

  onKeyup: function(event){
    delete this._pressed[event.keyCode];
  }
};

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event);}, false);

var convertToPix = function(x, y){
  var loc = new Array();
  loc.push(Math.floor(x/block) * block);
  loc.push(Math.floor(y/block) * block);
  return loc;
}

var convertToIndex = function(x, y){
  var loc = new Array();
  loc.push(Math.floor(x/block));
  loc.push(Math.floor(y/block));
  return loc;
}