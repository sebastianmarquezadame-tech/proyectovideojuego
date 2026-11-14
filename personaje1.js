
function dibujarPersonaje() {
  push ();
  translate (px, py);
  scale (ESCALA);
  
  //inicio de boca
  fill(0);
  stroke(0);
  strokeWeight(2);
  arc(300, 177, 100, 100, PI, TWO_PI);
  
  // CUERPO DEL ANIMAL
  fill(0, 100, 0);
  stroke(0);
  strokeWeight(2);

  beginShape();
  // Punta izquierda levantada
  fill(0, 100, 0);
  vertex(250, 177);
  vertex(235, 150);
  vertex(220, 120);
  vertex(220, 105);
  vertex(230, 110);
  vertex(250, 130);
  
  // Parte superior izquierda
  fill(0, 100, 0);
  vertex(270, 145);
  vertex(285, 150);
  
  // Parte central
  stroke (0);
  strokeWeight (2);
  fill(0, 100, 0);
  arc (300, 150, 100, 100, PI, TWO_PI);

    //ojos de animal
  //ojo izquierdo
   fill (255)
   stroke (0);
   strokeWeight (1.5);
   circle(width / 2.2, height / 3.4, 27);
   fill (0);
   circle (width / 2.2, height / 3.4, 15);
   // CEJA IZQUIERDA ENOJADA
 stroke(0);
 strokeWeight(4);
 line(width / 2.2 - 13, height / 3.4 - 19,
      width / 2.2 + 9, height / 3.4 - 12);
  //ojo derecho
   fill (255);
   stroke (0);
  strokeWeight (1.5);
   circle(width / 1.83, height / 3.4, 27);
   fill (0);
   circle(width /1.83, height / 3.4, 15);
  // CEJA DERECHA ENOJADA
  stroke (0);
  strokeWeight (4);
 line(width / 1.83 - 9, height / 3.4 - 12,
      width / 1.83 + 13, height / 3.4 - 19);
  // Parte superior derecha
  fill(0, 100, 0);
  vertex(315, 150);
  vertex(330, 145);
  vertex(350, 130);
  
  // Punta derecha levantada
  stroke (0);
  strokeWeight (2);
  vertex(370, 110);
  vertex(380, 105);
  vertex(380, 120);
  vertex(365, 150);
  vertex(350, 177);

  // Parte inferior
  vertex(335, 158);
  vertex(320, 145);
  vertex(300, 127);
  vertex(280, 145);
  vertex(265, 158);

endShape(CLOSE);
  
  //forma de la cabeza
  fill (255, 255, 204);
  stroke (0);
  strokeWeight (2);
  circle (300, 178, 100)
  //lunares centrales
  fill (135, 206, 235);
  noStroke (0);
  circle (295, 155, 8)
  circle (307, 155, 8)
  //Ojos
  fill(255);
  noStroke();
  //ojo izquierdo
   fill (255)
   stroke (0);
   strokeWeight (1.5);
   circle(width / 2.2, height / 2.4, 27);
   fill (0);
   circle (width / 2.2, height / 2.4, 15);
  // Estrella del ojo izquierdo
  fill (255, 200, 0)
  stroke(0);// Contorno negro
  strokeWeight(1.5);
  star(275, 160, 3, 7, 5);
  //ojo derecho
   fill (255, 255, 255);
   circle(width / 1.83, height / 2.4, 27);
   fill (0);
   circle(width /1.83, height / 2.4, 15);
   // Estrella del ojo derecho
  fill (255, 200, 0)
  stroke(0);// Contorno negro
  strokeWeight(1.5);
  star(330, 160, 3, 7, 5);
  function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

   // BOCA
  // Interior de la boca
  fill(120, 20, 20);
  stroke(0);
  strokeWeight(1.5);
  arc(300, 195, 65, 35, 0, PI, CHORD);
  // Lengua
  fill(255, 120, 150);
  noStroke();
  arc(300, 205, 30, 12, 0, PI, CHORD);
  
  //Dientes
  fill(255);
  stroke(0);
  strokeWeight(1);
  for (let a = PI; a <= TWO_PI; a += PI / 8) {

    let x = 300 + cos(a) * 50;
    let y = 177 + sin(a) * 50;

    let puntaX = 300 + cos(a) * 38;
    let puntaY = 177 + sin(a) * 38;

    let ladoX = -sin(a) * 5;
    let ladoY = cos(a) * 5;

    triangle(
      x + ladoX, y + ladoY,
      x - ladoX, y - ladoY,
      puntaX, puntaY
    );
  } 

  //Cuello
  fill (255, 255, 204)
  stroke(0);
  strokeWeight(2);
  rect(285, 226, 30, 10);

  //camisa
fill(255, 0, 128);
stroke(0);
strokeWeight(2);

beginShape();
vertex(285, 235);
vertex(275, 235);
vertex(260, 252);
vertex(265, 295);
vertex(335, 295);
vertex(340, 252);
vertex(325, 235);
vertex(315, 235);
endShape(CLOSE);

//Diseño de camisa
  //carita feliz
  noFill();
stroke(0);
strokeWeight(1);

// Círculo
fill (255, 222, 33);
circle(width / 2, height / 1.5, 15);
//petalos 
  fill(0, 240, 255);
stroke(0);
strokeWeight(1);

// Centro de la flor
let x = width / 2;
let y = height / 1.5;

// Dibujar 6 pétalos
for (let i = 0; i < 6; i++) {
  let angulo = TWO_PI / 6 * i;

  let px = x + cos(angulo) * 11;
  let py = y + sin(angulo) * 11;

  ellipse(px, py, 8, 10);
}


// Ojos
fill(0);
noStroke();
circle(width / 2 - 3, height / 1.5 - 2, 2);
circle(width / 2 + 3, height / 1.5 - 2, 2);

// Sonrisa
noFill();
stroke(0);
strokeWeight(1);
arc(width / 2, height / 1.5, 7, 5, 0, PI);

// BRAZOS
fill(255, 255, 204);
stroke(0);
strokeWeight(2);

// BRAZO IZQUIERDO
beginShape();
vertex(260, 258);
vertex(250, 265);
vertex(246, 278);
vertex(238, 290);
vertex(232, 300);
vertex(238, 306);
vertex(247, 299);
vertex(258, 283);
vertex(267, 268);
endShape(CLOSE);

// BRAZO DERECHO
beginShape();
vertex(340, 258);
vertex(350, 265);
vertex(354, 278);
vertex(362, 290);
vertex(368, 300);
vertex(362, 306);
vertex(353, 299);
vertex(342, 283);
vertex(333, 268);
endShape(CLOSE);

// MANOS
fill(255, 255, 204);
circle(235, 303, 12);
circle(365, 303, 12);

//mangas 
fill(135, 206, 235);
stroke(0);
strokeWeight(2);

// Manga izquierda
beginShape();
vertex(275, 235);
vertex(260, 245);
vertex(250, 265);
vertex(265, 273);
vertex(280, 252);
endShape(CLOSE);

// Manga derecha
beginShape();
vertex(325, 235);
vertex(340, 245);
vertex(350, 265);
vertex(335, 273);
vertex(320, 252);
endShape(CLOSE);

// PANTALONES
fill(40, 70, 130);
stroke(0);
strokeWeight(2);

// Forma de los pantalones
beginShape();
vertex(265, 295);
vertex(335, 295);
vertex(333, 345);
vertex(310, 345);
vertex(300, 330);
vertex(290, 345);
vertex(267, 345);
endShape(CLOSE);

//Zapatos

fill(150, 40, 40);
stroke(0);
strokeWeight(2);

//Zapato izquierdo
beginShape();
vertex(267, 340);
vertex(290, 340);
vertex(290, 355);
vertex(285, 360);
vertex(258, 360);
vertex(255, 355);
vertex(260, 348);
endShape(CLOSE);

// ZAPATO DERECHO
beginShape();
vertex(310, 340);
vertex(333, 340);
vertex(340, 348);
vertex(345, 355);
vertex(342, 360);
vertex(315, 360);
vertex(310, 355);
endShape(CLOSE);

pop ();
}


