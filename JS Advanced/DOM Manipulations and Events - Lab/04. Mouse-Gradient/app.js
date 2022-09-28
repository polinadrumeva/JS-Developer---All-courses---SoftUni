//First option - work & 100% Judge
function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
 
    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }
 
    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }
};

// Second option - work & Judge doesn't like it
function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', move);

    function move(event) {
        let position = event.offsetX;
        let grWigth = event.target.offsetWidth;

        let result = `${Math.trunc(position/grWigth * 100)}%`;
        document.getElementById('result').textContent = result;
    }
}

