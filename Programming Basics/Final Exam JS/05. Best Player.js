function bestPlayer (input) {
    let index = 0;
    let bestPlayer = "";
    let goals = Number.MIN_SAFE_INTEGER;

    while (true) {
        let name = input[index];
        if (name === "END") {
            break;
        }

        index++;
        let goalsPerOne = Number(input[index]);
        index++;

        if (goalsPerOne > goals) {
            bestPlayer = name; 
            goals = goalsPerOne;
        }

        if (goalsPerOne >= 10) {
            break;
        }

    }

    console.log(`${bestPlayer} is the best player!`);
    if (goals >= 3) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${goals} goals.`);
    }
}

bestPlayer();

