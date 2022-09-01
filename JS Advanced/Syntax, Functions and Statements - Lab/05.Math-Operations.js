function solve(first, second, sign) {
    
    let result;
    if (sign === '+') {
        result = first + second;
    } else if (sign === '-') {
        result = first - second;
    }  else if (sign === '*') {
        result = first * second;
    } else if (sign === '/') {
        result = first / second;
    } else if (sign === '%') {
        result = first % second;
    } else if (sign === '**') {
        result = first ** second;
    }

    console.log(result);
}

solve(3, 5.5, '*');