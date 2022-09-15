function deleteByEmail() {
    let emailElement = document.querySelector('input[name="email"]');
    let cellsElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');

    let emailElements = Array.from(cellsElements);
    let searchedElement = emailElements.find(x => x.textContent == emailElement.value);

    if (searchedElement) {
        searchedElement.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
    
} 