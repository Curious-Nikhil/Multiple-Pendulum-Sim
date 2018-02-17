var p1;

function setup() {
  createCanvas(600, 600);
  //r1, r2, a1, a2, m1, m2 200, 200, PI/8, PI/4, 20
  p1 = new Pendulum(200, 200, PI / 8, PI / 4, 20);
  
}

function draw() {
  background(10);
  translate(300, 50);

  p1.show();
  p1.move();
}
