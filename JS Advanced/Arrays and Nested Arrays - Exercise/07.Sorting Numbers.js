// function sorting(input) {
//     let array = input.sort((a,b) => a-b);
//     let result = [];
//     for(let i = 0; i < array.length / 2; i++) {
//         result.push(array[i]);
//         result.push(array[array.length - (i+ 1)]);
//     }
   
//     return result;
// }

 

function sorting(input){
    let result = [];
    let array = input.sort((a, b) => a - b);
    
    while(array.length !== 0){
      result.push(array[0]) && array.shift();
      result.push(array[array.length-1]) && array.pop();
    }
 console.log(result.join(' '));
 }



sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);