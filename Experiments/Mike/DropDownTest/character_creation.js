/* Rolls a given number of dice
 * @param amount: integer - the number of dice
 * @param type: integer - the dice to roll (ie d6, d8, d10 ) 
 * @return Array of roll values
 * Example: To roll 4d6 - rollDice(4, 6);
 */
function rollDice(amount, type){
  if(isNaN(type) || isNaN(amount)) return 0;
  var rolls = []
  for(var i = 0; i < amount; i++)    {
    rolls[rolls.length] =  Math.floor((Math.random()*type)+1);    
  }
  return rolls;
}

/* Rolls ability scores for new character creation
 * Rolls 6x 4d6, each time taking the top 3 values
 * @return array of ability rolls
 */
function abilityDiceHelper(){
  var abilityRolls = [];
  for(var i = 0; i < 6; i++){
    var thisAbility = rollDice(4, 6);
    var minimum = Math.min.apply(null, thisAbility);
    var minIndex = thisAbility.indexOf(minimum);
    var sum = 0;
    thisAbility.splice(minIndex, 1);    
    for(var j = 0; j < thisAbility.length; j++)
      sum += thisAbility[j];
    abilityRolls.push(sum);
  }
  return abilityRolls;
}

function outputRolledDice(dice){
  $("<ul id='dice'></ul>").insertAfter($('h1'));
  $.each(dice, function(index, value){    
    $("#dice").append('<li>' + value + '</li>');
  });
}

/* Sets up the attributes drop down */
function setupAttributes(){
    console.log("test");
    var i = 0;
    var lastSelected;
    var abilities = abilityDiceHelper();
    outputRolledDice(abilities);    
    $('select').append("<option name='default' value='default'> </option>");
    for(var i = 0; i < abilities.length; i++){
      $('select').append(      
        "<option name='" + i + "' value='" + abilities[i] + "'>" + abilities[i] + "</option>"
      );     
    }
    $('option').addClass("available");
   
    $("select").click(function(){
      // get last value selected
      lastSelected = $('option:selected', this).attr('name');
    }).change(function(){
      var chosenOption = $("option:selected", this).attr('name');
      //console.log("Last: " + lastSelected + "\tNew: " + chosenOption);
      $('option[name=' + lastSelected + ']:not([name="default"])').toggleClass('chosen').toggleClass('available').prop('disabled', false); 
      $('option[name='+chosenOption+']:not([name="default"])').toggleClass('chosen').toggleClass('available').prop('disabled', true);
    });
}
