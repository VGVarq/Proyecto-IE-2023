let img;

function preload() {
  img = loadImage('Valpo.jpg');  
}

function setup() {
  createCanvas(img.width*2, img.height);
  image(img, 0, 0);  // Dibuja la imagen en el lienzo en el lado izquierdo
  for (let i = 0; i < img.width; i++) {
    let c = img.get(i, img.height / 2);
    stroke(c);
    line(i, height / 1.5, i, height);
  }

  cursor(CROSS);
}

function draw() {
  if (mouseIsPressed && mouseX >= 0 && mouseX <= img.width && mouseY >= 0 && mouseY <= img.height) {
    
    // obtengo el color del canvas a partir de las coordenadas del mouse
    let c = get(mouseX, mouseY)

    // Configura el color y dibuja el rectángulo en el lado derecho
    fill(c);
    noStroke();
    rect(img.width, 0, img.width, img.height);
  }
}
