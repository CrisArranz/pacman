class Wall extends NonAnimatedSprites {
  constructor(context, positionX, positionY, { width, height, color }) {
    super(
      context,
      positionX,
      positionY,
      width,
      height,
      color ?? WALLS_CONFIGURATION.color[0],
      WALLS_CONFIGURATION.shape
    );
  }

  checkCollision(character) {
    const isCollidingHorizontally = this.positionX + this.width > character.positionX && 
                                    this.positionX < character.positionX + character.width;
    
    const isCollidingVertically = this.positionY + this.height > character.positionY && 
                                  this.positionY < character.positionY + character.height;
  
    return isCollidingHorizontally && isCollidingVertically;
  }
}