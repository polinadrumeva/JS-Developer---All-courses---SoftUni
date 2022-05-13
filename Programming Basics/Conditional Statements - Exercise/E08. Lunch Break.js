function lunchBreak(input)
{
    let serial = input[0];
    let serialTime = Number(input[1]);
    let timeForBreak = Number(input[2]);

    let timeForLunch = timeForBreak / 8;
    let relaxTime = timeForBreak / 4;

    let restTime = timeForBreak - (timeForLunch + relaxTime);
    if(serialTime < restTime)
    {
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(restTime - serialTime)} minutes free time.`)
    }
    else
    {
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(serialTime - restTime)} more minutes.`);
    }
}

lunchBreak();
