const postmanRequest = require("postman-request");
require("dotenv").config();

// postmanRequest(positionstackUrl, function (error, response, body) {
//   const responseData = JSON.parse(response.body);
//   const latitude = responseData.data[0].latitude;
//   const longitude = responseData.data[0].longitude;
//   console.log(latitude, longitude, "postitionStack response");
// });

const Geocode = (address, callback) => {
  const positionstackUrl = `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITION_STACK_APP_ACCESS_KEY}&query=${address}&limit=1`;
  postmanRequest({ url: positionstackUrl }, (error, response, body) => {
    const responseData = JSON.parse(response.body);
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (responseData.data.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      const latitude = responseData.data[0].latitude;
      const longitude = responseData.data[0].longitude;
      const label = responseData.data[0].label;
      callback(undefined, {
        latitude: latitude,
        longitude: longitude,
        location: label,
      });
    }
  });
};
export default Geocode;
