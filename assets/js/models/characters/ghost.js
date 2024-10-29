class Ghost extends AnimatedSprites {
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
  }

  draw() {
    super.draw(this.color);
  }
}