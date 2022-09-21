function construction(input) {
    let obj = input;
    if(obj.dizziness) {
        let sum = 0.1 * obj.weight * obj.experience;
        obj.levelOfHydrated += sum;
        obj.dizziness = false;
    }

 return obj;
}

construction({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );

construction({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
    );

construction({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
);