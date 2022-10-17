let {assert} = require('chai');
const flowerShop = require('./flowerShop');

describe("Flowers Tests", function() {
    describe("Calculate price tests", function() {
        it("should throw exception if is not a string", function() {
            assert.throw(() => flowerShop.calcPriceOfFlowers({}, 2, 3), 'Invalid input!');
        });
        it("should throw exception if is not a integer first", function() {
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 1.4, 3), 'Invalid input!');
        });
        it("should throw exception if is not a integer second", function() {
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 2, 3.2), 'Invalid input!');
        });
        it("should throw exception if is not a integer first2", function() {
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', {}, 3), 'Invalid input!');
        });
        it("should throw exception if is not a integer second2", function() {
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 2, []), 'Invalid input!');
        });
        it("should return correct price", function() {
            assert.equal(flowerShop.calcPriceOfFlowers('rose', 2, 3), 'You need $6.00 to buy rose!');
        });
     });
    
     describe("Check available tests", function() {
        it("should return available more than zero", function() {
            assert.equal(flowerShop.checkFlowersAvailable('rose', ['lilium', 'dracena', 'rose']), 'The rose are available!');
        });
        it("should return available more equal zero", function() {
            assert.equal(flowerShop.checkFlowersAvailable('rose', ['rose', 'lilium', 'dracena']), 'The rose are available!');
        });
        it("should return sold", function() {
            assert.equal(flowerShop.checkFlowersAvailable('rose', ['lilium', 'dracena']), 'The rose are sold! You need to purchase more!');
        });
        it("should return sold if array is empty", function() {
            assert.equal(flowerShop.checkFlowersAvailable('rose', []), 'The rose are sold! You need to purchase more!');
        });
        it("should return sold if string is empty", function() {
            assert.equal(flowerShop.checkFlowersAvailable('', ['lilium', 'dracena']), 'The  are sold! You need to purchase more!');
        });
     });

    describe("Sell tests", function() {
        it("should throw exception if is not array", function() {
            assert.throw(() => flowerShop.sellFlowers({}, 1), 'Invalid input!');
        });
        it("should throw exception if is not number", function() {
            assert.throw(() => flowerShop.sellFlowers(['rose'], {}), 'Invalid input!');
        });
        it("should throw exception if is not integer", function() {
            assert.throw(() => flowerShop.sellFlowers(['rose'], 3.2), 'Invalid input!');
        });
        it("should throw exception if number is less than zero", function() {
            assert.throw(() => flowerShop.sellFlowers(['rose'], -3), 'Invalid input!');
        });
        it("should throw exception if number is bigger than length", function() {
            assert.throw(() => flowerShop.sellFlowers(['rose'], 3), 'Invalid input!');
        });
        it("should return correct data", function() {
            assert.equal(flowerShop.sellFlowers(['rose', 'lilium', 'mac'], 1), 'rose / mac');
        });
       
     });
});
