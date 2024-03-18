const cards = document.querySelectorAll(".memory-card");
let click = cards.length + 10;
let counter = 0;
function loadArrayLength() {
  document.querySelector(".score-value").innerText = click;
}

function clickEvent() {
  click -= 1;
  if (click >= 0) {
    const scoreElement = document.querySelector(".score-value");
    scoreElement.textContent = click;
  } else {
    alert("Fin du jeu");
    return;
  }
}

function pairCount(elmnt) {
  if (elmnt % 2 == 0) {
    clickEvent();
  }
}

const cardClick = (e) => pairCount(++counter);

cards.forEach((card) => card.addEventListener("click", cardClick));
