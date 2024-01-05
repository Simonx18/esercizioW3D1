/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
    if (num1 === num2){
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}
 const result1 = crazySum(2, 2);
 console.log(result1);

 const result2 = crazySum(2, 3);
 console.log(result2);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(numInt) {
    if (numInt >= 20 && numInt <= 100 || numInt === 400) {
        return true;
    } else {
        return false;
    }
}
const resultInt1 = boundary(5)
console.log(resultInt1);

const resultInt2 = boundary(21)
console.log(resultInt2);

const resultInt3 = boundary(400)
console.log(resultInt3);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString (inputString) {
    return inputString.split("").reverse().join("")
}
const elemDaInvertire = "simone";
const reverseResult = reverseString(elemDaInvertire);

console.log(reverseResult);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(inputStringa) {
    const arrayWords = inputStringa.split("");
    if (arrayWords.length > 0 ) {
        arrayWords[0] = arrayWords[0].toUpperCase();
    }
    const resultString = arrayWords.join("");
    return resultString;
}
const inputStringa = "simone";
const result = upperFirst(inputStringa);
console.log(result);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    const randomNums = [];
    for (let i = 0; i < n ; i++) {
        const randomNum = Math.floor(Math.random() * 11);
        randomNums.push(randomNum);
    }
    return randomNums;
}
const resultNum = giveMeRandom(5)
console.log(resultNum);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.

*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2){
    const areaRettangolo = l1 * l2;
    return areaRettangolo

}
const l1 = 5
const l2 = 4
const risultato = area(l1, l2);
console.log(risultato);


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
    const differenza = Math.abs(num - 19)
    if (differenza > 19)
    return differenza * 3
}
const numeroProva = 39
const risultatoEs = crazyDiff(numeroProva)
console.log(risultatoEs);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(stringa){
    if (stringa.startsWith("code")) {
        return stringa
    }
        return "code" + stringa 
}
console.log(codify("ciao"));
console.log(codify("code ciao"));


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7 (num){
    return (num % 3 === 0 || num % 7 === 0)
}
console.log(check3and7(18));
console.log(check3and7(14));
console.log(check3and7(16));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa){
    return stringa.slice(1, -1)
}
console.log(cutString("simone"));
