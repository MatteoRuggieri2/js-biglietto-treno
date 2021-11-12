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

// userAge request
const userAge = parseInt( prompt('Quanti anni hai?') );



// LOGIC
// Travel Price
let travelPrice = ( userKmTravel * 0.21 );

// Discounts
// 20%
let discount20 = ( travelPrice * 20) / 100

// 40%
let discount40 = ( travelPrice * 40) / 100

// Variable - Final Price
let finalPrice;

if( userAge < 18 ) {
    finalPrice = (travelPrice - discount20)

} else if( userAge > 65) {
    finalPrice = (travelPrice - discount40)

} else {
    finalPrice = travelPrice

}



// OUTPUT
// Message - Final Price
alert('L\'importo da pagare è di:   € ' + finalPrice.toFixed(2));