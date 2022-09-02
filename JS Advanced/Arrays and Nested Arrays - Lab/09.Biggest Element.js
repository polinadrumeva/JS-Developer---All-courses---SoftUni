function solve(input) {
    
    var biggestNum = Number.NEGATIVE_INFINITY;
   
    for(var i=0; i<input.length; i++) {
      for(var j=0; j<input[i].length; j++) {
        if(biggestNum < input[i][j]) {
        biggestNum = input[i][j]; }
        }
    }

    console.log(biggestNum);
}

 
 

solve([[20, 50, 10],
    [8, 33, 145]]
   );