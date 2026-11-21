let px = 0;
let py = 0;
let velocidad = 2;
let gravedad = 0.5;
let fuerzaSalto = -10;
let velocidadY = 0; 
let enSuelo = true;
let ESCALA = 0.5;
let yPiso = 400;
let suelo = yPiso -360 * ESCALA; // Ajusta la posición del suelo según la escala


function moverPersonaje () {
    if (keyIsDown (LEFT_ARROW)) px -= velocidad; 
    if (keyIsDown (RIGHT_ARROW)) px += velocidad;

    //limitar movimiento horizontal del personaje
    let bordeIzquierdo = 220 * ESCALA;
    let bordeDerecho = 380 * ESCALA;

    px = constrain (
      px, 
      -bordeIzquierdo,
      width - bordeDerecho 
    ); 

    if (!publicidadCerrada && px >= pxInicial + pasoParaPublicidad * paso) {
      publicidadCerrada = true;
      cambiarEscena ("publicidad");
    }

    //gravedad
      py += velocidadY;
  velocidadY += gravedad;

  //Suelo
    if (py >= suelo) {
        py = suelo;
        velocidadY = 0;
        enSuelo = true;
    }

}

function keyPressed(){
    if (key === ' ' && enSuelo) {
    velocidadY = fuerzaSalto;
    enSuelo = false;
  }
}

function mouseClick () {
  if (escena !== "escritorio") return;


}