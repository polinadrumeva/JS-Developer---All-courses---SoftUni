function trekingMania (input) {
    let numberOfGroup = Number(input[0]);
    let procentMusala = 0;
    let procentMonblan = 0;
    let procentCiliman = 0;
    let procentK2 = 0;
    let procentEverest = 0;
    let countMusala = 0;
    let countMonblan = 0;
    let countCiliman = 0;
    let countK2 = 0;
    let countEverest = 0;
    let total = 0;

    for (let i = 1; i < numberOfGroup + 1; i++) {
        let numberOfPeople = Number(input[i]);
        total += numberOfPeople;
        if (numberOfPeople <=5) {
           countMusala += numberOfPeople;
        } else if (numberOfPeople <=12) {
            countMonblan += numberOfPeople;
        } else if (numberOfPeople <= 25) {
            countCiliman += numberOfPeople;
        }else if (numberOfPeople <= 40) {
            countK2 += numberOfPeople;
        } else if (numberOfPeople > 40) {
            countEverest += numberOfPeople;
        }

        procentMusala = countMusala / total * 100;
        procentMonblan = countMonblan / total * 100;
        procentCiliman = countCiliman / total * 100;
        procentK2 = countK2 / total * 100;
        procentEverest = countEverest / total * 100;
        }
        console.log(`${procentMusala.toFixed(2)}%`);
        console.log(`${procentMonblan.toFixed(2)}%`);
        console.log(`${procentCiliman.toFixed(2)}%`);
        console.log(`${procentK2.toFixed(2)}%`);
        console.log(`${procentEverest.toFixed(2)}%`);

}

trekingMania();
