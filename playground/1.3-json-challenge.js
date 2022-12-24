const fs = require("fs");
/*
Challenge Below
*/

const dataBuffer = fs.readFileSync("1.3-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

/*
Change name and age proprty
*/

data.name = "SincerelyBrittany";
data.age = 21;

console.log(data);

/*
Stringify the changed object and overwrite the original data
*/

// fs.appendFileSync("3-json.json", JSON.stringify(data));
fs.writeFileSync("3-json.json", JSON.stringify(data));
