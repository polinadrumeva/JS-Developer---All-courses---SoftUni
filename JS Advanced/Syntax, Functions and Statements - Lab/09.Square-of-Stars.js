function solve(input = 5) {
    let num = Number(input);
    const star = '*';
    if (num === ' ' || num === null || num === 0) {
        for(let i = 0; i < 5; i++) {
           console.log(`${star.repeat(5).trim()}`);
        }
    } else {
        for(let i = 0; i < num; i++) {
            console.log(`${star.repeat(num).trim()}`);
        }
    }
    
}
solve(6);