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
      success: false
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

  exitJail() {
    if (this.positionX < this.existJail.positionX) {
      this.velocityX = 40;
    } else if (this.positionX > this.existJail.positionX) {
      this.velocityX = -40;
    } else {
      this.velocityX = 0;
    }

    if (this.positionY < this.existJail.positionY) {
      this.velocityY = 40;
    } else if (this.positionY > this.existJail.positionY) {
      this.velocityY = -40;
    } else {
      this.velocityY = 0;
    }

    if (this.positionX === this.existJail.positionX && this.positionY === this.existJail.positionY){
      this.existJail.success = true;
    }
  }
}