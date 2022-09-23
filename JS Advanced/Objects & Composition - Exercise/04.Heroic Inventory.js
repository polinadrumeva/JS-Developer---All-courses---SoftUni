function heroicInventory(input) {
    let result = [];

    for (let int of input) {
        let [name, level, items] = int.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];
        result.push({name, level, items});
    }

    return JSON.stringify(result);
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);