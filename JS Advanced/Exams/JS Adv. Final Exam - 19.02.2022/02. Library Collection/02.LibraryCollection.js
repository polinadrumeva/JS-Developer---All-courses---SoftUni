class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity; 
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error("Not enough space in the collection.");
        }
         
        this.books.push({bookName, bookAuthor, payed: false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let searched = this.books.find(x=> x.bookName === bookName);
        if(!searched) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if(searched.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        searched.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let searched = this.books.find(x=> x.bookName === bookName);
        if(!searched) {
            throw new Error("The book, you're looking for, is not found.");
        }
        if(searched.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.pop(searched);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let result = '';
        result += `The book collection has ${this.capacity - this.books.length} empty spots left.\n`;
        if(!bookAuthor) {
           let sorted = this.books.sort((a,b) => b.bookName - a.bookName);
           for (let el of sorted) {
                result += `'${el.bookName} == ${el.bookAuthor} - ${el.payed ? 'Has Paid' : 'Not Paid'}.\n`;
           }
        } else {
            let searched = this.books.filter(x => x.bookAuthor === bookAuthor);
            if(!searched) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            for (let el of searched) {
                result += `'${el.bookName} == ${el.bookAuthor} - ${el.payed ? 'Has Paid' : 'Not Paid'}.\n`;
            }

        }

        return result;
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));


// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));

