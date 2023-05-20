let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let currencyEUR = 4.62;
let currencyGBP = 5.25;
let currencyJPY = 0.031;
let currencySEK = 0.41;
let currencyUSD = 4.22;

formElement.addEventListener("input", () => {

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    if (amount < 0) {return resultElement.innerText="Liczba musi byc dodatnia"};

    switch (currency) {
        case "EUR":
            result = amount / currencyEUR;
            break;
        case "GBP":
            result = amount / currencyGBP;
            break;
        case "JPY":
            result = amount / currencyJPY;
            break;
        case "SEK":
            result = amount / currencySEK;
            break;
        case "USD":
            result = amount / currencyUSD;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;

});