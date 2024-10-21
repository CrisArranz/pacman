class Game {
  constructor(canvasId) {
    this.context = document.getElementById(canvasId).getContext("2d");

    this.pacman = new Pacman(this.context);
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.move();
      this.draw();
    }, 1000 / FPS)
  }

  clear () {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  draw() {
    this.pacman.draw();
  }

  move() {
    this.pacman.move();
  }

  pause() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}