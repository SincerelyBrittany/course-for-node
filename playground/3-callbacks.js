const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback('This is my error!', undefined)
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});

// A callback is a function we provide as an argument to another function with the intention of having it called later on:

/*
  setTimeout(() => {
    console.log('We provided an anynomous function to the setTimeout function with the intention that setTimeout is going to call this function in the future')
  }, 2000);
*/

const names = ["andrew", "jen", "jess"];

const shortNames = names.filter((name) => {
  return name.length <= 4;
});

// const geocode = (address, callback) => {
//   const data = {
//     latitude: 0,
//     longitude: 0,
//   };

//   return data;
// };

// const data = geocode("philadelphia");
// console.log(data);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};

geocode("philadelphia", (returnedDataFromCallbackFunction) => {
  console.log(returnedDataFromCallbackFunction);
});
