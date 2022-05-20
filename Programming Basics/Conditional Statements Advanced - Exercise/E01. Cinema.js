function cinemaTicket (input) {
    let typeOfProjection = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let priceForTicket = 0;

    switch(typeOfProjection){
        case"Premiere":
        priceForTicket = 12;
        break;
        case"Normal":
        priceForTicket = 7.50;
        break;
        case"Discount":
        priceForTicket = 5;
        break;
    }

    let total = rows * cols * priceForTicket;
    console.log(`${total.toFixed(2)} leva`)
}

cinemaTicket();

