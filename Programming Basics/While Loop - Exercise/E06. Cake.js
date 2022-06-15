function cake (input) {
    let w = Number(input[0]);
    let l = Number(input[1]);

    let holeCake = w * l;
    let numCake = input[2];
    let lastNumCake = 0;
    let index = 2;

    while (holeCake >= 0) {
        holeCake -= Number(numCake);
        lastNumCake += Number(numCake);
        
         if (holeCake <= 0) {
            console.log(`No more cake left! You need ${lastNumCake-(w*l)} pieces more.`);
            break;
        }
        
        index++;
        numCake = input[index];
        
        if (numCake === "STOP" && holeCake >= 0) {
            console.log(`${holeCake} pieces are left.`);
            break;
        }
    }
}

cake();
