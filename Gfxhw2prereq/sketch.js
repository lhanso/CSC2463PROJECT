let red;
let orange;
let yellow;
let green;
let cyan;
let blue;
let magenta;
let brown;
let white;
let black;
let x;
let y;
const size = 100;


function setup() {
  createCanvas(400, 400);
  purple = color('purple');
  yellow = color('yellow');
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);

  if(mouseIsPressed){
    if(mouseX >= x && mouseX <= x + size && mouseY >= y && mouseY <= y + size){
      fill(purple);
      stroke(yellow);

      x += mouseX - pmouseX;
      y += mouseY - pmouseY;
    }
  }
  else {
    fill(yellow);
    stroke(0);
  }
  square(x,y,size);

}

function mousePressed() {
  if(mouseX >= x && mouseX <= x + size && mouseY >= y && mouseY <= y + size){
    dragging = true;
  }
}
  
function mouseReleased(){
    dragging = false;
}

function mouseDragged(){
  if(dragging){
    x += mouseX - pmouseX;
    y += mouseY - pmouseY;
  }

}