function exam (input) {
    let numOfStudents = Number(input[0]);
    let index = 0;
    let firstGroup = 0;
    let secondtGroup = 0;
    let thirdGroup = 0;
    let fourthGroup = 0;
    let average = 0;

    for(let i = 0; i < numOfStudents; i++) {
        index++;
        let grade = Number(input[index]);
        if (grade < 3) {
            fourthGroup++;
            average += grade;
        } else if (grade >= 3 && grade < 4) {
            thirdGroup++;
            average += grade;
        }
        else if (grade >= 4 && grade < 5) {
            secondtGroup++;
            average += grade;
        }
        else if (grade >= 5) {
            firstGroup++;
            average += grade;
        }
    }
    
    let averageResult = average / numOfStudents;
    console.log(`Top students: ${((firstGroup/numOfStudents) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((secondtGroup/numOfStudents)* 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((thirdGroup/numOfStudents)* 100).toFixed(2)}%`);
    console.log(`Fail: ${((fourthGroup/numOfStudents)* 100).toFixed(2)}%`);
    console.log(`Average: ${averageResult.toFixed(2)}`);
}

exam ();
