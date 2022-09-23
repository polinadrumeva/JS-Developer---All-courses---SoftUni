function factory(input) {
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    let hatchback = { type: 'hatchback', color: "" };
    let coupe =  { type: 'coupe', color: "" };

    let result = {};
    result.model = input.model;
    if(input.power <= 90) {
        result.engine = smallEngine;
    } else if (input.power > 90 && input.power <= 120) {
        result.engine = normalEngine;
    } else if (input.power >= 200) {
        result.engine = monsterEngine;
    }

    if(input.carriage == 'hatchback') {
        result.carriage = hatchback;
        result.carriage.color = input.color;
    } else if (input.carriage == 'coupe') {
        result.carriage = coupe;
        result.carriage.color = input.color;
    }

    let wheel = 0;
    if(input.wheelsize % 2 === 0) {
        wheel = input.wheelsize - 1;
    } else {
        wheel = input.wheelsize;
    }

    result.wheels = [wheel, wheel, wheel, wheel];

    return result;
}

factory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);

factory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);