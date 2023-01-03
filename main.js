
// Setting up canvas in the browser.
let canvas = document.getElementById('canvas');
let dimension = canvas.getContext('2d');
let mainWidth = window.innerWidth;
let mainHeight = window.innerHeight;
canvas.width = mainWidth;
canvas.height = mainHeight;


// Declaring the variables and adding event listener for the mouse positions.
let mouseX;
let mouseY;

addEventListener('mousemove', function(event){
    mouseX = event.clientX
    mouseY = event.clientY
});

let grav = 0.99;






























