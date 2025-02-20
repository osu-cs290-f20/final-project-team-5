let colorButtons = document.querySelector('div.color-option-buttons');

let timerInterval;
let timing;

// simple random number between 1 and provided number for sides of dice
function rollDie(sides) {
    return Math.ceil((sides - 1) * Math.random());
}

// starts a timer that counts down for the provided number of minutes
function timer(min) {
    let startTime = Date.now();

    timerInterval = setInterval(startTimer, 1000);
    timing = true;

    function startTimer() {
        let dateVar = new Date();
        let time = dateVar.getTime();
        console.log(60 * min - Math.floor((time - startTime) / 1000));
    }
}

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