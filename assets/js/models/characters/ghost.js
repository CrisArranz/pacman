class Ghost extends Character {
  constructor(context, positionX, positionY) {
    super(
      context, 
      positionX,
      positionY,
      GHOST_CONFIGURATION.size, 
      GHOST_CONFIGURATION.size, 
      GHOST_CONFIGURATION.color[Math.floor(GHOST_CONFIGURATION.color.length * Math.random())], 
      GHOST_CONFIGURATION.shape, 
      GHOST_CONFIGURATION.images
    )

    this.existJail = {
      positionX: 400,
      positionY: 280,
      success: false,
      startMovement: this.randomStartMovement()
    }

    this.doorJail = {
      positionX: 400,
      positionY: 320
    }
  }

  draw() {
    super.draw(this.color);
  }

  move(pacman) {
    super.move();
    if (!this.existJail.success) {
      this.exitJail();
    } else {

    }
  }

  selectMovement() {
    
  }

  randomStartMovement() {
    return Math.floor(20 * Math.random()) % 2 === 0 ? { left: true } : { right: true };
  }

  checkCollisions(maze) {
    super.checkCollisions(maze);
  }

  checkCollisionRight(wall) {
    return this.positionX + this.width <= wall.positionX;
  }

  checkCollisionLeft(wall) {
    return this.positionX >= wall.positionX + wall.width;
  }

  checkCollisionUp(wall) {
    return this.positionY <= wall.positionY + wall.height;
  }

  checkCollisionDown(wall) {
    return this.positionY + this.height >= wall.positionY;
  }

  exitJail() {
    if (this.positionX < this.existJail.positionX) {
      this.velocityX = 20;
    } else if (this.positionX > this.existJail.positionX) {
      this.velocityX = -20;
    } else {
      this.velocityX = 0;
    }

    if (this.positionY < this.existJail.positionY) {
      this.velocityY = 20;
    } else if (this.positionY > this.existJail.positionY) {
      this.velocityY = -20;
    } else {
      this.velocityY = 0;
    }

    if (this.positionX === this.existJail.positionX && this.positionY === this.existJail.positionY){
      this.existJail.success = true;
    }
  }
}