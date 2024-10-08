"use strict";

// 1) AJAX Call, XMLHttpRequest
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const xml_request = new XMLHttpRequest();

const render = function (joson_data, className = "") {
  //console.log(joson_data);
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${joson_data.flags.png}"/>
      <div class="country__data">
        <h3 class="country__name">${joson_data.name.common}</h3>
        <h4 class="country__region">${joson_data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        joson_data.population / 1000000
      ).toFixed(1)} M people</p>
      <p class="country__row"><span>🗣️</span>${joson_data.languages.eng}</p>
      <p class="country__row"><span>💰</span>${"undefined"}</p>
      </div>

    </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 3;
};
/*
const get_data = function (county_name) {
  try {
    xml_request.open(
      "GET",
      `https://restcountries.com/v3.1/name/${county_name}`
    );
    xml_request.send();
  } catch (err) {
    console.log("error");
    return;
  }

  xml_request.addEventListener("load", function () {
    const [joson_data] = JSON.parse(this.responseText);

    render(joson_data, county_name);
  });
};

get_data("usa");
// Appear in console before the data
console.log("hello");
*/

//  2) Callback Hell
/*
  is a way to make nested callbacks, which makes the code harder to read and maintain.
  by making nested sequence of asynchronous operations.
*/
/*
const get_dataAnd_nie = function (county_name) {
  try {
    xml_request.open(
      "GET",
      `https://restcountries.com/v3.1/name/${county_name}`
    );
    xml_request.send();
  } catch (err) {
    console.log("error");
    return;
  }

  xml_request.addEventListener("load", function () {
    const [joson_data] = JSON.parse(this.responseText);
    // Get parent country data
    render(joson_data);
    // Get neighbor countries data
    const neighbors = joson_data.borders;

    for (let contry in neighbors) {
      // Get neighbor country data
      const xml_request2 = new XMLHttpRequest();
      xml_request2.open(
        "GET",
        `https://restcountries.com/v3.1/alpha/${neighbors[contry]}`
      );
      xml_request2.send();

      xml_request2.addEventListener("load", function () {
        const [joson_data2] = JSON.parse(this.responseText);

        render(joson_data2, "neighbour");
      });
    }
  });
};

get_dataAnd_nie("usa");
*/
/*
Callback gell makes code harder to read and maintain.
to solve this problem we can use Promises and Async/Await.
*/

// 3) Promises
/*
  - A promise is an object representing the eventual completion or failure of an asynchronous operation.
  - we can call it as a container for a feature value that may not be available yet.
  - we can attach callbacks to handle the success or failure of the operation.
  - Promises are chainable and can handle multiple asynchronous operations.
*/
/*
const getDataPromise = function (county_name) {
  fetch(`https://restcountries.com/v3.1/name/${county_name}`)
    .then((response) => {
      return response.json();
    })
    .then((joson_data) => {
      console.log(joson_data[0]);
      render(joson_data[0]);
    });
};
getDataPromise("usa");
*/

// 4) Chaining Promises
/*
  - we can chain multiple promises to make a sequence of asynchronous operations.
  - we can return a promise from a then handler to create a chain.
*/

/*
const ChainingPromises = function (county_name) {
  fetch(`https://restcountries.com/v3.1/name/${county_name}`)
    .then((response) => {
      return response.json();
    })
    .then((joson_data) => {
      //console.log(joson_data[0]);
      render(joson_data[0]);

      const joson_data_neighbours = [];
      joson_data[0].borders.forEach((neighbour) => {
        joson_data_neighbours.push(
          fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
            .then((response) => response.json())
            .then((data) => data[0])
        );
      });
      return Promise.all(joson_data_neighbours);
    })
    .then((joson_data_neighbours) => {
      console.log(joson_data_neighbours);
      joson_data_neighbours.forEach((neighbour) => {
        console.log(neighbour);
        render(neighbour, "neighbour");
      });
    });
};

ChainingPromises("spain");

*/

// 5) Handling Rejected Promises and Errors
/*
const ChainingPromises = function (county_name) {
  fetch(`https://restcountries.com/v3.1/name/${county_name}`)
    .then((response) => {
      // check if the response is ok
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }

      return response.json();
    })
    .then((joson_data) => {
      //console.log(joson_data[0]);
      render(joson_data[0]);

      const joson_data_neighbours = [];

      if (joson_data[0].borders === undefined) {
        return [];
      }

      joson_data[0].borders.forEach((neighbour) => {
        joson_data_neighbours.push(
          fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Country not found ${response.status}`);
              }
              return response.json();
            })
            .then((data) => data[0])
        );
      });

      return Promise.all(joson_data_neighbours);
    })
    .then((joson_data_neighbours) => {
      joson_data_neighbours.forEach((neighbour) => {
        console.log(neighbour);
        render(neighbour, "neighbour");
      });
    })
    .catch((err) => {
      // catch any error in the chain of promises
      console.error(`${err}`);
      //alert(`Something went wrong ${err.message}. Try again!`);
      //Error(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      console.log("finally success");
    });
};

btn.addEventListener("click", function () {
  ChainingPromises("australia");
});

*/

