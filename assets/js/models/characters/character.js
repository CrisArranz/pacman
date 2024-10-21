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

    this.tickMovement = 0;
  }

  draw() {
    const movement = Object.keys(this.movements).filter(movement => this.movements[movement])[0] ?? 'left';
    super.draw(movement);
  }

  move() {
    this.positionX += this.velocityX;
    this.positionY += this.velocityY;

    this.checkCollisions();
  }

  checkCollisions() {
    if (this.positionX <= 0 || this.positionX + this.width >= this.context.canvas.width){
      this.velocityX = 0;
    }

    if (this.positionY <= 0 || this.positionY + this.height >= this.context.canvas.height) {
      this.velocityY = 0;
    }
  }

  onKeyDown({ keyCode }) {
    if (this.canMove) {
      this.canMove = false;
      this.selectMovement(keyCode);
      switch(true){
        case this.movements.up:
          this.velocityY = -5;
          this.velocityX = 0;
          break;
        case this.movements.down:
          this.velocityY = 5;
          this.velocityX = 0;
          break;
        case this.movements.right:
          this.velocityY = 0;
          this.velocityX = 5;
          break;
        case this.movements.left:
          this.velocityY = 0;
          this.velocityX = -5;
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