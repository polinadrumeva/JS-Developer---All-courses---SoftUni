function solve() {
    let textElement = document.getElementById('text').value;
    console.log(textElement);
    let conventionElement = document.getElementById('naming-convention').value;

    let resultElement = document.getElementById('result');

    let splitText = textElement.split(" ");

    let resultOutput = "";
  
    if (conventionElement == "Pascal Case") {
      for (let i = 0; i < splitText.length; i++) {
        resultOutput += splitText[i][0].toUpperCase() +
        splitText[i].slice(1, splitText[i].length).toLowerCase();
      }
      
      resultElement.textContent = resultOutput;
    } else if (conventionElement == "Camel Case") {
      resultOutput += splitText[0][0].toLowerCase()
        + splitText[0].slice(1, splitText[0].length).toLowerCase();
      for (let i = 1; i < splitText.length; i++) {
        resultOutput += splitText[i][0].toUpperCase() +
        splitText[i].slice(1, splitText[i].length).toLowerCase();
      }
      
      resultElement.textContent = resultOutput;
    } else {
      
      resultElement.textContent = "Error!";
    }

}