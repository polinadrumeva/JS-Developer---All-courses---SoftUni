function catDiet (input) {
    let maznini = Number(input[0]);
    let protein = Number(input[1]);
    let viglehidrate = Number(input[2]);
    let calories = Number(input[3]);
    let percentWater = Number(input[4]);

    let grMaz = (maznini * calories) /9;
    let grProtein = (protein * calories) /4;
    let grVugl = (viglehidrate * calories) /4;
    let grFood = grMaz + grProtein + grVugl;
    let caloriesPerGram = calories/grFood;
    let percentLeft = 100 - percentWater;
    let result = caloriesPerGram * percentLeft;
    console.log(result.toFixed(4));
}

catDiet();

