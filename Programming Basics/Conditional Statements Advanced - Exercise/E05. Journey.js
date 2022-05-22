function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let typeOfHoliday = "";
    let sum = 0;

    switch(season) {
        case"summer":
        if (budget <= 100) {
            sum = budget * 0.30;
            destination = "Bulgaria";
            typeOfHoliday = "Camp";
        } else if (budget > 100 && budget <= 1000) {
            sum = budget * 0.40;
            destination = "Balkans";
            typeOfHoliday = "Camp";
        } else if (budget > 1000) {
            sum = budget * 0.90;
            destination = "Europe";
            typeOfHoliday = "Hotel";
        }
        break;
        case"winter":
        if (budget <= 100) {
            sum = budget * 0.70;
            destination = "Bulgaria";
            typeOfHoliday = "Hotel";
        } else if (budget > 100 && budget <= 1000) {
            sum = budget * 0.80;
            destination = "Balkans";
            typeOfHoliday = "Hotel";
        } else if (budget > 1000) {
            sum = budget * 0.90;
            destination = "Europe";
            typeOfHoliday = "Hotel";
        }
        break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfHoliday} - ${sum.toFixed(2)}`);
}

journey();