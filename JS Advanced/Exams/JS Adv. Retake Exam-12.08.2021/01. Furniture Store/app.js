window.addEventListener('load', solve);

function solve() {
    let modelElement = document.getElementById("model");
    let yearElement = document.getElementById("year");
    let descriptionElement = document.getElementById("description");
    let priceElement = document.getElementById("price");
    document.getElementById('add').addEventListener('click', added);
    let furnitureListElement = document.getElementById("furniture-list");

    function added(event) {
        let modelListElement = document.createElement("td");
        modelListElement.textContent = modelElement.value;
        let priceListElement = document.createElement("td");
        priceListElement.textContent = priceElement.value.toFixed(2);
        let trElement = document.createElement("tr");
        trElement.classList.add("info");
        trElement.appendChild(createCell(modelListElement));
        trElement.appendChild(createCell(priceListElement));

       furnitureListElement.appendChild(trElement);
    }
   
}
