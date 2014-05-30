window.onload = function(){
  Game.initialize();
  Game.addPlayer(0, 0);

  Game._intervalId = setInterval(Game.run, 0);
};