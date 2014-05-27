/* Javascript Dice Roller */

function rollDie(type, amount){
  if(isNaN(type) || isNaN(amount)) return 0;
  var rolls = []
  for(var i = 0; i < amount; i++)    {
    rolls[rolls.length] =  Math.floor((Math.random()*type)+1);    
  }
  
  return rolls;
}
