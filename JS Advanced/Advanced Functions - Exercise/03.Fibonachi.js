function getFibonator() {
         let num1 = 0;
         let num2 = 1;
         let curInnerSum = 0;
         let count = 0;
    return function inner () {
        for (let i = 0; i <= 1; i++) {
            count++;
            curInnerSum = num1 + num2;
            num1 = num2;
            num2 = curInnerSum;
            if(count === ) {
                return 1;
            } else {
                return num2;
            }
            
        }
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
