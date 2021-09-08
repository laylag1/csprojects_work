function setup() {
  createCanvas(400, 400);
  background(0);
}

let x = 100;
let y = 100;
let w = 49;

function draw() {


  if(w>width-50){
    w++;
  }else if(w<width-50){
    w--;
  }

  fill(255,0,0);
  ellipse(mouseX, mouseY, w, w);


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
