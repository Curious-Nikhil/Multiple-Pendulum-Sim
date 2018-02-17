function Pendulum(r1, r2, a1, a2, m1, m2) {
  this.x1 = 0;
  this.y1 = 0;
  this.a1 = a1;
  this.a2 = a2;
  this.m1 = m1;
  this.m2 = m2;
  this.r1 = r1;
  this.r2 = r2;
}

Pendulum.prototype.move = function() {
  this.x1 = this.r1 * sin(this.a1)
  this.y1 = this.r1 * cos(this.a1)

  this.a1+=0.1;
}

Pendulum.prototype.show = function() {
  line(0, 0, this.x1, this.y1);
  ellipse(this.x1, this.y1, this.m1, this.m2);
}

function Planet(r, angle) {
  this.x = cx;
  this.y = cy;
  this.r = r;
  this.angle = angle;
}
