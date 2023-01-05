
// Setting global variables
let gravity = 0.99;
dimension.strokeWidth = 5; // check for bugs


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


// Setting the RGBA color for the balls
function randomColor (){
    return(
        'rgba(' + Math.round(Math.random() * 250) +
         ',' + 
         Math.round(Math.random() * 250) +
         ',' +
         Math.round(Math.random() * 250)+
         ',' +
         console.log(Math.ceil(Math.random() * 10)/ 10)  +
         ')'
    
    );
};


// Setting up the constructor function for the ball object!
function Ball(){
    this.color = randomColor();
    this.radius = Math.random() * 20 + 14;
    this.startRadius = this.radius;
    this.xcoordinate = Math.random() * (mainWidth - this.radius * 2) + this.radius;
    this.ycoordinate = Math.random() * (mainHeight - this.radius);
    this.dx = Math.random((Math.random() - 0.5) * 10);
    this.dy = Math.random() * 2;
    this.vel = Math.random() / 5;
    this.update = function() {
        dimension.beginPath();
        dimension.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        dimension.fillStyle = this.color;
        dimension.fill();
    };
}



































