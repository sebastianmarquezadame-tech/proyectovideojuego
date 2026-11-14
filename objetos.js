/* notas sobre subir imagen con async function
let imgObjetos = {
ejemplo1,
ejemplo2,
ejemplo3,
ejemplo4

};

async function cargarObjetos () {

imgObjetos= {
    nombredelacategoriadeobjeto: await Promise.all ([
    loadImage ("objeto1.png"),
    loadImage ("objeto2.png"),
    loadImage ("objeto3.png"),
]),

    nombredelacategoriadeobjeto2: await Promise.all ([
    loadImage ("objeto21.png"),
    loadImage ("objeto22.png"),
])
}
}

function crearObjetos (tipo, cantidad) {
    //ciclo for dice que cada vez que se ejecute una línea esta se hará con variaciones
   for (let i = 0; i < cantidad; i++) { 
    objetos.push({ 
        tipo: tipo, 
        x: random(width - 40), 
        // solo el pasto
        y: random(height / 2, height - 40),
        img: random(imgs[tipo]), 
        activa: true 
    }); 
}
}*/






