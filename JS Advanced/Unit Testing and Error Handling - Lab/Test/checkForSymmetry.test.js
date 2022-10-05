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
    
    it('should return false on isSymmetric(["2",2])', () => {
        expect(isSymmetric(["2", 2])).to.be.false;
    });

   
    it('should return true on isSymmetric([2])', () => {
        expect(isSymmetric([2])).to.be.true;
    });

    
    it('should return true on isSymmetric([])', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('should return true on isSymmetric([[1,2], [2], [1,2]])', () => {
        expect(isSymmetric([[1,2], [2], [1,2]])).to.be.true;
    });
});