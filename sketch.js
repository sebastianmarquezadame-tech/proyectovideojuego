async function setup() {
  createCanvas (800, 800);
  await cargarPersonaje ();
}
function draw () {
  dibujarFondo ();
  moverPersonaje ();
  dibujarPersonaje (px, py);
}