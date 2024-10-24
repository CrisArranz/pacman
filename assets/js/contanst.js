const FPS = 60;

const TICK_ANIMATION = 7.5;

const SIZES = 40;
const SHAPES = {
  image: 'image',
  rectangle: 'rectangle'
}

const KEY_CODE = {
  up: 38,
  down: 40,
  right: 39,
  left: 37
}

const PACMAN_CONFIGURATION = {
  size: SIZES,
  color: ['red'],
  shape: SHAPES.image,
  startPosition: {
    x: 400,
    y: 680
  },
  images: {
    up: {
      src: './assets/images/pacman/pacman-up.png',
      frames: 3,
      frameIndex: 0
    },
    down: { 
      src: './assets/images/pacman/pacman-down.png',
      frames: 3,
      frameIndex: 0
    },
    right: {
      src: './assets/images/pacman/pacman-right.png',
      frames: 3,
      frameIndex: 0
    },
    left: {
      src: './assets/images/pacman/pacman-left.png',
      frames: 3,
      frameIndex: 0
    },
  }
}

const GHOST_CONFIGURATION = {
  size: SIZES,
  color: ['red', 'blue', 'orange', 'pink', 'white'],
  shape: SHAPES.image
}

const WALLS_CONFIGURATION = {
  size: SIZES,
  color: ['white'],
  shape: SHAPES.rectangle
}