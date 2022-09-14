function search(input) {
    let pattern = /([A-Za-z]+)/g;
    let words = [...input.matchAll(pattern)];
    let upperWords = '';
   
    for(let i = 0; i < words.length; i++) {
       if (words.length == 1) {
        upperWords += `${words[i][0]} `;
       } else {
        if (i == words.length - 1) {
            upperWords += `${words[i][0]} `;
        } else {
            upperWords += `${words[i][0]}, `;
        }
       }
    }

    upperWords = upperWords.toUpperCase();
    console.log(upperWords);
}

search('Hi, how are you?');
search('hello');
