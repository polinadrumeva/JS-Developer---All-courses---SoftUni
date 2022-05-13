function calculateTime(input)
{
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let resultMinutes = minutes + 15;

    if(resultMinutes > 59)
    {
        hours++;
        resultMinutes -= 60;
    }
    if(hours > 23)
    {
        hours = 0;
    }
    
    if(resultMinutes < 10)
    {
        console.log(`${hours}:0${resultMinutes}`);
    }
    else if (resultMinutes >= 10)
    {
        console.log(`${hours}:${resultMinutes}`);
    }
    
}

calculateTime();