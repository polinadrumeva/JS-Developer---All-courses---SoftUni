function password (input) {
    let name = input[0];
    let password = input[1];

    let command = input[2];
    let index = 3;
    while (command !== password) {
        command = input[index];
        index++;
    }

    console.log(`Welcome ${name}!`);
}

password();
