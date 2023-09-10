"use strict";
let h1 = document.querySelectorAll("h1");
let left = document.getElementById("left");
let right = document.getElementById("right");
let slider_back = document.getElementById("slider_back");
let variable = 1;
const existingStyles = slider_back.style.cssText;

let change = (var1) => {
  const newStyles = `background: linear-gradient(0deg, rgb(0 0 0 / 52%), rgb(0 0 0 / 67%)), url("assets/imgs/${var1}.jpg");background-repeat: no-repeat;background-size: cover;`;
  let h1element = document.querySelector(`#a${var1}`);
  h1.forEach((e) => {
    e.style.display = "none";
  });
  document.getElementById("slider_back").style.cssText =
    existingStyles + " " + newStyles;
  h1element.style.display = "block";
};


left.addEventListener("click", (k) => {
  if (variable == 1) {
    variable = 3;
  } else {
    variable--;
  }
  change(variable);
});

right.addEventListener("click", (k) => {
  if (variable == 3) {
    variable = 1;
  } else {
    variable++;
  }
  change(variable);
});
