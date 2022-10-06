function validate() {
    let emailElement = document.getElementById("email");
    
    emailElement.addEventListener("change", checkValidate);
    function checkValidate(event) {
        let emailValueElement = event.target.value;
        let validPattern = /[a-z]+@[a-z]+.[a-z]+/g;
        if(validPattern.test(emailValueElement)) {
            event.target.classList.remove('error');
            
        } else {
            event.target.classList.add('error');
        }
    }
}