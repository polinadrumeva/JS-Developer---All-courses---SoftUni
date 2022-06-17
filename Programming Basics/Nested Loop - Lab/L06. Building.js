function building (input) {
    let floor = Number(input[0]);
    let rooms = Number(input[1]);
    

            for (let i = floor; i > 0; i--) {
                let output = "";
                for (let j = 0; j < rooms; j++) {
                    if (i === floor){
                        output += `L${i}${j} `;
                    } else if (i % 2 === 0) {
                        output +=`O${i}${j} `;
                    } else if (i % 2 !== 0) {
                        output +=`A${i}${j} `;
                    }
                }
                console.log(output);
            }
}

building();