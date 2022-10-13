let {assert} = require('chai');
const StringBuilder = require('../13. String Builder');


describe("StringBuilder", function() {
    it("should throw exception if input is not a string", function() {
       assert.throw(() => new StringBuilder(2), 'Argument must be a string');
    });

    it("should return array from string", function() {
        let actual = new StringBuilder('name');
        let actualString = actual._stringArray;
        assert.deepEqual(actualString, ['n','a','m','e']);
    });

    it("should return empty array", function() {
        let actual = new StringBuilder(undefined);
        let actualString = actual._stringArray;
        assert.deepEqual(actualString, []);
    });

    it("should return empty array2", function() {
        let actual = new StringBuilder('');
        let actualString = actual._stringArray;
        assert.deepEqual(actualString, []);
    });

    it("should throw exception if append-string is not a string", function() {
        let array = new StringBuilder('name');

        assert.throw(() => array.append({}), 'Argument must be a string');
    });
   
    it("should return append array", function() {
        let actual = new StringBuilder('name');
        actual.append('hey');
        assert.deepEqual(actual._stringArray, ['n','a','m','e', 'h', 'e', 'y']);
    });

    it("should throw exception if prepend-string is not a string", function() {
        let array = new StringBuilder('name');

        assert.throw(() => array.prepend([]), 'Argument must be a string');
    });
   
    it("should return prepend array", function() {
        let actual = new StringBuilder('name');
        actual.prepend('hey');
        assert.deepEqual(actual._stringArray, ['h', 'e', 'y','n','a','m','e']);
    });

    it("should throw exception if insertAt-string is not a string", function() {
        let array = new StringBuilder('name');

        assert.throw(() => array.insertAt(2, 2), 'Argument must be a string');
    });
   
    it("should return insertAt array", function() {
        let actual = new StringBuilder('name');
        actual.prepend('he', 1);
        assert.deepEqual(actual._stringArray, ['h','e','n','a','m','e']);
    });

    it("should return remove array", function() {
        let actual = new StringBuilder('name');
        actual.remove(0, 2);
        assert.deepEqual(actual._stringArray, ['m','e']);
    });

    it("should return toString array", function() {
        let actual = new StringBuilder('name');
        actual.append('to');
        let actualString = actual.toString();
        let expectedString = 'nameto';

        assert.equal(actualString, expectedString);
    });
});
