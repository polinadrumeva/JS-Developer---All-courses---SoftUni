function areaOfFigures(input)
{
    let shape = input[0];
    let side = Number(input[1]);
    let result = 0;

    if(shape == "square")
    {
        result = side * side;
    }
    else if (shape == "rectangle")
    {
        let length = Number(input[2]);
        result = side * length;
    }
    else if (shape == "circle")
    {
        result = Math.PI * (side * side);
    }
    else if (shape == "triangle")
    {
        let anotherside = Number(input[2]);
        result = (side * anotherside) / 2;
    }

    console.log(result.toFixed(3));
}

areaOfFigures();