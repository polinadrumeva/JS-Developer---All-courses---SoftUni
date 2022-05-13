function sumSeconds(input)
{
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let seconds = first + second + third;
    let minutes = 0;

    while(seconds >= 60)
    {
        minutes ++;
        if(minutes > 60)
        {
            minutes = 00;
        }
        seconds -= 60;

    }

    if(seconds < 10)
    {
        console.log(`${minutes}:0${seconds}`)
    }
    else 
    {
        console.log(`${minutes}:${seconds}`)
    }
}

sumSeconds();