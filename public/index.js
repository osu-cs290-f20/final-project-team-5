let colorButtons = document.querySelector('div.color-option-buttons');

// Location of Confirm Button
let confirmButton = document.querySelector('button.accept-button');

let timerInterval;
let timing;

// Variables to store
let numPlayers;
let toggleTimer;
let ptCounter;
let gameDice;
let styleColor;

// used to test functions on click of any button
colorButtons.addEventListener('click', function (event) {
    let target = event.target;

    // console.log(rollDie(20));

    if (timing === true) {
        clearInterval(timerInterval);
        timing = false;
    }
    else
        timer(1);
});

/*
* Confirm Button
* Store Data Here + Re-direct to new Game Pal page
*/
confirmButton.addEventListener('click', function (event) {

	// Store Number of players
	numPlayers = document.getElementById("players").value;

	// Check if timer on or off
	if(document.getElementById("timer-yes").checked) {
		toggleTimer = document.getElementById("timer-yes").value;
	}
	else if(document.getElementById("timer-no").checked) {
		toggleTimer = document.getElementById("timer-no").value;
	}

	// Check if point counter on or off
	if(document.getElementById("points-yes").checked) {
		ptCounter = document.getElementById("points-yes").value;
	}
	else if(document.getElementById("points-no").checked) {
		ptCounter = document.getElementById("points-no").value;
	}

	// Check if dice counter on or off
	if(document.getElementById("dice-yes").checked) {
		gameDice = document.getElementById("dice-yes").value;
	}
	else if(document.getElementById("dice-no").checked) {
		gameDice = document.getElementById("dice-no").value;
	}

	//Not sure about style...
	
});