/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 50;
let num1 = 30;
if (num > num1) {
  console.log(num);
} else {
  console.log(num1);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num === 8) {
  console.log("Il numero é 8");
} else if (num1 === 8) {
  console.log("Il secondo numero é 8");
} else if (num + num1 === 8) {
  console.log("la loro somma é 8");
} else if (num - num1 === 8) {
  console.log("La loro differenza é 8");
} else {
  console.log("I due numeri non sono 8 ne la loro somma ne la differenza li rende 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = 50;
if (totalShoppingCart > 50) {
  console.log("Il totale scontato ammonta a ", totalShoppingCart, "Con spedizione gratuita");
} else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("Il totale viene ", totalShoppingCart);
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = (totalShoppingCart / 100) * 80;
if (totalShoppingCart > 50) {
  console.log("Il totale scontato ammonta a ", totalShoppingCart, "Con spedizione gratuita");
} else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("Il totale viene ", totalShoppingCart);
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 10;
let y = 20;
let z = 5;
const numeri = [];
if (y > z && y > x) {
  numeri.unshift(y);
  if (x > z) {
    numeri.push(x);
    numeri.push(z);
    console.log(numeri);
  } else {
    numeri.push(z);
    numeri.push(x);
    console.log(numeri);
  }
} else if (x > y && x > z) {
  numeri.unshift(x);
  if (y > z) {
    numeri.push(y);
    numeri.push(z);
    console.log(numeri);
  } else {
    numeri.push(z);
    numeri.push(y);
    console.log(numeri);
  }
} else if (z > y && z > x) {
  numeri.unshift(z);
  if (y > x) {
    numeri.push(y);
    numeri.push(x);
    console.log(numeri);
  } else {
    numeri.push(x);
    numeri.push(y);
    console.log(numeri);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
input = 1;
if (typeof input === typeof 1) {
  console.log("L input é un numero");
} else {
  console.log("L input non é un numero");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (input % 2 === 0) {
  console.log("Il numero é pari");
} else {
  console.log("Il numero é dispari");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const contenitore = [];
contenitore.push(1);
contenitore.push(2);
contenitore.push(3);
contenitore.push(4);
contenitore.push(5);
contenitore.push(6);
contenitore.push(7);
contenitore.push(8);
contenitore.push(9);
contenitore.push(10);
console.log(contenitore);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
contenitore.pop();
contenitore.push(100);
console.log(contenitore);
