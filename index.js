const player1 = document.querySelector(".img1");
const player2 = document.querySelector(".img2");
const result = document.querySelector("h1");
const resetBtn = document.querySelector(".reset-btn");

function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  rollDice1();
  rollDice2();
  if (player1.src > player2.src) {
    result.textContent = "🚩 P.1 wins!";
  } else if (player1.src < player2.src) {
    result.textContent = "🚩 P.2 wins!";
  } else {
    result.textContent = "Draw!";
  }
}
function rollDice1() {
  let random1 = randomNumber();
  player1.src = `images/dice${random1}.png`;
  return random1;
}
function rollDice2() {
  let random2 = randomNumber();
  player2.src = `images/dice${random2}.png`;
  return random2;
}

rollDice();

resetBtn.addEventListener("click", rollDice);
