

// Setting up canvas in the browser.
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
let tx = window.innerWidth;
let ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;


// Declaring the variables and adding event listener for the mouse positions.
let mouseX = 0;
let mouseY = 0;

addEventListener('mousemove', function(event){
    mouseX = event.clientX
    mouseY = event.clientY
});


// Setting global variables
let grav = 0.99;
c.strokeWidth = 5;



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
    this.x = Math.random() * (tx - this.radius * 2) + this.radius;
    this.y = Math.random() * (ty - this.radius);
    this.dx = Math.random((Math.random() - 0.5) * 10);
    this.dy = Math.random() * 2;
    this.vel = Math.random() / 5;
    this.update = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();
    };
}

// Setting up the for loop
let bal = [];
for (let i=0; i<40; i++){
    bal.push(new Ball());
}

// The Ball Animation!!! POV : I don't understand this one.

function animate() {    
    if (tx != window.innerWidth || ty != window.innerHeight) {
      tx = window.innerWidth;
      ty = window.innerHeight;
      canvas.width = tx;
      canvas.height = ty;
    }
    requestAnimationFrame(animate);
    c.clearRect(0, 0, tx, ty);
    for (let i = 0; i < bal.length; i++) {
      bal[i].update();
      bal[i].y += bal[i].dy;
      bal[i].x += bal[i].dx;
      if (bal[i].y + bal[i].radius >= ty) {
        bal[i].dy = -bal[i].dy * grav;
      } else {
        bal[i].dy += bal[i].vel;
      }    
      if(bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0){
          bal[i].dx = -bal[i].dx;
      }
      if(mouseX > bal[i].x - 20 && 
        mouseX < bal[i].x + 20 &&
        mouseY > bal[i].y -50 &&
        mouseY < bal[i].y +50 &&
        bal[i].radius < 70){
          //bal[i].x += +1;
          bal[i].radius +=5; 
        } else {
          if(bal[i].radius > bal[i].startradius){
            bal[i].radius += -5;
          }
        }
        
      //forloop end
      }
  //animation end
  }
  
  animate();
  
  setInterval(function() {
    bal.push(new Ball());
    bal.splice(0, 1);
  }, 400);


































