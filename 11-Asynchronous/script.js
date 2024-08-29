"use strict";

// 1) AJAX Call, XMLHttpRequest

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const xml_request = new XMLHttpRequest();

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
    const joson_data = JSON.parse(this.responseText);
    console.log(joson_data);
    const html = `
    <article class="${county_name}">
      <img class="country__img" src="${joson_data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${joson_data.name}</h3>
        <h4 class="country__region">${joson_data.region}</h4>
      <p class="country__row"><span>👫</span>${"no data"}people</p>
      <p class="country__row"><span>🗣️</span>${"no data"}</p>
      <p class="country__row"><span>💰</span>${"no data"}</p>
      </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

get_data("portugal");
console.log("hello");
