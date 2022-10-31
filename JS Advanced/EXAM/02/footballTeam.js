class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName; 
        this.country = country; 
        this.invitedPlayers = [];
        this.names = [];
    }

    newAdditions(footballPlayers) {
        
        for(let i = 0; i < footballPlayers.length; i++) {
            let currentPlayer = footballPlayers[i].split('/');
            let name = currentPlayer[0];
            let age = currentPlayer[1];
            let playerValue = currentPlayer[2];

            let searchedPlayer = this.invitedPlayers.find(x=> x.name === name);
            if(searchedPlayer) {
                if(searchedPlayer.playerValue < playerValue) {
                    searchedPlayer.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({name, age, playerValue});
                this.names.push(name);
            }

        }

        return `You successfully invite ${this.names.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let current = selectedPlayer.split('/');
        let name = current[0];
        let offer = current[1];

        let searchedPlayer = this.invitedPlayers.find(x=> x.name === name);
        if(!searchedPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        let priceDifference = searchedPlayer.playerValue - offer;
        if(offer < searchedPlayer.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        searchedPlayer.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${searchedPlayer.name} for ${offer} million dollars.`;
    }

    ageLimit(name, age) {
        let searchedPlayer = this.invitedPlayers.find(x=> x.name === name);
        if(!searchedPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (searchedPlayer.age >= age) {
            return `${name} is above age limit!`;
        } else if(searchedPlayer.age < age) {
            let ageDifference = age - searchedPlayer.age;
            if(ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
    }

    transferWindowResult() {
        let result = '';
        result += `Players list:\n`;
        let sortedPlayer = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));
        for (let player of sortedPlayer) {
            result += `Player ${player.name}-${player.playerValue}\n`;
        }

        return result.trimEnd();
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
//  console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52", "Kylian Mbappé/23/170"]));

//  let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
