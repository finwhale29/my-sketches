const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
  animate: true,
  fps: 60,
  playbackRate: "throttle",
};
let elcanvas;
const sketch = ({ canvas }) => {
  let xxx, yyy;
  let DistanceBetweenMouseXPositions;
  let DistanceBetweenMouseYPositions;
  let MouseDownRectX;
  let MouseDownRectY;
  let MouseDownMouseY;
  let MouseDownMouseX;
  let isDragging = false;
  const onMouseMove = (e) => {
    xxx = (e.offsetX / elcanvas.offsetWidth) * elcanvas.width;
    yyy = (e.offsetY / elcanvas.offsetHeight) * elcanvas.height;
    DistanceBetweenMouseXPositions = xxx - MouseDownMouseX;
    DistanceBetweenMouseYPositions = yyy - MouseDownMouseY;
  };

  const onMouseUp = () => {
    isDragging = false;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };
  let rectX = 100;
  let rectY = 100;
  const rectwidth = 100;
  const rectheight = 100;
  const hitTest = (x, y) => {
    if (
      x > rectX &&
      x < rectX + rectwidth &&
      y > rectY &&
      y < rectY + rectwidth
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onMouseDown = (e) => {
    const x = (e.offsetX / elcanvas.offsetWidth) * elcanvas.width;
    const y = (e.offsetY / elcanvas.offsetHeight) * elcanvas.height;
    isDragging = hitTest(x, y);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    MouseDownMouseX = x;
    MouseDownMouseY = y;
    MouseDownRectX = rectX;
    MouseDownRectY = rectY;
  };
  window.addEventListener("mousedown", onMouseDown);
  elcanvas = canvas;

  return ({ context }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, 600, 600);

    if (isDragging) {
      rectX = MouseDownRectX + DistanceBetweenMouseXPositions;
      rectY = MouseDownRectY + DistanceBetweenMouseYPositions;
    }
    context.fillStyle = "red";
    context.fillRect(rectX, rectY, rectwidth, rectheight);
  };
};
canvasSketch(sketch, settings);
