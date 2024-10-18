class Game {
  constructor(canvasId) {
    this.context = document.getElementById(canvasId).getContext("2d");

    this.pacman = new Pacman(this.context);
  }

  start() {
    this.intervalId = setInterval(() => {
      this.draw();
    }, 1000 / FPS)
  }

  draw() {
    this.pacman.draw();
  }

  pause() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}