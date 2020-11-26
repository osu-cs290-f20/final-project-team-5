let colorButtons = document.querySelector('div.color-option-buttons');

function rollDie(sides) {
    return Math.ceil((sides - 1) * Math.random());
}

function timer(min) {
    let count;
    function addSeconds() {
        console.log('time:', Math.floor(count / 60) + ':' + count % 60);
    }
            
}

colorButtons.addEventListener('click', function (event) {
    let target = event.target;

    console.log(rollDie(20));

    timer(1);
});