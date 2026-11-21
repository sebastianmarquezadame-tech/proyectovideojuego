async function setup() {
  createCanvas (600, 400);
  await cargarPortada ();
}

function dibujarInicio () {

}

function draw () {
  
  background (255);
  dibujarFondo ();

  dibujarLibro (400, 200);
  dibujarPoster (100, 100);
  dibujarVentana (300, 500);
  dibujarVaso (250, 150);
  dibujarSilla (350, 50);
  dibujarFlorero (450, 550);
  dibujarPublicidad1 (70, 105);
  dibujarCarpeta (190, 180);
  dibujarCarpetaabierta (160, 120);

  moverPersonaje ();
  dibujarPersonaje (px, py);
}