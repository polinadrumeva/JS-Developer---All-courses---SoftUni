const {assert} = require('chai');
const bookSelection = require('./bookSelection');

describe("Book Selection Tests", function() {
    describe("isGenreSuitable tests", function() {

        it("should return suitable", function() {
           assert.equal(bookSelection.isGenreSuitable('Thriller', 15), 'Those books are suitable');
        });
        it("should return suitable2", function() {
            assert.equal(bookSelection.isGenreSuitable('Romantic', 11), 'Those books are suitable');
         });
        it("should return book", function() {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 11), 'Books with Thriller genre are not suitable for kids at 11 age');
        });
        it("should return book2", function() {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), 'Books with Thriller genre are not suitable for kids at 12 age');
        });
        it("should return book3", function() {
            assert.equal(bookSelection.isGenreSuitable('Horror', 11), 'Books with Horror genre are not suitable for kids at 11 age');
        });
        it("should return book4", function() {
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), 'Books with Horror genre are not suitable for kids at 12 age');
        });
    });

    describe("isItAffordable tests", function() {

        it("should throw exception if first is not a number", function() {
           assert.throw(() => bookSelection.isItAffordable('Thriller', 15), 'Invalid input');
        });
        it("should throw exception if second is not a number", function() {
            assert.throw(() => bookSelection.isItAffordable(15, 'Thriller'), 'Invalid input');
        });
        it("should return dont have enought money", function() {
            assert.equal(bookSelection.isItAffordable(20, 15), "You don't have enough money");
        });
        it("should return book bought", function() {
            assert.equal(bookSelection.isItAffordable(20.50, 150.30), "Book bought. You have 129.8$ left");
        });
       
    });

    describe("suitableTitles tests", function() {

        it("should throw exception if is not an array", function() {
           assert.throw(() => bookSelection.suitableTitles({}, 'second'), 'Invalid input');
        });
        it("should throw exception if is not a string", function() {
            assert.throw(() => bookSelection.suitableTitles([], 2), 'Invalid input');
        });
        it("should return correct data", function() {
            assert.deepEqual(bookSelection.suitableTitles([{title: 'Anna Karenina', genre: 'Romantic'}, {title: 'Love Story', genre: 'Romantic'}, {title: 'Puh', genre: 'Kids'},
            {title: 'It', genre: 'Thriller'}], 'Romantic'), [ 'Anna Karenina', 'Love Story' ]);
        });
        
    });
     
});
