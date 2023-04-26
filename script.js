"use strict";

const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const result = document.querySelector(".result");
const calculateBtn = document.querySelector(".calculate");
const newBtn = document.querySelector(".clear");
const description = document.querySelector(".description");
const dialog = document.querySelector(".modal");
const dialogClose = document.querySelector(".dialog_close");
let check = false;

const calculateBMI = function () {
  if (!weight.value || !height.value) {
    dialog.showModal();
    return;
  }

  if (!check) {
    console.log("bmi");
    const bmi = weight.value / Math.pow(height.value / 100, 2);
    result.innerHTML += bmi.toFixed(2);

    if (bmi < 18.5) description.innerHTML += "Underweight 🙁";
    if (bmi >= 18.5 && bmi <= 25) description.innerHTML += "Normal 🙂";
    if (bmi > 25) description.innerHTML += "Overweight 🙁";
  } else {
    result.innerHTML = "BMI: ";
    description.innerHTML = "";
    check = false;
    calculateBMI();
    return;
  }
  check = true;
};

const retry = function () {
  weight.value = "";
  height.value = "";
  result.innerHTML = "BMI: ";
  description.innerHTML = "";
  check = false;
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") calculateBMI();
});

calculateBtn.addEventListener("click", calculateBMI);

newBtn.addEventListener("click", retry);

dialogClose.addEventListener("click", () => dialog.close());
