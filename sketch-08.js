const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1600, 1600],
};

const renderLetter = (typeContext, letter, centerX, centerY) => {
  const metrics = typeContext.measureText(letter);
  const mx = metrics.actualBoundingBoxLeft * -1;
  const my = metrics.actualBoundingBoxAscent * -1;
  // const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
  // const mh = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
  const mw = metrics.actualBoundingBoxRight - metrics.actualBoundingBoxLeft;
  const mh = metrics.actualBoundingBoxDescent - metrics.actualBoundingBoxAscent;

  // const centerX = x + w / 2;
  // const centerY = y + h / 2;

  console.log("mw", mw);
  console.log("mh", mh);
  typeContext.save();
  // typeContext.translate((mx + mw / 2) * -1, (mh / 2 + my) * -1);
  typeContext.translate(centerX - mw / 2, centerY - mh / 2);

  typeContext.strokeStyle = "blue";
  typeContext.beginPath();
  typeContext.moveTo(metrics.actualBoundingBoxLeft * -1, 0);
  typeContext.lineTo(metrics.actualBoundingBoxLeft * -1, 2048);
  typeContext.stroke();
  typeContext.moveTo(metrics.actualBoundingBoxRight, 0);
  typeContext.lineTo(metrics.actualBoundingBoxRight, 2048);
  typeContext.stroke();

  console.log(metrics);

  typeContext.fillText(letter, 0, 0);
  typeContext.restore();
};

const sketch = () => {
  return ({ typeContext, width, height }) => {
    typeContext.fillStyle = "white";
    typeContext.fillRect(0, 0, width, height);

    typeContext.fillStyle = "black";

    typeContext.font = "700px didot";
    typeContext.textBaseline = "top";
    // typeContext.translate(width / 2, height / 2);

    renderLetter(typeContext, "A", 400, 400);
    renderLetter(typeContext, "B", 1200, 400);
    renderLetter(typeContext, "C", 400, 1200);
    renderLetter(typeContext, "D", 1200, 1200);

    // renderLetter(typeContext, "B", 0, 0, 100, 100);

    typeContext.strokeStyle = "red";
    typeContext.beginPath();
    typeContext.moveTo(400, 0);
    typeContext.lineTo(400, 1600);
    typeContext.stroke();
    typeContext.beginPath();
    typeContext.moveTo(800, 0);
    typeContext.lineTo(800, 1600);
    typeContext.stroke();

    // typeContext.moveTo(metrics.actualBoundingBoxRight, 0);
    // typeContext.lineTo(metrics.actualBoundingBoxRight, 2048);
    // console.log(
    //   "metrics.actualBoundingBoxAscent",
    //   metrics.actualBoundingBoxAscent
    // );
    // typeContext.moveTo(0, metrics.actualBoundingBoxAscent * -1);
    // typeContext.lineTo(2048, metrics.actualBoundingBoxAscent * -1);

    // typeContext.moveTo(0, metrics.actualBoundingBoxDescent);
    // typeContext.lineTo(2048, metrics.actualBoundingBoxDescent);
    // typeContext.stroke();
  };
};

canvasSketch(sketch, settings);
