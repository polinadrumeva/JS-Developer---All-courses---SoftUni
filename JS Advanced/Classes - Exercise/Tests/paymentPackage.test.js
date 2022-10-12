let {assert} = require('chai');
const PaymentPackage = require('../12. Payment Package');

describe("PaymentPackage", function() {
    it("should throw exception if name is not a string", function() {
        assert.throw(() => new PaymentPackage(3, 10), 'Name must be a non-empty string');
    });
    
    it("should throw exception if name is empty string", function() {
        assert.throw(() => new PaymentPackage("", 10), 'Name must be a non-empty string');
    });

    it("should return correct name", function() {
        let package = new PaymentPackage("Tests", 10);
        assert.equal(package.name, 'Tests');
    });
    
    it("should throw exception if value is not a number", function() {
        assert.throw(() => new PaymentPackage('Tests', 'name'), 'Value must be a non-negative number');
    });
    
    it("should throw exception if value is a negative number", function() {
        assert.throw(() => new PaymentPackage("Tests", -10), 'Value must be a non-negative number');
    });

    it("should return correct value", function() {
        let package = new PaymentPackage("Tests", 10);
        assert.equal(package.value, 10);
    });

    it("should return correct vat", function() {
        let package = new PaymentPackage("Tests", 10);
        assert.equal(package.VAT, 20);
    });

    it("should return correct vat2", function() {
        let package = new PaymentPackage("Tests", 10);
        
        assert.equal(package.VAT = 20, 20);
    });

    it("should throw exception if value is not a number", function() {
        let package = new PaymentPackage("Tests", 10);
        assert.throw(() => package.VAT = "name", 'VAT must be a non-negative number');
    });

    it("should throw exception if value is a negative number", function() {
        let package = new PaymentPackage("Tests", 10);
        assert.throw(() => package.VAT = -10, 'VAT must be a non-negative number');
    });
});
