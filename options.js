let colorButtons = document.querySelector('div.color-option-buttons');

let timerInterval;
let timing;

function rollDie(sides) {
    return Math.ceil((sides - 1) * Math.random());
}

function timer(min) {
    let count;

    let startTime = Date.now();

    timerInterval = setInterval(startTimer, 1000);
    timing = true;

    function startTimer() {
        let dateVar = new Date();
        let time = dateVar.getTime();
        console.log(Math.floor((time - startTime) / 1000));
    }
}

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