let soundFX = new Tone.Players ({
    Select : "assets/Select.mp3",
    dead : "assets/dead.mp3",
    Cursor : "assets/CursorMove.mp3",
    Back : "assets/Back.mp3"
  });

let delAmt = new Tone.FeedbackDelay ("8n", 0.5);

let button1,button2,button3,button4,delaySlider;

soundFX.connect(delAmt);
delAmt.toDestination();

function setup() {
  createCanvas(300, 350);

  button1 = createButton('Boop');
  button1.position (75,165);
  button1.mousePressed(() =>soundFX.player ('Back').start());

  button2 = createButton('Swish');
  button2.position (175,165);
  button2.mousePressed(() =>soundFX.player ('Select').start());

  button3 = createButton('Tick');
  button3.position (80,265);
  button3.mousePressed(() =>soundFX.player ('Cursor').start());

  button4 = createButton('Fwoosh');
  button4.position (170,265);
  button4.mousePressed(() =>soundFX.player ('dead').start());

  delaySlider = createSlider(0,1,0,0.05);
  delaySlider.position(85,75);
  delaySlider.mouseMoved(() => delAmt.delayTime.value = delaySlider.value());
}



function draw() {
  background(220);
  fill("red");
  rect(50,150, 100, 50);
  fill("orange");
  rect(150,150, 100, 50);
  fill("yellow");
  rect(50,250, 100, 50);
  fill("magenta");
  rect(150,250, 100, 50);
  fill('white');
  rect(100,15,100,35);
  fill("black");
  text("Simple Sampler", 110, 35);
  text('drag slider for delay', 95,110)
  text("click buttons for sound!", 85,345);
}
