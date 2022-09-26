function convert(input) {
    let output = [];

   for(let i = 1; i < input.length; i++) {
     let currentArray = input[i].split(" | ");
     let [Town, Latitude, Longitude] = currentArray;
     Town = Town.split("| ")[1]; 
     Latitude = Math.round(Number(Latitude) * 100) / 100;
     Longitude = Math.round(Number(Longitude.split(" |")[0] * 100)) / 100;

     output.push({Town, Latitude, Longitude});
   }

   let jsonFile = JSON.stringify(output);
   console.log(jsonFile);
}

convert(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);

convert(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])
;