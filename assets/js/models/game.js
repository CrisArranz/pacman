class Game {
  constructor(canvasId) {
    this.context = document.getElementById(canvasId).getContext("2d");

    this.pacman = new Pacman(this.context);

    this.points = [];

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
    this.fill();
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.move();
      this.collisions();
      this.draw();      
    }, 1000 / FPS)
  }

  clear () {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  draw() {
    this.pacman.draw();
    this.maze.forEach(wall => wall.draw());
    this.points.forEach(point => point.draw());
  }

  move() {
    this.pacman.move();
  }

  collisions() {
    this.pacman.checkCollisions(this.maze);
  }

  fill() {
    //1º fila
    this.points.push(new Item(this.context, 60, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 180, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 260, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 340, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 420, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 500, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 580, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 660, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 20, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 780, 20, { radius: DOTS_CONFIGURATION.radius }));
    //2º fila
    this.points.push(new Item(this.context, 20, 60, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 60, 60, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 420, 60, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 780, 60, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 60, { radius: DOTS_CONFIGURATION.radius }));
    //3º fila
    this.points.push(new Item(this.context, 20, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 180, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 260, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 340, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 420, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 500, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 580, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 660, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 100, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 100, { radius: DOTS_CONFIGURATION.radius }));
    //4º fila
    this.points.push(new Item(this.context, 20, 140, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 140, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 140, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 140, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 140, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 140, { radius: DOTS_CONFIGURATION.radius }));
    //5º fila
    this.points.push(new Item(this.context, 20, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 180, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 260, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 340, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 500, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 580, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 180, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 180, { radius: DOTS_CONFIGURATION.radius }));
    //6º fila
    this.points.push(new Item(this.context, 20, 220, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 220, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 220, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 220, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 220, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 420, 220, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 220, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 220, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 220, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 220, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 220, { radius: DOTS_CONFIGURATION.radius }));
    //7º fila
    this.points.push(new Item(this.context, 20, 260, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 260, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 260, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 260, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 260, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 260, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 260, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 260, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 260, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 260, { radius: DOTS_CONFIGURATION.radius }));
    //8º fila
    this.points.push(new Item(this.context, 20, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 60, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 260, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 340, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 420, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 500, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 580, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 780, 300, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 300, { radius: DOTS_CONFIGURATION.radius }));
    //9º fila
    this.points.push(new Item(this.context, 20, 340, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 340, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 340, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 180, 340, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 340, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 340, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 340, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 340, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 660, 340, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 340, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 340, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 340, { radius: DOTS_CONFIGURATION.radius }));
    //10º fila
    this.points.push(new Item(this.context, 20, 380, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 380, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 380, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 380, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 380, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 380, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 380, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 380, { radius: DOTS_CONFIGURATION.radius }));
    //11º fila
    this.points.push(new Item(this.context, 20, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 60, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 260, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 580, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 780, 420, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 420, { radius: DOTS_CONFIGURATION.radius }));
    //12º fila
    this.points.push(new Item(this.context, 20, 460, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 460, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 460, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 460, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 460, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 460, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 460, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 460, { radius: DOTS_CONFIGURATION.radius }));
    //13º fila
    this.points.push(new Item(this.context, 20, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 180, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 420, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 660, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 500, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 500, { radius: DOTS_CONFIGURATION.radius }));
    //14º fila
    this.points.push(new Item(this.context, 20, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 60, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 260, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 340, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 420, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 500, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 580, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 780, 540, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 540, { radius: DOTS_CONFIGURATION.radius }));
    //15º fila
    this.points.push(new Item(this.context, 20, 580, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 580, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 580, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 580, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 580, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 580, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 580, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 580, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 580, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 580, { radius: DOTS_CONFIGURATION.radius }));
    //16º fila
    this.points.push(new Item(this.context, 20, 620, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 620, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 620, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 620, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 620, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 420, 620, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 620, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 620, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 620, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 620, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 620, { radius: DOTS_CONFIGURATION.radius }));
    //17º fila
    this.points.push(new Item(this.context, 20, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 180, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 260, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 340, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 500, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 580, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 660, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 660, { radius: DOTS_CONFIGURATION.radius }));
    //18º fila
    this.points.push(new Item(this.context, 20, 700, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 700, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 700, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 700, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 700, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 700, { radius: DOTS_CONFIGURATION.radius }));
    //19º fila
    this.points.push(new Item(this.context, 20, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 180, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 260, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 340, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 500, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 580, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 660, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 740, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 740, { radius: DOTS_CONFIGURATION.radius }));
    //20º fila
    this.points.push(new Item(this.context, 20, 780, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 60, 780, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 420, 780, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 780, 780, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 820, 780, { radius: DOTS_CONFIGURATION.radius }));
    //21º fila
    this.points.push(new Item(this.context, 60, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 100, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 140, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 180, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 220, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 260, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 300, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 340, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 380, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 420, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 460, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 500, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 540, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 580, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 620, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 660, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 700, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 740, 820, { radius: DOTS_CONFIGURATION.radius }));
    this.points.push(new Item(this.context, 780, 820, { radius: DOTS_CONFIGURATION.radius }));
  }

  pause() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}