const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
};

const sketch = () => {
  return ({ typeContext, width, height }) => {
    typeContext.fillStyle = "white";
    typeContext.fillRect(0, 0, width, height);
    const cols = 10;
    const rows = 10;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = margx + cellw * 0.5 + c * cellw;
        const y = margy + cellh * 0.5 + r * cellh;
        console.log("aaaa", "c", c, "r", r, "x", x, "y", y);
        typeContext.save();
        typeContext.translate(x, y);

        typeContext.beginPath();
        typeContext.moveTo(0, -0.4 * cellw);
        typeContext.lineTo(0, 0.4 * cellw);
        typeContext.stroke();

        typeContext.restore();
      }
    }
  };
};

canvasSketch(sketch, settings);
