// simple random number between 1 and provided number for sides of dice
function rollDie(sides) {
    return Math.ceil((sides - 1) * Math.random());
}

// starts a timer that counts down for the provided number of minutes
function timer(min, doThing) {
    let startTime = Date.now();

    let timerInterval = setInterval(startTimer, 1000);

    function startTimer() {
        let dateVar = new Date();
        let time = dateVar.getTime();

        timeLeft = Math.ceil(60 * min) - Math.floor((time - startTime) / 1000);

        if (timeLeft === 0)
            clearInterval(timerInterval);

        doThing(timeLeft);
    }
}

//this is the javaScript for the point counter. We may need to add 3 more of these for each player, since it think having 4 of the same one might result in player 3s add score button addding points to everybodies score.
let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('.score');

btnAdd.addEventListener('click', ()=>{
    input.value = parseInt(input.value) + 100;
});

btnSubtract.addEventListener('click', ()=>{
    input.value = parseInt(input.value) - 100;
});