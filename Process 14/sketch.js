let numCircles = 50;
let circles = [];

function setup() {
  createCanvas(800, 600);
  background(255);

  // Inicializamos los círculos con tamaños y posiciones aleatorias
  for (let i = 0; i < numCircles; i++) {
    let x = random(width);
    let y = random(height);
    let diameter = random(20, 50);
    let xSpeed = random(1, 3);
    let ySpeed = random(1, 3);
    circles[i] = new Circle(x, y, diameter, xSpeed, ySpeed);
  }
}

function draw() {
  noStroke();
  for (let i = 0; i < numCircles; i++) {
    let currentCircle = circles[i];
    currentCircle.move();

    for (let j = 0; j < numCircles; j++) {
      if (i != j) {
        let otherCircle = circles[j];
        let distance = dist(currentCircle.x, currentCircle.y, otherCircle.x, otherCircle.y);

        if (distance < (currentCircle.diameter + otherCircle.diameter) / 2) {
          let gray = map(distance, 0, (currentCircle.diameter + otherCircle.diameter) / 2, 0, 255);
          fill(gray);
          ellipse(currentCircle.x, currentCircle.y, distance, distance);
        }
      }
    }
  }
}

class Circle {
  constructor(x, y, diameter, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }
}
