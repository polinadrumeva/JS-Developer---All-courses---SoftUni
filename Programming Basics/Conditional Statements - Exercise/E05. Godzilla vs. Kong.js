function godzillaVsKong(input)
{
    let budjet = Number(input[0]);
    let numberOfStatists = Number(input[1]);
    let priceForOne = Number(input[2]);

    let decor = budjet * 0.10;
    if(numberOfStatists > 150)
    {
        priceForOne -= priceForOne * 0.10;
    }

    let total = (numberOfStatists * priceForOne) + decor;
    if(total > budjet)
    {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(total - budjet).toFixed(2)} leva more.`);
    }
    else
    {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budjet - total).toFixed(2)} leva left.`);
    }

}

godzillaVsKong();
