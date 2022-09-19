function tictac(input) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let firstPlayer = 'X';
    let secondPlayer = 'O';
    let isTheSamePalyer = false;
    let isHaveAWinner = false;

    for(let i = 1;i <= input.length; i++) {
        let turns = i;
        let cordinates = input[i-1];
        let choesenRow = cordinates[0];
        let choosenCol = cordinates[2];

        let choosenCell = dashboard[choesenRow][choosenCol];

        let currentTurn = i;

        if(dashboard.some( x => x !== false) && turns == 10) {
            console.log("The game ended! Nobody wins :(");
            break;
        }
        
        if(choosenCell !== false) {
            currentTurn++;
            isTheSamePalyer = true;
            console.log("This place is already taken. Please choose another!");
            continue;
        } else {
            if (currentTurn % 2 !== 0) {
                dashboard[choesenRow][choosenCol] = firstPlayer;
                isTheSamePalyer = false;
            }
            else if (currentTurn % 2 === 0)  {
                dashboard[choesenRow][choosenCol] = secondPlayer;
                isTheSamePalyer = false;
            }

           
            for (let i = 0; i < 3; i++) {
                if(dashboard[i][0] == 'X' && dashboard[i][1] == 'X' && dashboard[i][2] == 'X' || dashboard[0][i] == 'X' && dashboard[1][i] == 'X' && dashboard[2][i] == 'X' || 
                dashboard[0][0] == 'X' && dashboard[1][1] == 'X' && dashboard[2][2] == 'X' || dashboard[2][0] == 'X' && dashboard[1][1] == 'X' && dashboard[0][2] == 'X') {
                    console.log(`Player ${firstPlayer} wins!`);
                    isHaveAWinner = true;
                    if(isHaveAWinner) {
                        break;
                    }
                } else if ((dashboard[i][0] == 'O' && dashboard[i][1] == 'O' && dashboard[i][2] == 'O' || dashboard[0][i] == 'O' && dashboard[1][i] == 'O' && dashboard[2][i] == 'O' || 
                dashboard[0][0] == 'O' && dashboard[1][1] == 'O' && dashboard[2][2] == 'O' || dashboard[2][0] == 'O' && dashboard[1][1] == 'O' && dashboard[0][2] == 'O')) {
                    console.log(`Player ${secondPlayer} wins!`);
                    isHaveAWinner = true;
                    if(isHaveAWinner) {
                        break;
                    }
                }
               
            }

        }

        if(isHaveAWinner) {
            break;
        }
    }

    for(let row = 0; row < dashboard.length; row++) {
        console.log(dashboard[row].join("\t").trim());
    //    if(row !== dashboard.length - 1) {
    //     console.log();
    //    }
    }
    
}

tictac(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);

tictac(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);

tictac(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);