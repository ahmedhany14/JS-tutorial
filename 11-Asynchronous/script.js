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