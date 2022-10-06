let {assert} = require('chai');
const { lookupChar } = require("../03. Char Lookup");

describe('lookupChar', () => {
    it('should return undefined if it is not a string', () =>{
        assert.equal(lookupChar([], 3), undefined);
    });

    it('should return undefined if it is not a number', () =>{
        assert.equal(lookupChar('seen', 'se'), undefined);
    });

    it('should return undefined if float number', () =>{
        assert.equal(lookupChar('seen', 4.3), undefined);
    });

    it('should return error if number is less than zero', () =>{
        assert.equal(lookupChar('seen', -1), 'Incorrect index');
    });

    it('should return error if number equal to length', () =>{
        assert.equal(lookupChar('seen', 4), 'Incorrect index');
    });

    it('should return error if number is bigger than length', () =>{
        assert.equal(lookupChar('seen', 6), 'Incorrect index');
    });

    it('should return correct data', () =>{
        assert.equal(lookupChar('seen', 2), 'e');
    });
})