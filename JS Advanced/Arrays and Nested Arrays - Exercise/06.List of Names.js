function print(input) {
    let list = input.sort((a,b) => a.localeCompare(b));

    for(let i = 0; i < list.length; i++) {
        console.log(`${i+1}.${list[i]}`);
    }
}

print(["John", "Bob", "Christina", "Ema"]);