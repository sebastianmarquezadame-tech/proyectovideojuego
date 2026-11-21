let dibujos = [];
let posiciones = [];
let casillas = [];
let seleccionada = null;
let juegoTerminado = false;
let regaloDesbloqueado = false;
let regaloReclamado = false;
let primeraReposicion = false;
let segundaReposicion = false;
let terceraReposicion = false;

const ANCHO_IMAGEN = 40;
const ALTO_IMAGEN = 40;

// CONFIGURACIÓN

async function setup() {

  createCanvas(600, 400);

  describe("Minijuego de combinar seis imágenes en un tablero de nueve casillas.");

  // Cargar las seis imágenes originales
  dibujos[0] = await loadImage("assets/IMG_2209.PNG");
  dibujos[1] = await loadImage("assets/IMG_2203.png");
  dibujos[2] = await loadImage("assets/IMG_2202.PNG");
  dibujos[3] = await loadImage("assets/IMG_2204.PNG");
  dibujos[4] = await loadImage("assets/IMG_2208.PNG");
  dibujos[5] = await loadImage("assets/IMG_2210.PNG");

   // Crear las nueve posiciones fijas
  for (let fila = 0; fila < 3; fila++) {
    for (let columna = 0; columna < 3; columna++) {

      let x = 200 + columna * (250 / 3) + (250 / 6);
      let y = 100 + fila * (280 / 3) + (280 / 6);

      casillas.push({ x, y });
    }
  }

  // Crear las nueve imágenes iniciales
  crearImagenes(9);
}

// BUSCAR UNA CASILLA LIBRE

function obtenerCasillaLibre() {

  for (let i = 0; i < casillas.length; i++) {

    let ocupada = posiciones.some(
      img => img.casilla === i
    );

    if (!ocupada) {
      return i;
    }
  }

  return null;
}

// CREAR IMÁGENES

function crearImagenes(cantidad) {

  let creadas = 0;

  for (let i = 0; i < cantidad; i++) {

    let casilla = obtenerCasillaLibre();

    if (casilla === null) {
      console.log("No quedan casillas libres");
      break;
    }

    posiciones.push({
      x: casillas[casilla].x,
      y: casillas[casilla].y,
      casilla: casilla,
      nivel: 0
    });

    creadas++;
  }

  console.log("Imágenes nuevas creadas:", creadas);
  console.log("Total en tablero:", posiciones.length);

  return creadas;
}

// COMPROBAR REPOSICIONES

function comprobarReposiciones(especial) {

  // PRIMERA REPOSICIÓN
  // Se consigue la imagen de nivel 3

  if (
    especial.nivel === 3 &&
    !primeraReposicion
  ) {

    primeraReposicion = true;

    console.log("PRIMERA REPOSICIÓN: 7 imágenes iniciales");

    crearImagenes(7);
  }

  // SEGUNDA REPOSICIÓN
  // Se consigue la imagen de nivel 4

  else if (
    especial.nivel === 4 &&
    !segundaReposicion
  ) {

    segundaReposicion = true;

    console.log("SEGUNDA REPOSICIÓN: 8 imágenes iniciales");

    crearImagenes(8);
  }

  // TERCERA REPOSICIÓN
  // Se consigue otra imagen de nivel 3,
  // mientras ya existe una imagen de nivel 4.

  else if (
    especial.nivel === 3 &&
    segundaReposicion &&
    !terceraReposicion &&
    posiciones.some(img => img.nivel === 4)
  ) {

    terceraReposicion = true;

    console.log("TERCERA REPOSICIÓN: 7 imágenes iniciales");

    crearImagenes(7);
  }
}

// COMPROBAR SI SE DESBLOQUEA EL REGALO

function comprobarRegalo() {

  let nivelesPresentes = [0, 1, 2, 3, 4].every(
    nivel => posiciones.some(
      img => img.nivel === nivel
    )
  );

  if (nivelesPresentes && !regaloDesbloqueado) {

    regaloDesbloqueado = true;

    console.log("¡COFRE DESBLOQUEADO!");
  }
}

// DIBUJAR EL JUEGO

