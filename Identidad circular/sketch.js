let numLoopsSlider;
let speedSlider;
let angleIncrement = 0.1; // Variable para el incremento del ángulo
let numLoops = 100; // Número de vueltas inicial
let speed = 0.02; // Velocidad inicial

function setup() {
  createCanvas(windowWidth, windowHeight);
  numLoopsSlider = createSlider(1, 500, numLoops); // Crea un slider para la cantidad de vueltas
  numLoopsSlider.position(10, height + 10);
  numLoopsSlider.style('width', '380px');

  speedSlider = createSlider(0.01, 0.1, speed); // Crea un slider para la velocidad
  speedSlider.position(10, height + 40);
  speedSlider.style('width', '380px');

  translate(width / 2, height / 2);
}

function draw() {
  background(220);
  noFill();
  stroke(0);
  translate(width / 2, height / 2);

  numLoops = numLoopsSlider.value(); // Obtiene el valor actual del slider de vueltas
  speed = speedSlider.value(); // Obtiene el valor actual del slider de velocidad

  beginShape();
  for (let i = 0; i < numLoops; i++) {
    let radius = i * 10;
    let x = cos(angleIncrement * i) * radius;
    let y = sin(angleIncrement * i) * radius;
    vertex(x, y);
  }
  endShape();

  angleIncrement += speed; // Aumenta el ángulo en función de la velocidad
}
