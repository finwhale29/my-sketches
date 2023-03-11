const canvasSketch = require("canvas-sketch");

class Rectangle {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.mouseDownX;
    this.mouseDownY;
    this.isTouching = false;
  }
  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.fillStyle = this.isTouching ? "aqua" : "lightcyan";
    context.fillRect(0, 0, this.width, this.height);
    context.restore();
  }

  hitTest(x, y) {
    return (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    );
  }
}

const INIT_RECTANGLE_1 = new Rectangle({
  x: 200,
  y: 200,
  width: 250,
  height: 350,
});

const INIT_RECTANGLE_2 = new Rectangle({
  x: 400,
  y: 200,
  width: 150,
  height: 150,
});

const NEW_RECTANGLE_W = 100;
const NEW_RECTANGLE_H = 100;

const settings = {
  dimensions: [2048, 2048],
  animate: true,
  fps: 10,
  playbackRate: "throttle",
};

const rectangles = [INIT_RECTANGLE_1, INIT_RECTANGLE_2];

let mouseDownMouseX;
let mouseDownMouseY;
let distanceBetweenMouseXPositions;
let distanceBetweenMouseYPositions;

const sketch = ({ canvas }) => {
  // initialize
  updateRectangles();

  const onMouseDown = (e) => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    const x = (e.offsetX / canvas.offsetWidth) * canvas.width;
    const y = (e.offsetY / canvas.offsetHeight) * canvas.height;

    rectangles.forEach((rectangle) => {
      rectangle.isDragging = rectangle.hitTest(x, y);
      rectangle.mouseDownX = rectangle.x;
      rectangle.mouseDownY = rectangle.y;
    });

    let isAnyRectHit = false;

    for (let i = 0; i < rectangles.length; ++i) {
      if (rectangles[i].hitTest(x, y)) {
        isAnyRectHit = true;
        break;
      }
    }

    if (!isAnyRectHit && rectangles.length < 5) {
      rectangles.push(
        new Rectangle({
          x: x,
          y: y,
          width: NEW_RECTANGLE_W,
          height: NEW_RECTANGLE_H,
        })
      );
    }

    updateRectangles();

    mouseDownMouseX = x;
    mouseDownMouseY = y;
  };

  const onMouseMove = (e) => {
    const x = (e.offsetX / canvas.offsetWidth) * canvas.width;
    const y = (e.offsetY / canvas.offsetHeight) * canvas.height;

    distanceBetweenMouseXPositions = x - mouseDownMouseX;
    distanceBetweenMouseYPositions = y - mouseDownMouseY;

    rectangles.forEach((rectangle) => {
      if (rectangle.isDragging) {
        rectangle.x = rectangle.mouseDownX + distanceBetweenMouseXPositions;
        rectangle.y = rectangle.mouseDownY + distanceBetweenMouseYPositions;
      }
    });

    updateRectangles();
  };

  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  canvas.addEventListener("mousedown", onMouseDown);

  return ({ context, width, height }) => {
    // Clear the whole canvas
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    // Draw all the rectangles
    rectangles.forEach((rectangle) => {
      rectangle.draw(context);
    });
  };
};

const updateRectangles = () => {
  rectangles.forEach((rect) => {
    rect.isTouching = false;
  });
  for (let i = 0; i < rectangles.length; i++) {
    for (let j = i + 1; j < rectangles.length; j++) {
      if (touchTest(rectangles[i], rectangles[j])) {
        rectangles[i].isTouching = true;
        rectangles[j].isTouching = true;
      }
    }
  }
};

canvasSketch(sketch, settings);

const touchTest = (firstRect, secondRect) =>
  secondRect.x + secondRect.width > firstRect.x &&
  firstRect.x > secondRect.x - firstRect.width &&
  secondRect.y + secondRect.height > firstRect.y &&
  firstRect.y > secondRect.y - firstRect.height;
