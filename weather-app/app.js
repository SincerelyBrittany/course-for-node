import "./addRequire.js";

import Geocode from "./utils/geocode.js";
import Forecast from "./utils/forecast.js";

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  Geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    // const { latitude, longitude, location } = response;

    Forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}

// const request = require("request");
// const weatherstackUrl =
//   "http://api.weatherstack.com/current?access_key=e93098eadf6fbfa1ee1bc4faff697897&query=37.8267,-122.4233";

// request({ url: weatherstackUrl, json: true }, function (error, response, body) {
//   //   const data = JSON.parse(response.body);
//   console.log(response.body.current);
// });

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
