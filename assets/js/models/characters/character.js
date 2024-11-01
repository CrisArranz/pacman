class Character extends AnimatedSprites {
  constructor(context, positionX, positionY, eidth, height, color, shape, image) {
    super(context, positionX, positionY, eidth, height, color, shape, image);
    
    this.velocityX = 0;
    this.velocityY = 0;

    this.movements = {
      up: false,
      down: false,
      right: false,
      left: false
    };

    this.tickVelocity = 0;
  }

  draw(type) {
    super.draw(type);
  }

  move() {
    if (this.tickVelocity > 10) {
      this.tickVelocity = 0
      this.positionX += this.velocityX;
      this.positionY += this.velocityY;
    }
    this.tickVelocity++;

    if (this.positionX <= 0) {
      this.positionX = 0;
    }

    if (this.positionX + this.width >= this.context.canvas.width) {
      this.positionX = this.context.canvas.width - this.width;
    }
  
    if (this.positionY <= 0) {
      this.positionY = 0;
    }

    if (this.positionY + this.height >= this.context.canvas.height) {
      this.positionY = this.context.canvas.height - this.height;
    }
  }

  checkCollisions(maze) {
    this.checkCollisionMaze(maze);
  }

  checkCollisionCharacter(character) {
    return this.positionX + this.width >= character.positionX && 
      character.positionX + character.width >= this.positionX &&
      this.positionY + this.height >= character.positionY && 
      character.positionY + character.height >= this.positionY;
  }

  checkCollisionMaze(maze) {
    const wall = maze.find(wall => wall.checkCollision(this));
    
    if (wall) {
      if (this.velocityX > 0 && this.positionX + this.width > wall.positionX) {
        this.positionX = wall.positionX - this.width;
        this.velocityX = 0;
      } else if (this.velocityX < 0 && this.positionX < wall.positionX + wall.width) {
        this.positionX = wall.positionX + wall.width;
        this.velocityX = 0;
      }
  
      if (this.velocityY > 0 && this.positionY + this.height > wall.positionY) {
        this.positionY = wall.positionY - this.height;
        this.velocityY = 0;
      } else if (this.velocityY < 0 && this.positionY < wall.positionY + wall.height) {
        this.positionY = wall.positionY + wall.height;
        this.velocityY = 0;
      }
    }

    this.snapToGrid();
  }

  snapToGrid() {
    this.positionX = Math.round(this.positionX);
    this.positionY = Math.round(this.positionY);
  }
}