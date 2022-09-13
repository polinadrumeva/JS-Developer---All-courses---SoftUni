function calculate(first, second, third) {
    let fruit = first;
    let grams = Number(second);
    let pricePerKg = Number(third);
    let kg = grams / 1000;

    let result = kg * pricePerKg;
    console.log(`I need $${result.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

calculate('apple', 1563, 2.35);