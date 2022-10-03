function validate() {
    let emailElement = document.getElementById('email');
    let emailElementValue = emailElement.value;
    let pattern = /([a-z]+)@([a-z]+).([a-z]+)/;

    emailElement.addEventListener('change', checkEmail);

    function checkEmail(event) {
        if(pattern.test(event.target.value)) {
            event.target.classList.remove('error');
            return;
        }
         
         event.target.classList.add('error');
    }
    
}