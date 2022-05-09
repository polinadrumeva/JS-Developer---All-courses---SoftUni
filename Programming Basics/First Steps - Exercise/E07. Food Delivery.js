function foodDelivery(input)
{
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let veganMenu = 8.15;
    let delivery = 2.50;

    let numberOfChichkenMenu = Number(input[0]);
    let numberOfFishMenu = Number(input[1]);
    let numberOfVeganMenu = Number(input[2]);
    let desert = ((chickenMenu * numberOfChichkenMenu) + (fishMenu * numberOfFishMenu) + (veganMenu * numberOfVeganMenu)) * 0.20;
    let total = (chickenMenu * numberOfChichkenMenu) + (fishMenu * numberOfFishMenu) + (veganMenu * numberOfVeganMenu) + desert + delivery;
    console.log(total);
}

foodDelivery();