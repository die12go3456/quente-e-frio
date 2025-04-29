let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background('purple');
  x = x + random(-20,20);
  y = y + random(-20,20);
  if (x >  400) {
    x = 400;
  }
  if (x < 0) {
    x = 0;
  }
  distancia = dist(mouseY,mouseY,x,y);
  circle(mouseX,mouseY,distancia);
   circle(x, y, 10);
  
  if(distancia < 3) {
    text('encontrei!', 200, 200);
    noLoop();
  }
}
