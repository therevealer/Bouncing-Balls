
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

// Setting global varaibles
let gravity = 0.99;
dimension.strokeWidth = 5; 


// Setting the RGBA function for the balls
function randomColor (){
    return(
        'rgba(' + math.random() * 250 +
         ',' + 
         math.random() * 250 +
         ',' +
         math.random() * 250 +
         ',' +
    
    )
}






























