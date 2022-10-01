function cars(data) {

    const current = {}

    let innerFunc = {
        create: (n, inherits, n2) =>
            (current[n] = inherits ? Object.create(current[n2]) : {}),
        set: (n, k, v) => (current[n][k] = v),
        print: n => {
            const result = []
            for (const key in current[n]) {
                result.push(`${key}:${current[n][key]}`)
            }
            console.log(result.join(","))
        },
    }

     for (let el of data) {
         let [command, name, key, value] = el.split(' ');
         innerFunc[command](name, key, value);
     }
 
 }

 cars(['create c1',
 'create c2 inherit c1',
 'set c1 color red',
 'set c2 model new',
 'print c1',
 'print c2']
 );
