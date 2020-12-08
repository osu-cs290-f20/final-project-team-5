/*
* This is currently a basic server running on localHost.
*I don't think we need to go crazy or anything, so this will work until we 
*get graded or get to a point where we need more.
*
*
*/

var path = require('path');
var express = require('express');
var expressHandlebars = require('express-handlebars');
var cookieParser = require('cookie-parser');
var app = express();
var port = process.env.PORT || 8000;

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(cookieParser());


app.get('/', function (req, res, next) {
  console.log("==Hey I made it here");
  res.status(200).render('gamePal', { optionsPage: true });
});

/*The next one is going to be the game with our choices. 
Maybe I can parameterize the url? This will take some finagling*/
app.get('/gameBuddy', function (req, res, next) {
  console.log("==This is where you think it is");
  console.log("==req.cookies:", req.cookies);
  console.log(req.cookies['players'].split(' ')[0]);
  console.log(req.cookies['timer'].split(' ')[0]);
  console.log(req.cookies['points'].split(' ')[0]);
  console.log(req.cookies['dice'].split(' ')[0]);
  console.log(req.cookies['color'].split(' ')[0]);
  //let players = 
  
  
  res.status(200).render('gamePal', { optionsPage: false });
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});