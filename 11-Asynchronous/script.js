"use strict";

// 1) AJAX Call, XMLHttpRequest
const countriesContainer = document.querySelector(".countries");

const xml_request = new XMLHttpRequest();

const render = function (joson_data, className = "") {
  console.log(joson_data);
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
  countriesContainer.style.opacity = 1;
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
        console.log(joson_data2);

        render(joson_data2, "neighbour");
      });
    }
  });
};

get_dataAnd_nie("usa");
