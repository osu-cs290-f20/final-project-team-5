let colorButtons = document.querySelector('div.color-option-buttons');

// Location of Confirm Button
let confirmButton = document.querySelector('button.accept-button');

// Variables to store
let numPlayers;
let toggleTimer;
let ptCounter;
let gameDice;
let styleColor;

// set default color choice
document.querySelector('.color-button.green').style.border = '5px solid white';
styleColor = 'green';

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
});

/*
* Confirm Button
* Store Data Here + Re-direct to new Game Pal page
*/
confirmButton.addEventListener('click', function (event) {

    // Store Number of players
    numPlayers = document.getElementById("players").value;

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

    //Not sure about style...
    // idk, just thinking about how to deal with color choice
    switch (styleColor) {
        case 'green':
            break;
        case 'blue':
            break;
        case 'yellow':
            break;
        case 'black':
            break;
        case 'white':
            break;
        case 'purple':
            break;

        default:
            break;
    }
    console.log(styleColor);

    timer(/* float input for number of minutes */ 1, function (num) {
        // num is number of seconds left in the timer
        console.log('Time Left: ' + Math.floor(num / 60) + ':' + num % 60);
    });
});