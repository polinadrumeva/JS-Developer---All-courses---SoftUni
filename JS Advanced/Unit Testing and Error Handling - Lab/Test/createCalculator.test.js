const {expect} = require('chai');
const { createCalculator } = require('../07. Add Subtract');

describe('createCalculator', () => {
    it('should return object', () => {
        let result = createCalculator();
        
        expect(result).to.be.an('object');
    });

    it('should have initial sum', () => {
        let sum = createCalculator();
        expect(sum.get()).to.be.equal(0);
    });

    it('should add number correnctly', () => {
        let sum = createCalculator();
        sum.add(5);
        expect(sum.get()).to.be.equal(5);
    });

    it('should subtract number correnctly', () => {
        let sum = createCalculator();
        sum.subtract(1);
        expect(sum.get()).to.be.equal(-1);
    });
    it('should add str number correnctly', () => {
        let sum = createCalculator();
        sum.add('5');
        expect(sum.get()).to.be.equal(5);
    });
    
    it('should str subtract number correnctly', () => {
        let sum = createCalculator();
        sum.subtract('1');
        expect(sum.get()).to.be.equal(-1);
    });
    it('should return Nan subtract number', () => {
        let sum = createCalculator();
        sum.subtract('ruio');
        expect(sum.get()).to.be.NaN;
    });
    it('should return Nan add number', () => {
        let sum = createCalculator();
        sum.subtract('Leo');
        expect(sum.get()).to.be.NaN;
    });


})