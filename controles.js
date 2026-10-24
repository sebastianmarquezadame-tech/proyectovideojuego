let px = 100;
let py = 100;
function moverPersonaje () {
    px = lerp (px, mouseX-50, 0.05);
    py = lerp (py, mouseY-50, 0.05);
}
function touchMoved () {
    return false;  
}