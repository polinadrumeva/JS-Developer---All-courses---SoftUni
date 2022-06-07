function oldBook (input) {
    let findBook = input[0];
    let book = input[1];
    let sum = 0;
    let index = 1;
    
    while (book !== findBook || book !== "No More Books") {
           if (book === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${sum} books.`);       
            break;
            } else if (book === findBook) {
                console.log(`You checked ${sum} books and found it.`)
                break;
            }
            index++;
            book = input[index];
     sum++;
    }
}

oldBook();


