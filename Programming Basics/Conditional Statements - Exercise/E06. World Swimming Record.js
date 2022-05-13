function worldSwimmingRecord(input)
{
    let recordInSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let timeToIvan = distance * timeForOneMeter;
    let slowly = Math.floor(distance / 15) * 12.5;
    timeToIvan += slowly;
    

    if(timeToIvan < recordInSeconds)
    {
        console.log(`Yes, he succeeded! The new world record is ${timeToIvan.toFixed(2)} seconds.`);
    }
    else 
    {
        console.log(`No, he failed! He was ${(timeToIvan - recordInSeconds).toFixed(2)} seconds slower.`);
    }
    
}

worldSwimmingRecord();