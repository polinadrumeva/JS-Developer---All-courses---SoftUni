function solve(input) {
    let type = typeof(input);
    
    if (type === 'number') {
        let radius = Number(input);
        let area = Math.PI * (radius * radius);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

solve(5);