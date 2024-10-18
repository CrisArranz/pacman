window.addEventListener("DOMContentLoaded", () => {
  const game = new Game('pacman-board');
  document.getElementById("start-btn").addEventListener("click", () => {
    game.start();
  });

  document.getElementById("pause-btn").addEventListener("click", () => {
    game.pause();
  })
});