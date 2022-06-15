function walking (input) {

    let step = input[0];
    let counterStep = 0;
    let index = 0;

    while (counterStep < 10000) {
         if (step === "Going home") {
            index++;
            step = input[index];
            counterStep += Number(step);
            if (counterStep >= 10000) {
                console.log("Goal reached! Good job!");
                console.log(`${counterStep - 10000} steps over the goal!`);
                break;
            } else {
                console.log(`${10000 - counterStep} more steps to reach goal.`); 
                break;
            }
        }

        counterStep += Number(step);

        if (counterStep >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${counterStep - 10000} steps over the goal!`);
            break;
        }
        index++;       
        step = input[index];
    }
}

walking();
