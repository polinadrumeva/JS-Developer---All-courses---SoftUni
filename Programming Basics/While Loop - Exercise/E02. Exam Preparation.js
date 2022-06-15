function examPreparation(input) {
    let numBadGrade = Number(input[0]);
    let exam = input[1];
    let grade = Number(input[2]);
    let numBad = 0;
    let lastProblem = "";
    let sumOfgrade = 0;
    let numOfGrade = 0;
    let index = 2;

    while (numBadGrade !== numBad) {
        if (grade <= 4) {
            numBad++;
            if (numBad === numBadGrade) {
                console.log(`You need a break, ${numBad} poor grades.`);
                break;
            }
        }
        sumOfgrade += grade;
        numOfGrade++;
        index++;
        exam = input[index];

        if (exam === "Enough") {
            console.log(`Average score: ${(sumOfgrade/numOfGrade).toFixed(2)}`);
            console.log(`Number of problems: ${numOfGrade}`);
            console.log(`Last problem: ${lastProblem}`);
            return;
        }
        index++;
        grade = Number(input[index]);
        lastProblem = exam;
    }
}

examPreparation();

