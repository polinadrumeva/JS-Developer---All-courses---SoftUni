function attachEvents() {
   document.getElementById('submit').addEventListener('click', getWeather);
}

async function getWeather() {
    const url = `http://localhost:3030/jsonstore/forecaster/locations`;
    const response = await fetch(url);
    const data = await response.json();

    let townElement = document.getElementById('location').value;
    const infoTown = data.find(x => x.name === townElement);
    createForecast(infoTown.code)
}

async function createForecast(code) {
    const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    const url3days = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    const responseToday = await fetch(urlToday);
    const dataToday = await responseToday.json();

    const response3days = await fetch(url3days);
    const data3days = await response3days.json();

    createToday(dataToday);
    createUncoming(data3days);
}

function createToday(data) {

}

function createUncoming(data) {
    
}

attachEvents();