<?php
/*
  funcs.php
 
  Ver: 0.0.0
  Last Update: 6/21/14
  Created: 6/21/14
*/
?>

<?php 
  require_once('db_settings.php');
  /* Output a select field of classes */
  function selectFromDB($type){
    global $classColl, $raceColl;
    switch($type){
      case "race":
        $coll = $raceColl;
        break;
      case "class":
        $coll = $classColl;
        break;
    } 

    $conn = getConnection($coll);
    $cursor = $conn->find();
    echo '<label for="'.$type.'Select">'.ucfirst($type).'</label><select name="'.$type.'Select" id="'.$type.'Select">';
    foreach($cursor as $doc){ 
      $name = $doc['_id']; ?>
      <option value="<?php echo $name ?>"> <?php echo ucfirst($name) ?></option>

    <?php 
    } // end for
    echo '</select>';
  } // end selectFromDB()  

  /* function to write to chrome console for debugging */
  function debug_to_console( $data ) {
    if ( is_array( $data ) )
        $output = "<script>console.log( 'Debug Objects: " . implode( ',', $data) . "' );</script>";
    else
        $output = "<script>console.log( 'Debug Objects: " . $data . "' );</script>";
    echo $output;
  }
?>