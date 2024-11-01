class Pacman extends Character {
  constructor(context) {
    super(
      context, 
      PACMAN_CONFIGURATION.startPosition.x, 
      PACMAN_CONFIGURATION.startPosition.y, 
      PACMAN_CONFIGURATION.size, 
      PACMAN_CONFIGURATION.size, 
      PACMAN_CONFIGURATION.color[0], 
      PACMAN_CONFIGURATION.shape, 
      PACMAN_CONFIGURATION.images
    );

    this.canMove = true;
    this.canLoseLives = true;

    this.lives = 3;

    this.tickLives = 0;
  }
  

  draw() {
    const typeMovement = Object.keys(this.movements).filter(movement => this.movements[movement])[0] ?? 'left';
    super.draw(typeMovement);
  }

  checkCollisions(maze, characters) {
    super.checkCollisions(maze);
    if (!!characters.length && this.canLoseLives) {
      if (characters.some(character => super.checkCollisionCharacter(character))) {
        if (this.canLoseLives) {
          this.lives--;
          this.canLoseLives = false;
        }
      }
    }
    if (!this.canLoseLives) {
      this.tickLives++;
      if (this.tickLives > 90) {
        this.tickLives = 0;
        this.canLoseLives = true;
      }
    }
  }

  onKeyDown({ keyCode }) {
    if (this.canMove) {
      this.canMove = false;
      this.selectMovement(keyCode);
      switch(true){
        case this.movements.up:
          this.velocityY = -40;
          this.velocityX = 0;
          break;
        case this.movements.down:
          this.velocityY = 40;
          this.velocityX = 0;
          break;
        case this.movements.right:
          this.velocityY = 0;
          this.velocityX = 40;
          break;
        case this.movements.left:
          this.velocityY = 0;
          this.velocityX = -40;
          break;
      }
    }
  }

  selectMovement(keyCode) {
    this.movements = {
      up: false,
      down: false,
      right: false,
      left: false
    };
    switch(keyCode) {
      case KEY_CODE.up:
        this.movements.up = true;
        break;
      case KEY_CODE.down:
        this.movements.down = true;
        break;
      case KEY_CODE.right:
        this.movements.right = true;
        break;
      case KEY_CODE.left:
        this.movements.left = true;
        break;
    }
  }

  onKeyUp() {
    this.canMove = true;
  }
}