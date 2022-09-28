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