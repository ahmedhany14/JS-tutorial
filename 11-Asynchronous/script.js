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
