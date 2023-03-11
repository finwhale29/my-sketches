const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "lightpink";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let w = 60;
        let h = 60;
        let gap = 20;
        let x = 100 + (w + gap) * i;
        let y = 50 + (h + gap) * j;

        if ((i + j) % 2 === 0) {
          console.log(i, j);
          context.fillStyle = "lightblue";
          context.fillRect(x, y, w, h);
        } else {
          context.fillStyle = "lavender";
          context.fillRect(x, y, w, h);
        }
      }
    }
  };
};

canvasSketch(sketch, settings);

// const canvasSketch = require("canvas-sketch");

// const settings = {
//   dimensions: [2048, 2048],
// };

// const sketch = () => {
//   return ({ context, width, height }) => {
//     context.fillStyle = "green";
//     context.fillRect(0, 0, width, height);
//   };
// };

// canvasSketch(sketch, settings);
