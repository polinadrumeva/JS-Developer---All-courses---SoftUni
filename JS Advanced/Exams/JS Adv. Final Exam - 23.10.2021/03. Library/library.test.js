let {assert} = require('chai');
const library = require('./library');

describe("Library", function() {
    describe("calcPrice Tests", function() {
        it("should throw exception if name is not a string", function() {
           assert.throw(() => library.calcPriceOfBook([], 1945), "Invalid input");
        });

        it("should throw exception if year is not a number", function() {
            assert.throw(() => library.calcPriceOfBook("Anna Karenina", {}), "Invalid input");
        });

        it("should return is less than 1980", function() {
            assert.equal(library.calcPriceOfBook("Anna Karenina", 1950), "Price of Anna Karenina is 10.00");
        });

        it("should return is equal to 1980", function() {
            assert.equal(library.calcPriceOfBook("Anna Karenina", 1980), "Price of Anna Karenina is 10.00");
        });

        it("should return price 20", function() {
            assert.equal(library.calcPriceOfBook("Anna Karenina", 1990), "Price of Anna Karenina is 20.00");
        });
    });

    describe("findBook Tests", function() {
        it("should throw exception if array is empty", function() {
           assert.throw(() => library.findBook([], "1949"), "No books currently available");
        });

        it("should return found", function() {
            assert.equal(library.findBook(["Anna Karenina", "1949"], "Anna Karenina"), "We found the book you want.");
        });

        it("should return is not found", function() {
            assert.equal(library.findBook(["1949"], "Anna Karenina"), "The book you are looking for is not here!");
        });

    });

    describe("arengeBooks Tests", function() {
        it("should throw exception if not a number", function() {
           assert.throw(() => library.arrangeTheBooks("1949"), "Invalid input");
        });

        it("should throw exception if is less than zero", function() {
            assert.throw(() => library.arrangeTheBooks(-3), "Invalid input");
         });

        it("should return arrange equal", function() {
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.");
        });

        it("should return arrange if is less", function() {
            assert.equal(library.arrangeTheBooks(3), "Great job, the books are arranged.");
        });

        it("should return is not found", function() {
            assert.equal(library.arrangeTheBooks(50), "Insufficient space, more shelves need to be purchased.");
        });

    });
     
});
