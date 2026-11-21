let ESCALA_CARPETA = 0.3;
let ESCALA_ABIERTA = 0.8;

function dibujarLibro (x,y) {
  push ();
  translate (x-200, y - 100);
//LIBRO
   // Borde del recuadro
  fill(255, 0, 64);
  stroke(0);
  strokeWeight(1);
  rect(200, 100, 140, 160);

// Portada izquierda
  fill(45, 90, 150);
  stroke(0);
  strokeWeight(2);
  quad(215, 145, 270, 155, 270, 225, 215, 215);

  // Portada derecha
  fill(45, 90, 150);
  quad(270, 155, 325, 145, 325, 215, 270, 225);

   // Páginas izquierdas
  fill(255);
  quad(218, 148, 269, 158, 269, 219, 218, 210);

  // Páginas derechas
  fill(255);
  quad(271, 158, 322, 148, 322, 210, 271, 219);

  // Líneas de texto izquierda
  stroke(150);
  strokeWeight(1);
  line(225, 165, 260, 172);
  line(225, 175, 260, 182);
  line(225, 185, 260, 192);
  line(225, 195, 260, 202);

  // Líneas de texto derecha
  line(280, 172, 315, 165);
  line(280, 182, 315, 175);
  line(280, 192, 315, 185);
  line(280, 202, 315, 195);

  // Unión central del libro
  stroke(0);
  strokeWeight(2);
  line(270, 155, 270, 225);

// LÍNEA HORIZONTAL SUPERIOR
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(200, 100, 140, 9);

  // CÍRCULO ROJO
  fill(255, 0, 0);
  noStroke();
  ellipse(208, 104.5, 8, 8);

  // CÍRCULO AMARILLO
  fill(255, 237,41);
  ellipse(220, 104.5, 8, 8);

  // CÍRCULO VERDE
  fill(0, 180, 0);
  ellipse(233, 104.5, 8, 8);

  pop ();
  
}


function dibujarVaso(x, y) {
push ();
translate (x-200, y - 100);
  // Color del cuadrado
  fill(245, 245, 120);

  // Contorno
  stroke(0);
  strokeWeight(2);

  // Dibujar cuadrado
  rect(200, 100, 100, 100);

//VASO DE AGUA
  // LÍNEA HORIZONTAL
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(200, 100, 100, 8);

// CÍRCULO ROJO
  fill(255, 0, 0);
  noStroke();
  ellipse(207, 104, 7, 7);

// CÍRCULO AMARILLO
  fill(255, 237, 41);
  ellipse(218, 104, 7, 7);

  // CÍRCULO VERDE
  fill(0, 180, 0);
  ellipse(230, 104, 7, 7);

  // Vaso
  stroke(0);
  strokeWeight(2);
  noFill();

  // Bordes laterales
  line(220, 115, 225, 180);
  line(280, 115, 275, 180);

  // Base del vaso
  arc(250, 180, 50, 10, 0, PI);

  // Borde superior
  noFill();
  ellipse(250, 115, 60, 10);

  // Agua dentro del vaso
  noStroke();
  fill(100, 180, 255, 180);

  // Cuerpo del agua
  quad(224, 145, 276, 145, 274, 178, 226, 178);

  // Superficie del agua
  ellipse(250, 145, 52, 8);

  // Volver a dibujar contorno del vaso
  noFill();
  stroke(0);
  strokeWeight(2);
  line(220, 115, 225, 180);
  line(280, 115, 275, 180);
  arc(250, 180, 50, 10, 0, PI);
  ellipse(250, 115, 60, 10);

  pop ();
}

let portada;

async function cargarPortada () {

  portada = await loadImage ("assets/IMG_2150.PNG")
}

function dibujarPoster(x, y) {
  push ();
  translate (x-200, y - 100);

  if (portada) {
    image (portada, 200, 100, 150, 250);

    //POSTER

  // Franja blanca superior de 0.3 cm
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(200, 100, 150, 6.5);

   // Borde negro
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(200, 100, 150, 250);

    // CÍRCULO ROJO
  fill(255, 0, 0);
  noStroke();
  ellipse(208, 103.5, 5.5, 5.5);

  // CÍRCULO AMARILLO
  fill(255, 237,41);
  ellipse(220, 103.5, 5.5, 5.5);

  // CÍRCULO VERDE
  fill(0, 180, 0);
  ellipse(233, 103.5, 5.5, 5.5);
    
  }
pop ();
}


