function sumTable() {

    let priceElement = document.querySelectorAll('tr td:nth-of-type(2)');

    let sum = Array.from(priceElement).reduce((a,x) => {
        let currentSum = Number(x.textContent || 0 );
        return a + currentSum;
    }, 0);

    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
}