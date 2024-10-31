window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-btn").addEventListener("click", () => {
    document.querySelector(".container__homepage").classList.add("hidden")
    document.querySelector(".container__board").classList.remove("hidden")
    const game = new Game('pacman-board');
    game.start();
    document.addEventListener("keydown", (event) => {
      game.pacman.onKeyDown(event);
    });
  
    document.addEventListener("keyup", () => {
      game.pacman.onKeyUp();
    });
  });
});