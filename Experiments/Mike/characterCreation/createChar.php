<?php
/*
  createChar.php
  Create a character page
  Displays a form for character creation
  Posts to insert characer in database 

  Ver: 0.0.0
  Last Update: 6/21/14
  Created: 6/21/14
*/
  $page_title = "D&D - Create Character";
  require_once('header.php');
  define("MIN_FEET", 2);
  define("MAX_FEET", 10);
  define("MIN_INCHES", 0);
  define("MAX_INCHES", 12);
  define("MIN_WEIGHT", 50);
  define("MAX_WEIGHT", 500);

  $alignments = array("lawful-good", "lawful-neutral", "lawful-evil", "neutral-good", "neutral", "neutral-evil", "chaotic-good", "chaotic-neutral", "chaotic-evil");
?>
  <!-- start content -->
  <form action="" method="post">
    <fieldset id="basicInfo">
      <label for="name">Character Name:</label><input type="text" name="name" id="name"/>
      <label for="password">Password:</label><input type="password" name="password" id="password"/>
      <!-- race select field -->
      <?php selectFromDB('race'); ?>
      <!-- class select field -->
      <?php selectFromDB('class'); ?>
      <!-- height and weight -->
      <label>Height</label>
        <select name="heightFeet" id="heightFeet">
          <?php for($i = MIN_FEET; $i <= MAX_FEET; $i++) echo "<option value='$i'>$i</option>"; ?>
        </select> ft.
        <select name="heightInches" id="heightInches">
          <?php for($i = MIN_INCHES; $i < MAX_INCHES; $i++) echo "<option value='$i'>$i</option>"; ?>
        </select> in.
      <label for="weight">Weight (lbs) </label>
      <input type="number" name="weight" id="weight" min="<?php echo MIN_WEIGHT?>" max="<?php echo MAX_WEIGHT?>"/>
      <label for="alignment">Alignment</label>
      <select name="alignment" id="alignment">
        <?php
          foreach($alignments as $align){
              echo "<option value='".$align."'>".$align."</option>";              
          }          
        ?>
      </select>
    </fieldset>
    <br/>

    
    <fieldset id="abilities">    
      <table>
        <tr> <th>Ability </th><th>Roll</th><th>Racial Bonus </th><th>Total</th> <th> Modifier </th> </tr>
        <tr> <td> <label for="strength">Strength</label> </td> <td><select id="strength" name="strength"></select></td> <td class='racialBonus' id="strengthBonus"/></tr>
        <tr> <td> <label for="dexterity">Dexterity</label></td> <td> <select id="dexterity" name="dexterity"></select> </td><td class='racialBonus' id="dexterityBonus"/> </tr>
        <tr> <td> <label for="constitution">Constitution</label> </td> <td> <select id="constitution" name="constitution"></select></td><td class='racialBonus' id="constitutionBonus"/> </tr>
        <tr> <td> <label for="intelligence">Intelligence</label> </td> <td> <select id="intelligence" name="intelligence"></select></td><td class='racialBonus' id="intelligenceBonus"/> </tr>
        <tr> <td> <label for="wisdom">Wisdom</label> </td> <td> <select id="wisdom" name="wisdom"></select> </td><td class='racialBonus' id="wisdomBonus"/> </tr>
        <tr> <td> <label for="charisma">Charisma</label> </td> <td> <select id="charisma" name="charisma"></select> </td><td class='racialBonus' id="charismaBonus"/> </tr>
      </table>
      <button id="roll">Roll</button>
      <ul id="dice"></ul>
    </fieldset>
  </form>
  <script src="../includes/javascript/cc/Character.js"></script>
  <script src="../includes/javascript/cc/character_creation.js"></script>
