let {assert} = require('chai');
const carService = require('./03. Car Service_Resources');

describe("Car Service Tests", function() {
    describe("isItExpensive tests", function() {
        it("should return if is engine", function() {
           assert.equal(carService.isItExpensive('Engine'), 'The issue with the car is more severe and it will cost more money');
        });
        it("should return if is transmission", function() {
            assert.equal(carService.isItExpensive('Transmission'), 'The issue with the car is more severe and it will cost more money');
        });
        it("should return if is dissel", function() {
            assert.equal(carService.isItExpensive('Dissel'), 'The overall price will be a bit cheaper');
        });
    });

    describe("discount tests", function() {
        it("should throw exception if first is not a number", function() {
           assert.throw(() => carService.discount('Engine', 3), 'Invalid input');
        });
        it("should throw exception if second is not a number", function() {
            assert.throw(() => carService.discount(3, {}), 'Invalid input');
        });
        it("should return no discount if is less than 2", function() {
            assert.equal(carService.discount(1, 3), 'You cannot apply a discount');
        });
        it("should return no discount if is 2", function() {
            assert.equal(carService.discount(2, 3), 'You cannot apply a discount');
        });
        it("should return with discount betweeen 2 and 7 - first", function() {
            assert.equal(carService.discount(3, 10), 'Discount applied! You saved 1.5$');
        });
        it("should return with discount betweeen 2 and 7 - second", function() {
            assert.equal(carService.discount(7, 10), 'Discount applied! You saved 1.5$');
        });
        it("should return with discount more than 7", function() {
            assert.equal(carService.discount(9, 10), 'Discount applied! You saved 3$');
        });
    });

    describe("partsToBuy tests", function() {
        it("should throw exception if first is not an array", function() {
           assert.throw(() => carService.partsToBuy('Engine', []), 'Invalid input');
        });
        it("should throw exception if second is not an array", function() {
            assert.throw(() => carService.partsToBuy([], {}), 'Invalid input');
        });
        it("should return with correct data", function() {
            let parts = [{part:'Motor', price: 3}, {part:'Window', price: 30}, {part:'Radio', price: 15}];
            let needed = ['Radio', 'Window'];
            let result = carService.partsToBuy(parts, needed);
            assert.equal(result, 45);
        });
        it("should return 0", function() {
            let parts = [{part:'Motor', price: 3}, {part:'Window', price: 30}, {part:'Radio', price: 15}];
            let needed = ['Seat', 'Seatbell'];
            let result = carService.partsToBuy(parts, needed);
            assert.equal(result, 0);
        });
       
    });

});
