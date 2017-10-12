var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res){
  res.send('I win!');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);