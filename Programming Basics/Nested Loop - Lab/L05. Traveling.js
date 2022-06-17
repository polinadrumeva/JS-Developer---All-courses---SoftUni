function traveling (input) {
   let index = 0;
    while (true) {
        let destination = input[index];
        if (destination === "End") {
            break;
        }
        index++;
        let budget = Number(input[index]);
        let sum = 0;
        let totalSum = 0;

        index++;
        while (destination !== "End") {
            while (totalSum < budget) {
                sum = Number(input[index]);
                totalSum += sum;
                index++;
            }
            
            console.log(`Going to ${destination}!`);
            break;

        }
    }
}

traveling();
