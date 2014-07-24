<?php
/*
  db_settings.php
 
  Ver: 0.0.0
  Last Update: 6/21/14
  Created: 6/21/14
*/
?>
<?php
  $db_name = 'DD';
  $raceColl = 'races';
  $classColl = 'classes';
  $charColl = 'characters';

  function getConnection($collection){
    global $db_name;
    $m = new MongoClient();
    return $m->$db_name->$collection;
  }
?>