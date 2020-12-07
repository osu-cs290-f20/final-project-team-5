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