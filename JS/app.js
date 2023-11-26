let numRandom = 0;

const botonComenzarJuego = document.getElementById("btnComenzarJuego");
const botonEnviar = document.getElementById(`botonEnviar`);
const numInput = document.getElementById(`ingresoNumero`);

function numAleatorio() {
  const num = Math.floor(Math.random() * 100) + 1;
  alert(`Número aleatorio generado`);
  return num;
}

botonComenzarJuego.addEventListener(`click`, () => {numRandom = numAleatorio()});
botonEnviar.addEventListener(`click`, () => { 
  if(numRandom === Number(numInput.value)){
    alert(`Acertaste!!! Felicidades!!!`);
  } else if(Number(numInput.value) > numRandom){
    alert(`El número ingresado es mayor al número secreto.`);
  } else if(Number(numInput.value) < numRandom){
    alert(`El número ingresado es menor al número secreto.`);
  }
});
