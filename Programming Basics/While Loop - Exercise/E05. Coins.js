function coins (input) {
    let SUM2LEVA = 2.00;
    let SUM1LEV = 1.00;
    let SUM50ST = 0.50;
    let SUM20ST = 0.20;
    let SUM10ST = 0.10;
    let SUM5ST = 0.05;
    let SUM2ST = 0.02;
    let SUM1ST = 0.01;

    let change = Number(input[0]);
    let past = change;
    let coins = 0;
    let index = 0;

    while (past >= SUM2LEVA)
    {
        past -= SUM2LEVA;
        past = past.toFixed(2);
        coins++;
    }
    while (past >= SUM1LEV)
    {
        past -= SUM1LEV;
        past = past.toFixed(2);
        coins++;
    }
    while (past >= SUM50ST)
    {
        past -= SUM50ST;
        past = past.toFixed(2);
        coins++;
    }
    while (past >= SUM20ST)
    {
        past -= SUM20ST;
        past = past.toFixed(2);
        coins++;
    }
    while (past >= SUM10ST)
    {
        past -= SUM10ST;
        past = past.toFixed(2);
        coins++;
    }
    while (past >= SUM5ST)
    {
        past -= SUM5ST;
        past = past.toFixed(2);
        coins++;
    }
    while (past >= SUM2ST)
    {
        past -= SUM2ST;
        past = past.toFixed(2);
        coins++;
    }
    while (past >= SUM1ST)
    {
        past -= SUM1ST;
        coins++;
    }

    if (past === '0.00' || past === '0')
    {
        console.log(coins);
    }

}

coins(["3"])

