function sorting(input) {
    let result = input.sort((a,b) => {
        if(a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });

    console.log(result.join("\n"));
  
}

sorting(['alpha', 
'beta', 
'gamma']
);

sorting(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);

sorting(['test', 
'Deny', 
'omen', 
'Default']
);