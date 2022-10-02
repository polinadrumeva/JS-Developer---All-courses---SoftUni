function add(a) {
    return function added(b) {
        return function addInner(c) {
            return a + b + c;
        }
    }
}

add(1);
add(1)(6)(-3);