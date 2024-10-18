class Picasso {
  constructor(context, positionX, positionY, width, height, color, shape, { src, frames, frameIndex }) {
    this.context = context;
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.shape = shape;
    if (shape === SHAPES.image) {
      this.image = new Image();
      this.image.src = src;
      this.image.frames = frames;
      this.image.frameIndex = frameIndex;
      this.image.onload = () => {
        this.image.isReady = true;
      }
    }
  }

  draw() {
    switch(this.shape){
      case SHAPES.rectangle:
        this.drawRectangles();
        break;
      case SHAPES.image:
        this.drawImages();
        break;
      default:
        break;
    }
  }

  drawRectangles() {
    this.context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  drawImages() {
    if (this.image.isReady) {
      this.context.drawImage(
        this.image,
        (this.image.width / this.image.frames) * this.image.frameIndex,
        0,
        this.image.width / this.image.frames,
        this.image.height,
        this.positionX,
        this.positionY,
        this.width,
        this.height
      );
    }
  }
}