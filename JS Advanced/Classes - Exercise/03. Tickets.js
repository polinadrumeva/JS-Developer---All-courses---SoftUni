function tickets (array, criteria) {
    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];

    for(let i = 0; i < array.length; i ++) {
        let current = array[i].split('|');
        let currentTicket = new Ticket(current[0], Number(current[1]), current[2]);
        result.push(currentTicket);
    }

    if(criteria === 'destination') {
        result = result.sort((a,b) => a.destination.localeCompare(b.destination));
    } else if (criteria === 'price') {
        result = result.sort((a,b) => a.price - b.price);
    } else if (criteria === 'status') {
        result = result.sort((a,b) => a.status.localeCompare(b.status));
    }

    return result;

}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));