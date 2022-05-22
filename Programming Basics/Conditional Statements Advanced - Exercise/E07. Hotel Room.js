function checkRoom (input) {
    let month = input[0];
    let numberForNight = Number(input[1]);
    let sum = 0;
    let sumForApartment = 0;
    let discount = 0;
    switch(month) {
        case"May":
        case"October":
        if(numberForNight > 7 && numberForNight < 14) {
            sum = numberForNight * 50 - ((numberForNight * 50) * 0.05);
            console.log(`Apartment: ${(numberForNight * 65).toFixed(2)} lv.`);
            console.log(`Studio: ${sum.toFixed(2)} lv.`);
            
        } else if (numberForNight > 14) {
            sumForApartment = numberForNight * 65 - ((numberForNight * 65) * 0.10);
            console.log(`Apartment: ${sumForApartment.toFixed(2)} lv.`);
            sum = (numberForNight * 50) - ((numberForNight * 50) * 0.30);
            console.log(`Studio: ${sum.toFixed(2)} lv.`);
            
        } else {
            console.log(`Apartment: ${(numberForNight * 65).toFixed(2)} lv.`);
            console.log(`Studio: ${(numberForNight * 50).toFixed(2)} lv.`);
            
        }
        break;
        case"June":
        case"September":
        if (numberForNight > 14) {
            sumForApartment = numberForNight * 68.70 - ((numberForNight * 68.70) * 0.10);
            console.log(`Apartment: ${sumForApartment.toFixed(2)} lv.`);
            sum = numberForNight * 75.20 - ((numberForNight * 75.20) * 0.20);
            console.log(`Studio: ${sum.toFixed(2)} lv.`);
            
        } else {
            console.log(`Apartment: ${(numberForNight * 68.70).toFixed(2)} lv.`);
            console.log(`Studio: ${(numberForNight * 75.20).toFixed(2)} lv.`);
            
        }
        break;
        case"July":
        case"August":
         if (numberForNight > 14) {
            sumForApartment = numberForNight * 77 - ((numberForNight * 77) * 0.10);
            console.log(`Apartment: ${sumForApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${(numberForNight *76).toFixed(2)} lv.`);
           
        } else {
            console.log(`Apartment: ${(numberForNight * 77).toFixed(2)} lv.`);
            console.log(`Studio: ${(numberForNight * 76).toFixed(2)} lv.`);
            
        }
        break;
    }

}

checkRoom();

