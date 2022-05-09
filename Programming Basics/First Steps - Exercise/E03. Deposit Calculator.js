function depositCalculate(input)
{
    let deposit = Number(input[0]);
    let month = Number(input[1]);
    let percent = Number(input[2]) / 100;

    let total = deposit + month * ((deposit * percent) /12);
    console.log(total);
}

depositCalculate();
