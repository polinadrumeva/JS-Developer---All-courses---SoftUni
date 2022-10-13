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

    it("should return correct data", function() {
        let package = new PaymentPackage("Tests", 10);
        assert.equal(package.name, 'Tests');
        assert.equal(package.value, 10);
    });

    it("should return correct vat", function() {
        let package = new PaymentPackage("Tests", 10);
        assert.equal(package.VAT, 20);
    });

    it("should return correct vat2", function() {
        let package = new PaymentPackage("Tests", 10);
        
        assert.equal(package.VAT = 40, 40);
    });

    it("should throw exception if value is not a number", function() {
        let package = new PaymentPackage("Tests", 10);
        assert.throw(() => package.VAT = "name", 'VAT must be a non-negative number');
    });

    it("should throw exception if value is a negative number", function() {
        let package = new PaymentPackage("Tests", 10);
        assert.throw(() => package.VAT = -10, 'VAT must be a non-negative number');
    });

    it("should return correct active", function() {
        let package = new PaymentPackage("Tests", 10);
        assert.equal(package.active, true);
    });

    it("should return correct active2", function() {
        let package = new PaymentPackage("Tests", 10);
        
        assert.equal(package.active = false, false);
    });

    it("should throw exception if value is not a boolean", function() {
        let package = new PaymentPackage("Tests", 10);
        assert.throw(() => package.active = "name", 'Active status must be a boolean');
    });

    it("should return correct toString", function() {
        let package = new PaymentPackage("Tests", 10);
        let actualString = package.toString();
        let expectedString = `Package: Tests\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12`;
        assert.equal(actualString, expectedString);
    });

    it("should return correct toString with false", function() {
        let package = new PaymentPackage("Tests", 10);
        package.active = false;
        let actualString = package.toString();
        let expectedString = `Package: Tests (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12`;
        assert.equal(actualString, expectedString);
    });
});
