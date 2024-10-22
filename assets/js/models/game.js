class Game {
  constructor(canvasId) {
    this.context = document.getElementById(canvasId).getContext("2d");

    this.pacman = new Pacman(this.context);

    this.maze = [
      //Pared externa lateral izquierdo
      new Wall(this.context, 40, 40, { width: WALLS_CONFIGURATION.size, height: 240 }),
      new Wall(this.context, 40, 320, { width: WALLS_CONFIGURATION.size, height: 160 }),
      new Wall(this.context, 40, 520, { width: WALLS_CONFIGURATION.size, height: 240 }),
      //Pared externa lateral derecho
      new Wall(this.context, 760, 40, { width: WALLS_CONFIGURATION.size, height: 240 }),
      new Wall(this.context, 760, 320, { width: WALLS_CONFIGURATION.size, height: 160 }),
      new Wall(this.context, 760, 520, { width: WALLS_CONFIGURATION.size, height: 240 }),
      //Pared externa inferior
      new Wall(this.context, 40, 720, { width: 360 , height: WALLS_CONFIGURATION.size }),
      new Wall(this.context, 440, 720, { width: 360 , height: WALLS_CONFIGURATION.size }),
      //Pared externa superior
      new Wall(this.context, 40, 40, { width: 360 , height: WALLS_CONFIGURATION.size }),
      new Wall(this.context, 440, 40, { width: 360 , height: WALLS_CONFIGURATION.size }),
      //Jaula central
      new Wall(this.context, 320, 320, { width: WALLS_CONFIGURATION.size, height: 160 }),
      new Wall(this.context, 480, 320, { width: WALLS_CONFIGURATION.size, height: 160 }),
      new Wall(this.context, 320, 440, { width: 200 , height: WALLS_CONFIGURATION.size }),
      new Wall(this.context, 320, 320, { width: 80 , height: WALLS_CONFIGURATION.size }),
      new Wall(this.context, 440, 320, { width: 80 , height: WALLS_CONFIGURATION.size }),
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