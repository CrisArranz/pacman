class Game {
  constructor(canvasId) {
    this.context = document.getElementById(canvasId).getContext("2d");

    this.pacman = new Pacman(this.context);

    this.items = [];

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
      new Wall(this.context, 120, 680, { width: WALLS_CONFIGURATION.getSizeWalls(6) , height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'blue' }),
      new Wall(this.context, 400, 640, { width: WALLS_CONFIGURATION.getSizeWalls(1) , height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 480, 680, { width: WALLS_CONFIGURATION.getSizeWalls(6) , height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'blue' }),
      //Pared intermedia superior
      new Wall(this.context, 120, 120, { width: WALLS_CONFIGURATION.getSizeWalls(6) , height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'blue' }),
      new Wall(this.context, 400, 120, { width: WALLS_CONFIGURATION.getSizeWalls(1) , height: WALLS_CONFIGURATION.getSizeWalls(2) }),
      new Wall(this.context, 480, 120, { width: WALLS_CONFIGURATION.getSizeWalls(6) , height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'blue' }),
      //Pared intermedia lateral izquierdo
      new Wall(this.context, 160, 160, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(4), color: 'blue' }),
      new Wall(this.context, 120, 280, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 160, 360, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(3), color: 'blue' }),
      new Wall(this.context, 120, 440, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 160, 520, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(4), color: 'blue' }),
      new Wall(this.context, 120, 520, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared intermedia lateral derecho
      new Wall(this.context, 640, 160, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(4), color: 'blue' }),
      new Wall(this.context, 680, 280, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 640, 360, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(3), color: 'blue' }),
      new Wall(this.context, 680, 440, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      new Wall(this.context, 640, 520, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(4), color: 'blue' }),
      new Wall(this.context, 680, 520, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1) }),
      //Pared interna lateral izquierdo
      new Wall(this.context, 240, 200, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2), color: 'yellow' }),
      new Wall(this.context, 240, 320, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2), color: 'yellow' }),
      new Wall(this.context, 240, 440, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2), color: 'yellow' }),
      new Wall(this.context, 240, 560, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2), color: 'yellow' }),
      //Pared interna lateral derecho
      new Wall(this.context, 560, 200, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2), color: 'yellow' }),
      new Wall(this.context, 560, 320, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2), color: 'yellow' }),
      new Wall(this.context, 560, 440, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2), color: 'yellow' }),
      new Wall(this.context, 560, 560, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(2), color: 'yellow' }),
      //Pared interna lateral inferior
      new Wall(this.context, 320, 560, { width: WALLS_CONFIGURATION.getSizeWalls(5), height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'yellow' }),
      new Wall(this.context, 320, 600, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'yellow' }),
      new Wall(this.context, 480, 600, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'yellow' }),
      //Pared interna lateral superior
      new Wall(this.context, 320, 240, { width: WALLS_CONFIGURATION.getSizeWalls(5), height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'yellow' }),
      new Wall(this.context, 320, 200, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'yellow' }),
      new Wall(this.context, 480, 200, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'yellow' }),
      //Jaula central
      new Wall(this.context, 320, 320, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(5), color: 'yellow' }),
      new Wall(this.context, 480, 320, { width: WALLS_CONFIGURATION.getSizeWalls(1), height: WALLS_CONFIGURATION.getSizeWalls(5), color: 'yellow' }),
      new Wall(this.context, 320, 480, { width: WALLS_CONFIGURATION.getSizeWalls(5) , height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'yellow' }),
      new Wall(this.context, 320, 320, { width: WALLS_CONFIGURATION.getSizeWalls(2) , height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'yellow' }),
      new Wall(this.context, 440, 320, { width: WALLS_CONFIGURATION.getSizeWalls(2) , height: WALLS_CONFIGURATION.getSizeWalls(1), color: 'yellow' }),
    ];
    this.fill();
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.clearItems();
      this.move();
      this.collisions();
      this.draw();      
    }, 1000 / FPS)
  }

  clear () {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  clearItems() {
    this.items = this.items.filter(item => !item.eaten);
  }

  draw() {
    this.pacman.draw();
    this.maze.forEach(wall => wall.draw());
    this.items.forEach(point => point.draw());
  }

  move() {
    this.pacman.move();
  }

  collisions() {
    this.pacman.checkCollisions(this.maze);
    this.items.forEach(item => {
      if (item.collision(this.pacman)) {
        console.info({comida: 'ñam', item})
        item.hasEaten()
      }
    });
  }

  fill() {
    //1º fila
    this.items.push(new Dot(this.context, 60, 20));
    this.items.push(new Dot(this.context, 100, 20));
    this.items.push(new Dot(this.context, 140, 20));
    this.items.push(new Dot(this.context, 180, 20));
    this.items.push(new Dot(this.context, 220, 20));
    this.items.push(new Dot(this.context, 260, 20));
    this.items.push(new Dot(this.context, 300, 20));
    this.items.push(new Dot(this.context, 340, 20));
    this.items.push(new Dot(this.context, 380, 20));
    this.items.push(new Dot(this.context, 420, 20));
    this.items.push(new Dot(this.context, 460, 20));
    this.items.push(new Dot(this.context, 500, 20));
    this.items.push(new Dot(this.context, 540, 20));
    this.items.push(new Dot(this.context, 580, 20));
    this.items.push(new Dot(this.context, 620, 20));
    this.items.push(new Dot(this.context, 660, 20));
    this.items.push(new Dot(this.context, 700, 20));
    this.items.push(new Dot(this.context, 740, 20));
    this.items.push(new Dot(this.context, 780, 20));
    //2º fila
    this.items.push(new Dot(this.context, 20, 60));
    this.items.push(new PowerUp(this.context, 60, 60));
    this.items.push(new Dot(this.context, 420, 60));
    this.items.push(new PowerUp(this.context, 780, 60));
    this.items.push(new Dot(this.context, 820, 60));
    //3º fila
    this.items.push(new Dot(this.context, 20, 100));
    this.items.push(new Dot(this.context, 100, 100));
    this.items.push(new Dot(this.context, 140, 100));
    this.items.push(new Dot(this.context, 180, 100));
    this.items.push(new Dot(this.context, 220, 100));
    this.items.push(new Dot(this.context, 260, 100));
    this.items.push(new Dot(this.context, 300, 100));
    this.items.push(new Dot(this.context, 340, 100));
    this.items.push(new Dot(this.context, 380, 100));
    this.items.push(new Dot(this.context, 420, 100));
    this.items.push(new Dot(this.context, 460, 100));
    this.items.push(new Dot(this.context, 500, 100));
    this.items.push(new Dot(this.context, 540, 100));
    this.items.push(new Dot(this.context, 580, 100));
    this.items.push(new Dot(this.context, 620, 100));
    this.items.push(new Dot(this.context, 660, 100));
    this.items.push(new Dot(this.context, 700, 100));
    this.items.push(new Dot(this.context, 740, 100));
    this.items.push(new Dot(this.context, 820, 100));
    //4º fila
    this.items.push(new Dot(this.context, 20, 140));
    this.items.push(new Dot(this.context, 100, 140));
    this.items.push(new Dot(this.context, 380, 140));
    this.items.push(new Dot(this.context, 460, 140));
    this.items.push(new Dot(this.context, 740, 140));
    this.items.push(new Dot(this.context, 820, 140));
    //5º fila
    this.items.push(new Dot(this.context, 20, 180));
    this.items.push(new Dot(this.context, 100, 180));
    this.items.push(new Dot(this.context, 140, 180));
    this.items.push(new Dot(this.context, 220, 180));
    this.items.push(new Dot(this.context, 260, 180));
    this.items.push(new Dot(this.context, 300, 180));
    this.items.push(new Dot(this.context, 340, 180));
    this.items.push(new Dot(this.context, 380, 180));
    this.items.push(new Dot(this.context, 460, 180));
    this.items.push(new Dot(this.context, 500, 180));
    this.items.push(new Dot(this.context, 540, 180));
    this.items.push(new Dot(this.context, 580, 180));
    this.items.push(new Dot(this.context, 620, 180));
    this.items.push(new Dot(this.context, 700, 180));
    this.items.push(new Dot(this.context, 740, 180));
    this.items.push(new Dot(this.context, 820, 180));
    //6º fila
    this.items.push(new Dot(this.context, 20, 220));
    this.items.push(new Dot(this.context, 140, 220));
    this.items.push(new Dot(this.context, 220, 220));
    this.items.push(new Dot(this.context, 300, 220));
    this.items.push(new Dot(this.context, 380, 220));
    this.items.push(new Dot(this.context, 420, 220));
    this.items.push(new Dot(this.context, 460, 220));
    this.items.push(new Dot(this.context, 540, 220));
    this.items.push(new Dot(this.context, 620, 220));
    this.items.push(new Dot(this.context, 700, 220));
    this.items.push(new Dot(this.context, 820, 220));
    //7º fila
    this.items.push(new Dot(this.context, 20, 260));
    this.items.push(new Dot(this.context, 100, 260));
    this.items.push(new Dot(this.context, 140, 260));
    this.items.push(new Dot(this.context, 220, 260));
    this.items.push(new Dot(this.context, 300, 260));
    this.items.push(new Dot(this.context, 540, 260));
    this.items.push(new Dot(this.context, 620, 260));
    this.items.push(new Dot(this.context, 700, 260));
    this.items.push(new Dot(this.context, 740, 260));
    this.items.push(new Dot(this.context, 820, 260));
    //8º fila
    this.items.push(new Dot(this.context, 20, 300));
    this.items.push(new Dot(this.context, 60, 300));
    this.items.push(new Dot(this.context, 100, 300));
    this.items.push(new Dot(this.context, 220, 300));
    this.items.push(new Dot(this.context, 260, 300));
    this.items.push(new Dot(this.context, 300, 300));
    this.items.push(new Dot(this.context, 340, 300));
    this.items.push(new Dot(this.context, 380, 300));
    this.items.push(new Dot(this.context, 420, 300));
    this.items.push(new Dot(this.context, 460, 300));
    this.items.push(new Dot(this.context, 500, 300));
    this.items.push(new Dot(this.context, 540, 300));
    this.items.push(new Dot(this.context, 580, 300));
    this.items.push(new Dot(this.context, 620, 300));
    this.items.push(new Dot(this.context, 740, 300));
    this.items.push(new Dot(this.context, 780, 300));
    this.items.push(new Dot(this.context, 820, 300));
    //9º fila
    this.items.push(new Dot(this.context, 20, 340));
    this.items.push(new Dot(this.context, 100, 340));
    this.items.push(new Dot(this.context, 140, 340));
    this.items.push(new Dot(this.context, 180, 340));
    this.items.push(new Dot(this.context, 220, 340));
    this.items.push(new Dot(this.context, 300, 340));
    this.items.push(new Dot(this.context, 540, 340));
    this.items.push(new Dot(this.context, 620, 340));
    this.items.push(new Dot(this.context, 660, 340));
    this.items.push(new Dot(this.context, 700, 340));
    this.items.push(new Dot(this.context, 740, 340));
    this.items.push(new Dot(this.context, 820, 340));
    //10º fila
    this.items.push(new Dot(this.context, 20, 380));
    this.items.push(new Dot(this.context, 140, 380));
    this.items.push(new Dot(this.context, 220, 380));
    this.items.push(new Dot(this.context, 300, 380));
    this.items.push(new Dot(this.context, 540, 380));
    this.items.push(new Dot(this.context, 620, 380));
    this.items.push(new Dot(this.context, 700, 380));
    this.items.push(new Dot(this.context, 820, 380));
    //11º fila
    this.items.push(new Dot(this.context, 20, 420));
    this.items.push(new Dot(this.context, 60, 420));
    this.items.push(new Dot(this.context, 100, 420));
    this.items.push(new Dot(this.context, 140, 420));
    this.items.push(new Dot(this.context, 220, 420));
    this.items.push(new PowerUp(this.context, 260, 420));
    this.items.push(new Dot(this.context, 300, 420));
    this.items.push(new Dot(this.context, 540, 420));
    this.items.push(new PowerUp(this.context, 580, 420));
    this.items.push(new Dot(this.context, 620, 420));
    this.items.push(new Dot(this.context, 700, 420));
    this.items.push(new Dot(this.context, 740, 420));
    this.items.push(new Dot(this.context, 780, 420));
    this.items.push(new Dot(this.context, 820, 420));
    //12º fila
    this.items.push(new Dot(this.context, 20, 460));
    this.items.push(new Dot(this.context, 100, 460));
    this.items.push(new Dot(this.context, 220, 460));
    this.items.push(new Dot(this.context, 300, 460));
    this.items.push(new Dot(this.context, 540, 460));
    this.items.push(new Dot(this.context, 620, 460));
    this.items.push(new Dot(this.context, 740, 460));
    this.items.push(new Dot(this.context, 820, 460));
    //13º fila
    this.items.push(new Dot(this.context, 20, 500));
    this.items.push(new Dot(this.context, 100, 500));
    this.items.push(new Dot(this.context, 140, 500));
    this.items.push(new Dot(this.context, 180, 500));
    this.items.push(new Dot(this.context, 220, 500));
    this.items.push(new Dot(this.context, 300, 500));
    this.items.push(new Dot(this.context, 540, 500));
    this.items.push(new Dot(this.context, 620, 500));
    this.items.push(new Dot(this.context, 660, 500));
    this.items.push(new Dot(this.context, 700, 500));
    this.items.push(new Dot(this.context, 740, 500));
    this.items.push(new Dot(this.context, 820, 500));
    //14º fila
    this.items.push(new Dot(this.context, 20, 540));
    this.items.push(new Dot(this.context, 60, 540));
    this.items.push(new Dot(this.context, 100, 540));
    this.items.push(new Dot(this.context, 220, 540));
    this.items.push(new Dot(this.context, 260, 540));
    this.items.push(new Dot(this.context, 300, 540));
    this.items.push(new Dot(this.context, 340, 540));
    this.items.push(new Dot(this.context, 380, 540));
    this.items.push(new Dot(this.context, 420, 540));
    this.items.push(new Dot(this.context, 460, 540));
    this.items.push(new Dot(this.context, 500, 540));
    this.items.push(new Dot(this.context, 540, 540));
    this.items.push(new Dot(this.context, 580, 540));
    this.items.push(new Dot(this.context, 620, 540));
    this.items.push(new Dot(this.context, 740, 540));
    this.items.push(new Dot(this.context, 780, 540));
    this.items.push(new Dot(this.context, 820, 540));
    //15º fila
    this.items.push(new Dot(this.context, 20, 580));
    this.items.push(new Dot(this.context, 100, 580));
    this.items.push(new Dot(this.context, 140, 580));
    this.items.push(new Dot(this.context, 220, 580));
    this.items.push(new Dot(this.context, 300, 580));
    this.items.push(new Dot(this.context, 540, 580));
    this.items.push(new Dot(this.context, 620, 580));
    this.items.push(new Dot(this.context, 700, 580));
    this.items.push(new Dot(this.context, 740, 580));
    this.items.push(new Dot(this.context, 820, 580));
    //16º fila
    this.items.push(new Dot(this.context, 20, 620));
    this.items.push(new Dot(this.context, 140, 620));
    this.items.push(new Dot(this.context, 220, 620));
    this.items.push(new Dot(this.context, 300, 620));
    this.items.push(new Dot(this.context, 380, 620));
    this.items.push(new Dot(this.context, 420, 620));
    this.items.push(new Dot(this.context, 460, 620));
    this.items.push(new Dot(this.context, 540, 620));
    this.items.push(new Dot(this.context, 620, 620));
    this.items.push(new Dot(this.context, 700, 620));
    this.items.push(new Dot(this.context, 820, 620));
    //17º fila
    this.items.push(new Dot(this.context, 20, 660));
    this.items.push(new Dot(this.context, 100, 660));
    this.items.push(new Dot(this.context, 140, 660));
    this.items.push(new Dot(this.context, 220, 660));
    this.items.push(new Dot(this.context, 260, 660));
    this.items.push(new Dot(this.context, 300, 660));
    this.items.push(new Dot(this.context, 340, 660));
    this.items.push(new Dot(this.context, 380, 660));
    this.items.push(new Dot(this.context, 460, 660));
    this.items.push(new Dot(this.context, 500, 660));
    this.items.push(new Dot(this.context, 540, 660));
    this.items.push(new Dot(this.context, 580, 660));
    this.items.push(new Dot(this.context, 620, 660));
    this.items.push(new Dot(this.context, 700, 660));
    this.items.push(new Dot(this.context, 740, 660));
    this.items.push(new Dot(this.context, 820, 660));
    //18º fila
    this.items.push(new Dot(this.context, 20, 700));
    this.items.push(new Dot(this.context, 100, 700));
    this.items.push(new Dot(this.context, 380, 700));
    this.items.push(new Dot(this.context, 460, 700));
    this.items.push(new Dot(this.context, 740, 700));
    this.items.push(new Dot(this.context, 820, 700));
    //19º fila
    this.items.push(new Dot(this.context, 20, 740));
    this.items.push(new Dot(this.context, 100, 740));
    this.items.push(new Dot(this.context, 140, 740));
    this.items.push(new Dot(this.context, 180, 740));
    this.items.push(new Dot(this.context, 220, 740));
    this.items.push(new Dot(this.context, 260, 740));
    this.items.push(new Dot(this.context, 300, 740));
    this.items.push(new Dot(this.context, 340, 740));
    this.items.push(new Dot(this.context, 380, 740));
    this.items.push(new Dot(this.context, 460, 740));
    this.items.push(new Dot(this.context, 500, 740));
    this.items.push(new Dot(this.context, 540, 740));
    this.items.push(new Dot(this.context, 580, 740));
    this.items.push(new Dot(this.context, 620, 740));
    this.items.push(new Dot(this.context, 660, 740));
    this.items.push(new Dot(this.context, 700, 740));
    this.items.push(new Dot(this.context, 740, 740));
    this.items.push(new Dot(this.context, 820, 740));
    //20º fila
    this.items.push(new Dot(this.context, 20, 780));
    this.items.push(new PowerUp(this.context, 60, 780));
    this.items.push(new Dot(this.context, 420, 780));
    this.items.push(new PowerUp(this.context, 780, 780));
    this.items.push(new Dot(this.context, 820, 780));
    //21º fila
    this.items.push(new Dot(this.context, 60, 820));
    this.items.push(new Dot(this.context, 100, 820));
    this.items.push(new Dot(this.context, 140, 820));
    this.items.push(new Dot(this.context, 180, 820));
    this.items.push(new Dot(this.context, 220, 820));
    this.items.push(new Dot(this.context, 260, 820));
    this.items.push(new Dot(this.context, 300, 820));
    this.items.push(new Dot(this.context, 340, 820));
    this.items.push(new Dot(this.context, 380, 820));
    this.items.push(new Dot(this.context, 420, 820));
    this.items.push(new Dot(this.context, 460, 820));
    this.items.push(new Dot(this.context, 500, 820));
    this.items.push(new Dot(this.context, 540, 820));
    this.items.push(new Dot(this.context, 580, 820));
    this.items.push(new Dot(this.context, 620, 820));
    this.items.push(new Dot(this.context, 660, 820));
    this.items.push(new Dot(this.context, 700, 820));
    this.items.push(new Dot(this.context, 740, 820));
    this.items.push(new Dot(this.context, 780, 820));
  }

  pause() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}