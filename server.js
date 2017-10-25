var express = require('express');

// Constants
var PORT = 8080;
var HOST = '0.0.0.0';

// App
var app = express();
app.get('/', function (req, res){
  res.send('Winning!');
});

app.listen(PORT, HOST);
console.log('Running on http://localhost:' + PORT);