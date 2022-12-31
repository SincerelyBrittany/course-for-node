// const postmanRequest = require("postman-request");
import postmanRequest from "postman-request";
import dotenv from "dotenv";
dotenv.config();

const Geocode = (address, callback) => {
  const positionstackUrl = `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITION_STACK_APP_ACCESS_KEY}&query=${address}&limit=1`;
  postmanRequest({ url: positionstackUrl }, (error, response, body) => {
    const responseData = JSON.parse(response.body);

    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (
      responseData.error ||
      responseData.data === undefined ||
      responseData.data.length === 0
    ) {
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
