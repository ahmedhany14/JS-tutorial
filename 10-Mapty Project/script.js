'use strict';

const monts = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Define geolocation

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //alert('We got your position');
      console.log(position);

      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const coords = [latitude, longitude];

      const link = `https://www.google.com/maps/@${latitude},${longitude}`;
      console.log(latitude, longitude);
      console.log(link);

      var map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords).addTo(map).bindPopup('3amo Hany place').openPopup();

      map.on('click', function (mapEvent) {
        form.classList.remove('hidden');
        inputDistance.focus();
        /*
        console.log(mapEvent);
        const lat = mapEvent.latlng.lat;
        const lng = mapEvent.latlng.lng;
        console.log(lat, lng);

        const coord = [lat, lng];
        L.marker(coord)
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('Workout')
          .openPopup();
    */
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
}
