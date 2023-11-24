let numRandom = 0;
let numIngresado = 0;

function numAleatorio(){
    const num = Math.floor(Math.random() * 10) + 1;
    alert(`Número aleatorio generado`);
    return num;
}

function capturar(){
    const num = document.getElementById(`ingresoNumero`).value;
    return num;
}

const botonComenzarJuego = document.getElementById("btnComenzarJuego");


botonComenzarJuego.addEventListener(`click`, numRandom = numAleatorio);
