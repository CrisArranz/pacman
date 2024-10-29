class Item extends NonAnimatedSprites {
  constructor(context, positionX, positionY, { radius, color, shape, image, width, height }) {
    super(
      context,
      positionX,
      positionY,
      width,
      height,
      color,
      shape,
      image,
      radius
    );

    this.eaten = false;
  }

  collision(character) {
    let collisionX = (character.positionX + 20) === this.positionX && (character.positionX + character.width - 20) === this.positionX;
    let collisionY = (character.positionY + 20) === this.positionY && (character.positionY + character.height - 20) === this.positionY;
    if (collisionX && collisionY) return collisionX && collisionY;

    collisionX = character.positionX < this.positionX + this.width && character.positionX + character.width > this.positionX;
    collisionY = character.positionY < this.positionY + this.height && character.positionY + character.height > this.positionY;

    return collisionX && collisionY;
  }

  hasEaten() {
    this.eaten = true;
  }
}