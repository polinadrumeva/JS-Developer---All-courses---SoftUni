function createProject(input)
{
    let name = input[0];
    let numbersOfProjects = input[1];
    let neededHours = numbersOfProjects * 3;

    console.log(`The architect ${name} will need ${neededHours} hours to complete ${numbersOfProjects} project/s.`);
}

createProject();
