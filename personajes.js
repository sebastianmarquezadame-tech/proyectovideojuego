let imgPersonaje;
let imgFondo;

async function cargarPersonaje () {
    imgPersonaje = await loadImage ("assets/personaje1.png"); //dirección de imagen 'assets/imagen.png'
    imgFondo = await loadImage (""); 
} 
function dibujarPersonaje (px, py, escala = 2.5) {
push ();
image (imgPersonaje, px, py, imgPersonaje.width * escala, imgPersonaje.height * escala); //tamaño del personaje)
pop ();
 }
 function dibujarFondo () {
image (imgFondo, 0, 0, imgFondo.width, imgFondo.height); //tamaño del personaje)
pop (); 
 }