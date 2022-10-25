let {assert} = require('chai');
const companyAdministration = require('./companyAdministration');


describe("Company Tests", function() {
    describe("hiring Emplooyees test", function() {
        it("should return if position is programmer and years are more than 3", function() {
            assert.equal(companyAdministration.hiringEmployee('Polina', 'Programmer', 4), 'Polina was successfully hired for the position Programmer.');
        });
        it("should return if position is programmer and years are equal to 3", function() {
            assert.equal(companyAdministration.hiringEmployee('Polina', 'Programmer', 3), 'Polina was successfully hired for the position Programmer.');
        });
        it("should return if position is programmer not approved", function() {
            assert.equal(companyAdministration.hiringEmployee('Polina', 'Programmer', 2), 'Polina is not approved for this position.');
        });
        it("should throw exception if is not programmer", function() {
            assert.throw(() => companyAdministration.hiringEmployee('Polina', 'Worker', 2), 'We are not looking for workers for this position.');
        });
    });
     
    describe("calculate Salary test", function() {
        it("should throw exception if is not a number", function() {
            assert.throw(() => companyAdministration.calculateSalary('string'), 'Invalid hours');
        });
        it("should throw exception if number is less then zero", function() {
            assert.throw(() => companyAdministration.calculateSalary(-2), 'Invalid hours');
        });
        it("should return if hours is more than 160", function() {
            assert.equal(companyAdministration.calculateSalary(170), 3550);
        });
        it("should return if hours is less than 160", function() {
            assert.equal(companyAdministration.calculateSalary(100), 1500);
        });
    });

    describe("fired Emplooyees test", function() {
        it("should throw exception if is not an array", function() {
            assert.throw(() => companyAdministration.firedEmployee({}, 2), 'Invalid input');
        });
        it("should throw exception if index is not an integer", function() {
            assert.throw(() => companyAdministration.firedEmployee(['Peter', 'Maria'], 1.4), 'Invalid input');
        });
        it("should throw exception if index is less than zero", function() {
            assert.throw(() => companyAdministration.firedEmployee(['Peter', 'Maria'], -2), 'Invalid input');
        });
        it("should throw exception if index is bigger than array length", function() {
            assert.throw(() => companyAdministration.firedEmployee(['Peter', 'Maria'], 3), 'Invalid input');
        });
        it("should return correct result", function() {
            assert.deepEqual( companyAdministration.firedEmployee(['Peter', 'Maria', 'Georgi'], 2), 'Peter, Maria');
        });
    });
});
