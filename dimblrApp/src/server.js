const express = require('express'),
      MongoClient = require('mongodb').MongoClient,
      Db = require('mongodb').Db,
      ObjectID = require('mongodb').ObjectID,
      Server = require('mongodb').Server,
      assert = require('assert');

var response = "happy";
var test;
var PORT = 8080;
var HOST = '0.0.0.0';

var app = express();

var getHome = function(callback) {
  var db = new Db('luke', new Server('172.17.0.3', 27017));
  var useDatabase = function(err, database) {
    database.collections(function(err, collections) {
      if(!err) {
        var result = collections[0].collectionName;
        callback(err, result);
      }
    });
  }
  db.open(useDatabase);
}

app.use("/static", express.static(__dirname + "/static"));

app.get('/', function (req, res){
  getHome(function (err, data){
    res.send("<html><head><script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react-dom.js'></script></head><body><div id='contents'></div><script src='http://u.won.gg/static/app.js'></script></body></html>" + data);
  });
});

app.get('/buck', function (req, res){
  res.send("Buck is Winning!");
});

app.listen(PORT, HOST);
