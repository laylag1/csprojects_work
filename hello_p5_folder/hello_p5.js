function setup() {
  createCanvas(400, 400);
}

let x = 100;
let y = 100;

function draw() {
  background(0);
  fill(255,0,0);
  ellipse(mouseX, mouseY, 50, 50);


  for(let i=0; i<10; i++){
    fill(random(256),random(256),random(256));
    let x1 = random(0,width);
    let y1 = random(0,height);
    rect(x1,y1,50,50);
  }
}

function mousePressed(){
  fill(random(256),random(256),random(256));
  ellipse(100,100,50,50);
}
