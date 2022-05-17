function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let result = 0;

    switch(town) {
        case"Sofia":
        if (product == "coffee") {
            result = quantity * 0.50;
        } else if (product == "water") {
            result = quantity * 0.80;
        } else if (product == "beer") {
            result = quantity * 1.20;
        } else if (product == "sweets") {
            result = quantity * 1.45;
        } else if (product == "peanuts") {
            result = quantity * 1.60;
        }
        break;
        case"Plovdiv":
        if (product == "coffee") {
            result = quantity * 0.40;
        } else if (product == "water") {
            result = quantity * 0.70;
        } else if (product == "beer") {
            result = quantity * 1.15;
        } else if (product == "sweets") {
            result = quantity * 1.30;
        } else if (product == "peanuts") {
            result = quantity * 1.50;
        }
        break;
        case"Varna":
        if (product == "coffee") {
            result = quantity * 0.45;
        } else if (product == "water") {
            result = quantity * 0.70;
        } else if (product == "beer") {
            result = quantity * 1.10;
        } else if (product == "sweets") {
            result = quantity * 1.35;
        } else if (product == "peanuts") {
            result = quantity * 1.55;
        }
        break;
    }

    console.log(result);
}

smallShop();



