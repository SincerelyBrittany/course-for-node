console.log("client side jaavscript is loaded");

// fetch("https://puzzle.mead.io/puzzle")
//   .then((response) => response.json())
//   .then((data) => console.log(data.puzzle));

// fetch("http://localhost:3000/weather?address=newyork")
//   .then((response) => response.json())
//   .then(({ forecast, location, address } = {}) =>
//     console.log(forecast, location, address)
//   );

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        const { forecast, location, address } = data;
        console.log(forecast, location, address);
      }
    });
});
