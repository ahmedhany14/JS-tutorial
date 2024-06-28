'use strict';

// Selecting elements, and store them in object

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

function closemodal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i]);
  btnsOpenModal[i].addEventListener('.click', openModal);
}
