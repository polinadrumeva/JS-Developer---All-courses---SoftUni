function colorize() {
    let rowElement = document.querySelectorAll('tr:nth-of-type(2n) td');

    rowElement.forEach(x => {
        x.style.backgroundColor = 'teal';
    });
}