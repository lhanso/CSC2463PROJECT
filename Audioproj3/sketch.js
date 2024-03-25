let synth = new Tone.MonoSynth(Tone.Synth);
let bend = new Tone.PitchShift ();
bend.pitch = 10;
synth.connect(bend);
bend.toDestination();
const now = Tone.now();

function preload(){
  coin = loadImage ('assets/coin.jpg')
}

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  if (mouseIsPressed ===true){
    background(coin);
  } else if (mouseIsPressed === false){
    background (240);
    text ('press mouse', 150, height/3);
  }
}

   
//Your assignment needs to use objects from Tone.js not preexisitng sound files!
function mousePressed() { 
  synth.triggerAttackRelease("A5", "8n",now)
  synth.triggerAttackRelease("A6", "8n", now + 0.1)
}

function mouseReleased() {
  synth.noteRelease();
}

