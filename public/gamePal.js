
//this is the javaScript for the point counter. If need to move  to wherever you want.
let btnAdd = document.querySelectorAll('.addPointsButton');
let btnSubtract = document.querySelectorAll('.deductPointsButton');
let input = document.querySelector('.score-box');

// Header
var headerLink = document.getElementsByClassName("site-title")[0];

btnAdd.forEach(function () {
    this.addEventListener('click', () => {
        input.value = parseInt(input.value) + 100;
    })
});

btnSubtract.forEach(function () {
    this.addEventListener('click', () => {
        input.value = parseInt(input.value) - 100;
    })
});

// Redirect back to options when click header
headerLink.onclick = function() {
    window.location = "/";
}