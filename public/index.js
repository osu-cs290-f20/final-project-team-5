let colorButtons = document.querySelector('div.color-option-buttons');
let confirmOptions = document.querySelector('button.accept-button');

// choose game color palette
let colorChoice;
colorButtons.addEventListener('click', function (event) {
    let target = event.target;
    let buttons = event.currentTarget.childNodes;

    for (let i = 3; i < buttons.length; i += 2) {
        if (buttons[i].style.border = '5px solid white')
            buttons[i].style.border = '2px solid black';
    }
    target.style.border = '5px solid white';
    colorChoice = target.textContent;
});

let players = document.
confirmOptions.addEventListener('click', function (event) {
    // idk, just thinking about how to deal with color choice
    switch (colorChoice) {
        case green:
            break;
        case blue:
            break;
        case yellow:
            break;
        case black:
            break;
        case white:
            break;
        case purple:
            break;

        default:
            break;
    }
});