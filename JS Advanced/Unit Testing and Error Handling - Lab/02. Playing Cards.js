function playing(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {'S': '\u2660 ', 'H': '\u2665', 'D': '\u2666', 'C':'\u2663'};

    if(faces.indexOf(face) === -1 || !suits.hasOwnProperty(suit)) {
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


    playing('10', 'K').toString();
    playing('10', 'H').toString();
    playing('1', 'C').toString();