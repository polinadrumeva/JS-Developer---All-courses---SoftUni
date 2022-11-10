function solve() {
    let firstStop = 'depot';
    const infoTabElement = document.getElementById('info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    let stopName = '';

    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${firstStop}`;
        const response = await fetch(url);
        const data = await response.json();
        stopName = data.name;
        infoTabElement.textContent = `Next stop ${stopName}`;
        firstStop = stopName;
        departButton.setAttribute('disabled', 'disabled');
        arriveButton.removeAttribute('disabled', 'disabled');
       
    }

    function arrive() {
        infoTabElement.textContent = `Arriving at ${stopName}`;
        departButton.removeAttribute('disabled', 'disabled');
        arriveButton.setAttribute('disabled', 'disabled');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();