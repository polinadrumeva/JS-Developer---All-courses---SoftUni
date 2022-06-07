function moving (input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let command = input[3];
    let index = 3;
    let vBox = 0;
    let v = w * l * h;

    while (command !== "Done") {
        let numBox = Number(command);
        vBox += numBox;

        if (vBox >= v) {
            console.log(`No more free space! You need ${vBox-v} Cubic meters more.`);
            return;
        }

        index++;
        command = input[index];
    }

    console.log(`${v - vBox} Cubic meters left.`);
}

moving();
