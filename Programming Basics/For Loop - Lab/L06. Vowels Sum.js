function vowelSum (input) {
    let text = input[0];
   
    let sum = 0;
    for(let j = 0; j < text.length; j ++) {
        if (text[j] == 'a') {
            sum += 1; 
        } else if (text[j] == 'e') {
            sum += 2;
        } else if (text[j] == 'i') {
            sum += 3;
        }else if (text[j] == 'o') {
            sum += 4;
        }else if (text[j] == 'u') {
            sum += 5;
        }
    }

    console.log(sum);
}

vowelSum();