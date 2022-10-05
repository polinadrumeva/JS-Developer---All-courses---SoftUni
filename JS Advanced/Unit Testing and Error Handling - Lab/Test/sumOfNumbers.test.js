const {expect} = require('chai');
const { sum } = require("../04. Sum of Numbers");


describe('sum', () => {
    it('should return correct sum', () => {
        let array = [1, 2, 3];
        let result = sum(array);
        expect(result).to.be.equal(6);
    })
});