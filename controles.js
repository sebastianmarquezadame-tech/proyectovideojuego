let px = 100;
let py = 100;
let velocidad = 2;

const IZQ = 220;
const DER = 380;
const ARR = 105;
const ABA = 360;
const BARRA = 19;
const ESCALA = 0.5;


function moverPersonaje () {
    if (keyIsDown (LEFT_ARROW)) px -= velocidad; 
    if (keyIsDown (RIGHT_ARROW)) px += velocidad;
    if (keyIsDown (UP_ARROW)) py -= velocidad; 
    if (keyIsDown (DOWN_ARROW)) py += velocidad; 

    px = constrain(px, -IZQ * ESCALA, width -DER * ESCALA);
    py = constrain(py, BARRA -ARR * ESCALA , height - ABA * ESCALA);
}

function keyPressed(){
    if ([LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW].includes(keyCode)) 
        return false;
}