var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

    var db = new Db('mydb', new Server('localhost', 27017));

    db.open(function(err, db){
    	var collection = db.collection("characters");
    	collection.insert({name:'Dirk Hardpec', race:'human', job: 'fighter', str:18, dex:15, con:16, wis: 7, intel: 11, cha: 8});
	
    });