window.addEventListener('load', solve);

function solve() {
    let modelElement = document.getElementById("model");
    let yearElement = document.getElementById("year");
    let descriptionElement = document.getElementById("description");
    let priceElement = document.getElementById("price");
    document.getElementById('add').addEventListener('click', added);
    let furnitureListElement = document.getElementById("furniture-list");

    function added(event) {
        if(modelElement.value !== '' && yearElement.value !== '' && descriptionElement.value !== '' 
        && priceElement.value >= 0 && Number(priceElement.value) > 0 && Number(yearElement.value) > 0) {
            let trElement = document.createElement("tr");
            trElement.classList.add("info");
            furnitureListElement.appendChild(trElement);
            let modelListElement = document.createElement("td");
            modelListElement.textContent = modelElement.value;
            trElement.appendChild(modelListElement);
            let priceListElement = document.createElement("td");
            priceListElement.textContent = Number(priceElement.value).toFixed(2);
            trElement.appendChild(priceListElement);
        }

    }
   
}
