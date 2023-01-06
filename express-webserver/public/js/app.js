console.log("client side jaavscript is loaded");

// fetch("https://puzzle.mead.io/puzzle")
//   .then((response) => response.json())
//   .then((data) => console.log(data.puzzle));

// fetch("http://localhost:3000/weather?address=newyork")
//   .then((response) => response.json())
//   .then(({ forecast, location, address } = {}) =>
//     console.log(forecast, location, address)
//   );

fetch("http://localhost:3000/weather?address=newyork")
  .then((response) => response.json())
  .then((data) => {
    if (data.error) {
      console.log(error);
    } else {
      const { forecast, location, address } = data;
      console.log(forecast, location, address);
    }
  });
