let currentColor, red, orange, yellow, green, cyan, blue, magenta, brown, black, white;

function setup() {
  createCanvas(800, 800);
  background(255);
  currentColor = 0;
  red = new colorSelect(0, "red");
  orange = new colorSelect(50,"orange");
  yellow = new colorSelect(100,"yellow");
  green = new colorSelect(150,"green");
  cyan = new colorSelect(200,"cyan");
  blue = new colorSelect(250,"blue");
  magenta = new colorSelect(300,"magenta");
  brown = new colorSelect(350,"brown");
  white = new colorSelect(400,"white");
  black = new colorSelect(450, "black");
}

function draw() {
  fill("grey");
  rect(0,500,49,300);
  fill("black");
  text("no", 17, 550);
  text("drawing", 3,600);
  text("in", 17,650);
  text("here", 12, 700);
  text(":)",17,750);
  fill(0);
  if(mouseIsPressed){
    if(mouseX>51){
      drawing();
    }
  }

  red.appear();
  red.onMousePressed();
  orange.appear();
  yellow.appear();
  green.appear();
  cyan.appear();
  blue.appear();
  magenta.appear();
  brown.appear();
  white.appear();
  black.appear();
}

class colorSelect{
  constructor(y, color){
    this.x = 0;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.color = color;
  }
  appear(){
    push();
    
    if(this.color != "white"){
      noStroke();
    }

    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  onMousePressed(){
    if(mouseIsPressed){
      if(mouseX < 50){
        if(mouseY>0 && mouseY < 50){
          currentColor = "red";
        }
        else if(mouseY>50 && mouseY <100){
          currentColor = "orange";
        }
        else if(mouseY>100 && mouseY<150){
          currentColor = "yellow";
        }
        else if(mouseY>150 && mouseY< 200){
          currentColor = "green";
        }
        else if(mouseY>200 && mouseY<250){
          currentColor = "cyan";
        }
        else if(mouseY>250 && mouseY<300){
          currentColor = "blue";
        }
        else if(mouseY > 300 && mouseY<350){
          currentColor = "magenta";
        }
        else if(mouseY>350 && mouseY<400){
          currentColor = "brown";
        }
        else if(mouseY>400 && mouseY<450){
          currentColor = "white";
        }
        else if(mouseY>450 && mouseY<500){
          currentColor = "black";
        }
      }
    }
  }
}


function drawing(){
  push();
  stroke(currentColor);
  strokeWeight(10);
  line(pmouseX, pmouseY, mouseX, mouseY);
  pop();
}
function mousePressed(){
  
}