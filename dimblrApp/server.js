var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var dbURL = 'mongodb://172.17.0.3:27017/luke';

var response;
var test;

var findTests = function(db, callback) {
  test = db.collection('test').find();
}

MongoClient.connect(dbURL, function(err, db) {
  assert.equal(null, err);
  test = db.collection('test').find();
  response = test;
  db.close();
});

// Constants
var PORT = 8080;
var HOST = '0.0.0.0';

// App
var app = express();
app.get('/', function (req, res){
  res.send(response);
});

app.listen(PORT, HOST);
console.log('Running on http://localhost:' + PORT);