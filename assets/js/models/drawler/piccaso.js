class Picasso {
  constructor(context, positionX, positionY, width, height, color, shape, images, radius) {
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
      }, { 
        up: new Image(), 
        down: new Image(), 
        right: new Image(), 
        left: new Image(), 
        red: new Image(), 
        cian: new Image(), 
        pink: new Image(), 
        orange: new Image(), 
        dead: new Image()
      });
    }

    if (shape === SHAPES.circle) {
      this.radius = radius;
    }

    if (shape === SHAPES.staticImage) {
      this.image = new Image();
      this.image.src = images;
      this.image.onload = () => {
        this.image.isReady = true;
      }
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
      case SHAPES.staticImage:
        this.drawStaticImages();
        break;
      case SHAPES.circle:
        this.drawCircles();
        break;
      default:
        break;
    }
  }

  drawRectangles() {
    this.context.save();
    this.context.fillStyle = this.color;
    this.context.shadowColor = "black";
    this.context.shadowBlur = 1;
    this.context.shadowOffsetX = 0;
    this.context.shadowOffsetY = 0;
    this.context.fillRect(this.positionX + 1, this.positionY + 1, this.width - 2, this.height - 2);
    this.context.shadowColor = "transparent";
    this.context.shadowBlur = 0;
    this.context.restore();
  }

  drawCircles() {
    this.context.save();
    this.context.beginPath();
    this.context.arc(this.positionX, this.positionY, this.radius, 0, 2 * Math.PI);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.strokeStyle = this.color;
    this.context.stroke();
    this.context.restore();
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

  drawStaticImages() {
    if (this.image.isReady) {
      this.context.drawImage(
        this.image,
        this.positionX,
        this.positionY,
        this.width,
        this.height
      );
    }
  }
}