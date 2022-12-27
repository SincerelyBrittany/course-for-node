import "./addRequire.js";

const url =
  "http://api.weatherstack.com/current?access_key=e93098eadf6fbfa1ee1bc4faff697897&query=37.8267,-122.4233";

// const request = require("postman-request");

// request("http://www.google.com", function (error, response, body) {
//   console.log("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//   console.log("body:", body); // Print the HTML for the Google homepage.
// });

const request = require("request");

request({ url: url, json: true }, function (error, response, body) {
  //   const data = JSON.parse(response.body);
  console.log(response.body.current);
});

// const axios = require("axios");
// const params = {
//   access_key: "e93098eadf6fbfa1ee1bc4faff697897",
//   query: "New York",
// };

// axios
//   .get("https://api.weatherstack.com/current", { params })
//   .then((response) => {
//     const apiResponse = response.data;
//     console.log(
//       `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });
