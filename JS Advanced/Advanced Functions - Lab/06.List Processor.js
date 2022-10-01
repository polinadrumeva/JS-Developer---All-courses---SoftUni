function prosecor(data) {

   
   let innerFunc = (function inner(){
        let result = [];
            return {
                add: (str) => result.push(str),
                remove: (str) => result = result.filter(x => x !== str),
                print: () => console.log(result.join(','))
            }
        
        
    })();
    for (let el of data) {
        let [command, name] = el.split(' ');
        innerFunc[command](name);
    }

}

prosecor(['add hello', 'add again', 'remove hello', 'add again', 'print']);