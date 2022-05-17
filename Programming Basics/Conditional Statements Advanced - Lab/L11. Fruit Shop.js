function printPriceOfFruits(input){
    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let total = 0;

    if (day == "Monday" ||day == "Tuesday" ||day == "Wednesday" ||day == "Thursday" ||day == "Friday") {
        switch(product) {
            case"banana":
            total = quantity * 2.50;
            break;
            case"apple":
            total = quantity * 1.20;
            break;
            case"orange":
            total = quantity * 0.85;
            break;
            case"grapefruit":
            total = quantity * 1.45;
            break;
            case"kiwi":
            total = quantity * 2.70;
            break;
            case"pineapple":
            total = quantity * 5.50;
            break;
            case"grapes":
            total = quantity * 3.85;
            break;
            default:
                console.log("error");
                return;
        }
    } else if (day == "Saturday" ||day == "Sunday") {
        switch(product) {
            case"banana":
            total = quantity * 2.70;
            break;
            case"apple":
            total = quantity * 1.25;
            break;
            case"orange":
            total = quantity * 0.90;
            break;
            case"grapefruit":
            total = quantity * 1.60;
            break;
            case"kiwi":
            total = quantity * 3.00;
            break;
            case"pineapple":
            total = quantity * 5.60;
            break;
            case"grapes":
            total = quantity * 4.20;
            break;
            default:
                console.log("error");
                return;
        }
    } else {
        console.log("error");
        return;
    }

    console.log(total.toFixed(2));
}

printPriceOfFruits();


