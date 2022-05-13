function toyShop(input)
{   
    let priceOfPuzzle = 2.60;
    let priceOfDoll = 3;
    let priceOfBear = 4.10;
    let priceOfMinion = 8.20;
    let priceOfTruck = 2;

    let priceForVacation = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalPrice = (priceOfPuzzle * puzzle) + (priceOfDoll * dolls) + (priceOfBear * bears) + (priceOfMinion * minions) + (priceOfTruck * trucks);

    let allToys = puzzle + dolls + bears + minions + trucks;
    if(allToys >= 50)
    {
        totalPrice -= totalPrice * 0.25;
    }

    totalPrice -= totalPrice * 0.10;

    if(totalPrice >= priceForVacation)
    {
        console.log(`Yes! ${(totalPrice-priceForVacation).toFixed(2)} lv left.`)
    }
    else 
    {
        console.log(`Not enough money! ${(priceForVacation - totalPrice).toFixed(2)} lv needed.`)
    }
}

toyShop();