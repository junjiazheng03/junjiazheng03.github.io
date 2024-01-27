// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let images = document.querySelectorAll('img');

images.forEach(function(image) {
    image.addEventListener("click", function () {
        prompt("Ouch! Stop poking me! Now you have to tell me your favorite number: ");
        alert("I dare you to touch the button below me.");
    });
});

function myFunction() {
    alert("that does absolutely nothing...");
}


