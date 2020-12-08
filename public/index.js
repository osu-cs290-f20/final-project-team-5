let colorButtons = document.querySelector('div.color-option-buttons');

//Location of option container

let optionContainer = document.getElementsByClassName('option-container');
// Location of Confirm Button
let confirmButton = document.querySelector('button.accept-button');

// Variables to store
let numPlayers;
let toggleTimer;
let ptCounter;
let gameDice;
let styleColor;
let currentColor = optionContainer[0].classList[1];

// set default color choice
document.querySelector('.color-button.orange').style.border = '5px solid white';
styleColor = 'orange';


// used to test functions on click of any button
colorButtons.addEventListener('click', function (event) {
    let target = event.target;
    let buttons = event.currentTarget.childNodes;


    for (let i = 3; i < buttons.length; i += 2) {
        if (buttons[i].style.border = '5px solid white')
            buttons[i].style.border = '2px solid black';
    }
    target.style.border = '5px solid white';
    styleColor = target.textContent;
	optionContainer[0].classList.remove(currentColor);
	optionContainer[0].classList.add(styleColor);
	currentColor = styleColor;

});

/*
* Confirm Button
* Store Data Here + Re-direct to new Game Pal page
*/
confirmButton.addEventListener('click', function (event) {

    // Store Number of players
    numPlayers = document.getElementById("players").value;
	//Switch wouldn't work for some reason.
    if(numPlayers == 1){
		numPlayers = "one";
	}
	if(numPlayers == 2){
		numPlayers = "two";
	}
	if(numPlayers == 3){
		numPlayers = "three";
	}
	if(numPlayers == 4){
		numPlayers = "four";
	}
	
    // Check if timer on or off
    if (document.getElementById("timer-yes").checked) {
        toggleTimer = document.getElementById("timer-yes").value;
    }
    else if (document.getElementById("timer-no").checked) {
        toggleTimer = document.getElementById("timer-no").value;
    }

    // Check if point counter on or off
    if (document.getElementById("points-yes").checked) {
        ptCounter = document.getElementById("points-yes").value;
    }
    else if (document.getElementById("points-no").checked) {
        ptCounter = document.getElementById("points-no").value;
    }

    // Check if dice counter on or off
    if (document.getElementById("dice-yes").checked) {
        gameDice = document.getElementById("dice-yes").value;
    }
    else if (document.getElementById("dice-no").checked) {
        gameDice = document.getElementById("dice-no").value;
    }
    
    console.log(numPlayers);
    document.cookie = "numPlayers=" + numPlayers + " expires=Thu, 10 Dec 2020 12:00:00 UTC; path =/";
    document.cookie = "timer=" + toggleTimer + " expires=Thu, 10 Dec 2020 12:00:00 UTC; path =/";
    document.cookie = "points=" + ptCounter + " expires=Thu, 10 Dec 2020 12:00:00 UTC; path =/";
    document.cookie = "gameDice=" + gameDice + " expires=Thu, 10 Dec 2020 12:00:00 UTC; path =/";
	document.cookie = "color=" + currentColor + " expires=Thu, 10 Dec 2020 12:00:00 UTC; path =/";
	
    timer(/* float input for number of minutes */ 1, function (num) {
        // num is number of seconds left in the timer
        console.log('Time Left: ' + Math.floor(num / 60) + ':' + num % 60);
    });
});




/*
* Javascript written for the modal in options.html
* Player Info
    *** Still working on but feel free to edit... or trash it.***
*/

// Modal
var modal = document.getElementById("myModal");

// Player Info Button
var btn = document.querySelector("button.playerInfo");

// Submit Button
var submitInfo = document.getElementById("submitBtn");

var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    console.log("==entered here");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, give alert
window.onclick = function(event) {
    if (event.target == modal) {
        alert("Please Fill Out");
    }
}

// Store Username and URL's here!!!
submitInfo.onclick = function() {

    modal.style.display = "none";
    console.log("==test here");
}