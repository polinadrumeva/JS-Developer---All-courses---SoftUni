function histogram (input) {
    let numbers = Number(input[0]);
    let numbersp1 = 0;
    let numbersp2 = 0;
    let numbersp3 = 0;
    let numbersp4 = 0;
    let numbersp5 = 0;


    for(let i = 1; i <= numbers; i ++) {
        let number = Number(input[i]);
        if (number < 200) {
            numbersp1++;
        } else if (number >= 200 && number < 400) {
            numbersp2++;
        } else if (number >= 400 && number < 600) {
            numbersp3++;
        }else if (number >= 600 && number < 800) {
        numbersp4++;
        }else if (number >= 800) {
            numbersp5++;
        }
    }
        let p1 = numbersp1/numbers * 100;
        let p2 = numbersp2/numbers * 100;
        let p3 = numbersp3/numbers * 100;
        let p4 = numbersp4/numbers * 100;
        let p5 = numbersp5/numbers * 100;

        console.log(`${p1.toFixed(2)}%`);
        console.log(`${p2.toFixed(2)}%`);
        console.log(`${p3.toFixed(2)}%`);
        console.log(`${p4.toFixed(2)}%`);
        console.log(`${p5.toFixed(2)}%`);
}

histogram();
