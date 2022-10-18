let {assert} = require('chai');
const rentCar = require('./rentCar');


describe("Rent Car Tests", function() {
    describe("Search cars tests", function() {
        it("should throw exception if is not an array", function() {
           assert.throw(() => rentCar.searchCar(2, 'model'), 'Invalid input!');
        });
        it("should throw exception if is not a string", function() {
            assert.throw(() => rentCar.searchCar([], 2), 'Invalid input!');
         });
        it("should push in array", function() {
            assert.equal(rentCar.searchCar(['Lada', 'Moskvich', 'BMW'], 'Lada'), 'There is 1 car of model Lada in the catalog!');
        });
        it("should throw exception if car is not found", function() {
            assert.throw(() => rentCar.searchCar(['Lada', 'Moskvich', 'BMW'], 'Audi'), 'There are no such models in the catalog!');
         });
    });

    describe("Calculate price tests", function() {
        it("should throw exception if is not a string", function() {
           assert.throw(() => rentCar.calculatePriceOfCar(2, 2), 'Invalid input!');
        });
        it("should throw exception if is not a integer", function() {
            assert.throw(() => rentCar.calculatePriceOfCar('Lada', 2.3), 'Invalid input!');
        });
        it("should throw exception if is not a number", function() {
            assert.throw(() => rentCar.calculatePriceOfCar('Lada', {}), 'Invalid input!');
        });
        it("should throw exception if model is not found", function() {
            assert.throw(() => rentCar.calculatePriceOfCar('Lada', 2), 'No such model in the catalog!');
        });
        it("should return correct data", function() {
            assert.equal(rentCar.calculatePriceOfCar('Audi', 2), 'You choose Audi and it will cost $72!');
        });
       
     });

    describe("Check budget tests", function() {
        it("should throw exception if first is not a number", function() {
           assert.throw(() => rentCar.checkBudget({}, 2, 2), 'Invalid input!');
        });
        it("should throw exception if first is not a integer", function() {
            assert.throw(() => rentCar.checkBudget(1.2, 2, 2), 'Invalid input!');
         });
         it("should throw exception if second is not a number", function() {
            assert.throw(() => rentCar.checkBudget(2, [], 2), 'Invalid input!');
         });
        it("should throw exception if second is not a integer", function() {
             assert.throw(() => rentCar.checkBudget(1, 2.3, 2), 'Invalid input!');
        });
        it("should throw exception if third is not a number", function() {
            assert.throw(() => rentCar.checkBudget(2, 4, 'mol'), 'Invalid input!');
         });
        it("should throw exception if third is not a integer", function() {
             assert.throw(() => rentCar.checkBudget(1, 2, 2.2), 'Invalid input!');
        });
        it("should return rent car first equal", function() {
            assert.equal(rentCar.checkBudget(10, 2, 20), 'You rent a car!');
       });
       it("should return rent car second less", function() {
        assert.equal(rentCar.checkBudget(10, 2, 200), 'You rent a car!');
        });
        it("should return bigger budget", function() {
            assert.equal(rentCar.checkBudget(10, 2, 2), 'You need a bigger budget!');
        });
       
    });
    
});
