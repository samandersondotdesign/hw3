function setup() {
  createCanvas(400, 400);
}

var rate = 0.1;
var x = mouseX;
var target = 100;

function draw() {
  ellipse(x, mouseY, 15, 15);
  x = target*rate + x*(1-rate); 
}
