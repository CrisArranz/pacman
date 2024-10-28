class Item extends NonAnimatedSprites {
  constructor(context, positionX, positionY, { radius, color }) {
    super(
      context,
      positionX,
      positionY,
      undefined,
      undefined,
      color,
      SHAPES.circle,
      radius
    );

    this.eaten = false;
  }

  collision(character) {
    const collisionX = (character.positionX + 20) === this.positionX && (character.positionX + character.width - 20) === this.positionX;
    const collisionY = (character.positionY + 20) === this.positionY && (character.positionY + character.height - 20) === this.positionY;
    return collisionX && collisionY;
  }

  hasEaten() {
    this.eaten = true;
  }
}