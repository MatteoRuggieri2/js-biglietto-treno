// CONSEGNA

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// ----------------------------

// DATI
// Prezzo: (0.21 € al km)
// Sconti: -20% per i minorenni
//         -40% per gli over 65

// ----------------------------



// INPUT
// km request
const userKmTravel = parseInt( prompt('Quanti chilometri devi percorrere?') );
console.log('Km del viaggio: ' , userKmTravel);

// userAge request
const userAge = parseInt( prompt('Quanti anni hai?') );
console.log('Età dell\'utente: ' , userAge);

// LOGIC
// Travel Price
const travelPrice = ( userKmTravel * 0.21 );
console.log('Prezzo del viaggio: ' , travelPrice);

// Discounts
if( userAge < 18 ) {
    console.log('sei minorenne');
} else if( userAge > 65) {
    console.log('sei over 65');
} else {
    console.log('sei maggiorenne');
}

// OUTPUT