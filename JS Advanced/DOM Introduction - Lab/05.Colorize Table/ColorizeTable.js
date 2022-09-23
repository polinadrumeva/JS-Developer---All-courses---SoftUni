function colorize() {
    let rowElement = document.querySelectorAll('tr');

    for(let i = 0; i < rowElement.length; i++){
        if(i % 2 == 1) {
        rowElement[i].style.backgroundColor = 'teal';
        }
    };
}