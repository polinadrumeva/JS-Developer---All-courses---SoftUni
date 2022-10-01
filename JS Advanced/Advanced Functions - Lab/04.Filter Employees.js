function solve(data, criteria) {
    data = JSON.parse(data);
    let index = criteria.indexOf('-');
    let searched ='';
    if(index !== -1) {
        searched = criteria.substring(index + 1);
        criteria = criteria.substring(0, index);  
      }
        let counter = 0;

    for (let person of data) {
       
        if(criteria === 'id' && person.id === searched) {
            console.log(`${counter++}. ${person['first_name']} ${person['last_name']} - ${person.email}`);
        } else if (criteria === 'first_name' && person[criteria] === searched) {
            console.log(`${counter++}. ${person['first_name']} ${person['last_name']} - ${person.email}`);
        } else if (criteria === 'last_name' && person[criteria] === searched) {
            console.log(`${counter++}. ${person['first_name']} ${person['last_name']} - ${person.email}`);
        } else if (criteria === 'email' && person[criteria] === searched) {
            console.log(`${counter++}. ${person['first_name']} ${person['last_name']} - ${person.email}`);
        } else if (criteria === 'gender' && person[criteria] === searched) {
            console.log(`${counter++}. ${person['first_name']} ${person['last_name']} - ${person.email}`);
        } else if (criteria === 'all') {
            console.log(`${counter++}. ${person['first_name']} ${person['last_name']} - ${person.email}`);
        }
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'	
);