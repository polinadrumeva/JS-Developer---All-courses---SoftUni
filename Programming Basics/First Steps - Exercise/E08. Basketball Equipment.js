function calculateEquipment(input)
{
    let taxPerYear = Number(input[0]);
    let shoes = taxPerYear - (taxPerYear * 0.40);
    let clothes = shoes - (shoes * 0.20);
    let ball = clothes / 4;
    let accesories = ball / 5;
     
    let total = taxPerYear + shoes + clothes + ball + accesories;
    console.log(total);
}

calculateEquipment();

