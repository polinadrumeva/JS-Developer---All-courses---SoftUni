function onTime(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let examMinTotal = hourExam * 60 + minExam;
    let arrivalMinTotal = hourArrive * 60 + minArrive;
    let difference = Math.abs(examMinTotal - arrivalMinTotal);

    if (examMinTotal >= arrivalMinTotal && examMinTotal - arrivalMinTotal <= 30) {
           console.log("On time");
            if(examMinTotal !== arrivalMinTotal) {
                console.log(`${difference} minutes before the start`)
            } else {
                console.log("");
            }
        }
    else if (examMinTotal > arrivalMinTotal && examMinTotal - arrivalMinTotal > 30) {
           console.log("Early");
            if(difference >= 60) {
                console.log(`${Math.trunc(difference / 60)}:${String(difference % 60).padStart(2, '0')} hours before the start`);
            } else {
                console.log(`${difference % 60} minutes before the start`);
            } 
    }
    else {
           console.log("Late");
            if (difference >= 60) {
                console.log(`${Math.trunc(difference / 60)} : ${String(difference % 60).padStart(2, '0')} hours after the start`);
            } else {
                console.log(`${difference % 60} minutes after the start`);
            }
    }
           
}

onTime();


