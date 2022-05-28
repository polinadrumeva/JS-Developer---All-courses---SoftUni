function tennisRanklist (input) {

    let numberOfTour = Number(input[0]);
    let startPoint = Number(input[1]);
    let total = 0;
    let total1 = 0;
    let medium = 0;
    let procent = 0;

    for (let i = 2; i < numberOfTour + 2; i++) {
        let partOfTour = input[i];
        switch (partOfTour){
            case "W":
                total1 += 2000;
                procent = ((total1/2000) / numberOfTour) * 100;
                break;
            case "F":
                total += 1200;
                break;
            case "SF":
                total += 720;
                break;
        }
    }
    total += total1 + startPoint;
    medium = (total - startPoint) / numberOfTour;
    console.log(`Final points: ${total}`);
    console.log(`Average points: ${Math.floor(medium)}`);
    console.log(`${procent.toFixed(2)}%`);
}

tennisRanklist();


