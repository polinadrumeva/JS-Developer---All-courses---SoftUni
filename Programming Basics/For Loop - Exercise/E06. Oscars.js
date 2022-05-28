function salary (input) {
    let nameActor = input[0];
    let pointFromAcademy = Number(input[1]);
    let numOfTeacher = Number(input[2]);
    let total = 0;
    for (let i = 3; i < numOfTeacher * 2 + 3; i+=2) {
        let nameOfTeacher = input[i];
        let pointFromTeacher = Number(input[i + 1]);
        total += (nameOfTeacher.length * pointFromTeacher) / 2;

        if ((total + pointFromAcademy) > 1250.50) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${(total + pointFromAcademy).toFixed(1)}!`);
            break;
        }
    }
    if ((total + pointFromAcademy) < 1250.50) {
        console.log(`Sorry, ${nameActor} you need ${(1250.50 - (total + pointFromAcademy)).toFixed(1)} more!`);
    }
}

salary(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])



