function solve() {
  let textAreaElement = document.getElementById("input").value;
  let text = textAreaElement.split(".").filter(x => x.length > 0);
  let resultElement = document.getElementById("output");

  for(let i = 0; i < text.length; i+=3) {
    let result = [];
    for(let k = 0; k < 3; k++) {
      if(text[i + k]) {
        result.push(text[i+k]);
      }
    }

    let resultText = result.join(". ") + ".".trim();  
    resultElement.innerHTML += `<p>${resultText}</p>`;
  }
}