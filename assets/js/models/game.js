class Game {
  constructor(canvasId) {
    this.context = document.getElementById(canvasId).getContext("2d");

    this.pacman = new Pacman(this.context);

    this.maze = [
      new Wall(this.context, 40, 40, { width: WALLS_CONFIGURATION.size, height: 240 }),
      new Wall(this.context, 40, 320, { width: WALLS_CONFIGURATION.size, height: 160 }),
      new Wall(this.context, 40, 520, { width: WALLS_CONFIGURATION.size, height: 240 }),,
    ];
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.collisions();
      this.move();
      this.draw();      
    }, 1000 / FPS)
  }

  clear () {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  draw() {
    this.pacman.draw();
    this.maze.forEach(wall => wall.draw());
  }

  move() {
    this.pacman.move();
  }

  collisions() {
    this.pacman.checkCollisions(this.maze);
  }

  pause() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}