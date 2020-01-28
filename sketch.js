let x = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  rect(x, 40, 100, 100);
  x = x +1;
  
  if(x > width) {
    
    x = 0
  }
  

  
}
