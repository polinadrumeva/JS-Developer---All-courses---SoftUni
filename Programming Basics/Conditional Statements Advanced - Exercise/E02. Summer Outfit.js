function takeAClothes(input) {
    let temperature = Number(input[0]);
    let partOfDay = input[1];
    let clothes = ""; 
    let shoes = "";

    if (temperature >= 10 && temperature <= 18) {
        switch (partOfDay) {
            case"Morning":
            clothes = "Sweatshirt";
            shoes = "Sneakers";
            break;
            case"Afternoon":
            case"Evening":
            clothes = "Shirt";
            shoes = "Moccasins";
            break;
            
        }
    } else if (temperature > 18 && temperature <= 24) {
        switch (partOfDay) {
            case"Afternoon":
            clothes = "T-Shirt";
            shoes = "Sandals";
            break;
            case"Morning":
            case"Evening":
            clothes = "Shirt";
            shoes = "Moccasins";
            break;
            
        }
    } else if (temperature >= 25) {
        switch (partOfDay) {
            case"Morning":
            clothes = "T-Shirt";
            shoes = "Sandals";
            break;
            case"Afternoon":
            clothes = "Swim Suit";
            shoes = "Barefoot";
            break;
            case"Evening":
            clothes = "Shirt";
            shoes = "Moccasins";
            break;
            
        }
    }

    console.log(`It's ${temperature} degrees, get your ${clothes} and ${shoes}.`)
}

takeAClothes();
