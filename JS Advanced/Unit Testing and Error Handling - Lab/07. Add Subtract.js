function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

let sum = createCalculator();
console.log(sum.add(5));
console.log(sum.get());
console.log(sum.subtract('tru'));
console.log(sum.get());

module.exports = {createCalculator};