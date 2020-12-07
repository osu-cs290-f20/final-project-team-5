let colorButtons = document.querySelector('div.color-option-buttons');

let timerInterval;
let timing;


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