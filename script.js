const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const score = document.querySelector(".score");
let timeup = true;
let scores = 0;
function randomtime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomhole(holes) {
  let idx = Math.floor(Math.random() * holes.length);
  let hole = holes[idx];
  return hole;
}

function peep() {
  const time = randomtime(200, 1000);
  const h = randomhole(holes);
  h.classList.add("up");
  setTimeout(() => {
    if (!timeup) peep();
    h.classList.remove("up");
  }, time);
}

function startgame() {
  score.textContent = 0;
  timeup = false;
  scores = 0;
  peep();
  setTimeout(() => {
    timeup = true;
  }, 10000);
}

function counts(e) {
  if (!e.isTrusted) return; //cheater;
  scores++;
  this.classList.remove("up");
  score.textContent = scores;
}

moles.forEach((items) => items.addEventListener("click", counts));
