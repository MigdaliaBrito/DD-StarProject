/* Javascript Dice Roller */

function rollDie(type){
  if(isNaN(type)) return 0;
  var answer =  Math.floor((Math.random()*type)+1);
  //alert(answer);
  return answer;
}
