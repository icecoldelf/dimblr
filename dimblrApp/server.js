var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var dbURL = 'mongodb://localhost:27017/luke';

var response;

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  response = "Connected correctly to server.";
  db.clost();
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