function buyAFlowers(input) {
    let rose = 5; 
    let dahlia = 3.80;
    let tilup = 2.80;
    let narcissus = 3;
    let gladiolus = 2.50;

    let typeOfFlowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let total = 0;

    switch (typeOfFlowers) {
        case"Roses":
        if (numberOfFlowers > 80) { 
            total = (rose * numberOfFlowers) - ((rose * numberOfFlowers) * 0.10);
        } else {
            total = rose * numberOfFlowers;
        }
        break;
        case"Dahlias":
        if (numberOfFlowers > 90) { 
            total = (dahlia * numberOfFlowers) - ((dahlia * numberOfFlowers) * 0.15);
        } else {
            total = dahlia * numberOfFlowers;
        }
        break;
        case"Tulips":
        if (numberOfFlowers > 80) { 
            total = (tilup * numberOfFlowers) - ((tilup * numberOfFlowers) * 0.15);
        } else {
            total = tilup * numberOfFlowers;
        }
        break;
        case"Narcissus":
        if (numberOfFlowers < 120) { 
            total = (narcissus * numberOfFlowers) + ((narcissus * numberOfFlowers) * 0.15);
        } else {
            total = narcissus * numberOfFlowers;
        }
        break;
        case"Gladiolus":
        if (numberOfFlowers < 80) { 
            total = (gladiolus * numberOfFlowers) + ((gladiolus * numberOfFlowers) * 0.20);
        } else {
            total = gladiolus * numberOfFlowers;
        }
        break;
    }

    if(total <= budget) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlowers} and ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    }
}

buyAFlowers();

