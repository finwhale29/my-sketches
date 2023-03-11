const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
};

const sketch = () => {
  return ({ typeContext, width, height }) => {
    typeContext.fillStyle = "white";
    typeContext.fillRect(0, 0, width, height);
    //Homework#1
    //  ___________
    //  |  G | Y  |
    //  |____|____|
    //  | B  | R  |
    //  |____|____|
    // typeContext.translate(-100, -100);
    // typeContext.rotate (0.04);
    // typeContext.translate(100, 100);
    // typeContext.rotate (Math.PI);
    // typeContext.rotate (Math.PI)
    // typeContext.translate(-700,700);
    // typeContext.translate(300, 300);

    // typeContext.translate(200, 200);
    // typeContext.translate(100, 100);

    // typeContext.rotate (Math.PI / 4);

    // typeContext.translate(-10, -16)

    // typeContext.translate(100, 100); // step 3
    // typeContext.rotate(Math.PI); // step 2
    // typeContext.translate(-100, -100); // step 1

    // var tx = 0;
    // var ty = 0;
    // typeContext.save();
    //   typeContext.translate(tx, ty);
    //   typeContext.fillStyle = 'red';
    //   typeContext.fillRect(0, 0, 100, 100);
    //   typeContext.fillStyle = 'blue';
    //   typeContext.fillRect(100, 0, 100, 100);
    //   typeContext.fillStyle = 'yellow';
    //   typeContext.fillRect(0, 100, 100, 100);
    //   typeContext.fillStyle = 'green';
    //   typeContext.fillRect(100, 100, 100, 100);
    // typeContext.restore();

    // typeContext.fillStyle = "red";

    // typeContext.fillRect(0 + tx, 0 + ty, 100, 100);
    // typeContext.fillStyle = "blue";
    // typeContext.fillRect(100 + tx, 0 + ty, 100, 100);
    // typeContext.fillStyle = "yellow";
    // typeContext.fillRect(0 + tx, 100 + ty, 100, 100);
    // typeContext.fillStyle = "green";
    // typeContext.fillRect(100 + tx, 100 + ty, 100, 100);
    // _____________________________________________________
    // const colors = [
    //   "red",
    //   "orange",
    //   "yellow",
    //   "green",
    //   "blue",
    //   "indigo",
    //   "violet",
    // ];

    // typeContext.translate(300, 300);
    // typeContext.fillStyle = "red";
    // // for (j = 0; j < 8; j++) {
    // // for (i = 0; i < 1; i++) {
    // // typeContext.rotate(0.05);
    // const degToRad = (deg) => {
    //   return (deg / 180) * Math.PI;
    // };

    // const boxW = 10;
    // typeContext.fillRect(-1 * boxW * 0.5, -1 * boxW * 0.5, boxW, boxW);

    // typeContext.rotate(degToRad(90));

    // const count = 200;
    // const layerCount = 7;
    // const rotationIncrement = degToRad(360) / (count - 1);
    // const startDiameter = 200;
    // const layerInc = startDiameter / layerCount;

    // for (let j = 0; j < layerCount; j++) {
    //   for (let i = 0; i < count; i++) {
    //     typeContext.save();
    //     typeContext.rotate(i * rotationIncrement); // step 2
    //     typeContext.translate(0, startDiameter - layerInc * j);
    //     typeContext.fillStyle = colors[j % colors.length];
    //     typeContext.fillRect(-1 * boxW * 0.5, -1 * boxW * 0.5, boxW, boxW);
    //     typeContext.restore();
    //   }
    // }
    // }

    // }
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];

    typeContext.translate(300, 300);
    typeContext.fillStyle = "red";
    // for (j = 0; j < 8; j++) {
    // for (i = 0; i < 1; i++) {
    // typeContext.rotate(0.05);
    const degToRad = (deg) => {
      return (deg / 180) * Math.PI;
    };

    const boxW = 10;
    typeContext.fillRect(-1 * boxW * 0.5, -1 * boxW * 0.5, boxW, boxW);

    // typeContext.rotate(degToRad(90));

    const count = 300; // how many sets of red,orange,yellow
    const layerCount = 3; //how many colors
    const rotationIncrement = degToRad(10);
    const startDiameter = 10; // thickness of the colors
    const layerInc = startDiameter / layerCount;
    console.log("layerInc", layerInc);

    for (let j = 0; j < layerCount; j++) {
      typeContext.fillStyle = colors[j % colors.length];

      for (let i = 0; i < count; i++) {
        typeContext.save();
        typeContext.rotate(i * rotationIncrement);
        typeContext.translate(
          i,
          startDiameter + i + startDiameter - layerInc * j
        );
        typeContext.fillRect(-1 * boxW * 0.5, -1 * boxW * 0.5, boxW, boxW);
        typeContext.restore();
      }
    }
  };
};

canvasSketch(sketch, settings);
