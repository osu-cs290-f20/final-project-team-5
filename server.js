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

app.use(express.json());

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
  let numPlayers = req.cookies['players'].split(' ')[0];
  let color = req.cookies['color'].split(' ')[0];
  let timer = false;
  let points = false;
  let gameDice = false;
  let index;

  let playerCardSeeds = [];
  if(req.cookies['timer'].split(' ')[0] == "yes"){
    timer = true;
  }
  if(req.cookies['points'].split(' ')[0] == "yes"){
	points = true;
  }
  if(req.cookies['dice'].split(' ')[0] == "yes"){
	gameDice = true;
  }
  
  console.log(req.cookies['players'].split(' ')[0]);
  console.log(req.cookies['timer'].split(' ')[0]);
  console.log(req.cookies['points'].split(' ')[0]);
  console.log(req.cookies['dice'].split(' ')[0]);
  console.log(req.cookies['color'].split(' ')[0]);
  //let players = 
  //recreate an object to pass in as an array.
  if(numPlayers == "one"){
	index = 1;
  }
  if(numPlayers == "two"){
	index = 2;
  }
  if(numPlayers == "three"){
	index = 3;
  }
  if(numPlayers == "four"){
	index = 4;
  }
  
  /*incoming ugly code */
  let dataOne = {
	players: 1,
	timer: timer,
	points: points,
	dice: gameDice,
	color: color
  }
  playerCardSeeds.push(dataOne);
  let dataTwo = {};
  let dataThree = {};
  let dataFour = {};
  if(index > 1){
	dataTwo = {
	  players: 2, 
	  timer: timer,
	  points: points,
	  dice: gameDice,
	  color: color
	}
	playerCardSeeds.push(dataTwo);
  }
  if(index > 2){
	dataThree = {
	  players: 3,
	  timer: timer,
	  points: points,
	  dice: gameDice,
	  color: color
	}
	playerCardSeeds.push(dataThree);
  }
  if(index > 3){
	dataFour = {
      players: 4,
	  timer: timer,
	  points: points,
	  dice: gameDice,
	  color: color
	}
	playerCardSeeds.push(dataFour);
  }
  
  /*End janky code*/
  var context = JSON.stringify(playerCardSeeds);
  console.log(context);
  
  res.status(200).render('gamePal', { optionsPage: false});
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});