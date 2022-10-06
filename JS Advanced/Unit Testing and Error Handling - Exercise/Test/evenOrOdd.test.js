const {expect} = require('chai');
const { isOddOrEven } = require('../02. Even Or Odd');

describe('isOddOrEven', () => {
    it('should return undefined if not a string', () => {
        expect(isOddOrEven(5)).to.be.undefined;
    });

    it('should return undefined for array if not a string', () => {
        expect(isOddOrEven(['see', 'you'])).to.be.undefined;
    });

    it('should return even', () => {
        expect(isOddOrEven('seen')).to.be.equal('even');
    });

    it('should return odd', () => {
        expect(isOddOrEven('see')).to.be.equal('odd');
    });

    it('should return true information', () => {
        expect(isOddOrEven('see you soon')).to.be.equal('even');
    });
    
});
