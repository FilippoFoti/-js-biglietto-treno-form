// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


// Alert
// alert('ATTENZIONE! \nQuesto è il sito ufficiale di Travel Whit Boolean. Qui potrai prenotare il tuo biglietto del treno. Buon Viaggio :)');



const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {
    const result = document.getElementById("result");

    // Ripulire il result
    // result.className = "";

    // Prendere il valore del input.
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;

    const userKmInput = document.getElementById("user-km");
    const userKm = userKmInput.value;

    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value;

    console.log(userName, userKm);

    // Calcolare il prezzo del biglietto
    const price = userKm * 0.21;
    console.log(price);

    let finalPrice = '';

    if (userAge <= 18) {
        finalPrice = price - (price * 20 / 100).toFixed(2);
        console.log(finalPrice);
    } else if (userAge >= 65) {
        finalPrice = price - (price * 40 / 100).toFixed(2);
        console.log(finalPrice);
    } else {
        finalPrice = price;
        console.log(finalPrice);
    }
    // Generare numero per Codice CP
    const rndNumber = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000 ;
    console.log(rndNumber);

    // Generare numero per corrazza
    const anotherNumber = Math.floor(Math.random() * 20) + 1;
    console.log(anotherNumber);

     // Stampo le scelte dell'utente
     document.getElementById("result-name").innerHTML = `${userName}`;
     document.getElementById("result-offer").innerHTML = `${userName}`;
     document.getElementById("result-carriage").innerHTML = `${rndNumber}`;
     document.getElementById("result-code").innerHTML = `${anotherNumber}`;
     document.getElementById("result-price").innerHTML = `€ ${finalPrice}`;
 
     // Ripulisco i campi di input
     userNameInput.value = "";
     userKmInput.value = "";
     userAgeInput.value = "";
});

