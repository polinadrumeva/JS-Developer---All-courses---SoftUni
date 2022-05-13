function calculateBonusScore(input)
{
    let number = Number(input[0]);
    let bonusScore = 0;
    if(number <= 100)
    {
        bonusScore = 5;
    }
    else if (number > 100 && number < 1000)
    {
        bonusScore = number * 0.20;
    }
    else if (number > 1000)
    {
        bonusScore = number * 0.10;
    }

    if(number % 2 == 0)
    {
        bonusScore += 1;
    }
    else if (number % 5 == 0)
    {
        bonusScore += 2;
    }

    console.log(bonusScore);
    console.log(number + bonusScore);
}

calculateBonusScore();