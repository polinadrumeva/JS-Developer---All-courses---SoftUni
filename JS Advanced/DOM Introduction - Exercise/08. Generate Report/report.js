function generateReport() {
    let tableRowElements = document.querySelectorAll("tbody tr");
    let tableHeaderElements = document.querySelectorAll("thead tr th");
    let result = [];

    for(let i = 0; i < tableRowElements.length; i++) {
        let tableData = tableRowElements[i].cells;
        let tempData = {};
        for(let k = 0; k < tableData.length; k++) {
            let infoTHeader = tableHeaderElements[k].childNodes;
            if (infoTHeader[1].checked === true) {
                tempData[infoTHeader[0].textContent.trim().toLocaleLowerCase()] = tableData[k].textContent;
            }
        }

        result.push(tempData);
    }

    let resultJSON = JSON.stringify(result);
    document.getElementById("output").textContent = resultJSON;
}