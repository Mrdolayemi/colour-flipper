'use strict';

//Selecting Elements.
const body = document.querySelector('body');
const btnColor = document.querySelector('.btncolor');
const displayHex = document.querySelector('.displayHex');
const btnCopy = document.querySelector('.btnCopy');
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const random = function () {
  return Math.trunc(Math.random() * hex.length);
};

//Change color FUNCTION
const colorHex = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[random()];
  }
  body.style.backgroundColor = color;
  displayHex.textContent = color;
};
btnColor.addEventListener('click', colorHex);

//COPY FUNCTION

const copyToClipboard = () => {
  let text = displayHex.textContent;
  const elem = document.createElement('input');
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand('copy');
  document.body.removeChild(elem);
};

btnCopy.addEventListener('click', copyToClipboard);
