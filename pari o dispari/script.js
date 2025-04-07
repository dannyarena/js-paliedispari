const sceltaUtente = prompt("Scegli: pari o dispari");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));


function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
  }
  
  const numeroComputer = generaNumeroRandom();
console.log("Il computer ha scelto:", numeroComputer);


const somma = numeroUtente + numeroComputer;
console.log("La somma dei numeri è:", somma);


function èPari(numero) {
    return numero % 2 === 0;
  }
  

  if (
    (èPari(somma) && sceltaUtente === "pari") ||
    (!èPari(somma) && sceltaUtente === "dispari")
  ) {
    console.log("Hai vinto!");
  } else {
    console.log("Hai perso!");
  }
  