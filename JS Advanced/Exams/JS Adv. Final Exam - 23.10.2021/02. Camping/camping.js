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

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

