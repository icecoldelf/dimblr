var express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    Db = require('mongodb').Db,
    ObjectID = require('mongodb').ObjectID,
    Server = require('mongodb').Server,
    assert = require('assert');

    //dbURL = 'mongodb://172.17.0.3:27017/luke';

var response = "happy";
var test;
// Constants
var PORT = 8080;
var HOST = '0.0.0.0';

var happy = function() {

  var db = new Db('luke', new Server('172.17.0.3', 27017));
  var length;

  db.open(function(err, database) {
    database.collections(function(err, collections) {
        console.log(err);
        console.log(collections.length);
        if(!err) {
          console.log(collections.length);
          length = collection.length;
        }
    });
  });
  //db.close();
  return length;
}

/*
var findTests = function(db, callback) {
  cursor = db.collection('test').find();
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      test = doc;
    } else {
      callback();
    }
  });
}

MongoClient.connect(dbURL, function(err, db) {
  assert.equal(null, err);
  test = db.collection('test').find();
  response = test;
  db.close();
});
*/

// App
var app = express();


app.get('/', function (req, res){
  console.log("woohoo");
  let response = happy();
  res.send(response);
});

app.listen(PORT, HOST);
console.log('Running on http://localhost:' + PORT);
