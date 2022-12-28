const request = require("request");
require("dotenv").config();

const Forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    process.env.WEATHER_STACK_ACCESS_KEY +
    "&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        // body.daily.data[0].summary +
        " It is currently " +
          body.current.temperature +
          " degress out. And it feels like " +
          body.current.feelslike
      );
    }
  });
};

export default Forecast;
// module.exports = forecast;
