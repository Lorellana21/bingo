`use strict`;



// Un array de números para **Bolitas**: 
const bingoNumbers = [];
//Un array de números para **Mi cartón**:
let cardNumbers = [];
//Un boolean para saber si estamos en modo manual o modo automático, es decir, si han pulsado el **Play** o no: 
let isPlaying = false;


//Botones
const newNumberBtn = document.querySelector('.js-new-number-btn');
const playBtn = document.querySelector('.js-play-btn');


// start page functions
const init = () => {
  console.log('Se ha iniciado la página');
  console.log('Generar 20 números (no repetidos) para Mi cartón');
  generateRandomNumbers();
  paintCardNumbers();
};

//Función que me genera 1 número aleatorio hasta 100 como máximo.
function generateRandomNumber() {
  return Math.ceil(Math.random() * 100);//Este "math.ceil" redondea los números
}

//Función que genera los 20 números que deben aparecer en el cartón:
function generateRandomNumbers(){
  for(let i = 0; i < 20; i++){
    const randomNumber = generateRandomNumber(100)
    cardNumbers.push(randomNumber);//Añade los numeros al array, cada numero aleatorio que genera la función "generate randomnumber"
    //para elminar el numero aleatorio repetido de mi array de card numbers
      if(randomNumber[i] === randomNumber[i]){
        cardNumbers.pop;
      } else{
        cardNumbers.push(randomNumber);
      }
  
  }
  console.log(cardNumbers);
}

// dom listeners
const handleNewNumber = () => {
  console.log('Se ha pulsado en: Saca una bolita');
  paintBingoNumbers();
  playRound();
};

const handlePlay = () => {
  console.log('Se ha pulsado en: Play');
  setPlay();
  playRound();
};





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
  const randomNumber = generateRandomNumber(100)
  bingoNumbers.push(randomNumber);
  paintBingoNumbers();
  paintCardNumbers();

};

//función para pintar
const paintBingoNumbers = () => {
  let htmlCode = "";
  for ( const bingoNumber of bingoNumbers){
    htmlCode += `<li class="number">${bingoNumber}</li>`;
  }
  document.querySelector ('.js-bingo-numbers').innerHTML = htmlCode;
};

const paintCardNumbers = () => {
  let htmlCode = "";//Variable temporal que esta vacia al principio
  for ( const cardNumber of cardNumbers){
    if(bingoNumbers.includes(cardNumber)){
      htmlCode += `<li class="selected">${cardNumber}</li>`;
    } else{
      htmlCode += `<li class="number">${cardNumber}</li>`;
    }
  }
  document.querySelector ('.js-card-numbers').innerHTML = htmlCode;

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