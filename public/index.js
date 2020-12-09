// testing server requests
function sendDataToDB(sendData) {
    let request = new XMLHttpRequest();

    let reqURL = '/sendData';
    request.open('POST', reqURL);

    let reqBody = JSON.stringify(sendData);

    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function (event) {
        if (event.target.status === 200) {
            // implement data client-side            
        }
        else
            alert('Error sending data to server: ' + event.target.response);
    });

    request.send(reqBody);
}


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
    if (numPlayers == 1) {
        numPlayers = "one";
    }
    if (numPlayers == 2) {
        numPlayers = "two";
    }
    if (numPlayers == 3) {
        numPlayers = "three";
    }
    if (numPlayers == 4) {
        numPlayers = "four";
    }
    console.log(numPlayers);

    // Check if timer on or off
    let timerRadio = document.querySelector('input[name="Timer"]:checked');
    if (timerRadio.value === 'yes')
        toggleTimer = true;
    else
        toggleTimer = false;
    console.log(timerRadio);
    console.log(toggleTimer);

    // Check if point counter on or off
    let pointRadio = document.querySelector('input[name="Points"]:checked');
    if(pointRadio.value === 'yes')
        ptCounter = true;
    else
        ptCounter = false;
    console.log(pointRadio);
    console.log(ptCounter);
    
    // Check if dice counter on or off
    let diceRadio = document.querySelector('input[name="Dice"]:checked');
    if(diceRadio.value === 'yes')
        gameDice = true;
    else
        gameDice = false;
    console.log(diceRadio);
    console.log(gameDice);

    let pageData = {
        players: numPlayers,
        timer: toggleTimer,
        points: null,
        dice: null,
        color: styleColor
    };
    // timer(/* float input for number of minutes */ 1, function (num) {
    //     // num is number of seconds left in the timer
    //     console.log('Time Left: ' + Math.floor(num / 60) + ':' + num % 60);
    // });
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

// Close button
var span = document.getElementsByClassName("close")[0];

// Array that store given usernames in the same index as urls
var givenUsernames = [];

// Array that stores given urls in the same index as usernames
var givenURLs = [];

// When the user clicks the button, open the modal 
btn.onclick = function () {

    //Clear input boxes before opening modal
    for(var i = 0; i < 4; i++){
        username[i].value = "";
        pictureURL[i].value = "";
    }

    // Clear arrays in case users want to re-enter usernames and images
    // In case user also wants to change amount of players entered
    givenUsernames = [];
    givenURLs = [];

    modal.style.display = "block";
    console.log("==entered here");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, give alert
window.onclick = function (event) {
    if (event.target == modal) {
        alert("Please Fill Out");
    }
}

// Store Username and URL's here!!!
submitInfo.onclick = function () {
    //Check for at least one input
    if(username[0].value == "" || username[0].value == null) 
        alert("Please fill in.");
    else{
    //Grab current amount of players entered + turn into int
        var checker = parseInt(document.getElementById("players").value);

        //Check value
        console.log(checker);

        // Check to see if empty array
        if(givenUsernames.length == 0 || givenUsernames === undefined){

            // Loops depending on how many players the user has inputted
            for(var i = 0; i < checker; i++){

                // Push into array!
                givenUsernames.push(username[i].value);
                givenURLs.push(pictureURL[i].value);

            }
        }

        console.log(givenUsernames);
        console.log(givenURLs);

        modal.style.display = "none";
        console.log("==test here");
    }
}