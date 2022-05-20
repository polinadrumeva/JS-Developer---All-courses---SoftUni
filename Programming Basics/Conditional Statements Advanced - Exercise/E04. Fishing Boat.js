function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numberOfPeople = Number(input[2]);

    let priceForSpring = 3000;
    let priceSummerAndAutumn = 4200;
    let priceForWinter = 2600;
    let discount = 0; 
    let total = 0;

    if (numberOfPeople <= 6) {
        discount = 0.10;
    } else if (numberOfPeople <= 11) {
        discount = 0.15;
    } else {
        discount = 0.25;
    }

    if (numberOfPeople % 2 == 0 && season != "Autumn") {
        discount += 0.05;
    }

    switch(season) {
        case"Spring":
        total = priceForSpring - (priceForSpring * discount);
        break;
        case"Summer":
        case"Autumn":
        total = priceSummerAndAutumn - (priceSummerAndAutumn * discount);
        break;
        case"Winter":
        total = priceForWinter - (priceForWinter * discount);
        break;
    }


    if (budget >= total) {
        console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`);
    }
}

fishingBoat();

