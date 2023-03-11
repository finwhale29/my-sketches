const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
  animate: true,
  fps: 10,
  playbackRate: "throttle",
};

let elcanvas;
let rectangles;
let MouseDownMouseX;
let MouseDownMouseY;
let DistanceBetweenMouseXPositions;
let DistanceBetweenMouseYPositions;
let touching = false;
const sketch = ({ canvas }) => {
  rectangles = [
    new Rectangle({
      x: 200,
      y: 200,
      width: 250,
      height: 350,
      mouseDownX: 0,
      mouseDownY: 0,
    }),
    new Rectangle({
      x: 400,
      y: 200,
      width: 150,
      height: 150,
      mouseDownX: 0,
      mouseDownY: 0,
    }),
  ];

  canvas.addEventListener("mousedown", onMouseDown);

  elcanvas = canvas;

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    rectangles.forEach((rectangle) => {
      rectangle.draw(context);
    });
  };
};

const onMouseDown = (e) => {
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);

  const x = (e.offsetX / elcanvas.offsetWidth) * elcanvas.width;
  const y = (e.offsetY / elcanvas.offsetHeight) * elcanvas.height;

  rectangles.forEach((rectangle) => {
    rectangle.isDragging = rectangle.hitTest(x, y);

    rectangle.mouseDownX = rectangle.x;
    rectangle.mouseDownY = rectangle.y;
  });

  MouseDownMouseX = x;
  MouseDownMouseY = y;
};

const onMouseMove = (e) => {
  const x = (e.offsetX / elcanvas.offsetWidth) * elcanvas.width;
  const y = (e.offsetY / elcanvas.offsetHeight) * elcanvas.height;

  DistanceBetweenMouseXPositions = x - MouseDownMouseX;
  DistanceBetweenMouseYPositions = y - MouseDownMouseY;

  rectangles.forEach((rectangle) => {
    if (rectangle.isDragging) {
      rectangle.x = rectangle.mouseDownX + DistanceBetweenMouseXPositions;
      rectangle.y = rectangle.mouseDownY + DistanceBetweenMouseYPositions;
      touching = touchTest(
        rectangles[0].x,
        rectangles[0].y,
        rectangles[1].x,
        rectangles[1].y,
        rectangles[0].width,
        rectangles[0].height,
        rectangles[1].width,
        rectangles[1].height
      );
      console.log("touching", touching);
    }
  });
};

const onMouseUp = () => {
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mouseup", onMouseUp);
};

canvasSketch(sketch, settings);

const touchTest = (
  firstRectX,
  firstRectY,
  secondRectX,
  secondRectY,
  firstRectWidth,
  firstRectHeight,
  secondRectWidth,
  secondRectHeight
) => {
  if (
    secondRectX + secondRectWidth > firstRectX &&
    firstRectX > secondRectX - firstRectWidth &&
    secondRectY + secondRectHeight > firstRectY &&
    firstRectY > secondRectY - firstRectHeight
  ) {
    return true;
  } else {
    return false;
  }
};

class Rectangle {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.mouseDownX;
    this.mouseDownY;
  }
  draw(context) {
    console.log("draw", touching);
    if (touching === true) {
      context.save();
      context.translate(this.x, this.y);
      context.fillStyle = "aqua";
      context.fillRect(0, 0, this.width, this.height);
      context.restore();
    } else {
      context.save();
      context.translate(this.x, this.y);
      context.fillStyle = "lightcyan";
      context.fillRect(0, 0, this.width, this.height);
      context.restore();
    }
  }

  hitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
