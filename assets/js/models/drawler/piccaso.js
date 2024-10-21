class Picasso {
  constructor(context, positionX, positionY, width, height, color, shape, images) {
    this.context = context;
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.shape = shape;
    if (shape === SHAPES.image) {
      this.image = Object.keys(images).reduce((imagesFinal, direction) => {
        imagesFinal[direction].src = images[direction].src;
        imagesFinal[direction].frames = images[direction].frames;
        imagesFinal[direction].frameIndex = images[direction].frameIndex;
        imagesFinal[direction].directionSprites = 1;
        imagesFinal[direction].onload = () => {
          imagesFinal[direction].isReady = true;
        }
        return imagesFinal;
      }, { up: new Image(), down: new Image(), right: new Image(), left: new Image()});
    }
  }

  draw(movement) {
    switch(this.shape){
      case SHAPES.rectangle:
        this.drawRectangles();
        break;
      case SHAPES.image:
        this.drawImages(movement);
        break;
      default:
        break;
    }
  }

  drawRectangles() {
    this.context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  drawImages(movement) {
    if (this.image[movement].isReady) {
      this.context.drawImage(
        this.image[movement],
        (this.image[movement].width / this.image[movement].frames) * this.image[movement].frameIndex,
        0,
        this.image[movement].width / this.image[movement].frames,
        this.image[movement].height,
        this.positionX,
        this.positionY,
        this.width,
        this.height
      );
    }
  }
}