// Alert
alert('ATTENZIONE! \nQuesto è il sito ufficiale di Travel Whit Boolean. Qui potrai prenotare il tuo biglietto del treno. Buon Viaggio :)');


const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {

    // Prendere il valore del input.
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;

    const userKmInput = document.getElementById("user-km");
    const userKm = userKmInput.value;

    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value;

    console.log(userName, userKm, userAge);
    
    // Generare numero per Codice CP
    const rndNumber = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000 ;
    console.log(rndNumber);

    // Generare numero per corrazza
    const anotherNumber = Math.floor(Math.random() * 20) + 1;
    console.log(anotherNumber);

    // Calcolare il prezzo del biglietto e l'offerta
    const price = userKm * 0.21;
    console.log(price);

    let finalPrice = 0;
    let ticket = '';


    if (userAge === "minor") {
        finalPrice = price - (price * 20 / 100).toFixed(2);
        ticket = "Biglietto ridotto del 20%"
        console.log(finalPrice, ticket);
    } else if (userAge === "over") {
        finalPrice = price - (price * 40 / 100).toFixed(2);
        ticket = "Biglietto ridotto del 40%"
        console.log(finalPrice, ticket);
    } else {
        finalPrice = price;
        ticket = "Biglietto standard"
        console.log(finalPrice);
    }

    // Stampo le scelte dell'utente
    document.getElementById("result-name").innerHTML = `${userName}`;
    document.getElementById("result-offer").innerHTML = `${ticket}`;
    document.getElementById("result-carriage").innerHTML = `${rndNumber}`;
    document.getElementById("result-code").innerHTML = `${anotherNumber}`;
    document.getElementById("result-price").innerHTML = `€ ${finalPrice}`;
 
    // Ripulisco i campi di input
    userNameInput.value = "";
    userKmInput.value = "";
    userAgeInput.value = "";
});

// ANNULLA

const cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click", function() {

    // Prendere il valore del input.
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;

    const userKmInput = document.getElementById("user-km");
    const userKm = userKmInput.value;

    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value;

    console.log(userName, userKm, userAge);

    // Ripulisco i campi di input
    userNameInput.value = "";
    userKmInput.value = "";
    userAgeInput.value = "";

    document.getElementById("result-name").innerHTML = '';
    document.getElementById("result-offer").innerHTML = '';
    document.getElementById("result-carriage").innerHTML = '';
    document.getElementById("result-code").innerHTML = '';
    document.getElementById("result-price").innerHTML = '';

});