class SummerCamp { 
    constructor(organizer, location) {
        this.organizer = organizer; 
        this.location = location; 
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        let searcedCondition = Object.keys(this.priceForTheCamp).find(x => x === condition);
        if(!searcedCondition) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        if(this.listOfParticipants.find(x=> x.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if(searcedCondition < money) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({name, condition, power: 100, wins: 0} );
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let searchedParticipant = this.listOfParticipants.find(x => x.name === name);
        if(!searchedParticipant) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            this.listOfParticipants.pop(searchedParticipant);
            return `The ${name} removed successfully.`;
        }
    }

    timeToPlay(typeOfGame, ...params) {
        let [firstPlayer, secondPlayer] = params;
        let first = this.listOfParticipants.find(x=>x.name === firstPlayer);
        let second = this.listOfParticipants.find(x=>x.name === secondPlayer);
        if(!first || !second && typeOfGame === 'WaterBalloonFights') {
            throw new Error(`Invalid entered name/s.`);
        }
        if (typeOfGame === 'Battleship') {
            first.power += 20;
            return `The ${firstPlayer} successfully completed the game ${typeOfGame}.`;
        } else if (typeOfGame === 'WaterBalloonFights') {
            if(first.condition !== second.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if(first.power > second.power) {
                first.wins++;
                return `The ${first.name} is winner in the game ${typeOfGame}.`;
            } else if (first.power < second.power){
                second.wins++;
                return `The ${second.name} is winner in the game ${typeOfGame}.`;
            }else {
                return `There is no winner.`;
            }
        }
    }

    toString() {
        let result = '';
        result += `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (let element of sorted) {
            result += `${element.name} - ${element.condition} - ${element.power} - ${element.wins}\n`;
        }

        return result.trimEnd();
    }
}


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

try{
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString()); 
} catch(er) {
    console.log(er.message);
}
