// Definir un arreglo para almacenar los elementos en movimiento
let elements = [];

function setup() {
  // Crear un lienzo canvas del tamaño de la ventana
  let cnv = createCanvas(windowWidth, windowHeight);
  // Colocar el lienzo dentro del elemento con id "body" en el HTML
  cnv.parent("body");
  
  // Generar 1000 elementos y agregarlos al arreglo "elements"
  for (let i = 0; i < 1000; i++) {
    elements.push(new Element(random(width), random(height)));
  }
  
  // Configurar el modo de mezcla para efectos visuales
  blendMode(SCREEN);
}

function draw() {
  // Limpiar el lienzo en cada cuadro para actualizar la animación
  clear();
  
  // Iterar sobre cada elemento en el arreglo "elements"
  for (let element of elements) {
    // Mover el elemento
    element.move();
    // Mostrar el elemento en su nueva posición
    element.display();
  }
}

// Definir una clase para los elementos en movimiento
class Element {
  constructor(x, y) {
    // Posición inicial del elemento
    this.x = x;
    this.y = y;
    // Tamaño del elemento
    this.size = random(10, 30);
    // Velocidad en las direcciones X e Y
    this.xSpeed = random(-0.1, 0.1);
    this.ySpeed = random(-0.1, 0.1);
    // Color semi-transparente en tonos rosados y violetas
    this.c = color(random(0, 255), 50);
  }
  
  // Función para actualizar la posición del elemento
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    // Rebotar el elemento si alcanza los límites del lienzo
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
  }

  // Función para mostrar el elemento en el lienzo
  display() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.size);
  }
}
