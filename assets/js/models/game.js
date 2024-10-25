class Game {
  constructor(canvasId) {
    this.context = document.getElementById(canvasId).getContext("2d");

    this.pacman = new Pacman(this.context);

    this.maze = [
      //Extremo superior izquierda
      new Wall(this.context, 0, 0, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Extremo superior derecha
      new Wall(this.context, 800, 0, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Extremo inferior izquierda
      new Wall(this.context, 0, 800, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Extremo inferior derecha
      new Wall(this.context, 800, 800, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared externa lateral izquierdo
      new Wall(this.context, 40, 80, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(5) }),
      new Wall(this.context, 80, 200, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 40, 320, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 80, 360, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 40, 440, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 40, 560, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(5) }),
      new Wall(this.context, 80, 600, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared externa lateral derecho
      new Wall(this.context, 760, 80, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(5) }),
      new Wall(this.context, 720, 200, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 760, 320, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 720, 360, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 760, 440, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 760, 560, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(5) }),
      new Wall(this.context, 720, 600, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared externa inferior
      new Wall(this.context, 80, 760, { width: WALLS_CONFIGURATION.getSizeWalls(8) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 440, 760, { width: WALLS_CONFIGURATION.getSizeWalls(8) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared externa superior
      new Wall(this.context, 80, 40, { width: WALLS_CONFIGURATION.getSizeWalls(8) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 440, 40, { width: WALLS_CONFIGURATION.getSizeWalls(8) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared intermedia inferior
      new Wall(this.context, 120, 680, { width: WALLS_CONFIGURATION.getSizeWalls(6) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 400, 680, { width: WALLS_CONFIGURATION.getSizeWalls(1) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 400, 640, { width: WALLS_CONFIGURATION.getSizeWalls(1) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 480, 680, { width: WALLS_CONFIGURATION.getSizeWalls(6) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared intermedia superior
      new Wall(this.context, 120, 120, { width: WALLS_CONFIGURATION.getSizeWalls(6) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 400, 120, { width: WALLS_CONFIGURATION.getSizeWalls(1) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 400, 160, { width: WALLS_CONFIGURATION.getSizeWalls(1) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 480, 120, { width: WALLS_CONFIGURATION.getSizeWalls(6) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared intermedia lateral izquierdo
      new Wall(this.context, 160, 160, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(4) }),
      new Wall(this.context, 120, 280, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 160, 360, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(3) }),
      new Wall(this.context, 120, 440, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 160, 520, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(4) }),
      new Wall(this.context, 120, 520, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared intermedia lateral derecho
      new Wall(this.context, 640, 160, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(4) }),
      new Wall(this.context, 680, 280, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 640, 360, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(3) }),
      new Wall(this.context, 680, 440, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 640, 520, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(4) }),
      new Wall(this.context, 680, 520, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared interna lateral izquierdo
      new Wall(this.context, 240, 200, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 240, 320, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 240, 440, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 240, 560, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      //Pared interna lateral derecho
      new Wall(this.context, 560, 200, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 560, 320, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 560, 440, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 560, 560, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      //Pared interna lateral inferior
      new Wall(this.context, 320, 560, { width: WALLS_CONFIGURATION.getSizeWalls(5), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 320, 600, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 480, 600, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared interna lateral superior
      new Wall(this.context, 320, 240, { width: WALLS_CONFIGURATION.getSizeWalls(5), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 320, 200, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 480, 200, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Jaula central
      new Wall(this.context, 320, 320, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(5) }),
      new Wall(this.context, 480, 320, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(5) }),
      new Wall(this.context, 320, 480, { width: WALLS_CONFIGURATION.getSizeWalls(5) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 320, 320, { width: WALLS_CONFIGURATION.getSizeWalls(2) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 440, 320, { width: WALLS_CONFIGURATION.getSizeWalls(2) , height: WALLS_CONFIGURATION.getSizeWalls(1) }),
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