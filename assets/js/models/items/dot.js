class Dot extends Item {
  constructor(context, positionX, positionY) {
    super(context, positionX, positionY, { radius: DOTS_CONFIGURATION.radius, color: DOTS_CONFIGURATION.color[0] })
  }
}