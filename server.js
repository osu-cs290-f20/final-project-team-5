/*
* This is currently a basic server running on localHost.
*I don't think we need to go crazy or anything, so this will work until we 
*get graded or get to a point where we need more.
*
*
*/
//var fs = require('fs');
var path = require('path');
var express = require('express');
var expressHandlebars = require('express-handlebars');
var cookieParser = require('cookie-parser');
const { json } = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());

app.use(express.static('public'));
app.use(cookieParser());


app.get('/', function (req, res, next) {
  console.log("== Hey I made it here");
  res.status(200).render('gamePal', { optionsPage: true });
});


app.get('/gameBuddy', function (req, res, next) {
  var myArray = [
  {
	  playerNumber: "One", 
	  name: "Player 1", 
	  url: "https://web.engr.oregonstate.edu/~perezalj/Benny/Beaver", 
	  points: true, 
	  color: "orange"
  },
  {
	  playerNumber: "Two", 
	  name: "So mean :(", 
	  url: "https://web.engr.oregonstate.edu/~perezalj/Benny/Beaver", 
	  points: true, 
	  color: "blue"
  }
  ];
  res.status(200).render('gamePal', { optionsPage: false, gameDice: true, myArray }  );
});

app.post('/sendData', function (req, res, next) {
  console.log('== req.body:', req.body);
  let serverData = true;
  if (req.body) {
    if (serverData) {
      // fs.writeFile(
      //   __dirname + '/serverData.json',
      //   JSON.stringify({}, null, 2),
      //   function (err, data) {
      //     if (err) {
      //       console.log('-- err:', err);
      //       res.status(500).send('Error saving data in DB');
      //     }
      //     else
      //       res.status(200).send('Data successfully saved to DB');
      //   }
      // );
      console.log(req.body);
    } else
      next();
  }
  else
    res.status(400).send("Request body did not contain required data :(");
});
app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});