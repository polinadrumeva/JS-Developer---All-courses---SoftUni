let {assert} = require('chai');
const chooseYourCar = require('./chooseYourCar');


describe("Choose your Car Tests", function() {
    describe("choosingType tests", function() {
        it("should throw exception if year is less than 1900", function() {
            assert.throw(() => chooseYourCar.choosingType('Sedan', 'red', 1876),'Invalid Year!');
        });
        it("should throw exception if year is bigger than 2022 ", function() {
            assert.throw(() => chooseYourCar.choosingType('Sedan', 'red', 2032),'Invalid Year!');
        });
        it("should throw exception if type is not Sedan", function() {
            assert.throw(() => chooseYourCar.choosingType('BMW', 'red', 2012),'This type of car is not what you are looking for.');
        });
        it("should return car if is sedan after 2010", function() {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2012),'This red Sedan meets the requirements, that you have.');
        });
        it("should return car if is sedan 2010", function() {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010),'This red Sedan meets the requirements, that you have.');
        });
        it("should return car if is sedan before 2010", function() {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2008),'This Sedan is too old for you, especially with that red color.');
        });
    });

    describe("brandName tests", function() {
        it("should throw exception if is not an array", function() {
            assert.throw(() => chooseYourCar.brandName({}, 2),'Invalid Information!');
        });
        it("should throw exception if number is double", function() {
            assert.throw(() => chooseYourCar.brandName([], 2.2),'Invalid Information!');
        });
        it("should throw exception if number is string", function() {
            assert.throw(() => chooseYourCar.brandName([], 'string'),'Invalid Information!');
        });
        it("should throw exception if number less than zero", function() {
            assert.throw(() => chooseYourCar.brandName([], -5),'Invalid Information!');
        });
        it("should throw exception if number is bigger than length", function() {
            assert.throw(() => chooseYourCar.brandName(['Tesla', 'BMW', 'Audi'], 4),'Invalid Information!');
        });
        it("should throw exception if number is equal to length", function() {
            assert.throw(() => chooseYourCar.brandName(['Tesla', 'BMW', 'Audi'], 3),'Invalid Information!');
        });
        it("should return correct data", function() {
            assert.equal(chooseYourCar.brandName(['Tesla', 'BMW', 'Audi'], 2),'Tesla, BMW');
        });
       
    });

    describe("carFuelConsumption tests", function() {
        it("should throw exception if first is not a number", function() {
            assert.throw(() => chooseYourCar.carFuelConsumption({}, 2),'Invalid Information!');
        });
        it("should throw exception if first is equal to zero", function() {
            assert.throw(() => chooseYourCar.carFuelConsumption(0, 2),'Invalid Information!');
        });
        it("should throw exception if first is less than zero", function() {
            assert.throw(() => chooseYourCar.carFuelConsumption(-5, 2),'Invalid Information!');
        });
        it("should throw exception if second is not a number", function() {
            assert.throw(() => chooseYourCar.carFuelConsumption(2, []),'Invalid Information!');
        });
        it("should throw exception if second is equal to zero", function() {
            assert.throw(() => chooseYourCar.carFuelConsumption(2, 0),'Invalid Information!');
        });
        it("should throw exception if second is less than zero", function() {
            assert.throw(() => chooseYourCar.carFuelConsumption(2, -45),'Invalid Information!');
        });
        it("should return enought if is less than 7 ", function() {
            assert.equal(chooseYourCar.carFuelConsumption(100, 1),'The car is efficient enough, it burns 1.00 liters/100 km.');
        });
        it("should return enought if is equal to 7 ", function() {
            assert.equal(chooseYourCar.carFuelConsumption(100, 7),'The car is efficient enough, it burns 7.00 liters/100 km.');
        });
        it("should return enought if is more than 7 ", function() {
            assert.equal(chooseYourCar.carFuelConsumption(100, 10),'The car burns too much fuel - 10.00 liters!');
        });
       
    });
    
});

