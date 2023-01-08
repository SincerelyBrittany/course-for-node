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
const paragraphOne = document.querySelector("#message-1");
const paragraphTwo = document.querySelector("#message-2");
const paragraphThree = document.querySelector("#message-3");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  paragraphOne.textContent = "Loading";
  paragraphTwo.textContent = ". . . .";

  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        paragraphOne.textContent = data.error;
        paragraphTwo.textContent = "";
      } else {
        const { forecast, location, address } = data;
        console.log(forecast, location, address);
        paragraphOne.textContent = location;
        paragraphTwo.textContent = forecast;
        // paragraphThree.textContent = address;
      }
    });
});
