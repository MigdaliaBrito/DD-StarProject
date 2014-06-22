<?php
  $m = new MongoClient();
  $DD = 'DD';
  $classes = 'classes';
  $db =$m->$DD;
  $coll = $db->$classes;

  $cursor = $coll->find();
  foreach($cursor as $document){
    echo $document["name"] . "\n";
  }
  
?>