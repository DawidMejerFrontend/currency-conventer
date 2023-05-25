{
    const welcome = () => {
        console.log("Witam wszystkich developerów");
    };

    const calculateResult = (amount, currency,) => {

        const resultElement = document.querySelector(".js-result");
        const currencyEUR = 4.62;
        const currencyGBP = 5.25;
        const currencyJPY = 0.031;
        const currencySEK = 0.41;
        const currencyUSD = 4.22;

        if (amount < 0) {
            resultElement.innerText = "Liczba musi byc dodatnia";
            return;
        };

        switch (currency) {

            case "EUR":
                return amount / currencyEUR;

            case "GBP":
                return amount / currencyGBP;

            case "JPY":
                return amount / currencyJPY;

            case "SEK":
                return amount / currencySEK;

            case "USD":
                return amount / currencyUSD;

        }
    };

    const onFormSubmit = () => {

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency,);

        updateResultText(result, currency);

    };

    const updateResultText = (result, currency) => {

        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    };

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormSubmit);

        welcome();
    };

    init();
};