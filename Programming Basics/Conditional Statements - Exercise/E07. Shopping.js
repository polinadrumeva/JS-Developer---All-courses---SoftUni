function shopping(input)
{
   
    let budjet = Number(input[0]);
    let videocards = Number(input[1]);
    let procesors = Number(input[2]);
    let ramMemory = Number(input[3]);

    let priceForVDCard = 250;
    let priceForProcesor = (priceForVDCard * videocards) * 0.35;
    let priceForRamMemory = (priceForVDCard * videocards) * 0.10;
    let total = (priceForVDCard * videocards) + (priceForProcesor * procesors) + (priceForRamMemory * ramMemory);

    if(videocards > procesors)
    {
        total -= total * 0.15;
    }

    if(budjet >= total)
    {
        console.log(`You have ${(budjet - total).toFixed(2)} leva left!`);
    }
    else
    {
        console.log(`Not enough money! You need ${(total - budjet).toFixed(2)} leva more!`);
    }

}

shopping();
