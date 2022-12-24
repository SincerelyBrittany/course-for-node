const fs = require("fs");

/*
 Creates/writes the json file that contains the title and author
*/

const book = {
  title: "All Good People Here",
  author: "Ashley Flowers",
};

const bookJson = JSON.stringify(book);

fs.writeFileSync("2-json.json", bookJson);

/*
 Reads the json file that contains the title and author and parses through the data.
*/

const dataBuffer = fs.readFileSync("1.2-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

console.log(dataBuffer);

console.log(dataJson);

console.log(data.title);
