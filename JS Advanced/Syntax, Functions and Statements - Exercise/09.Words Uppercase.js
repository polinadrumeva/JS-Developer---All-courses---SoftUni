function search(input) {
    let pattern = /([A-Za-z]+)/g;
    let words = [...input.matchAll(pattern)];
   
}

search('Hi, how are you?');
