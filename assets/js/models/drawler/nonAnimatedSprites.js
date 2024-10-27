class NonAnimatedSprites extends Picasso {
  constructor(context, positionX, positionY, width, height, color, shape, radius) {
    super(context, positionX, positionY, width, height, color, shape, undefined, radius);
  }
}