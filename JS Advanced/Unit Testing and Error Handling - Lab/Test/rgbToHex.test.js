const{expect} = require('chai');
const rgbToHexColor = require('../06. RGB to Hex');

describe('checkHEXColor', () => {
    it('should red return undefined if is not integer', () => {
        let result = rgbToHexColor(200.50, 200, 200);
        expect(result).to.be.equals(undefined);
    });
    it('should green return undefined if is not integer', () => {
        let result = rgbToHexColor(200, 200.50, 200);
        expect(result).to.be.equals(undefined);
    });
    it('should blue return undefined if is not integer', () => {
        let result = rgbToHexColor(200, 200, 200.50);
        expect(result).to.be.equals(undefined);
    });
    it('should red return undefined if is less than zero', () => {
        let result = rgbToHexColor(-200, 200, 200);
        expect(result).to.be.equals(undefined);
    });
    it('should green return undefined if is less than zero', () => {
        let result = rgbToHexColor(200, -200, 200);
        expect(result).to.be.equals(undefined);
    });
    it('should blue return undefined if is less than zero', () => {
        let result = rgbToHexColor(200, 200, -200);
        expect(result).to.be.equals(undefined);
    });
    it('should red return undefined if is bigger than 255', () => {
        let result = rgbToHexColor(260, 200, 200);
        expect(result).to.be.equals(undefined);
    });
    it('should green return undefined if is bigger than 255', () => {
        let result = rgbToHexColor(200, 260, 200);
        expect(result).to.be.equals(undefined);
    });
    it('should blue return undefined if is bigger than 255', () => {
        let result = rgbToHexColor(200, 200, 260);
        expect(result).to.be.equals(undefined);
    });
    it('should return correct data', () => {
        let result = rgbToHexColor(200, 200, 200);
        expect(result).to.be.equals('#C8C8C8');
    });
})