function dibujarVentana(x, y) {
  push ();
  translate (x-200, y - 100);
  // CUADRADO
  fill(255);
  stroke(0);
  strokeWeight(2);

  //VENTANA
  
 // CIELO
  noStroke();
  fill(135, 206, 235);
  rect(202, 102, 146, 96);

  // SOL
  fill(255, 220, 50);
  ellipse(320, 125, 22, 22);

  // NUBE
  fill(255);
  ellipse(235, 125, 20, 12);
  ellipse(245, 120, 20, 15);
  ellipse(255, 125, 20, 12);

   // MONTAÑA 1
  fill(100, 145, 110);
  triangle(200, 175, 250, 125, 295, 175);

   // MONTAÑA 2
  fill(70, 120, 85);
  triangle(245, 175, 305, 130, 350, 175);

  // CAMPO
  fill(90, 170, 90);
  rect(202, 175, 146, 23);

  // PEQUEÑAS FLORES
  fill(255, 230, 50);
  ellipse(220, 185, 5, 5);
  ellipse(265, 190, 5, 5);
  ellipse(315, 184, 5, 5);

  // MARCO FINAL
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(200, 100, 150, 100);

  // LÍNEA HORIZONTAL
fill(255);
stroke(0);
strokeWeight(1);
rect(200, 100, 150, 7);

  // CÍRCULO ROJO
  fill(255, 0, 0);
  noStroke();
  ellipse(208, 103.5, 7, 7);

  // CÍRCULO AMARILLO
  fill(255, 237,41);
  ellipse(220, 103.5, 7, 7);

  // CÍRCULO VERDE
  fill(0, 180, 0);
  ellipse(233, 103.5, 7, 7);
pop ();
}


function dibujarSilla(x, y) {
  push ();
  translate (x-200, y - 100);
  
  // CUADRADO DELIMITADOR
  fill(255, 209, 220);
  stroke(0);
  strokeWeight(1);
  rect(200, 100, 200, 200);

  //SILLA

  // RESPALDO
  fill(150, 90, 45);
  stroke(70, 40, 20);
  strokeWeight(2);
  rect(245, 120, 110, 75);

  // DETALLES DEL RESPALDO
  stroke(90, 50, 25);
  strokeWeight(3);
  line(270, 125, 270, 190);
  line(300, 125, 300, 190);
  line(330, 125, 330, 190);

  // ASIENTO
  fill(190, 135, 75);
  stroke(70, 40, 20);
  strokeWeight(2);
  quad(230, 195, 370, 195, 385, 220, 215, 220);

  // PATAS TRASERAS
  stroke(110, 65, 30);
  strokeWeight(8);
  line(250, 210, 245, 280);
  line(350, 210, 355, 280);

  // PATAS DELANTERAS
  line(225, 215, 220, 285);
  line(375, 215, 380, 285);

  // TRAVESAÑO
  strokeWeight(4);
  line(225, 260, 375, 260);

  // LÍNEA HORIZONTAL SUPERIOR
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(200, 100, 200, 9);

  // CÍRCULO ROJO
  fill(255, 0, 0);
  noStroke();
  ellipse(208, 104.5, 8, 8);

  // CÍRCULO AMARILLO
  fill(255, 237,41);
  ellipse(220, 104.5, 8, 8);

  // CÍRCULO VERDE
  fill(0, 180, 0);
  ellipse(233, 104.5, 8, 8);
  
  pop ();
}


