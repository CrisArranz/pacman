const FPS = 60;

const TICK_ANIMATION = 7.5;

const SIZES = 40;
const SHAPES = {
  image: 'image',
  staticImage: 'staticImage',
  rectangle: 'rectangle',
  circle: 'circle'
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
    y: 720
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
  getSizeWalls: (n) => SIZES * n,
  color: ['white'],
  shape: SHAPES.rectangle
}

const DOTS_CONFIGURATION = {
  radius: SIZES / 8,
  color: ['#A121EB'],
  shape: SHAPES.circle
}

const POWERUP_CONFIGURATION = {
  radius: SIZES / 4,
  color: ['gold'],
  shape: SHAPES.circle
}

const AVAILABLE_POSITIONS = {
  row : {
    0: [40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760],
    40: [0, 40, 400, 720, 760],
    80: [0, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 800],
    120: [0, 80, 360, 440, 720, 800],
    160: [0, 80, 120, 200, 240, 280, 320, 360, 440, 480, 520, 560, 600, 680, 720, 800],
    200: [0, 120, 200, 280, 360, 400, 440, 480, 520, 560, 600, 680, 720, 800],
    240: [0, 80, 120, 200, 280, 520, 600, 680, 720, 800],
    280: [0, 40, 80, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 720, 760, 800],
    320: [0, 80, 120, 160, 200, 280, 520, 600, 640, 680, 720, 800],
    360: [0, 120, 200, 280, 520, 600, 680, 800],
    400: [0, 40, 80, 120, 200, 240, 280, 520, 560, 600, 680, 720, 760, 800],
    440: [0, 80, 200, 280, 520, 600, 720, 800],
    480: [0, 80, 120, 160, 200, 280, 520, 600, 640, 680, 720, 800],
    520: [0, 40, 80, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 720, 760, 800],
    560: [0, 80, 120, 200, 280, 520, 600, 680, 720, 800],
    600: [0, 120, 200, 280, 360, 400, 440, 480, 520, 560, 600, 680, 720, 800],
    640: [0, 80, 120, 200, 240, 280, 320, 360, 440, 480, 520, 560, 600, 680, 720, 800],
    680: [0, 80, 360, 440, 720, 800],
    720: [0, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 800],
    760: [0, 40, 400, 720, 760],
    800: [40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760],
  }
}