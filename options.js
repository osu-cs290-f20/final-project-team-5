let colorButtons = document.querySelector('div.color-option-buttons');

function rollDie(sides) {
    return Math.ceil((sides - 1) * Math.random());
}

function timer(min) {
    let count;

    let startTime = Date.now();

    let interval = setInterval(intervalTimer, 1000);

    function intervalTimer() {
        let dateVar = new Date();
        let time = dateVar.getTime();
        console.log(Math.floor((time - startTime) / 1000));
        console.log('time:', Math.floor(count / 60) + ':' + count % 60);
    }
}

colorButtons.addEventListener('click', function (event) {
    let target = event.target;

    console.log(rollDie(20));

    timer(1);
});