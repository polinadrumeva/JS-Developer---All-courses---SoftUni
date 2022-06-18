function stand (input) {
    let leftDay = 5;
    let perDay = Number(input[0]);
    let moneyPerDay = Number(input[1]);
    let spend = Number(input[2]);
    let priceToSurprise = Number(input[3]);

    let result = ((perDay * leftDay) + (moneyPerDay * leftDay)) - spend;
    if (result >= priceToSurprise) {
        console.log(`Profit: ${result.toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        console.log(`Insufficient money: ${(priceToSurprise-result).toFixed(2)} BGN.`);
    }
}

stand();
