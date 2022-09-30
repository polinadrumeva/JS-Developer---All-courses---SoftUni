let area = function area() {
    return Math.abs(this.x * this.y);
};

let vol = function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    input = JSON.parse(input);
    let result = [];
    for(let current of input) {
        let areaFunc = area.call(current);
        let volFunc = vol.call(current);
        result.push({area: areaFunc, volume: volFunc },);
    }

    console.log(result);
}

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    );

solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
    );
