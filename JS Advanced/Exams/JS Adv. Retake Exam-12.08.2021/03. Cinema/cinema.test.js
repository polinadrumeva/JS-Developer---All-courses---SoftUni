let {assert} = require('chai');
const cinema = require('./cinema');

describe("Cinema", function() {
    describe("showMovies tests", function() {
        it("should return if array is empty", function() {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.');
        });

        it("should return result-array", function() {
            assert.equal(cinema.showMovies(['Matrix', 'Love Story']), 'Matrix, Love Story');
        });
    });
     
    describe("ticketPrices tests", function() {
        it("should throw exception if projection doesn't exist", function() {
            assert.throw(() => cinema.ticketPrice('Junior'), 'Invalid projection type.');
        });

        it("should return result-premiere", function() {
            assert.equal(cinema.ticketPrice('Premiere'), 12.00);
        });
        it("should return result-normal", function() {
            assert.equal(cinema.ticketPrice('Normal'), 7.50);
        });
        it("should return result-discount", function() {
            assert.equal(cinema.ticketPrice('Discount'), 5.50);
        });
    });

    describe("swapSeats tests", function() {
        it("should return error message if is not a number first nummber", function() {
            let actualMessage = cinema.swapSeatsInHall({}, 2);
            assert.equal(actualMessage, 'Unsuccessful change of seats in the hall.');
        });

        it("should return error message if is not a number first nummber", function() {
            let actualMessage = cinema.swapSeatsInHall( undefined, 2);
            assert.equal(actualMessage, 'Unsuccessful change of seats in the hall.');
        });

        it("should return error message if number is less than zero - first nummber", function() {
            let actualMessage = cinema.swapSeatsInHall(-1, 2);
            assert.equal(actualMessage, 'Unsuccessful change of seats in the hall.');
        });

        it("should return error message if number is zero - first nummber", function() {
            let actualMessage = cinema.swapSeatsInHall(0, 2);
            assert.equal(actualMessage, 'Unsuccessful change of seats in the hall.');
        });

        it("should return error message if number is greater than 20 - first nummber", function() {
            let actualMessage = cinema.swapSeatsInHall(23, 2)
            assert.equal(actualMessage, 'Unsuccessful change of seats in the hall.');
        });

        it("should return error message if is not a number second nummber", function() {
            let actualMessage = cinema.swapSeatsInHall(2, []);
            assert.equal(actualMessage, 'Unsuccessful change of seats in the hall.');
        });

        it("should return error message if number is less than zero - second nummber", function() {
            let actualMessage = cinema.swapSeatsInHall(2, -2);
            assert.equal(actualMessage, 'Unsuccessful change of seats in the hall.');
        });

        it("should return error message if number is zero - second nummber", function() {
            let actualMessage = cinema.swapSeatsInHall(2, 0);
            assert.equal(actualMessage, 'Unsuccessful change of seats in the hall.');
        });

        it("should return error message if number is greater than 20 - second nummber", function() {
            let actualMessage = cinema.swapSeatsInHall(3, 23);
            assert.equal(actualMessage, 'Unsuccessful change of seats in the hall.');
        });

        it("should return error message if first are equal to second", function() {
            let actualMessage = cinema.swapSeatsInHall(3, 3);
            assert.equal(actualMessage, 'Unsuccessful change of seats in the hall.');
        });

        it("should successfully swap seats", function() {
            let actualMessage = cinema.swapSeatsInHall(3, 5);
            assert.equal(actualMessage, 'Successful change of seats in the hall.');
        });
    });
});
