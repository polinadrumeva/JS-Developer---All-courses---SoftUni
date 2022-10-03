function add(a) {
    let sum = a;
    function added(b) {
        sum += b;
        return added;
    }

    added.toString = function() {return sum };
    return added;
}

add(1);
add(1)(6)(-3);