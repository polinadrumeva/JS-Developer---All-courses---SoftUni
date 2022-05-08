function petShop(input)
{
    let dogFood = 2.50;
    let catFood = 4;

    let numbersOfBagForDog = input[0];
    let numbersOfBagForCat = input[1];

    let result = (dogFood * numbersOfBagForDog) + (catFood * numbersOfBagForCat);
    console.log(`${result} lv.`);
}

petShop();