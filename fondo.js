
function dibujarFondo() {
  push ();

  let distancia = 18.9;

  // Color del interior
  fill(200, 220, 255);

  // Quitar el contorno del rectángulo
  noStroke();

  // Rectángulo debajo de la línea
  rect(0, distancia, 600, 400 - distancia);

  // Dibujar la línea
  stroke(0);
  strokeWeight(1);
  line(0, distancia, 600, distancia);

  //Texto
  text (" ☻  Тоска  Archivo  Edición  Visualización  Ir  Ventana  Ayuda", 0, 15);
pop ();
}