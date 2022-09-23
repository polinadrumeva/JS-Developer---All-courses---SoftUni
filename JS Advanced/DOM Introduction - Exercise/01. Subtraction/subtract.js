function subtract() {
    let firstNumberElement = document.getElementById('firstNumber').value;
    let secondNumberElement = document.getElementById('secondNumber').value;

    let resultElement = document.getElementById('result');

    resultElement.textContent = Number(firstNumberElement) - Number(secondNumberElement);
}