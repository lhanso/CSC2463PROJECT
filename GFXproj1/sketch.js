function setup() {
  createCanvas(350, 800);
  colorMode(RGB);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  noStroke();
  fill(75,255,75);
  rect(0,0,400,200);
  stroke(0);
  fill(255,255,255);
  circle(100,100,100);
  square(200,50,100);

  noStroke();
  fill(255,255,255);
  rect(0,200,400,200);
  fill(255,0,0,150);
  circle(175,260,100);
  fill(0,0,255,150);
  circle(140,325,100);
  fill(0,255,0,150);
  circle(210,325,100);

  noStroke();
  fill(0);
  rect(0,400,400,200);
  fill('yellow');
  arc(100,475,75,75,-140,140);
  fill('red');
  arc(225,475,75,75,-180,0);
  rect(187.5,475,75,37);
  fill('white');
  circle(210,475,20);
  circle(240,475,20);
  fill('blue');
  circle(210,475,12);
  circle(240,475,12);

  noStroke();
  fill(0,0,80);
  rect(0,600,400,200);
  stroke(255);
  strokeWeight(3);
  fill('green');
  circle(175,700,100);
  fill('red');
  beginShape();
    vertex(125,685);
    vertex(160,685);
    vertex(175,650);
    vertex(190,685);
    vertex(225,685);
    vertex(200,705);
    vertex(205,740);
    vertex(175,720);
    vertex(145,740);
    vertex(155,705);
    vertex(125,685);
  endShape(close);
}
