var MongoClient = require('mongodb').MongoClient;
var classes = 
    [
        {"_id":"bbn", "name":"Barbarian"},
        {"_id":"brd", "name":"Bard"},
        {"_id":"clr", "name":"Cleric"},
        {"_id":"drd", "name":"Druid"},
        {"_id":"ftr", "name":"Fighter"},
        {"_id":"mnk", "name":"Monk"},
        {"_id":"pal", "name":"Paladin"},
        {"_id":"rgr", "name":"Ranger"},
        {"_id":"rog", "name":"Rogue"},
        {"_id":"sor", "name":"Sorceror"},
        {"_id":"wiz", "name":"Wizard"}
    ];
MongoClient.connect('mongodb://localhost:27017/DD', function(err, db) {
    if(err) throw err;
    var callback = 0;
    var classColl = db.collection('classes');

    for(var i = 0; i < classes.length; i++){
        classColl.insert(classes[i], function(err, ins){
            console.log("inserted " + ins);
            if(++callback == classes.length)
                return db.close();
        });
    }
});
