(function solve() {
    String.prototype.ensureStart = function(str) {
        let result = '';
    if(!this.startsWith(str)) {
        return str + this;
    }
    return this;
    }

    String.prototype.ensureEnd = function(str) {
        let result = '';
    if(!this.endsWith(str)) {
        return this + str;
    }
    return this;
    }

    String.prototype.isEmpty = function() {
    if(this.length === 0) {
        return true;
    }
    return false;
    }

    String.prototype.truncate = function(n) {
        if (this.length <= n) {
            return this.toString();
        }
        if (n < 4) {
            return '.'.repeat(n);
        }

        let word = this.split(' ');
        while ((word.join(' ') + '...').length > n) {
            if (word.length > 1) {
                word.pop();
            } else {
                word[0] = word[0].slice(0, n - 3)
            }
        }
        return word.join(' ').trim() + '...';
    }

    String.format = function (str, ...params) {
        params.forEach((word, i) => str = str.replace(`{${i}}`.toString(), word));
        return str;
    }

})();


let str = 'my string';
str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)
str = str.ensureEnd('hello ');
console.log(str)

str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
