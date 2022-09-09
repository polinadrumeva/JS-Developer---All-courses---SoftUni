function extractText() {
    let liElements = document.getElementsByName('li');
    let result = document.getElementById('result');
    result.include(liElements);
}