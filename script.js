// -------- PALINDROMA --------
// 1. Chiedere all’utente di inserire una parola
// 2. Creare una funzione che controlla se la parola è palindroma
// 3. Stampare il risultato: è palindroma o no

// -------- PARI E DISPARI --------
// 4. Chiedere all’utente di scegliere tra "pari" o "dispari"
// 5. Chiedere all’utente di inserire un numero da 1 a 5
// 6. Creare una funzione che genera un numero casuale da 1 a 5 per il computer
// 7. Sommare il numero dell’utente con quello del computer
// 8. Creare una funzione che controlla se la somma è pari o dispari
// 9. Dichiarare chi ha vinto: l’utente o il computer

const parolaUtente = prompt("Inserisci una parola:");


function èPalindroma(parola) {
    // Inizio un ciclo che va da 0 fino alla metà della parola
    for (let i = 0; i < parola.length / 2; i++) {
  
      // Controllo se la lettera in posizione "i" (dall'inizio)
      // è diversa dalla lettera in posizione "lunghezza - 1 - i" (dalla fine)
      if (parola[i] !== parola[parola.length - 1 - i]) {
  
        // Se trovo due lettere diverse, la parola NON è palindroma
        return false;
      }
    }
  
    // Se il ciclo finisce e tutte le lettere combaciano,
    // allora la parola è palindroma
    return true;
  }

  
  