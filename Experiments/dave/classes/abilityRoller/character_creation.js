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
  return abilityRolls.sort(function(a, b){return a-b});
}

/* Display rolled dice */
function outputRolledDice(dice){
  $("#dice li").remove();
  $.each(dice, function(index, value){    
    $("#dice").append('<li>' + value + '</li>');
  });
}

/* Create a new character */
function createPlayer(){  
  setupRace();
  setupTable();
  $("#roll").click(function(){
    clearTable();
    setupAbilities();
    return false;
  });
}

function setupRace(){
  $("#race").append(
    "<option name='human' value='human'>Human</option>",
    "<option name='dwarf' value='dwarf'>Dwarf</option>",
    "<option name='elf' value='elf'>Elf</option>",
    "<option name='gnome' value='gnome'>Gnome</option>",
    "<option name='half-elf' value='half-elf'>Half-elf</option>",
    "<option name='half-orc' value='half-orc'>Half-orc</option>",
    "<option name='halfling' value='halfling'>Halfling</option>"
  );
  $("#race").change(function(){      
    $('.racialBonus').text("0");
    $('.racialBonus').each(function(){
      $(this).text(Character.racialBonus[$("#race").val()][$(this).attr('id')]);
      calculateTotals();
    });
  }); // end change
  $("#race").change();
    
}

/* Sets up the attributes drop down */
function setupAbilities(){    
    var i = 0;
    var lastSelected;
    var abilities = abilityDiceHelper();
    outputRolledDice(abilities);
    $('.abilities select option').remove();
    $('.abilities select').append("<option name='default' value='default'> </option>");
    for(var i = 0; i < abilities.length; i++){
      $('.abilities select').append(      
        "<option name='" + i + "' value='" + abilities[i] + "'>" + abilities[i] + "</option>"
      );     
    }
    $('.abilities option').addClass("available");
    
    $(".abilities select").click(function(){      
      // get last value selected
      lastSelected = $('option:selected', this).attr('name');
    }).change(function(){
      var chosenOption = $("option:selected", this).attr('name');
      //console.log("Last: " + lastSelected + "\tNew: " + chosenOption);
      $('option[name=' + lastSelected + ']:not([name="default"])').toggleClass('chosen').toggleClass('available').prop('disabled', false); 
      $('option[name=' + chosenOption + ']:not([name="default"])').toggleClass('chosen').toggleClass('available').prop('disabled', true);
      
      calculateTotal($(this));
      calculateModifier($(this));
    });
}

/* Add totals and modifiers columns to table */
function setupTable(){  
    $(".abilities tr:not(:first)").each(function(){
      var ability = $(":first-child",this).children().eq(0).prop('for')
      $(this).append("<td class='abilityTotal' id='" + ability + "Total'></td>",
      "<td class='abilityModifier' id='" + ability + "Modifier'></td>");
    });
}

/* Calculate all totals */
function calculateTotals(){
  $(".abilities select").each(function(){
    if($(this).prop('value') && $(this).prop('value') != 'default'){
      calculateTotal($(this));      
      calculateModifier($(this));
    }
  });
}

/* Calculate individual total */
function calculateTotal(ability){
  var abilityName = ability.prop('name');
  var value = parseInt(ability.prop('value'), 10);
  var racialBonus = parseInt($('#' + abilityName + "Bonus").text(),10);
  var total = value + racialBonus;
  $("#" + abilityName + "Total").text(total);
}

/* Clear the totals/modifiers columns */
function clearTable(){
  $('.abilityTotal, .abilityModifier').text("");
}

/* Calculate modifier */
function calculateModifier(ability){
  var abilityName = ability.prop('name');
  var total = parseInt($('#' + abilityName + "Total").text(), 10);
  //console.log(total);
  total = Math.floor(total / 2) * 2;
  var modifier = total - (total / 2) - 5;
  $("#" + abilityName + "Modifier").text(modifier);
}