function dibujarFlorero(x, y) {
  push ();
  translate (x-200, y - 100);

  // Color del cuadrado
  fill(152, 251, 152);

  // Contorno
  stroke(0);
  strokeWeight(2);

  // Dibujar cuadrado
  rect(200, 100, 100, 100);

  //FLORERO

// LÍNEA HORIZONTAL
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(200, 100, 100, 8);

// CÍRCULO ROJO
  fill(255, 0, 0);
  noStroke();
  ellipse(207, 104, 7, 7);

// CÍRCULO AMARILLO
  fill(255, 237, 41);
  ellipse(218, 104, 7, 7);

// CÍRCULO VERDE
  fill(0, 180, 0);
  ellipse(230, 104, 7, 7);


  // TALLO
  stroke(40, 120, 50);
  strokeWeight(2);
  line(250, 165, 250, 125);

  // HOJA
  noStroke();
  fill(60, 150, 70);
  ellipse(241, 145, 14, 7);

   // PÉTALOS
  fill(240, 100, 130);
  ellipse(250, 119, 11, 11);
  ellipse(240, 126, 11, 11);
  ellipse(260, 126, 11, 11);
  ellipse(250, 133, 11, 11);

  // CENTRO DE LA FLOR
  fill(255, 210, 40);
  ellipse(250, 126, 9, 9);

   // FLORERO
  fill(101, 67, 33);
  stroke(40, 100, 140);
  strokeWeight(1.5);

  quad(240, 165, 260, 165, 267, 193, 233, 193);

  // BOCA DEL FLORERO
  fill(0);
  ellipse(250, 165, 20, 5);

  pop ();

}


let publicidad1;

async function cargarPublicidad1() {
  publicidad1 = await loadImage ("IMG_1440.jpg");
}

function dibujarPublicidad1 (x, y) {
  push ();
  translate (x-200, y - 100);

  if (publicidad1) {
    image (publicidad1, 200, 100, 150, 250);

  // Franja blanca superior de 0.3 cm
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(200, 100, 150, 6.5);

   // Borde negro
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(200, 100, 150, 250);

    // CÍRCULO ROJO
  fill(255, 0, 0);
  noStroke();
  ellipse(208, 103.5, 5.5, 5.5);

  // CÍRCULO AMARILLO
  fill(255, 237,41);
  ellipse(220, 103.5, 5.5, 5.5);

  // CÍRCULO VERDE
  fill(0, 180, 0);
  ellipse(233, 103.5, 5.5, 5.5);
    
  }
  fill (255);
  rect (280, 250, 250, 90);
  stroke (0);
  strokeWeight (1);
  rect (329, 270, 28, 15);
  //TEXTO
  fill(0, 0, 255);
  stroke (0);
  strokeWeight (0);
  text ("Presiona aquí para desaparecer de este lugar", 280, 280);
  text ("👆", 335, 295);

  pop ();
}

function dibujarCarpeta (x, y) {
push ();
  translate (x-200, y - 100);
  scale (ESCALA_CARPETA);
  translate (-200, -100); 

  // Parte trasera de la carpeta (pestaña)
  noStroke();
  fill("#E84393");
  rect(240, 125, 95, 35, 12, 12, 0, 0);

  // Cuerpo de la carpeta
  fill("#FF69B4");
  rect(220, 145, 180, 125, 12);

  // Parte frontal de la carpeta
  fill("#FF85C1");
  rect(220, 165, 180, 105, 12);

  // Brillo superior
  fill("#FFB6D9");
  rect(225, 170, 170, 8, 5);

   // Nombre de la carpeta
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text("Archivos", 310, 300);

  pop ();
}

function dibujarCarpetaabierta (x, y) {
push ();
  translate (x, y);
  scale (ESCALA_ABIERTA);
  translate (-100, -70);

  // Ventana principal
  noStroke();
  fill("#FFF0F7");
  rect(100, 70, 400, 280, 15);

  // Barra superior
  fill("#FFB6D9");
  rect(100, 70, 400, 45, 15, 15, 0, 0);

  // Botones de Mac
  fill("#FF5F57");
  circle(125, 92, 12);

  // Barra lateral
  fill("#FFE0EF");
  rect(100, 115, 110, 235);

  // Nombre de la carpeta
  fill("#8A315D");
  textSize(14);
  textAlign(CENTER);
  text("Archivos", 300, 98);

  // Área de contenido
  fill("#FFFFFF");
  rect(210, 115, 290, 235, 0, 0, 15, 0);

  // Algunos archivos
  fill("#FF85C1");
  rect(245, 155, 45, 45, 8);
  rect(325, 155, 45, 45, 8);
  rect(405, 155, 45, 45, 8);
  rect(245, 230, 45, 45, 8);
  rect(325, 230, 45, 45, 8);
  rect(405, 230, 45, 45, 8);

  // Nombres de los archivos
  fill("#8A315D");
  textSize(11);
  text("Libro", 267, 215);
  text("Poster", 347, 215);
  text("Ventana", 427, 215);
  text("Vaso", 267, 291);
  text("Silla", 347, 291);
  text("Florero", 427, 291);

  pop ();
}



