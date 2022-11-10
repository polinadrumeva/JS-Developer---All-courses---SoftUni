async function getInfo() {
    const busElement = document.getElementById('stopId');
    const bus = busElement.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${bus}`; 
    const stopName = document.getElementById('stopName');
    const list = document.getElementById('buses');
    list.innerHTML = "";
    bus.textContent = "";

    try{
        const response = await fetch(url);
    const data = await response.json();

    stopName.textContent = data.name;
    Object.entries(data.buses).forEach(([k,v]) => {
        const liElement = document.createElement('li');
        liElement.textContent = `Bus ${k} arrives in ${v} minutes`;
        list.appendChild(liElement);
    });
    } catch(error) {
        stopName.textContent = "Error";
    }
    
}