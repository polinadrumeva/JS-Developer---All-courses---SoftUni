function convertRadansToDegrees(input)
{
    let radius = Number(input[0]);
    let degrees = radius * 180 / Math.PI;
    console.log(degrees);
}

convertRadansToDegrees();