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
  //var db = new Db('luke', new Server('172.17.0.3', 27017));
  //var useDatabase = function(err, database) {
    //database.collections(function(err, collections) {
     // if(!err) {
      //  var result = collections[0].collectionName;
      //  callback(err, result);
     // }
    //});
  //}
  //db.open(useDatabase);
}

app.use("/static", express.static(__dirname + "/static"));
app.use(express.static('static'));

//app.get('/', function (req, res){
  //getHome(function (err, data){
  //  res.send();
  //});
//});

app.get('/buck', function (req, res){
  res.send("Buck is Winning!");
});

app.listen(PORT, HOST);
