function fishTank(input)
{
    let lengh = Number(input[0]);
    let wight = Number(input[1]);
    let heght = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let area = lengh * wight * heght;
    let total = (area - (area * percent)) / 1000;
    console.log(total);
}

fishTank();