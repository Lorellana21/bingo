`use strict`;



// Un array de números para **Bolitas**: 
const bingoNumbers = [];




//Un boolean para saber si estamos en modo manual o modo automático, es decir, si han pulsado el **Play** o no: 
let isPlaying = false;



const newNumberBtn = document.querySelector('.js-new-number-btn');
const playBtn = document.querySelector('.js-play-btn');
//Un array de números para **Mi cartón**:
const cardNumbers = [];

// start page functions

const init = () => {
  console.log('Se ha iniciado la página');
  console.log('Generar 20 números (no repetidos) para Mi cartón');
  generateNoRepeatedRandomNumbers();
};

// dom listeners

const handleNewNumber = () => {
  console.log('Se ha pulsado en: Saca una bolita');
  playRound();
};

const handlePlay = () => {
  console.log('Se ha pulsado en: Play');
  setPlay();
  playRound();
};

// functions


//Genera los 20 números que deben aaprecer en el cartón:
function generateNoRepeatedRandomNumbers(){
  for(let i = 0; i < 20; i++){
    const randomNumber = generateRandomNumber(100)
    cardNumbers.push(randomNumber);//Añade los numeros al array, cada numero aleatorio que genera la función "generate randomnumber"
  }
  console.log(cardNumbers);
}

//Función que me genera 1 número aleatorio hasta 100 como máximo.
function generateRandomNumber() {
  return Math.ceil(Math.random() * 100);//Este "math.ceil" redondea los números
}







const setPlay = () => {
  console.log('Activar el modo automático');
};

const playRound = () => {
  console.log('Jugamos una ronda entera');
  createNewBingoNumber();
  paintBingoNumbers();
  paintCardNumbers();
  isThereBingo();
};

const createNewBingoNumber = () => {
  console.log('Generar un nuevo número (no repetido) para Bolitas');
};

const paintBingoNumbers = () => {
  console.log('Repintar Bolitas');
};

const paintCardNumbers = () => {

  console.log('Repintar todos los números de Mi cartón');
  console.log('Repintar cada número de Mi cartón');
  console.log('¿El número de Mi cartón está en Bolitas?');
  if (true) {
    paintMatchedCardNumber();
  } else {
    paintUnmatchedCardNumber();
  }
};

const paintMatchedCardNumber = () => {
  console.log('- Sí: Pintar con fondo verde');
};

const paintUnmatchedCardNumber = () => {
  console.log('- No: Pintar con fondo blanco');
};

const isThereBingo = () => {
  console.log('¿Han salido todos los números?');
  if (false) {
    console.log('- Sí');
    showBingoMessage();
    hideButtons();
  } else {
    console.log('- No');
    isPlayingMode();
  }
};

const showBingoMessage = () => {
  console.log('Mostrar mensaje de Han cantado Bingo!!!');
};

const hideButtons = () => {
  console.log('Ocultar botones de Saca una bolita y Play');
};

const isPlayingMode = () => {
  console.log('¿Estoy en modo automático?');
  if (false) {
    console.log('- Sí');
    createNewBingoNumberAgain();
  } else {
    console.log('- No');
  }
};

const createNewBingoNumberAgain = () => {
  console.log('Esperar un segundo y volver a empezar');
  setTimeout(() => {
    playRound();
  }, 1000);
};

newNumberBtn.addEventListener('click', handleNewNumber);
playBtn.addEventListener('click', handlePlay);

// init page

init();