"use strict";

const numb1 = Math.ceil(Math.random() * 10);
const numb2 = Math.ceil(Math.random() * 10);
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreEl.innerText = `  score: ${score}`;
questionEl.innerText = `What is ${numb1} multipliend by ${numb2}?`;
const correctAns = numb1 * numb2;
if (userAnswer === correctAns) {
  score++;
  updateLocalStorage();
} else {
  score--;
  updateLocalStorage();
}

formEl.addEventListener("submit", () => {
  const userAnswer = +inputEl.value;
});

function updateLocalStorage() {
  localStorage.getItem("score", JSON.stringify(score));
}
