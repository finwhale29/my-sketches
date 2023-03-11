const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1200, 600],
  animate: true,
  // animate: false,
  fps: 15,
  playbackRate: "throttle",
};

let numberOfSticks = 20;

const sketch = () => {
  let heights = [];
  for (let i = 0; i < numberOfSticks; i++) {
    let something = Math.floor(Math.random() * 600);
    heights.push(something);
  }
  console.log("heights", heights);

  // setInterval(() => {
  //   // next step

  // }, 1000);

  const swap = (array, i, j) => {
    const storeNumber = array[i];
    array[i] = array[j];
    array[j] = storeNumber;

    return array;
  };

  let i = 0;
  let j = 0;
  return ({ context, width, height, time }) => {
    let swapped = false;
    let aboveNumberIndex = heights.length - (j + 2); // 3
    let belowNumberIndex = heights.length - (j + 1); // 4

    if (i < heights.length) {
      console.log(heights[aboveNumberIndex], heights[belowNumberIndex]);

      if (heights[aboveNumberIndex] < heights[belowNumberIndex]) {
        swapped = true;
        swap(heights, aboveNumberIndex, belowNumberIndex);
      }
    }

    if (aboveNumberIndex === i) {
      j = 0;
      i++;
    } else {
      j++;
    }

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    let heights2 = heights;

    for (let ii = 0; ii < heights.length; ii++) {
      const x = (1200 / numberOfSticks) * ii;
      const y = 600 - heights2[ii];
      const w = 1200 / numberOfSticks;
      const h = heights2[ii];
      if (
        (ii === aboveNumberIndex && swapped === true) ||
        (ii === belowNumberIndex && swapped === true)
      ) {
        context.fillStyle = "red";
        context.fillRect(x, y, w, h);
      } else {
        context.fillStyle = "white";
        context.fillRect(x, y, w, h);
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();
        if (ii < i ||) context.fillStyle = "green";
        context.fillRect(x, y, w, h);
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();
      }
    }
  };
};

canvasSketch(sketch, settings);
