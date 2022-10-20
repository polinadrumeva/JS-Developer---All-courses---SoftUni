class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if(this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if(!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if(this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let diff = this.resources - (time * 10);
        if(diff < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= time * 10;
        this.listOfHikes.push({peak, time, difficultyLevel});
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        if(this.resources + time * 10 >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        this.resources += time * 10;
        return `You have rested for ${time} hours and gained ${time*10}% resources`;

    }

    showRecord(criteria) {
        let sorted = [];
        let result = '';
       
        if(this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if(criteria === 'hard') {
            let findCriteria = this.listOfHikes.find(x=> x.difficultyLevel === criteria);
            sorted = this.listOfHikes.sort((a,b) => a.difficultyLevel.localeCompare(b.difficultyLevel)).sort((a,b) => a.time - b.time);
            if(!findCriteria) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            return `${sorted[0].username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`
        } else if (criteria === 'easy') {
            let findCriteria = this.listOfHikes.find(x=> x.difficultyLevel === criteria);
            sorted = this.listOfHikes.sort((a,b) => a.difficultyLevel.localeCompare(b.difficultyLevel)).sort((a,b) => a.time - b.time);
            if(!findCriteria) {
              return `${this.username} has not done any ${criteria} hiking yet`;
            }
            return `${sorted[0].username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`
        } else if (criteria === 'all') {
            result += "All hiking records:\n";
            for (let element of this.listOfHikes) {
                result += `${this.username} hiked ${element.peak} for ${element.time} hours\n`;
            }

            return result.trimEnd();
        }
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
