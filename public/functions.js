rollDiceButton = document.getElementsByClassName("roll-button")

rollDiceButton.addEventListener('click', ()=>{
    var rolledDice = document.getElementsByClassName("roll-results"); 
 //math.floor makes sure math.random doesnt return a decimal
    var d1 = Math.floor(Math.random() * 6) + 1;
    rolledDice.innerHTML = d1
    
 })

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