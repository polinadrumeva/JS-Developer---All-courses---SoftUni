function sumOfNumbers(input) {

    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let numCombination = 0;
    let result = 0;

    for (let i = startInterval; i <= endInterval; i++)
    {
       
        for (let j = startInterval; j <= endInterval; j++)
        {
            numCombination++;
            result = i + j;

            if (result === magicNumber)
            {
               console.log(`Combination N:${numCombination} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }

        
    }
    if (result !== magicNumber)
    {
       console.log(`${numCombination} combinations - neither equals ${magicNumber}`);
    }
}

sumOfNumbers();
