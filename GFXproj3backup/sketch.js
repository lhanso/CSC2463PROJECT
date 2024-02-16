let sprite;

function preload() {
  sprite = new Sprite(200,200,80,80);
  sprite.spriteSheet = 'assets/SpelunkyGuy.png';
  let animations = {
    stand: { row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames:8},
    walkUp: {row: 5,frames: 6},
    walkDown: {row: 5, col: 6, frames:6}
  };
  sprite.anis.frameDelay = 8;
  sprite.addAnis(animations);
  sprite.changeAni('stand');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (kb.pressing('d')){
    walkRight();
  }else if (kb.pressing('a')){
    walkLeft();
  }else {
    stop();
  }


  if (sprite.x + sprite.width/4 > width){
    sprite.changeAni('stand');
    sprite.vel.x = 0;
    sprite.x--;
  }else if (sprite.x - sprite.width/4 < 0){
    sprite.changeAni('stand');
    sprite.vel.x = 0;
    sprite.x++;
  }
}
function walkRight(){
  sprite.changeAni('walkRight');
  sprite.vel.x = 1;
  sprite.vel.y = 0;
  sprite.scale.x = 1;
}
function walkLeft(){
  sprite.changeAni('walkRight');
  sprite.vel.x = -1;
  sprite.vel.y = 0;
  sprite.scale.x = -1;
}
function stop(){
  sprite.changeAni('stand');
  sprite.vel.x = 0;
  sprite.vel.y = 0;
}
function keyTypedOld() {
  switch(key) {
    case 'd':
      walkRight();
      break;
    case 'a':
      walkLeft();
      break;
  }
}