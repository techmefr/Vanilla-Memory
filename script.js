const cards = document.querySelectorAll(".memory-card");
let click = cards.length + 10;
let counter = 0;

function loadArrayLength() {
  document.querySelector(".score-value").innerText = click;
}

function clickEvent() {
  click -= 1;
  const scoreElement = document.querySelector(".score-value");
  scoreElement.textContent = click;

  if (click === 0) {
    alert("Fin du jeu");
  }
}

function pairCount(elmnt) {
  if (elmnt % 2 === 0) {
    clickEvent();
  }
}

function flipCard() {
  this.classList.add("flip");
}

const cardClick = (e) => pairCount(++counter);

cards.forEach((card) => card.addEventListener("click", cardClick));
