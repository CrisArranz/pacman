class PowerUp extends Item {
  constructor(context, positionX, positionY) {
    super(context, positionX, positionY, { radius: POWERUP_CONFIGURATION.radius, color: POWERUP_CONFIGURATION.color[0] })
  }
}