let escena = "inicio";

let pxInicial = 0;

let paso = 20;
let pasoParaPublicidad = 4;
let publicidadCerrada = false;

let pubX = 250;
let pubY = 100;
let abiertaX = 100;
let abiertaY = 50;

function cambiarEscena (nueva) {
    escena = nueva;
}

function dentro (mx, my, x, y, w, h) {
  return mx > x && mx < x + w && my > y && my < y + h;
}

function zonaAqui () {
    push ();
    textSize (12);
    textAlign (LEFT);
    let antes = textWidth ("Presiona");
    let ancho = textWidth ("aquí");
    pop ();
    return {
        x: pubX + 80 + antes, 
        y: pubY + 168,
        w: ancho, 
        h: 16
    };
}