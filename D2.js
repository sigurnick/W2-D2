/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*  */
console.log("-----Esercizio 1-----");

let a = 3;
let b = -7;

if (a > b) {
  console.log(a, "è maggiore di ", b);
} else if (a < b) {
  console.log(a, "è minore di ", b);
} else {
  console.log(a, "è uguale a ", b);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log("-----Esercizio 2-----");

a = 8;

if (a !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log("-----Esercizio 3-----");

a = 30;
if (a % 5 === 0) {
  console.log("Il numero fornito:", a, " è perfettamente divisibile per 5");
} else {
  console.log("Il numero fornito:", a, " non è perfettamente divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log("-----Esercizio 4-----");

a = 12;
b = 4;

if (a === 8 || b === 8) {
  console.log("a = ", a, "b = ", b);
} else if (a - b === 8) {
  console.log(a, "-", b, " = 8");
} else if (a + b === 8) {
  console.log(a, "+", b, " = 8");
} else {
  console.log(
    "Ne a ne b sono 8 e ne la somma ne la sottrazione di a e b sono 8"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("-----Esercizio 5-----");

let totalShoppingCart = 30;

if (totalShoppingCart > 50) {
  console.log(
    "Hai diritto alla spedizione gratuita! L' importo da pagare è: ",
    totalShoppingCart
  );
} else {
  totalShoppingCart += 10;
  console.log(
    "Non hai diritto alla spedizione gratuita. L' importo da pagare è: ",
    totalShoppingCart
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("-----Esercizio 6-----");

totalShoppingCart = 145;
let risparmio = (20 / 100) * totalShoppingCart;
totalShoppingCart -= risparmio;
console.log(totalShoppingCart);

if (totalShoppingCart > 50) {
  console.log(
    "Hai diritto alla spedizione gratuita! L' importo da pagare è: ",
    totalShoppingCart
  );
} else {
  totalShoppingCart += 10;
  console.log(
    "Non hai diritto alla spedizione gratuita. L' importo da pagare è: ",
    totalShoppingCart
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
console.log("-----Esercizio 7-----");

let n1 = 1;
let n2 = 2;
let n3 = 0;

if (n1 > n2 && n1 > n3) {
  if (n2 > n3) {
    console.log(n1, n2, n3);
  } else {
    console.log(n1, n3, n2);
  }
} else if (n2 > n1 && n2 > n3) {
  if (n1 > n3) {
    console.log(n2, n1, n3);
  } else {
    console.log(n2, n3, n1);
  }
} else {
  if (n1 > n2) {
    console.log(n3, n1, n2);
  } else {
    console.log(n3, n2, n1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("-----Esercizio 8-----");

let x = 4;

if (typeof x === "number") {
  console.log("Il valore fornito è un numero");
} else {
  console.log("Il valore fornito non è un numero. E': ", typeof x);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("-----Esercizio 9-----");

a = 11;

if (a % 2 === 0) {
  console.log(a, "è un numero pari");
} else {
  console.log(a, "è un numero dispari");
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

console.log("-----Esercizio 10-----");

let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else if(val===10 || val>10){
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

// const me = {
//   name: "John",
//   lastName: "Doe",
//   skills: ["javascript", "html", "css"],
// };

console.log("-----Esercizio 11-----");

const me = {
  name: "John",
  lastName: "Doe",
  city: "Toronto",
  skills: ["javascript", "html", "css"],
};
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

console.log("-----Esercizio 12-----");

delete me.lastName
console.log(me)



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("-----Esercizio 13-----");

me.skills.pop()
console.log(me)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log("-----Esercizio 14-----");

const arrA = []
arrA.push(1,2,3,4,5,6,7,8,9,10)
console.log(arrA)




/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

console.log("-----Esercizio 15-----");

arrA[arrA.length-1] = 100
console.log(arrA)



