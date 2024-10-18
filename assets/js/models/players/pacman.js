class Pacman extends AnimatedSprites {
  constructor(context) {
    super(
      context, 
      PACMAN_CONFIGURATION.startPosition.x, 
      PACMAN_CONFIGURATION.startPosition.y, 
      PACMAN_CONFIGURATION.size, 
      PACMAN_CONFIGURATION.size, 
      PACMAN_CONFIGURATION.color[0], 
      PACMAN_CONFIGURATION.shape, 
      PACMAN_CONFIGURATION.images.left
    )
  }
}