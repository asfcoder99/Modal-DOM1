'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal); // with query selector with multiple elements only tyhe first one gets selected which is a limitation
//querySelectorAll overcomes this
const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent); //since the class has multiple elements it is then treated as an array
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(`click`, openModal);
//function () {
//console.log(`button clicked`);
//modal.classList.remove(`hidden`); //.classlist property is used to add remove etc classes
//overlay.classList.remove(`hidden`);

//modal.style.display = `block`; // this does the same thing but we will have to memorize all the values
//});

btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal); //we dont put () after the closemodal function because it will call itself when js is run we remove it because we want the function only when the click event is called

//handling an esc keypress events
//keyboard events are called global events cause they happen on all elements

document.addEventListener('keydown', function (e) {
  // console.log(`a key was pressed!`);
  //console.log(e.key);

  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  } // we use .contains to see if the modal variable contains the class but we can directly implement the function closeModal this is just to show the contains property
}); //when event listener is initiated from the document it is listening for the event anywhere on the page
//we put an argument into the function so that when the function is called it stores the information in the argument and then we log it to the console.
//the function is not called by us like function() it is only defined and called when the event happens
//Now the event is an object and we are looking for the key property so since the event is now the argument and .key is the property we type e.key