// Coding Challenge #1

/*

In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below). {DONE}
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉  {DONE}
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany' {DONE}
4. Chain a .catch method to the end of the promise chain and log errors to the console {DONE}
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case.
   So create an error to reject the promise yourself, with a meaningful error message. {DONE}

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
*/

/*
function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (response.ok == false) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city} , ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    // Fethc country data and render it
    .then((response) => {
      if (response.ok == false) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      render(data[0]);
    })
    .catch((err) => {
      console.error(`fe kosom error ${err.message}`);
    })
    .finally(() => {
      console.log("everything is ok");
    });
}

btn.addEventListener("click", function () {
  var lat = 19.037;
  var lng = 72.873;

  whereAmI(lat, lng);
  lat = 52.508;
  lng = 13.381;
  whereAmI(lat, lng);

  lat = -33.933;
  lng = 18.474;
  whereAmI(lat, lng);
});

*/

// 6) Promises
// building promises

// 1. Simple Promise (lottery example)

/*
Promise object is a constructor that takes a function as an argument.
inside the function we have two parameters resolve and reject.
resolve is a function that we call when the promise is successful.
reject is a function that we call when the promise is failed.
*/

/*
const lottery = new Promise(function (resolve, reject) {
  console.log("Game is starting");

  setTimeout(function () {
    let rand = Math.random();
    if (rand >= 0.5) {
      // success
      resolve("fullfilled promise " + rand);
    } else {
      // fail
      reject(new Error("rejected promise " + rand));
    }
  }, 2000);
});

lottery
  .then((Response) => {
    console.log(Response);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("i not asynchronous");

// Creating a wait function

const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve("you wait for " + seconds + "seconds"), seconds * 1000);
  });
};
wait(3)
  .then((res) => {
    console.log(res);
    return wait(2);
  })
  .then((res) => {
    console.log(res);
    return wait(1);
  })
  .then((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log("wainting done");
  });
*/
/*

the example above is like the following:
setTimeout(() => {
  console.log("you wait for 1 seconds");
  setTimeout(() => {
  console.log("you wait for 2 seconds");
    setTimeout(() => {
  console.log("you wait for 3 seconds");
    }, 1000);
  }, 1000);
});

instead of using nested setTimeout we can use promises to make the code more readable and maintainable.
*/

// 7) Promisifying geolocation API

// basic way to get the current location
/*
navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.error("Error founded" + err.message)
);
*/

// Promisifying the geolocation API

/*
const getPoss = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position), // success
      (err) => reject(err) // fail
    );
  });
};

getPoss()
  .then((pos) => console.log(pos))
  .catch((err) => console.error("Error founded" + err.message));

console.log("blablablablablabla");

// Rendering the current location

function whereAmI() {
  getPoss()
    .then((response) => {
      console.log(response);
      const { latitude: lat, longitude: lng } = response.coords;
      console.log(lat, lng);
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((response) => {
      if (response.ok == false) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city} , ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    // Fethc country data and render it
    .then((response) => {
      if (response.ok == false) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      render(data[0]);
    })
    .catch((err) => {
      console.error(`fe kosom error ${err.message}`);
    })
    .finally(() => {
      console.log("everything is ok");
    });
}

btn.addEventListener("click", function () {
  whereAmI();
});

*/

// 8) Coding Challenge #2

/*
Build the image loading functionality that I just showed you on the screen.

*/
/*
const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve("you wait for " + seconds + "seconds"), seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const creatImage = function (img_path) {
  return new Promise(function (resolve, reject) {
    // resolve the promise when the image is loaded
    const img = document.createElement("img");
    img.src = img_path;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });
    // reject the promise when the image is not loaded, and Error message that the image is not loaded.

    img.addEventListener("error", function () {
      reject(new Error("Image not loaded"));
    });
  });
};

let currentImg;

creatImage("images/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none"; // hide the image
    return creatImage("images/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none"; // hide the image
  })
  .finally(() => {
    console.log("everything is done");
  })
  .catch((err) => {
    console.error(err.message);
  });
*/

// 9) Async/Await and Handling errors with try catch

/*
  it is a special syntax to work with promises in a more comfortable way.
  it makes the code more readable and maintainable.
  Async/Await is the same as promises but in a more readable way.
 */

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position), // success
      (err) => reject(err) // fail
    );
  });
};

