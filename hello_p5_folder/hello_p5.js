function setup() {
  createCanvas(400, 400);
  background(0);
}

let x = 100;
let y = 100;
let w = 50;

function draw() {

  fill(255,0,0);
  ellipse(mouseX, mouseY, w, 50);

  if(w>width-100){
    w--;
  }else if(w<100){
    w++;
  }


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
