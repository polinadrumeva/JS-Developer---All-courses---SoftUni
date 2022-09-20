function calories(input) {
    let obj = {};
    for(let i = 0; i < input.length - 1; i+=2) {
       
            let key = input[i];
            let value = Number(input[i + 1]);
            obj[key] = value;
        
    }

    console.log(obj);
}

calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);