function draw() {

  background(220);

  // Tablero
  fill(255);
  stroke(0);
  strokeWeight(1);

  rect(200, 100, 250, 280);

  // Dibujar imágenes
  imageMode(CENTER);

  for (let img of posiciones) {

    image(
      dibujos[img.nivel],
      img.x,
      img.y,
      ANCHO_IMAGEN,
      ALTO_IMAGEN
    );
  }

  // COFRE

  if (regaloDesbloqueado && !regaloReclamado) {

    fill(255);
    stroke(0);

    rect(465, 160, 120, 80);

    noStroke();
    fill(0);

    textAlign(CENTER, CENTER);
    textSize(18);

    text("🎁 REGALO", 525, 200);
  }

  // PANTALLA DE VICTORIA

  if (juegoTerminado) {

    fill(0, 0, 0, 190);
    noStroke();

    rect(200, 100, 250, 280);

    fill(255);

    textAlign(CENTER, CENTER);
    textSize(23);

    text("¡HAS GANADO!", 325, 190);

    image(
      dibujos[5],
      325,
      260,
      80,
      80
    );
  }
}

// DETECTAR CLIC DEL RATÓN

function mousePressed() {

  if (juegoTerminado) {
    return;
  }

  // RECLAMAR EL COFRE

  if (regaloDesbloqueado && !regaloReclamado) {

    if (
      mouseX > 465 &&
      mouseX < 585 &&
      mouseY > 160 &&
      mouseY < 240
    ) {

      let casilla = obtenerCasillaLibre();

      if (casilla !== null) {

        posiciones.push({
          x: casillas[casilla].x,
          y: casillas[casilla].y,
          casilla: casilla,
          nivel: 0
        });

        regaloReclamado = true;

        console.log("¡REGALO RECLAMADO!");
        console.log("Se añadió una imagen inicial");

      } else {

        console.log("No hay casillas libres para reclamar el regalo");
      }

      return;
    }
  }

  // SELECCIONAR IMAGEN

  for (let i = posiciones.length - 1; i >= 0; i--) {

    let img = posiciones[i];

    if (
      mouseX > img.x - ANCHO_IMAGEN / 2 &&
      mouseX < img.x + ANCHO_IMAGEN / 2 &&
      mouseY > img.y - ALTO_IMAGEN / 2 &&
      mouseY < img.y + ALTO_IMAGEN / 2
    ) {

      seleccionada = img;
      break;
    }
  }
}

// ARRASTRAR IMAGEN

function mouseDragged() {

  if (juegoTerminado || seleccionada === null) {
    return;
  }

  seleccionada.x = mouseX;
  seleccionada.y = mouseY;
}

// SOLTAR IMAGEN

function mouseReleased() {

  if (juegoTerminado || seleccionada === null) {
    return;
  }

  // Buscar la casilla más cercana

  let destino = null;
  let distanciaMinima = Infinity;

  for (let i = 0; i < casillas.length; i++) {

    let distancia = dist(
      seleccionada.x,
      seleccionada.y,
      casillas[i].x,
      casillas[i].y
    );

    if (distancia < distanciaMinima) {

      distanciaMinima = distancia;
      destino = i;
    }
  }

  // Si se suelta demasiado lejos, regresar

  if (distanciaMinima > 45) {

    seleccionada.x = casillas[seleccionada.casilla].x;
    seleccionada.y = casillas[seleccionada.casilla].y;

    seleccionada = null;
    return;
  }

  // Buscar otra imagen en la casilla de destino

  let otra = posiciones.find(
    img =>
      img.casilla === destino &&
      img !== seleccionada
  );

  if (otra !== undefined) {

    // COMBINAR IMÁGENES IGUALES

    if (otra.nivel === seleccionada.nivel) {

      // Subir un nivel a la imagen que permanece
      otra.nivel++;

      // Eliminar la imagen arrastrada
      posiciones.splice(
        posiciones.indexOf(seleccionada),
        1
      );

      console.log("Nuevo nivel:", otra.nivel);

      // Comprobar las reposiciones
      comprobarReposiciones(otra);

      // Comprobar el regalo
      comprobarRegalo();

      // Comprobar victoria
      if (otra.nivel === 5) {

        juegoTerminado = true;

        console.log("¡VICTORIA! Has conseguido la sexta imagen.");
      }

    } else {

      // Si los niveles son diferentes, regresar
      seleccionada.x = casillas[seleccionada.casilla].x;
      seleccionada.y = casillas[seleccionada.casilla].y;
    }

  } else {

    // Mover a una casilla libre

    seleccionada.casilla = destino;

    seleccionada.x = casillas[destino].x;
    seleccionada.y = casillas[destino].y;
  }

// Limpiar selección

  seleccionada = null;

  console.log("Imágenes en el tablero:", posiciones.length);

  console.log(
    "Niveles:",
    posiciones.map(img => img.nivel)
  );
}