let menuAbierto = false;

let ayudaX;
let ayudaAncho;

function setupFondo() {
  textSize(12);

  ayudaX = textWidth(" ☻  Тоска  Archivo  Edición  Visualización  Ir  Ventana  ");
  ayudaAncho = textWidth("Ayuda");
}

function dibujarFondo() {

  let distancia = 18.9;

  // Fondo blanco
  background(255);

  // Color del interior
  fill(200, 220, 255);
  noStroke();
  rect(0, distancia, 600, 400 - distancia);

  // Línea divisoria
  stroke(0);
  strokeWeight(1);
  line(0, distancia, 600, distancia);

  // Barra superior
  fill(0);
  noStroke();
  textSize(12);
  textAlign(LEFT, BASELINE);

  text(" ☻  Тоска  Archivo  Edición  Visualización  Ir  Ventana  Ayuda", 0, 15);

  // Menú de Ayuda
  if (menuAbierto) {

    fill(245);
    stroke(100);
    strokeWeight(1);

    rect(ayudaX, 20, 245, 100, 5);

    fill(0);
    noStroke();
    textSize(12);
    textAlign(LEFT, TOP);

    text(
      "¡Ayuda a Тоска a llegar al otro lado! Usa las flechas de izquierda y derecha para controlar su dirección y la barra espaciadora para saltar.",
      ayudaX + 10, 30, 225, 85
    );

    textAlign(LEFT, BASELINE);
  }
}

// Detectar clic en Ayuda
function gestionarClickAyuda() {

  if (escena !== "escritorio") return;

  let inicioTexto = " ☻  Тоска  Archivo  Edición  Visualización  Ir  Ventana  ";

  textSize(12);

  let xAyuda = textWidth(inicioTexto);
  let anchoAyuda = textWidth("Ayuda");

  if (
    mouseX >= xAyuda &&
    mouseX <= xAyuda + anchoAyuda &&
    mouseY >= 0 &&
    mouseY <= 19
  ) {
    menuAbierto = !menuAbierto;
  }
}

