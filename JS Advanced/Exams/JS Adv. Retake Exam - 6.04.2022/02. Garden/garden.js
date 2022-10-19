class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants= [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if(spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }
        this.spaceAvailable -= spaceRequired;
        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0});
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let searched = this.plants.find(x=> x.plantName === plantName);
        if(!searched) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (searched.ripe === true) {
             throw new Error(`The ${plantName} is already ripe.`);
        }
        if(quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        searched.ripe = true;
        searched.quantity += quantity;
        if(searched.quantity === 1) {
            return `${searched.quantity} ${searched.plantName} has successfully ripened.`;
        } else {
            return `${searched.quantity} ${searched.plantName}s have successfully ripened.`;
        }
        
    }

    harvestPlant(plantName) {
        let searched = this.plants.find(x=> x.plantName === plantName);
        if(!searched) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (searched.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let plantsName = searched.plantName;
        let quantity = searched.quantity;
        this.plants.pop(searched);
        this.storage.push({plantsName, quantity});
        return `The ${plantsName} has been successfully harvested.`;
    }

    generateReport() {
        let result = '';
        result += `The garden has ${this.spaceAvailable} free space left.\n`;
        let sorted = this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName));
        let plantsResult = [];
        for (let plant of sorted) {
            plantsResult.push(plant.plantName);
        }
        result += `Plants in the garden: ${plantsResult.join(", ")}\n`;
        if(this.storage.length === 0) {
            result += `Plants in storage: The storage is empty.`;
        } else {
            result += `Plants in storage: `
            for (let plant of this.storage) {
                result += `${plant.plantName} (${plant.quantity}), `;
            }  
        }

        return result.trim();
    }

}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
