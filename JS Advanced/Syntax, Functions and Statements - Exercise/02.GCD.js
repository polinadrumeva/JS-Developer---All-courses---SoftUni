function GCD(first, second) {
    let divisor = 0;
    for(let i = 0; i <= second; i++) {
        if(first % i == 0 && second % i == 0) {
            if(i > divisor) {
                divisor = i;
            }
        }
    }

    console.log(divisor);
}

GCD(15, 5);
GCD(2154, 458);
