class Item extends NonAnimatedSprites {
  constructor(context, positionX, positionY, { radius }) {
    super(
      context,
      positionX,
      positionY,
      undefined,
      undefined,
      DOTS_CONFIGURATION.color[0],
      SHAPES.circle,
      radius
    )
  }
}