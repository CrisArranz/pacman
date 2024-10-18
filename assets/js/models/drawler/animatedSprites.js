class AnimatedSprites extends Picasso {
  constructor(context, positionX, positionY, width, height, color, shape, images) {
    super(context, positionX,positionY, width, height, color, shape, {...images});
    this.directionSprites = 1;
    this.tick = 0;
  }

  draw() {
    super.draw();
    if (this.tick > TICK_ANIMATION) {
      this.tick = 0;
      this.image.frameIndex += this.directionSprites;
      if (this.image.frameIndex > this.image.frames || this.image.frameIndex === 0) {
        this.directionSprites *= -1;
      }
    }
    this.tick++;
  }
}