async function whereAmI() {
  try {
    const response = await getPosition();

    const { latitude: lat, longitude: lng } = response.coords;
    // console.log(lat, lng);

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    if (resGeo.status != 200) throw new Error("Problem getting location data");

    const data = await resGeo.json();
    // console.log(data);

    // console.log(`You are in ${data.city} , ${data.country}`);

    const resCountry = await fetch(
      `https://restcountries.com/v3.1/name/${data.country}`
    );

    if (resCountry.status != 200) throw new Error("Country not found");

    const dataCountry = await resCountry.json();

    // console.log(dataCountry[0]);

    render(dataCountry[0]);

    return `You are in ${data.city} , ${data.country}`;
  } catch (err) {
    console.error(`${err.message}`);
  }
}

console.log("1: Will get location");

(async function () {
  try {
    const response = await whereAmI();
    console.log(`2: ${response}`);
    console.log("3: Finished getting location");
  } catch (err) {
    console.error(err.message);
  }
})();

*/

// 10) Running Promises in Parallel

async function get_json(url) {
  return fetch(url).then((response) => {
    if (response.ok == false) {
      throw new Error(`Country not found ${response.status}`);
    }
    return response.json();
  });
}
/*
async function getCounties(c1, c2, c3) {
  try {
    // In this way, we wait for the first promise to be resolved before starting the second one.

//    const [data1] = await get_json(`https://restcountries.com/v3.1/name/${c1}`);
//    const [data2] = await get_json(`https://restcountries.com/v3.1/name/${c2}`);
//    const [data3] = await get_json(`https://restcountries.com/v3.1/name/${c3}`);
//    console.log([data1.capital, data2.capital, data3.capital]);
    // Parallel promises
    const data = await Promise.all([
      get_json(`https://restcountries.com/v3.1/name/${c1}`),
      get_json(`https://restcountries.com/v3.1/name/${c2}`),
      get_json(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    for (let d of data) {
      console.log(d[0].capital);
    }
  } catch (err) {
    console.error(err.message);
  }
}

getCounties("usa", "canada", "egypt");
*/

// 11) Other promise combin (race, allSettled andd any)

// 1. race:
// the first promise that is fullfilled or rejected will be returned as a promise.
// it is usefull when we have a promise that takes a long time to be resolved and we want to get the result as soon as possible.
// we can put a wait function with it to insure that the promise will be resolved after a specific time.
/*
(async function () {
  const response = await Promise.race([
    get_json(`https://restcountries.com/v3.1/name/canada`),
    get_json(`https://restcountries.com/v3.1/name/usa`),
    get_json(`https://restcountries.com/v3.1/name/egypt`),
  ]);

  console.log(response[0].name);
})();
*/
// time out function and to long to resolve promise
/*
const timeOut = function (sec) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(new Error("Time out"));
    }, sec * 1000);
  });
};

(async function () {
  try {
    const response = await Promise.race([
      timeOut(1.5),
      get_json(`https://restcountries.com/v3.1/name/usa`),
    ]);

    console.log(response[0]);
  } catch (err) {
    console.log(err.message);
  }
})();
*/
// 2. allSettled
//  like all methode but it return all results, and if there are any rejected promisies return it also
/*
Promise.allSettled([
  get_json(`https://restcountries.com/v3.1/name/canada`),
  get_json(`https://restcountries.com/v3.1/name/usa`),
  get_json(`https://restcountries.com/v3.1/name/egypt112`),
])
  .then((response) => {
    for (let res in response) {
      console.log(response[res].status);
    }
  })
  .catch((Error) => {
    console.error(Error.message);
  });
*/

// 3. any
// Like race but it return the first fullfilled promise and ignore the rejected ones.
/*
Promise.any([
  get_json(`https://restcountries.com/v3.1/name/canada`),
  get_json(`https://restcountries.com/v3.1/name/usa`),
  get_json(`https://restcountries.com/v3.1/name/egypt`),
])
  .then((response) => {
    console.log(response[0]);
  })
  .catch((Error) => {
    console.error(Error.message);
  });
*/

// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed).
Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

*/

const imgContainer = document.querySelector(".images");

const creatImage = function (img_path) {
  return new Promise(function (resolve, reject) {
    // resolve the promise when the image is loaded
    const img = document.createElement("img");
    img.src = img_path;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });
    // reject the promise when the image is not loaded, and Error message that the image is not loaded.

    img.addEventListener("error", function () {
      reject(new Error("Image not loaded"));
    });
  });
};

const wait = function (sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
};

const LoadImages = async function () {
  try {
    let img = creatImage("images/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(3);
    img = creatImage("images/img-2.jpg");
    console.log("Image 2 loaded");
    console.log(img);
    await wait(3);
    img = creatImage("images/img-3.jpg");
    console.log("Image 3 loaded");
    console.log(img);
  } catch (err) {
    console.error(err.message);
  }
};

LoadImages();
