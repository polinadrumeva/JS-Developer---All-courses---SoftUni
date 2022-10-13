function attachEventsListeners() {

    let buttonsElements = Array.from(document.querySelectorAll('input[type=button]'));
    for (let button of buttonsElements) {
        button.addEventListener('click', convert);
    }

    function convert(event) {
        let inputValueElement = Number(event.target.parentElement.querySelector('input[type=text]').value);
        let unitElement = event.target.id;

        switch(unitElement) {
            case'daysBtn': calculate(inputValueElement); break;
            case'hoursBtn':calculate(inputValueElement/24); break;
            case'minutesBtn':calculate(inputValueElement/24/60); break;
            case'secondsBtn':calculate(inputValueElement/24/60/60); break;
        }
    }

    function calculate(inputValueElement) {
        let inputsElements = Array.from(document.querySelectorAll('input[type=text]'));
        inputsElements.shift().value = inputValueElement;
        let currentValue = inputValueElement * 24;
        for (let input of inputsElements) {
            input.value = currentValue;
            currentValue *= 60;
        }
    }
    
}