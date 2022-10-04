function printDeckOfCards(cards) {
    function createCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = { 'S': '\u2660 ', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' };

        if (faces.indexOf(face) === -1 || !suits.hasOwnProperty(suit)) {
            throw new Error("Error");
        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }
    
    let result = [];
    let create = createCard;
    for(let i = 0; i < cards.length; i++) {
        try {
            if(cards[i].length === 3) {
                let firstPart = cards[i].slice(0,2);
                result.push(create(firstPart, cards[i][2]));
            } else {
                result.push(create(cards[i][0], cards[i][1]));
            }
        } catch (error) {
            console.log(`Invalid card: ${cards[i]}`);
            return;
        }
    }

    console.log(result.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);