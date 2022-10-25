let {assert} = require('chai');
const testNumbers = require('./testNumbers');

describe("TestNumber Tests", function() {
    describe("sumNumbers tests", function() {
        it("should return undefined if firts is not a number", function() {
            assert.equal(testNumbers.sumNumbers({}, 2), undefined);
        });
        it("should return undefined if second is not a number", function() {
            assert.equal(testNumbers.sumNumbers(2, []), undefined);
        });
        it("should return correct data", function() {
            assert.equal(testNumbers.sumNumbers(2, 3), 5.00);
        });
    });

     describe("numberChecker tests", function() {
        it("should throw exception if is not a number", function() {
            assert.throw(() => testNumbers.numberChecker('string'), 'The input is not a number!');
        });
        it("should return if is even", function() {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!');
        });
        it("should return if is odd", function() {
            assert.equal(testNumbers.numberChecker(3), 'The number is odd!');
        });
      
    });
    
    describe("averageSum tests", function() {
        it("should return correct sum", function() {
            assert.equal(testNumbers.averageSumArray([1, 2, 3, 4, 5]), 3);
        });
       
    });
    
});
