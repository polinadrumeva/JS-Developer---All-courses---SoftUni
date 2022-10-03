function calculator() {
    let selector1;
    let selector2;
    let resultSelector;
    let action = {
        init: (firstSelector, secondSelector, result) => {
            selector1 = document.querySelector(firstSelector);
            selector2 = document.querySelector(secondSelector);
            resultSelector = document.querySelector(result);
        },
        add: () => {
            let firstNum = Number(selector1.value);
            let secondNum = Number(selector2.value);
            let sum = firstNum + secondNum;
            resultSelector.value = sum;
        },
        subtract: () => {
            let firstNum = Number(selector1.value);
            let secondNum = Number(selector2.value);
            let sum = firstNum - secondNum;
            resultSelector.value = sum;
        }
    }

    return action;
}


const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 


