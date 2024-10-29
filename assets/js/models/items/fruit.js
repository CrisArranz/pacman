class Fruit extends Item {
  constructor(context, positionX, positionY) {
    super(context,
      positionX,
      positionY, 
      { 
        radius: DOTS_CONFIGURATION.radius, 
        color: DOTS_CONFIGURATION.color[0], 
        shape: SHAPES.staticImage, 
        image: './assets/images/items/fruit.png',
        width: SIZES,
        height: SIZES
      }
    );
  }
}