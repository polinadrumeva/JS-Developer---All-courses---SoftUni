function accountBalance (input) {
    let command = input[0];
    let total = 0;
    let index = 0;

    while (command != "NoMoreMoney") {
        let sum = Number(command);
        if (sum < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${sum.toFixed(2)}`);
        total += sum;
        index++;
        command = input[index];
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance();
