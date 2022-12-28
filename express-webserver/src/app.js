const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

console.log(__dirname, "dirname");
console.log(__filename, "filename");

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/help", (req, res) => {
//   res.send("Help Screen!");
// });

app.get("/weather", (req, res) => {
  res.send("Weather Screen!");
});

app.get("/about", (req, res) => {
  res.send("About Screen!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
