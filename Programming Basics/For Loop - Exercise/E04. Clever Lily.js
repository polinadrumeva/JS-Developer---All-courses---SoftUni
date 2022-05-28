function cleverLily (input) {
    let n = Number(input[0]);
    let priceWashmachine = Number(input[1]);
    let priceToy = Number(input[2]);
    let money = 0;
    let moneySum = 0;
    let toys = 0;
    let sum = 0;

    for (let i = 1; i <= n; i++) {

       if (i % 2 == 0){
            money += 10;
            moneySum += money;
            moneySum -= 1;
        } else {
            toys += 1;
        }
    }

    sum = (toys * priceToy) + moneySum;

    if (priceWashmachine <= sum) {
        console.log(`Yes! ${(sum - priceWashmachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashmachine-sum).toFixed(2)}`);
    };
}

cleverLily();
