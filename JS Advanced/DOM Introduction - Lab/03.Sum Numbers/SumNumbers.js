function calc() {
    let num1Element = document.getElementById('num1');
    let num2Element = document.getElementById('num2');

    let sumElement = document.getElementById('sum');
    sumElement.value = Number(num1Element.value) + Number(num2Element.value);
}
