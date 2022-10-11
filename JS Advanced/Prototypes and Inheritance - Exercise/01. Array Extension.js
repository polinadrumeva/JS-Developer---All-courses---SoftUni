let array = [1, 2, 3];
Array.prototype.last = function() {
    return this[this.length - 1];
}

Array.prototype.skip = function(n) {
    let result = [];
    for(i = n; i < this.length; i++) {
        result.push(this[i]);
    }

    return result;
}

Array.prototype.take = function(n) {
    let result = [];
    for(i = 0; i < n; i++) {
        result.push(this[i]);
    }

    return result;
}

Array.prototype.sum = function() {
    let sum = 0;
    for(i = 0; i < this.length; i++) {
        sum += Number(this[i]);
    }

    return sum;
}

Array.prototype.average = function() {
  return this.sum() / this.length;
}

(function solve() {
    Array.prototype.last = function() {};
    Array.prototype.skip = function() {};
    Array.prototype.take = function() {};
    Array.prototype.sum = function() {};
    Array.prototype.average = function() {};
})()
