const {expect} = require('chai');
const { isSymmetric } = require('../05. Check for Symmetry');

describe('checkSymmetry', () => {
    it('should return false if is not an array', () => {
        let array = 'string';
        let result = isSymmetric(array);
        expect(result).to.be.false;
    });


    it('should return false if arent equals', () => {
        let array = [1,2,3];
        let result = isSymmetric(array);
        expect(result).to.be.false;
    });

    it('should return true if are equals', () => {
        let array = [3,2,3];
        let result = isSymmetric(array);
        expect(result).to.be.true;
    });
});