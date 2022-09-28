function focused() {
    let inputsElement = document.getElementsByTagName('input');
    for (let input of inputsElement) {
        input.addEventListener('focus', focusSection);
        input.addEventListener('blur', blurSection);
    }

    function focusSection(event) {
        event.target.parentElement.classList.add('focused');
    }

    function blurSection(event) {
        event.target.parentElement.classList.remove('focused');
    }
}