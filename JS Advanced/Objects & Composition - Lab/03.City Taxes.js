function solve(name, population, treasury) {
   
    const city = {
        name, 
        population, 
        treasury, 
        taxRate: 10, 
        collectTaxes() { return this.treasury += this.population * this.taxRate }, 
        applyGrowth(percentage) {return this.population += (percentage * this.population) / 100}, 
        applyRecession(percentage) {return this.treasury -= (percentage * this.treasury) / 100}

    }

    return city;
    
}

solve();
