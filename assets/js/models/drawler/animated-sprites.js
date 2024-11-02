class AnimatedSprites extends Picasso {
  constructor(context, positionX, positionY, width, height, color, shape, images) {
    super(context, positionX,positionY, width, height, color, shape, images);
    this.tick = 0;
  }

  draw(movement) {
    super.draw(movement);
    if (this.tick > TICK_ANIMATION) {
      this.tick = 0;
      this.image[movement].frameIndex += this.image[movement].directionSprites;
      if (this.image[movement].frameIndex >= this.image[movement].frames - 1 || this.image[movement].frameIndex === 0) {
        this.image[movement].directionSprites *= -1;
      }
    }
    this.tick++;
  }
}