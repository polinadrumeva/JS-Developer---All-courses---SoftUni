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
            let string = ''
            string += this.face + this.suit;
            console.log(string);
        }
    }
}


    playing('10', 'K').toString();
    //playing('10', 'H').toString();
    //playing('1', 'C').toString();



function solve(face, suit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }
    if (!validFaces.includes(face) || suits[suit] === 'undefined') {
        throw new Error('Error');
    }
 
    let card = {
        face,
        suit: suits[suit],
        toString() { console.log(this.face + this.suit) }
    }
    return card;
}