function excursion (input) {
    let numOfPeople = Number(input[0]);
    let season = input[1];

    let discountSummer = 0.15;
    let moreWinter = 0.08;
    let result = 0;

    switch(season) {
        case"spring":
        if (numOfPeople <= 5) {
            result = 50 * numOfPeople;
        } else {
            result = 48 * numOfPeople;
        }
        break;
        case"winter":
        if (numOfPeople <= 5) {
            result = 86 * numOfPeople;
        } else {
            result = 85 * numOfPeople;
        }
        result += result * moreWinter;
        break;
        case"summer":
        if (numOfPeople <= 5) {
            result = 48.50 * numOfPeople;
        } else {
            result = 45 * numOfPeople;
        }
        result -= result * discountSummer;
        break;
        case"autumn":
        if (numOfPeople <= 5) {
            result = 60* numOfPeople;
        } else {
            result = 49.50 * numOfPeople;
        }
        break;
    }

    console.log(`${result.toFixed(2)} leva.`)
}

excursion();

