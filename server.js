/*
* This is currently a basic server running on localHost.
*I don't think we need to go crazy or anything, so this will work until we 
*get graded or get to a point where we need more.
*
*
*/

var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/', function(req, res, next){
  console.log("==Hey I made it here");
  res.status(200).sendFile(__dirname +'/public/options.html');
});

/*The next one is going to be the game with our choices. 
Maybe I can parameterize the url? This will take some finagling*/
app.get('/gameBuddy', function(req, res, next){
  res.status(200).sendFile(__dirname+ '/public/ingame.html');
});

app.get('*', function(req, res){
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, function(){
  console.log("== Server is listening on port", port);
});