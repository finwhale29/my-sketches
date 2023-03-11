const canvasSketch = require("canvas-sketch");
const { math } = require("canvas-sketch-util");

const settings = {
  dimensions: [600, 600],
};

const sketch = ({ canvas, update, styleWidth, styleHeight }) => {
  const mouse = createMouse(canvas, {
    onMove: () => update(),
  });
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const u = mouse.position[0] / styleWidth;
    const v = mouse.position[1] / styleHeight;

    const mouseX = u * width;
    const mouseY = v * height;

    context.fillStyle = "black";
    context.beginPath();
    context.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
    context.fill();

    // // console.log("styleWidth", styleWidth);
    // // console.log("styleHeight", styleHeight);

    // // Normalize pixel mouse opsition to 0..1 UV coordinates

    // // Un-normalize to our rendering units

    // context.clearRect(0, 0, width, height);
    // context.beginPath();

    // context.arc(x, y, 20, 0, Math.PI * 2);
    // context.fill();

    const dotnumber = 10;

    const distance = 600 / dotnumber / 2;

    for (i = 0; i < 1; i++) {
      for (j = 0; j < 1; j++) {
        context.beginPath();
        context.fillStyle = "green";

        const dotX = distance + 2 * distance * j;
        const dotY = distance + i * distance * 2;
        context.save();

        context.translate(dotX, dotY);
        context.arc(0, 0, 4, 0, 2 * Math.PI);
        context.fill();

        // context.rotate(Math.PI);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(mouseX - dotX, mouseY - dotY);
        context.stroke();

        context.restore();
      }
    }
  };
};

canvasSketch(sketch, settings);

function createMouse(canvas, opts = {}) {
  const mouse = {
    moved: false,
    position: [0, 0],
    normalized: [0, 0],
    dispose,
  };

  window.addEventListener("mousemove", move);

  return mouse;

  function move(ev) {
    mouseEventOffset(ev, canvas, mouse.position);
    if (opts.onMove) opts.onMove();
  }

  function dispose() {
    window.removeEventListener("mousemove", move);
  }
}

function mouseEventOffset(ev, target, out = [0, 0]) {
  target = target || ev.currentTarget || ev.srcElement;
  const cx = ev.clientX || 0;
  const cy = ev.clientY || 0;
  const rect = target.getBoundingClientRect();
  out[0] = cx - rect.left;
  out[1] = cy - rect.top;
  return out;
}
