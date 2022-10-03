function calculator() {
    let selector1;
    let selector2;
    let resultSelector;
    return {
        init: (selector1, selector2, resultSelector) => {
            selector1 = document.getElementById(selector1);
            selector2 = document.getElementById(selector2);
            resultSelector = document.getElementById(resultSelector);
        }
        add: () => {
            let firstNum = Number(selector1.value);
            let secondNum = Number(selector2.value);
            let sum = firstNum + secondNum;
            resultSelector.value = sum;
        }
        subtract: () => {
            let firstNum = Number(selector1.value);
            let secondNum = Number(selector2.value);
            let sum = firstNum - secondNum;
            resultSelector.value = sum;
        }
    }
}


const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 


