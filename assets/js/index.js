window.addEventListener("DOMContentLoaded", () => {
  const game = new Game('pacman-board');
  game.start();
  document.getElementById("start-btn").addEventListener("click", () => {
    game.start();
  });

  document.getElementById("pause-btn").addEventListener("click", () => {
    game.pause();
  });

  document.addEventListener("keydown", (event) => {
    game.pacman.onKeyDown(event);
  });

  document.addEventListener("keyup", () => {
    game.pacman.onKeyUp();
  });
});