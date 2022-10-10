function validate() {
    let usernameElement = document.getElementById('username');
    let usernamePattern = /[A-z0-9]+/g;
    let passwordElement = document.getElementById('password');
    let confirmPasswordElement = document.getElementById('confirm-password');
    let passwordPattern = /[A-z0-9_]+/g;
    let emailElement = document.getElementById('email');
    let emailPattern = /[A-z0-9@.]+/g;

    let buttonElement = document.getElementById('submit');

    buttonElement.addEventListener('click', clickMe);
    function clickMe(event) {
        if(usernameElement.value < 3 || usernameElement.value > 20) {
            usernameElement.style.border = 'red';
        } 
    }

}
