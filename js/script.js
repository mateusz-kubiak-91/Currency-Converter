const baseValue = document.querySelector('.main__section--baseInput');
const targetCurrency = document.querySelector('.main__section--formSelectTarget');
const formElement = document.querySelector('.main__section--form');
let resultValue = document.querySelector('.main__section--resultInput');

formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    let CHF = 4.1919;
    let EUR = 4.6416;
    let USD = 3.9697;
    let GBP = 4.9250;
    let valuePLN = baseValue.value;

    switch (targetCurrency.value) {
        case "CHF":
            resultValue.innerText = (valuePLN / CHF).toFixed(4);
            break;
        case "EUR":
            resultValue.innerText = (valuePLN / EUR).toFixed(4);
            break;
        case "USD":
            resultValue.innerText = (valuePLN / USD).toFixed(4);
            break;
        case "GBP":
            resultValue.innerText = (valuePLN / GBP).toFixed(4);
            break;
        default:
            resultValue.innerText = "coś poszło nie tak..."
    }
});