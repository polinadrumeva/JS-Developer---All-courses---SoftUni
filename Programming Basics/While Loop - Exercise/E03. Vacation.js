function vacation (input) {
    let moneyForVacation = Number(input[0]);
    let money = Number(input[1]);
    let action = input[2];
    let sum = Number(input[3]);
    let numDay = 0;
    let spendingDay = 0;
    let index = 3;

    while (moneyForVacation > money && spendingDay < 5) {
        numDay++;
        if (action === "spend") {
            money -= sum;
            spendingDay++;
            if (money < 0) {
                money = 0;
            }
        } else if (action === "save") {
            money += sum;
            spendingDay = 0;
        }
       
        if (spendingDay === 5) {
           console.log(`You can't save the money.`);
           console.log(`${numDay}`);
            break;

        }
        if (money >= moneyForVacation) {
            console.log(`You saved the money for ${numDay} days.`);
            break;

        }
        index++;
        action = input[index];
        index++;
        sum = Number(input[index]);
    }
}

vacation();

