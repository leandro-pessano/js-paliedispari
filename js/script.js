// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var scelta, numeroInput, numeroComputer;

scelta = prompt('scegli pari o dispari');
numeroInput = parseInt(prompt('scegli un numero da 1 a 5'));
numeroComputer = randomComputer(1, 5);
sommaNumeri = numeroInput + numeroComputer;

var esito = risultato(sommaNumeri)
if ((esito == 0) && (scelta == 'pari')) {
  console.log('hai vinto');
} else if ((esito != 0) && (scelta == 'dispari')) {
  console.log('hai vinto');
} else {
  console.log('hai perso');
}

function randomComputer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function risultato(num) {
  return num % 2;
}

// Senza function //
// if ((sommaNumeri % 2 == 0) && (scelta == 'pari')) {
//   console.log('hai vinto');
// } else if ((sommaNumeri % 2 != 0) && (scelta == 'dispari')) {
//   console.log('hai vinto');
// } else {
//   console.log('hai perso');
// }

console.log('hai scelto ' + scelta);
console.log('hai tirato ' + numeroInput);
console.log('il computer ha tirato ' + numeroComputer);
console.log('la somma dei due numeri è ' + sommaNumeri);
