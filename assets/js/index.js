window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-btn").addEventListener("click", () => {
    document.querySelector(".container__homepage").classList.add("hidden");
    document.querySelector(".container__board").classList.remove("hidden");
    startGame();
  });
});

const startGame = () => {
  const game = new Game('pacman-board', restartGame, exitGame);
  game.start();
  document.addEventListener("keydown", (event) => {
    game.pacman.onKeyDown(event);
  });

  document.addEventListener("keyup", () => {
    game.pacman.onKeyUp();
  });
}


const restartGame = () => {
  // document.querySelector(".container__game-over").classList.add("hidden");
  // document.querySelector(".container__board").classList.remove("hidden");
  // startGame();
  window.location.reload();
}

const exitGame = () => {
  window.location.reload();
}