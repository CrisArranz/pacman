class Character extends AnimatedSprites {
  constructor(context, positionX, positionY, eidth, height, color, shape, image) {
    super(context, positionX, positionY, eidth, height, color, shape, image);
    this.movements = {
      up: false,
      down: false,
      right: false,
      left: false
    };
    this.velocityX = 0;
    this.velocityY = 0;
    this.canMove = true;

    this.tickVelocity = 0;

    this.tickMovement = 0;
    this.limits = {
      positionX: 0,
      positionY: 0,
      width: context.canvas.width,
      height: context.canvas.height
    }
  }

  draw() {
    const movement = Object.keys(this.movements).filter(movement => this.movements[movement])[0] ?? 'left';
    super.draw(movement);
  }

  move() {
    if (this.tickVelocity > 10) {
      this.tickVelocity = 0
      this.positionX += this.velocityX;
      this.positionY += this.velocityY;
    }
    this.tickVelocity++;
  }

  checkCollisions(maze) {
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