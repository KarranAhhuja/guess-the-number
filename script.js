// =========================
//      RANDOM NUMBER
// =========================

let randomNumber = Math.floor(Math.random() * 100) + 1;

// =========================
//      ATTEMPTS COUNT
// =========================

let totalAttempts = 0;

// =========================
//      SELECT ELEMENTS
// =========================

let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let message = document.getElementById("message");
let attempts = document.getElementById("attempts");

// =========================
//   CHECK GUESS FUNCTION
// =========================

function checkGuess() {

  // IF GAME OVER → RESTART GAME

  if (guessBtn.innerHTML === "Restart Game") {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    totalAttempts = 0;
    message.innerHTML = "";
    attempts.innerHTML = "Attempts: 0";
    guessInput.value = "";
    guessBtn.innerHTML = "Check Guess";
    return;
  }

  // USER INPUT

  let userGuess = Number(guessInput.value);

  // VALIDATION

  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {

    message.innerHTML = "Please enter a valid number from 1 to 100";

    return;
  }

  totalAttempts++;

  // MAIN LOGIC

  if (userGuess > randomNumber) {

    message.innerHTML = "📉 Lower Number Please!";
  }

  else if (userGuess < randomNumber) {

    message.innerHTML = "📈 Higher Number Please!";
  }

  else {

    message.innerHTML = `🎉 Correct Number! The number was ${randomNumber}!`;

    guessBtn.innerHTML = "Restart Game";
  }

  attempts.innerHTML = `Attempts: ${totalAttempts}`;

  guessInput.value = "";

  guessInput.focus();
}
// =========================
// BUTTON CLICK EVENT
// =========================

guessBtn.addEventListener("click", checkGuess);

// =========================
// ENTER KEY SUPPORT
// =========================

guessInput.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    checkGuess();
  }
});

// =========================
// DISABLE RIGHT CLICK
// =========================

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// =========================
// DISABLE F12, CTRL+SHIFT+I,
// CTRL+SHIFT+J, CTRL+U
// =========================

document.addEventListener("keydown", function (event) {

  // F12
  if (event.key === "F12") {
    event.preventDefault();
  }

  // CTRL + SHIFT + I
  if (event.ctrlKey && event.shiftKey && event.key === "I") {
    event.preventDefault();
  }

  // CTRL + SHIFT + J
  if (event.ctrlKey && event.shiftKey && event.key === "J") {
    event.preventDefault();
  }

  // CTRL + U
  if (event.ctrlKey && event.key === "u") {
    event.preventDefault();
  }

  // CTRL + C
  if (event.ctrlKey && event.key === "c") {
    event.preventDefault();
  }

  // CTRL + V
  if (event.ctrlKey && event.key === "v") {
    event.preventDefault();
  }

  // CTRL + S
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
  }

  // CTRL + A
  if (event.ctrlKey && event.key === "a") {
    event.preventDefault();
  }
});
