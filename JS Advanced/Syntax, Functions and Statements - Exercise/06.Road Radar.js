function road(first, second) {
    let speed = Number(first);
    let area = second;

    if(area == 'motorway' && speed <= 130) {
        console.log(`Driving ${speed} km/h in a 130 zone`);
    } else if (area == 'motorway' && speed > 130) {
        let status = '';
        let difference = speed - 130;
        if(difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
        } else if (difference > 40) {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`)
    }
    if(area == 'interstate' && speed <= 90) {
        console.log(`Driving ${speed} km/h in a 90 zone`);
    } else if (area == 'interstate' && speed > 90) {
        let status = '';
        let difference = speed - 90;
        if(difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
        } else if (difference > 40) {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`)
    }
    if(area == 'city' && speed <= 50) {
        console.log(`Driving ${speed} km/h in a 50 zone`);
    } else if (area == 'city' && speed > 50) {
        let status = '';
        let difference = speed - 50;
        if(difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
        } else if (difference > 40) {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`)
    }
    if(area == 'residential' && speed <= 20) {
        console.log(`Driving ${speed} km/h in a 20 zone`);
    } else if (area == 'residential' && speed > 20) {
        let status = '';
        let difference = speed - 20;
        if(difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
        } else if (difference > 40) {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`)
    }
}

road(40, 'city');
road(21, 'residential');
road(120, 'interstate');
road(200, 'motorway');
