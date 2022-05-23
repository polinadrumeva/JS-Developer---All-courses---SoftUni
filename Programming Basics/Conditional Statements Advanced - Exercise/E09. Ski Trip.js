function skiTrip (input) {
    let days = Number(input[0]);
    let typeRoom = input[1];
    let grade = input[2];
    let roomForOne = 18;
    let apartment = 25;
    let presidentApartment = 35;
    let sum = 0;
    let discount = 0;

    switch(typeRoom) {
        case"apartment":
        if (days < 10) {
            discount = 0.30;
        } else if (days >= 10 && days <= 15) {
            discount = 0.35;
        } else if (days > 15) {
            discount = 0.50;
        }
        break;
        case"president apartment":
        if (days < 10) {
            discount = 0.00;
        } else if (days >= 10 && days <= 15) {
            discount = 0.15;
        } else if (days > 15) {
            discount = 0.20;
        }
        break;
    }

    if (typeRoom == "room for one person") {
        sum = (days - 1) * roomForOne;
    } else if (typeRoom == "apartment") {
        sum = ((days - 1) * apartment) - (((days -1) * apartment) * discount);
    } else if (typeRoom == "president apartment") {
        sum = ((days - 1) * presidentApartment) - (((days -1) * presidentApartment) * discount);
    }

    if (grade == "positive") {
        sum += sum * 0.25;
    } else if (grade == "negative") {
        sum -= sum * 0.10;
    }

    console.log(sum.toFixed(2));
}

skiTrip();

