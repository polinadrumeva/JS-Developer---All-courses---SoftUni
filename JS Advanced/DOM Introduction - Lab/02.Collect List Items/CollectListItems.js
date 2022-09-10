function extractText() {
    let liElements = document.getElementById('items');

    let resultElement = document.getElementById('result');
    resultElement.textContent = liElements.textContent;
}