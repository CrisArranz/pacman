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
    )
  }
}