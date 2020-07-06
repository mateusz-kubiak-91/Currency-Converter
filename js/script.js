{
    const init = () => {
        const formElement = document.querySelector('.main__section--form');

        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
    
            const baseValue = document.querySelector('.main__section--baseInput').value;
            const targetCurrency = document.querySelector('.main__section--formSelectTarget').value;
            let resultValue = document.querySelector('.main__section--resultSpan');
            const CHF = 4.1919;
            const EUR = 4.6416;
            const USD = 3.9697;
            const GBP = 4.9250;
    
            switch (targetCurrency) {
                case "CHF":
                    resultValue.innerText = (baseValue / CHF).toFixed(4);
                    break;
                case "EUR":
                    resultValue.innerText = (baseValue / EUR).toFixed(4);
                    break;
                case "USD":
                    resultValue.innerText = (baseValue / USD).toFixed(4);
                    break;
                case "GBP":
                    resultValue.innerText = (baseValue / GBP).toFixed(4);
                    break;
                default:
                    resultValue.innerText = "coś poszło nie tak..."
            }
        });
    }
    init();
}